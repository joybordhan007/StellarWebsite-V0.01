import { FormEvent, ReactNode, useState } from "react";
import type { CapabilitiesContent, Versatility, VersatilityColumn, VersatilityItem } from "../../content/types";
import { ActionMenu, DataTable, Modal, useConfirm, useLiveContent } from "../components";
import { Button, Card, ImageField, moveItem, PageHeader, replaceItem, Spinner, TextField } from "../ui";

// The website shows five category columns, each with room for five subcategories.
const MAX_CATEGORIES = 5;
const MAX_ITEMS = 5;
const BASE = "/admin/capabilities/versatility";

function openCategory(index: number) {
  window.history.pushState({}, "", `${BASE}/${index + 1}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

type Commit = (next: CapabilitiesContent, message: string) => Promise<boolean>;

function RowImage({ src, tall = false }: { src: string; tall?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[4px] bg-neutral-100 ${tall ? "h-8 w-7" : "size-8"}`}>
      {src && <img alt="" className="size-full object-cover" src={src} />}
    </div>
  );
}

function FormError({ message }: { message: string }) {
  return message ? (
    <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
      {message}
    </p>
  ) : null;
}

function SectionTextForm({ content, onClose, commit }: { content: CapabilitiesContent; onClose: () => void; commit: Commit }) {
  const [text, setText] = useState(content.versatility);
  const [saving, setSaving] = useState(false);
  const set = (patch: Partial<Versatility>) => setText({ ...text, ...patch });

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    const ok = await commit({ ...content, versatility: { ...content.versatility, eyebrow: text.eyebrow, heading: text.heading, intro: text.intro } }, "Section text updated.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form="versatility-text-form" type="submit" variant="primary">
            {saving ? "Saving…" : "Save changes"}
          </Button>
        </>
      }
      onClose={onClose}
      title="Section text"
    >
      <form className="flex flex-col gap-4" id="versatility-text-form" onSubmit={submit}>
        <TextField label="Small heading" onChange={(eyebrow) => set({ eyebrow })} value={text.eyebrow} />
        <TextField label="Heading" onChange={(heading) => set({ heading })} value={text.heading} />
        <TextField hint="Press Enter for a line break." label="Introduction" multiline onChange={(intro) => set({ intro })} rows={3} value={text.intro} />
      </form>
    </Modal>
  );
}

function CategoriesList({ content, commit, tabs }: { content: CapabilitiesContent; commit: Commit; tabs: ReactNode }) {
  const [editingText, setEditingText] = useState(false);
  const columns = content.versatility.columns;
  const rows = columns.map((column, index) => ({ column, index }));
  const setColumns = (next: VersatilityColumn[], message: string) => commit({ ...content, versatility: { ...content.versatility, columns: next } }, message);

  return (
    <>
      <PageHeader
        actions={
          <>
            <Button onClick={() => setEditingText(true)}>Edit section text</Button>
            {columns.length < MAX_CATEGORIES && (
              <Button
                onClick={() =>
                  setColumns([...columns, { image: "", imageBackground: "", title: "New category", tagline: "", items: [] }], "Category added.").then(
                    (ok) => ok && openCategory(columns.length),
                  )
                }
                variant="primary"
              >
                + Add category
              </Button>
            )}
          </>
        }
        description={
          <>
            {tabs}
            <span className="mt-3 block">
              The “Versatility across categories” section of the Our capabilities page: {MAX_CATEGORIES} category columns, each with up to {MAX_ITEMS} subcategories.
              Click a category to edit it and its subcategories. Changes are saved as soon as you make them.
            </span>
          </>
        }
        title="Our capabilities"
      />
      <DataTable
        columns={[
          {
            header: "Category name",
            cell: ({ column, index }) => (
              <a className="font-medium text-neutral-900 hover:underline" href={`${BASE}/${index + 1}`}>
                {column.title || "Untitled"}
              </a>
            ),
          },
          { header: "Subtitle", cell: ({ column }) => <span className="line-clamp-1 text-neutral-600">{column.tagline}</span> },
          { header: "Image", className: "w-20", cell: ({ column }) => <RowImage src={column.image} tall /> },
          {
            header: "Actions",
            className: "w-16 text-right",
            cell: ({ column, index }) => (
              <ActionMenu
                actions={[
                  { label: "Edit", onSelect: () => openCategory(index) },
                  { label: "Move up", disabled: index === 0, onSelect: () => setColumns(moveItem(columns, index, index - 1), "Order updated.") },
                  { label: "Move down", disabled: index === columns.length - 1, onSelect: () => setColumns(moveItem(columns, index, index + 1), "Order updated.") },
                ]}
                label={`Actions for ${column.title}`}
              />
            ),
          },
        ]}
        dense
        empty="No categories yet."
        rowKey={({ column, index }) => `${index}-${column.title}`}
        rows={rows}
      />
      {editingText && <SectionTextForm commit={commit} content={content} onClose={() => setEditingText(false)} />}
    </>
  );
}

function SubcategoryForm({ item, onClose, onSave }: { item: VersatilityItem | null; onClose: () => void; onSave: (item: VersatilityItem) => Promise<boolean> }) {
  const [thumb, setThumb] = useState(item?.thumb ?? "");
  const [name, setName] = useState(item?.name ?? "");
  const [note, setNote] = useState(item?.note ?? "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return setError("Enter a title.");
    if (!thumb) return setError("Add an image.");
    setSaving(true);
    const ok = await onSave({ thumb, thumbBackground: item?.thumbBackground ?? "", name: name.trim(), note: note.trim() });
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form="subcategory-form" type="submit" variant="primary">
            {saving ? "Saving…" : item ? "Save changes" : "Add subcategory"}
          </Button>
        </>
      }
      onClose={onClose}
      title={item ? "Edit subcategory" : "Add subcategory"}
    >
      <form className="flex flex-col gap-4" id="subcategory-form" onSubmit={submit}>
        <ImageField hint="Square images work best." label="Image" onChange={setThumb} value={thumb} />
        <TextField label="Title" onChange={setName} required value={name} />
        <TextField hint="Optional, e.g. “Formal & Casual”." label="Subtitle" onChange={setNote} value={note} />
        <FormError message={error} />
      </form>
    </Modal>
  );
}

