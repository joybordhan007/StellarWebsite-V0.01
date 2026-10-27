import { ChangeEvent, useRef, useState } from "react";
import type { ProductCategory, ProductItem } from "../../content/types";
import { useAdmin } from "../AdminContext";
import { uploadImage } from "../api";
import {
  Button,
  Card,
  ContentEditorFrame,
  ImageField,
  ListControls,
  moveItem,
  replaceItem,
  TextField,
  useContentDoc,
} from "../ui";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ProductsEditor() {
  const doc = useContentDoc("products");
  const { handleError } = useAdmin();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [uploading, setUploading] = useState(0);
  const bulkInputRef = useRef<HTMLInputElement>(null);

  const categories = doc.draft?.categories ?? [];
  const index = Math.min(selectedIndex, Math.max(categories.length - 1, 0));
  const category = categories[index];

  const setCategories = (next: ProductCategory[]) => doc.setDraft({ categories: next });
  const updateCategory = (patch: Partial<ProductCategory>) =>
    setCategories(replaceItem(categories, index, { ...category, ...patch }));
  const setItems = (items: ProductItem[]) => updateCategory({ items });

  function addCategory() {
    const label = window.prompt("Name of the new category (for example: Jackets)")?.trim();
    if (!label) return;
    const base = slugify(label) || "category";
    let id = base;
    for (let n = 2; categories.some((existing) => existing.id === id); n += 1) id = `${base}-${n}`;
    setCategories([...categories, { id, label, icon: "", items: [] }]);
    setSelectedIndex(categories.length);
  }

  function removeCategory() {
    if (!window.confirm(`Remove the “${category.label}” category and all its products?`)) return;
    setCategories(categories.filter((_, i) => i !== index));
    setSelectedIndex(Math.max(0, index - 1));
  }

  async function handleBulkUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;

    setUploading(files.length);
    const added: ProductItem[] = [];
    for (const file of files) {
      try {
        const media = await uploadImage(file);
        added.push({ image: media.url, name: file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") });
      } catch (error) {
        handleError(error);
      }
      setUploading((count) => count - 1);
    }
    // Read the latest items at the end so edits made while uploading are kept.
    doc.setDraft((current) => {
      if (!current) return current;
      const next = [...current.categories];
      const target = next[index];
      if (target) next[index] = { ...target, items: [...target.items, ...added] };
      return { categories: next };
    });
  }

  return (
    <ContentEditorFrame
      description="Product categories and photos on the Products page. Each category is a tab; its products show 4 per row."
      doc={doc}
      title="Products"
    >
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((item, i) => (
          <Button
            aria-pressed={i === index}
            className={i === index ? "!border-[#1d1d1d] !bg-[#1d1d1d] !text-white" : ""}
            key={item.id}
            onClick={() => setSelectedIndex(i)}
          >
            {item.label || "Untitled"}
            <span className="text-xs opacity-60">{item.items.length}</span>
          </Button>
        ))}
        <Button onClick={addCategory} variant="ghost">
          + Add category
        </Button>
      </div>

      {category && (
        <>
          <Card
            actions={
              <>
                <ListControls
                  count={categories.length}
                  index={index}
                  onMove={(from, to) => {
                    setCategories(moveItem(categories, from, to));
                    setSelectedIndex(to);
                  }}
                  onRemove={removeCategory}
                  removeLabel="Remove category"
                />
              </>
            }
            title="Category"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Tab label" onChange={(label) => updateCategory({ label })} value={category.label} />
              <ImageField
                hint="Small outline icon shown on the tab (SVG works best)."
                label="Tab icon"
                onChange={(icon) => updateCategory({ icon })}
                value={category.icon}
              />
            </div>
          </Card>

          <Card
            actions={
              <>
                <Button disabled={uploading > 0} onClick={() => bulkInputRef.current?.click()} variant="primary">
                  {uploading > 0 ? `Uploading ${uploading}…` : "Upload photos"}
                </Button>
                <Button onClick={() => setItems([...category.items, { image: "", name: "" }])}>+ Add empty</Button>
              </>
            }
            description="Upload several photos at once; each becomes a product you can rename."
            title={`Products in “${category.label}”`}
          >
            <input accept="image/*" className="hidden" multiple onChange={handleBulkUpload} ref={bulkInputRef} type="file" />
            {category.items.length === 0 ? (
              <p className="text-sm text-neutral-500">No products in this category yet.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => (
                  <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-3" key={i}>
                    <ImageField
                      compact
                      label={`Photo ${i + 1}`}
                      onChange={(image) => setItems(replaceItem(category.items, i, { ...item, image }))}
                      value={item.image}
                    />
                    <TextField
                      label="Product name"
                      onChange={(name) => setItems(replaceItem(category.items, i, { ...item, name }))}
                      value={item.name}
                    />
                    <ListControls
                      count={category.items.length}
                      index={i}
                      onMove={(from, to) => setItems(moveItem(category.items, from, to))}
                      onRemove={() => setItems(category.items.filter((_, j) => j !== i))}
                      removeLabel="Remove product"
                    />
                  </div>
                ))}
              </div>
            )}
          </Card>
        </>
      )}
    </ContentEditorFrame>
  );
}
