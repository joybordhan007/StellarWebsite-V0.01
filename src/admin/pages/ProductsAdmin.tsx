import { FormEvent, useState } from "react";
import type { CatalogContent, Product, ProductCategory } from "../../content/types";
import {
  ActionMenu,
  DataTable,
  formatDay,
  LinkTabs,
  Modal,
  nextId,
  SelectField,
  Thumb,
  Toggle,
  useConfirm,
  useLiveContent,
} from "../components";
import { Button, ControlIcon, ImageField, moveItem, PageHeader, Spinner, TextField } from "../ui";

type Commit = (next: CatalogContent, message: string) => Promise<boolean>;

const TABS = [
  { href: "/admin/products", label: "Products" },
  { href: "/admin/products/categories", label: "Product categories" },
];

function FormError({ message }: { message: string }) {
  return message ? (
    <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
      {message}
    </p>
  ) : null;
}

function ProductForm({
  catalog,
  product,
  onClose,
  commit,
}: {
  catalog: CatalogContent;
  product: Product | null;
  onClose: () => void;
  commit: Commit;
}) {
  const [name, setName] = useState(product?.name ?? "");
  const [image, setImage] = useState(product?.image ?? "");
  const [categoryId, setCategoryId] = useState(product?.categoryId ?? catalog.categories[0]?.id ?? 0);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return setError("Enter a product name.");
    if (!image) return setError("Add a product image.");
    if (!catalog.categories.some((category) => category.id === categoryId)) return setError("Choose a category.");

    setSaving(true);
    const saved: Product = product
      ? { ...product, name: name.trim(), image, categoryId }
      : {
          id: nextId(catalog.products),
          name: name.trim(),
          image,
          categoryId,
          createdAt: new Date().toISOString(),
          active: true,
        };
    const products = product
      ? catalog.products.map((item) => (item.id === product.id ? saved : item))
      : [...catalog.products, saved];
    const ok = await commit({ ...catalog, products }, product ? "Product updated." : "Product added.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form="product-form" type="submit" variant="primary">
            {saving ? "Saving…" : product ? "Save changes" : "Add product"}
          </Button>
        </>
      }
      onClose={onClose}
      title={product ? `Edit product #${product.id}` : "Add product"}
    >
      <form className="flex flex-col gap-4" id="product-form" onSubmit={submit}>
        <TextField label="Product name" onChange={setName} required value={name} />
        <ImageField hint="Portrait photos work best (372 × 420)." label="Product image" onChange={setImage} value={image} />
        <SelectField label="Category" onChange={(event) => setCategoryId(Number(event.target.value))} value={categoryId}>
          {catalog.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </SelectField>
        <FormError message={error} />
      </form>
    </Modal>
  );
}

function ProductView({ catalog, product, onClose }: { catalog: CatalogContent; product: Product; onClose: () => void }) {
  const category = catalog.categories.find((item) => item.id === product.categoryId);
  return (
    <Modal onClose={onClose} size="lg" title={`Product #${product.id}`}>
      <div className="grid gap-5 sm:grid-cols-[240px_1fr]">
        <img alt={product.name} className="aspect-[372/420] w-full rounded-[6px] bg-neutral-100 object-cover" src={product.image} />
        <dl className="grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-3 text-sm">
          <dt className="text-neutral-500">Name</dt>
          <dd className="font-medium">{product.name}</dd>
          <dt className="text-neutral-500">Category</dt>
          <dd>{category?.name ?? "—"}</dd>
          <dt className="text-neutral-500">Created</dt>
          <dd>{formatDay(product.createdAt)}</dd>
          <dt className="text-neutral-500">Status</dt>
          <dd>{product.active ? "Visible on the website" : "Hidden"}</dd>
          <dt className="text-neutral-500">Home page</dt>
          <dd>{catalog.homeProductIds.includes(product.id) ? "Shown in “Fashion for every generation”" : "Not shown"}</dd>
        </dl>
      </div>
    </Modal>
  );
}