function CategoryDetail({ content, commit, index }: { content: CapabilitiesContent; commit: Commit; index: number }) {
  const columns = content.versatility.columns;
  const column = columns[index];
  const [image, setImage] = useState(column.image);
  const [title, setTitle] = useState(column.title);
  const [tagline, setTagline] = useState(column.tagline);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<number | "new" | null>(null);
  const { confirm, dialog } = useConfirm();

  const saveColumn = (next: VersatilityColumn, message: string) =>
    commit({ ...content, versatility: { ...content.versatility, columns: replaceItem(columns, index, next) } }, message);
  const setItems = (items: VersatilityItem[], message: string) => saveColumn({ ...column, items }, message);
  const changed = image !== column.image || title !== column.title || tagline !== column.tagline;

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!title.trim()) return setError("Enter a category name.");
    setError("");
    setSaving(true);
    await saveColumn({ ...column, image, title: title.trim(), tagline: tagline.trim() }, "Category updated.");
    setSaving(false);
  }

  async function remove(itemIndex: number) {
    const ok = await confirm({ title: "Delete subcategory?", message: `${column.items[itemIndex].name} will be removed from the website.` });
    if (ok) await setItems(column.items.filter((_, i) => i !== itemIndex), "Subcategory deleted.");
  }

  return (
    <>
      <PageHeader
        description={
          <>
            <a className="text-neutral-600 hover:text-neutral-900 hover:underline" href={BASE}>
              ← All categories
            </a>
            <span className="mt-1 block">Versatility across categories, column {index + 1} on the Our capabilities page.</span>
          </>
        }
        title={column.title || "Untitled category"}
      />
      <div className="flex flex-col gap-4">
        <Card title="Category details">
          <form className="grid gap-4 md:grid-cols-[200px_minmax(0,1fr)]" onSubmit={submit}>
            <ImageField compact label="Category image" onChange={setImage} value={image} />
            <div className="flex flex-col gap-4">
              <TextField label="Category name" onChange={setTitle} required value={title} />
              <TextField label="Subtitle" onChange={setTagline} value={tagline} />
              <FormError message={error} />
              <div className="flex gap-2">
                <Button disabled={saving || !changed} type="submit" variant="primary">
                  {saving ? "Saving…" : "Save changes"}
                </Button>
                {changed && (
                  <Button
                    onClick={() => {
                      setImage(column.image);
                      setTitle(column.title);
                      setTagline(column.tagline);
                    }}
                  >
                    Discard
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Card>

        <Card
          actions={
            <Button disabled={column.items.length >= MAX_ITEMS} onClick={() => setEditing("new")} variant="primary">
              + Add subcategory
            </Button>
          }
          description={`Up to ${MAX_ITEMS} rows fit in a category column.`}
          title={`Subcategories (${column.items.length}/${MAX_ITEMS})`}
        >
          <DataTable
            columns={[
              { header: "Image", className: "w-20", cell: ({ item }) => <RowImage src={item.thumb} /> },
              { header: "Title", cell: ({ item }) => <span className="font-medium">{item.name}</span> },
              { header: "Subtitle", cell: ({ item }) => <span className="text-neutral-600">{item.note || <span className="text-neutral-400">—</span>}</span> },
              {
                header: "Actions",
                className: "w-16 text-right",
                cell: ({ item, itemIndex }) => (
                  <ActionMenu
                    actions={[
                      { label: "Edit", onSelect: () => setEditing(itemIndex) },
                      { label: "Move up", disabled: itemIndex === 0, onSelect: () => setItems(moveItem(column.items, itemIndex, itemIndex - 1), "Order updated.") },
                      {
                        label: "Move down",
                        disabled: itemIndex === column.items.length - 1,
                        onSelect: () => setItems(moveItem(column.items, itemIndex, itemIndex + 1), "Order updated."),
                      },
                      { label: "Delete", danger: true, onSelect: () => remove(itemIndex) },
                    ]}
                    label={`Actions for ${item.name}`}
                  />
                ),
              },
            ]}
            dense
            empty="No subcategories yet."
            rowKey={({ item, itemIndex }) => `${itemIndex}-${item.name}`}
            rows={column.items.map((item, itemIndex) => ({ item, itemIndex }))}
          />
        </Card>
      </div>
      {editing !== null && (
        <SubcategoryForm
          item={editing === "new" ? null : column.items[editing]}
          onClose={() => setEditing(null)}
          onSave={(item) =>
            editing === "new" ? setItems([...column.items, item], "Subcategory added.") : setItems(replaceItem(column.items, editing, item), "Subcategory updated.")
          }
        />
      )}
      {dialog}
    </>
  );
}

export default function VersatilityEditor({ tabs, pathname }: { tabs: ReactNode; pathname: string }) {
  const { data: content, commit } = useLiveContent("capabilities");
  if (!content) return <Spinner />;

  const selected = Number(pathname.slice(BASE.length + 1)) - 1;
  const column = content.versatility.columns[selected];
  return column ? (
    <CategoryDetail commit={commit} content={content} index={selected} key={`${selected}-${column.title}-${column.image}-${column.tagline}`} />
  ) : (
    <CategoriesList commit={commit} content={content} tabs={tabs} />
  );
}
