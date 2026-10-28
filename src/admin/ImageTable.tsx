import { ChangeEvent, KeyboardEvent, ReactNode, useRef, useState } from "react";
import { LogoImage } from "../components/LogoMarquee";
import type { FactoryGalleryItem, Logo } from "../content/types";
import { useAdmin } from "./AdminContext";
import { uploadImage } from "./api";
import { ActionMenu, DataTable, formatDay, nextId, useConfirm } from "./components";
import { Button, Card, moveItem, replaceItem } from "./ui";

/** How the table reads and builds one kind of image row (gallery photo or logo). */
type Adapter<T> = {
  image: (item: T) => string;
  name: (item: T) => string;
  uploadedAt: (item: T) => string | undefined;
  rename: (item: T, name: string) => T;
  replace: (item: T, url: string) => T;
  create: (url: string, name: string, items: T[]) => T;
  thumb: (item: T) => ReactNode;
};

export const photoAdapter: Adapter<FactoryGalleryItem> = {
  image: (item) => item.image,
  name: (item) => item.caption,
  uploadedAt: (item) => item.uploadedAt,
  rename: (item, caption) => ({ ...item, caption }),
  replace: (item, image) => ({ ...item, image, uploadedAt: new Date().toISOString() }),
  create: (image, caption) => ({ image, caption, uploadedAt: new Date().toISOString() }),
  thumb: (item) => <img alt="" className="h-8 w-12 rounded-[4px] bg-neutral-100 object-cover" src={item.image} />,
};

export const logoAdapter: Adapter<Logo> = {
  image: (item) => item.image,
  name: (item) => item.name,
  uploadedAt: (item) => item.uploadedAt,
  rename: (item, name) => ({ ...item, name }),
  // The design's crop box only fits the original file, so a new file is simply fitted inside.
  replace: (item, image) => ({ ...item, image, fit: "padded", box: null, uploadedAt: new Date().toISOString() }),
  create: (image, name, items) => ({ id: nextId(items), image, name, fit: "padded", box: null, uploadedAt: new Date().toISOString() }),
  thumb: (item) => (
    <div className="relative h-8 w-16 overflow-hidden rounded-[4px] border border-neutral-200 bg-white">
      <LogoImage logo={item} />
    </div>
  ),
};

const nameInputClass =
  "h-8 w-full min-w-40 rounded-md border border-transparent bg-transparent px-2 text-sm text-neutral-900 outline-none hover:border-neutral-300 focus:border-[#dea36a] focus:bg-white focus:ring-2 focus:ring-[#dea36a]/30";

/** Saves on blur or Enter rather than on every keystroke. */
function NameCell({ value, label, onSave }: { value: string; label: string; onSave: (name: string) => void }) {
  const [draft, setDraft] = useState(value);
  const commit = () => {
    if (draft.trim() !== value) onSave(draft.trim());
  };
  return (
    <input
      aria-label={label}
      className={nameInputClass}
      onBlur={commit}
      onChange={(event) => setDraft(event.target.value)}
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => event.key === "Enter" && event.currentTarget.blur()}
      placeholder="Add a name"
      value={draft}
    />
  );
}

/**
 * Compact image list (≤ 40px rows): image, name, upload date and a ⋮ menu to move,
 * reupload or delete; the add button sits on the right of the heading.
 */
export default function ImageTable<T>({
  title,
  description,
  addLabel,
  imageHeader,
  nameHeader,
  items,
  adapter,
  onChange,
}: {
  title: string;
  description?: string;
  addLabel: string;
  imageHeader: string;
  nameHeader: string;
  items: T[];
  adapter: Adapter<T>;
  onChange: (items: T[], message: string) => unknown;
}) {
  const { handleError } = useAdmin();
  const addRef = useRef<HTMLInputElement>(null);
  const replaceRef = useRef<HTMLInputElement>(null);
  const replaceIndex = useRef(-1);
  const [busy, setBusy] = useState(0);
  const { confirm, dialog } = useConfirm();
  const rows = items.map((item, index) => ({ item, index }));

  async function handleAdd(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setBusy(files.length);
    let next = items;
    for (const file of files) {
      try {
        const media = await uploadImage(file);
        next = [...next, adapter.create(media.url, file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "), next)];
      } catch (error) {
        handleError(error);
      }
      setBusy((count) => count - 1);
    }
    const added = next.length - items.length;
    if (added) await onChange(next, `${added} ${added === 1 ? "image" : "images"} added.`);
  }

  async function handleReplace(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    const index = replaceIndex.current;
    if (!file || index < 0) return;
    setBusy(1);
    try {
      const media = await uploadImage(file);
      await onChange(replaceItem(items, index, adapter.replace(items[index], media.url)), "Image replaced.");
    } catch (error) {
      handleError(error);
    } finally {
      setBusy(0);
    }
  }

  async function remove(index: number) {
    const name = adapter.name(items[index]);
    const ok = await confirm({ title: "Delete image?", message: `${name || "This image"} will be removed from the website.` });
    if (ok) await onChange(items.filter((_, i) => i !== index), "Image deleted.");
  }

  return (
    <Card
      actions={
        <Button disabled={busy > 0} onClick={() => addRef.current?.click()} variant="primary">
          {busy > 0 ? `Uploading ${busy}…` : `+ ${addLabel}`}
        </Button>
      }
      description={description}
      title={title}
    >
      <input accept="image/*" className="hidden" multiple onChange={handleAdd} ref={addRef} type="file" />
      <input accept="image/*" className="hidden" onChange={handleReplace} ref={replaceRef} type="file" />
      <DataTable
        columns={[
          { header: imageHeader, className: "w-24", cell: ({ item }) => adapter.thumb(item) },
          {
            header: nameHeader,
            cell: ({ item, index }) => (
              <NameCell
                key={`${index}-${adapter.image(item)}`}
                label={`${nameHeader} ${index + 1}`}
                onSave={(name) => onChange(replaceItem(items, index, adapter.rename(item, name)), "Name updated.")}
                value={adapter.name(item)}
              />
            ),
          },
          {
            header: "Upload date",
            className: "w-36 whitespace-nowrap",
            cell: ({ item }) => {
              const date = adapter.uploadedAt(item);
              return date ? formatDay(date) : <span className="text-neutral-400">Original</span>;
            },
          },
          {
            header: "Actions",
            className: "w-16 text-right",
            cell: ({ item, index }) => (
              <ActionMenu
                actions={[
                  { label: "Move up", disabled: index === 0, onSelect: () => onChange(moveItem(items, index, index - 1), "Order updated.") },
                  { label: "Move down", disabled: index === items.length - 1, onSelect: () => onChange(moveItem(items, index, index + 1), "Order updated.") },
                  {
                    label: "Reupload",
                    onSelect: () => {
                      replaceIndex.current = index;
                      replaceRef.current?.click();
                    },
                  },
                  { label: "Delete", danger: true, onSelect: () => remove(index) },
                ]}
                label={`Actions for ${adapter.name(item) || `image ${index + 1}`}`}
              />
            ),
          },
        ]}
        dense
        empty="Nothing here yet — this row is hidden on the website."
        pageSize={50}
        rowKey={({ item, index }) => `${index}-${adapter.image(item)}`}
        rows={rows}
      />
      {dialog}
    </Card>
  );
}