/** Choose the order of the products in the Home "Fashion for every generation" carousel. */
function HomeOrder({ catalog, onClose, commit }: { catalog: CatalogContent; onClose: () => void; commit: Commit }) {
  const [ids, setIds] = useState(catalog.homeProductIds);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    const ok = await commit({ ...catalog, homeProductIds: ids }, "Home page products updated.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} onClick={save} variant="primary">
            {saving ? "Saving…" : "Save order"}
          </Button>
        </>
      }
      onClose={onClose}
      title="Home page: Fashion for every generation"
    >
      <p className="text-sm text-neutral-500">
        These products scroll on the Home page, in this order. Turn on “Home” in the products table to add more.
        Hidden products are skipped. At least 3 are needed for the endless scroll.
      </p>
      {ids.length === 0 ? (
        <p className="text-sm text-neutral-500">No products selected yet.</p>
      ) : (
        <ol className="flex flex-col gap-2">
          {ids.map((id, index) => {
            const product = catalog.products.find((item) => item.id === id);
            if (!product) return null;
            return (
              <li className="flex items-center gap-3 rounded-[6px] border border-neutral-200 p-2" key={id}>
                <span className="w-6 text-center text-xs text-neutral-400">{index + 1}</span>
                <Thumb src={product.image} />
                <span className={`flex-1 truncate text-sm ${product.active ? "" : "text-neutral-400"}`}>
                  {product.name}
                  {!product.active && " (hidden)"}
                </span>
                <Button aria-label="Move up" disabled={index === 0} onClick={() => setIds(moveItem(ids, index, index - 1))} variant="ghost">
                  <ControlIcon name="up" />
                </Button>
                <Button
                  aria-label="Move down"
                  disabled={index === ids.length - 1}
                  onClick={() => setIds(moveItem(ids, index, index + 1))}
                  variant="ghost"
                >
                  <ControlIcon name="down" />
                </Button>
                <Button aria-label="Remove from home page" onClick={() => setIds(ids.filter((item) => item !== id))} variant="ghost">
                  <ControlIcon name="remove" />
                </Button>
              </li>
            );
          })}
        </ol>
      )}
    </Modal>
  );
}

function ProductsTab({ catalog, commit }: { catalog: CatalogContent; commit: Commit }) {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [homeOnly, setHomeOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Product | "new" | null>(null);
  const [viewing, setViewing] = useState<Product | null>(null);
  const [arranging, setArranging] = useState(false);
  const { confirm, dialog } = useConfirm();

  const categoryName = (id: number) => catalog.categories.find((category) => category.id === id)?.name ?? "—";
  const query = search.trim().toLowerCase();
  const rows = catalog.products
    .filter((product) => categoryFilter === "all" || product.categoryId === Number(categoryFilter))
    .filter((product) => !homeOnly || catalog.homeProductIds.includes(product.id))
    .filter((product) => !query || product.name.toLowerCase().includes(query) || String(product.id) === query)
    .sort((a, b) => b.id - a.id);

  const update = (product: Product, patch: Partial<Product>, message: string) =>
    commit(
      { ...catalog, products: catalog.products.map((item) => (item.id === product.id ? { ...item, ...patch } : item)) },
      message,
    );

  const setOnHome = (product: Product, onHome: boolean) =>
    commit(
      {
        ...catalog,
        homeProductIds: onHome
          ? [...catalog.homeProductIds, product.id]
          : catalog.homeProductIds.filter((id) => id !== product.id),
      },
      onHome ? `${product.name} added to the home page.` : `${product.name} removed from the home page.`,
    );

  async function remove(product: Product) {
    const ok = await confirm({
      title: "Delete product?",
      message: (
        <>
          <strong>{product.name}</strong> will be removed from the website. This can't be undone.
        </>
      ),
    });
    if (!ok) return;
    await commit(
      {
        ...catalog,
        products: catalog.products.filter((item) => item.id !== product.id),
        homeProductIds: catalog.homeProductIds.filter((id) => id !== product.id),
      },
      "Product deleted.",
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="w-52">
            <SelectField label="Category" onChange={(event) => setCategoryFilter(event.target.value)} value={categoryFilter}>
              <option value="all">All categories</option>
              {catalog.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </SelectField>
          </div>
          <div className="w-56">
            <TextField label="Search" onChange={setSearch} placeholder="Name or ID" value={search} />
          </div>
          <label className="flex items-center gap-2 pb-2 text-sm text-neutral-700">
            <input checked={homeOnly} className="size-4 accent-[#1d1d1d]" onChange={(event) => setHomeOnly(event.target.checked)} type="checkbox" />
            On home page only
          </label>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setArranging(true)}>Arrange home page ({catalog.homeProductIds.length})</Button>
          <Button disabled={catalog.categories.length === 0} onClick={() => setEditing("new")} variant="primary">
            + Add product
          </Button>
        </div>
      </div>

      <DataTable
        columns={[
          { header: "ID", cell: (product) => <span className="text-neutral-500">#{product.id}</span>, className: "w-16" },
          { header: "Image", cell: (product) => <Thumb alt={product.name} src={product.image} />, className: "w-20" },
          { header: "Product name", cell: (product) => <span className="font-medium">{product.name}</span> },
          { header: "Category", cell: (product) => categoryName(product.categoryId) },
          { header: "Created", cell: (product) => <span className="whitespace-nowrap">{formatDay(product.createdAt)}</span> },
          {
            header: "Status",
            cell: (product) => (
              <Toggle
                checked={product.active}
                label={product.active ? `Hide ${product.name}` : `Show ${product.name}`}
                onChange={(active) => update(product, { active }, active ? `${product.name} is visible.` : `${product.name} is hidden.`)}
              />
            ),
          },
          {
            header: "Home",
            cell: (product) => (
              <Toggle
                checked={catalog.homeProductIds.includes(product.id)}
                label={`Show ${product.name} on the home page`}
                onChange={(onHome) => setOnHome(product, onHome)}
              />
            ),
          },
          {
            header: "Action",
            className: "w-16 text-right",
            cell: (product) => (
              <ActionMenu
                actions={[
                  { label: "View", onSelect: () => setViewing(product) },
                  { label: "Edit", onSelect: () => setEditing(product) },
                  { label: "Delete", danger: true, onSelect: () => remove(product) },
                ]}
                label={`Actions for ${product.name}`}
              />
            ),
          },
        ]}
        empty={catalog.categories.length === 0 ? "Create a category first, then add products." : "No products match."}
        rowKey={(product) => product.id}
        rows={rows}
      />

      {editing && (
        <ProductForm
          catalog={catalog}
          commit={commit}
          onClose={() => setEditing(null)}
          product={editing === "new" ? null : editing}
        />
      )}
      {viewing && <ProductView catalog={catalog} onClose={() => setViewing(null)} product={viewing} />}
      {arranging && <HomeOrder catalog={catalog} commit={commit} onClose={() => setArranging(false)} />}
      {dialog}
    </>
  );
}

/** The icon on a white (unselected) and a black (selected) tab, as the website shows it. */
function IconPreview({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      {[false, true].map((selected) => (
        <div
          className={`flex h-[46px] min-w-40 items-center justify-center gap-3 rounded-[4px] border px-4 text-sm font-medium uppercase ${selected ? "border-[#1d1d1d] bg-[#1d1d1d] text-white" : "border-black/20 bg-black/5 text-[#1d1d1d]"}`}
          key={String(selected)}
        >
          {icon && (
            <img alt="" className="size-8" src={icon} style={{ filter: selected ? "brightness(0) invert(1)" : "brightness(0)" }} />
          )}
          {name || "Category"}
        </div>
      ))}
    </div>
  );
}

function CategoryForm({
  catalog,
  category,
  onClose,
  commit,
}: {
  catalog: CatalogContent;
  category: ProductCategory | null;
  onClose: () => void;
  commit: Commit;
}) {
  const [name, setName] = useState(category?.name ?? "");
  const [icon, setIcon] = useState(category?.icon ?? "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return setError("Enter a category name.");
    if (!icon) return setError("Add an icon.");
    if (catalog.categories.some((item) => item.id !== category?.id && item.name.toLowerCase() === trimmed.toLowerCase())) {
      return setError("A category with this name already exists.");
    }

    setSaving(true);
    const categories = category
      ? catalog.categories.map((item) => (item.id === category.id ? { ...item, name: trimmed, icon } : item))
      : [...catalog.categories, { id: nextId(catalog.categories), name: trimmed, icon, createdAt: new Date().toISOString() }];
    const ok = await commit({ ...catalog, categories }, category ? "Category updated." : "Category added.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form="category-form" type="submit" variant="primary">
            {saving ? "Saving…" : category ? "Save changes" : "Add category"}
          </Button>
        </>
      }
      onClose={onClose}
      title={category ? `Edit category #${category.id}` : "Add category"}
    >
      <form className="flex flex-col gap-4" id="category-form" onSubmit={submit}>
        <TextField label="Category name" onChange={setName} required value={name} />
        <ImageField
          hint="Upload one single-colour icon (SVG works best). The website shows it black, and white on the selected tab."
          label="Icon"
          onChange={setIcon}
          value={icon}
        />
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-neutral-700">Preview</span>
          <IconPreview icon={icon} name={name} />
        </div>
        <FormError message={error} />
      </form>
    </Modal>
  );
}

function CategoriesTab({ catalog, commit }: { catalog: CatalogContent; commit: Commit }) {
  const [editing, setEditing] = useState<ProductCategory | "new" | null>(null);
  const { confirm, dialog } = useConfirm();
  const countFor = (id: number) => catalog.products.filter((product) => product.categoryId === id).length;

  const move = (index: number, to: number) =>
    commit({ ...catalog, categories: moveItem(catalog.categories, index, to) }, "Category order updated.");

  async function remove(category: ProductCategory) {
    const count = countFor(category.id);
    const ok = await confirm({
      title: "Delete category?",
      message:
        count > 0 ? (
          <>
            <strong>{category.name}</strong> has {count} product{count === 1 ? "" : "s"}. Deleting the category also
            deletes {count === 1 ? "it" : "them"}. This can't be undone.
          </>
        ) : (
          <>
            <strong>{category.name}</strong> will be deleted.
          </>
        ),
      confirmLabel: count > 0 ? `Delete category and ${count} product${count === 1 ? "" : "s"}` : "Delete",
    });
    if (!ok) return;
    const removedIds = new Set(catalog.products.filter((product) => product.categoryId === category.id).map((product) => product.id));
    await commit(
      {
        categories: catalog.categories.filter((item) => item.id !== category.id),
        products: catalog.products.filter((product) => !removedIds.has(product.id)),
        homeProductIds: catalog.homeProductIds.filter((id) => !removedIds.has(id)),
      },
      "Category deleted.",
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">Categories appear as tabs on the Products page, in this order.</p>
        <Button onClick={() => setEditing("new")} variant="primary">
          + Add category
        </Button>
      </div>
      <DataTable
        columns={[
          { header: "Category ID", cell: (category) => <span className="text-neutral-500">#{category.id}</span>, className: "w-28" },
          {
            header: "Icon",
            className: "w-20",
            cell: (category) => (
              <div className="flex size-12 items-center justify-center rounded-[6px] bg-neutral-100">
                {category.icon && <img alt="" className="size-7" src={category.icon} style={{ filter: "brightness(0)" }} />}
              </div>
            ),
          },
          { header: "Category name", cell: (category) => <span className="font-medium">{category.name}</span> },
          { header: "Products", cell: (category) => countFor(category.id) },
          { header: "Created", cell: (category) => <span className="whitespace-nowrap">{formatDay(category.createdAt)}</span> },
          {
            header: "Action",
            className: "w-16 text-right",
            cell: (category) => {
              const index = catalog.categories.indexOf(category);
              return (
                <ActionMenu
                  actions={[
                    { label: "Edit", onSelect: () => setEditing(category) },
                    { label: "Move up", disabled: index === 0, onSelect: () => move(index, index - 1) },
                    { label: "Move down", disabled: index === catalog.categories.length - 1, onSelect: () => move(index, index + 1) },
                    { label: "Delete", danger: true, onSelect: () => remove(category) },
                  ]}
                  label={`Actions for ${category.name}`}
                />
              );
            },
          },
        ]}
        empty="No categories yet."
        pageSize={50}
        rowKey={(category) => category.id}
        rows={catalog.categories}
      />
      {editing && (
        <CategoryForm
          catalog={catalog}
          category={editing === "new" ? null : editing}
          commit={commit}
          onClose={() => setEditing(null)}
        />
      )}
      {dialog}
    </>
  );
}

export default function ProductsAdmin({ pathname }: { pathname: string }) {
  const { data, commit } = useLiveContent("catalog");
  const onCategories = pathname.startsWith("/admin/products/categories");

  return (
    <>
      <PageHeader
        description="Products on the Products page and the Home page “Fashion for every generation” carousel. Changes are saved as soon as you make them."
        title="Products"
      />
      <div className="flex flex-col gap-4">
        <LinkTabs active={onCategories ? TABS[1].href : TABS[0].href} tabs={TABS} />
        {!data ? (
          <Spinner />
        ) : onCategories ? (
          <CategoriesTab catalog={data} commit={commit} />
        ) : (
          <ProductsTab catalog={data} commit={commit} />
        )}
      </div>
    </>
  );
}
