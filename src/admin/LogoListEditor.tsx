import { ChangeEvent, useRef, useState } from "react";
import { LogoImage } from "../components/LogoMarquee";
import type { Logo } from "../content/types";
import { useAdmin } from "./AdminContext";
import { uploadImage } from "./api";
import { ActionMenu, Modal, nextId, SelectField, useConfirm } from "./components";
import { Button, moveItem, TextField } from "./ui";

type Fit = Logo["fit"] | "original";

const FIT_LABELS: Record<Fit, string> = {
  original: "As in the design",
  contain: "Fit inside the tile",
  padded: "Fit with space around",
  cover: "Fill the whole tile",
};

/**
 * Upload, arrange and remove the logos of a scrolling logo row (brands, certifications).
 * Every change is passed to `onChange` straight away.
 */
export default function LogoListEditor({
  logos,
  onChange,
}: {
  logos: Logo[];
  onChange: (logos: Logo[], message: string) => Promise<boolean> | void;
}) {
  const { handleError } = useAdmin();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(0);
  const [renaming, setRenaming] = useState<Logo | null>(null);
  const [name, setName] = useState("");
  const { confirm, dialog } = useConfirm();

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setUploading(files.length);
    const added: Logo[] = [];
    let id = nextId(logos);
    for (const file of files) {
      try {
        const media = await uploadImage(file);
        added.push({ id: id++, image: media.url, name: file.name.replace(/\.[^.]+$/, ""), fit: "padded", box: null });
      } catch (error) {
        handleError(error);
      }
      setUploading((count) => count - 1);
    }
    if (added.length) await onChange([...logos, ...added], `${added.length} logo${added.length === 1 ? "" : "s"} added.`);
  }

  const update = (logo: Logo, patch: Partial<Logo>, message: string) =>
    onChange(logos.map((item) => (item.id === logo.id ? { ...item, ...patch } : item)), message);

  function setFit(logo: Logo, fit: Fit) {
    if (fit === "original") return;
    void update(logo, { fit, box: null }, "Logo layout updated.");
  }

  async function remove(logo: Logo) {
    const ok = await confirm({ title: "Remove logo?", message: `${logo.name || "This logo"} will no longer show on the website.` });
    if (ok) await onChange(logos.filter((item) => item.id !== logo.id), "Logo removed.");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-neutral-500">
          {logos.length} logo{logos.length === 1 ? "" : "s"} · they scroll endlessly on the website, in this order. PNG or SVG with a transparent background works best.
        </p>
        <Button disabled={uploading > 0} onClick={() => inputRef.current?.click()} variant="primary">
          {uploading > 0 ? `Uploading ${uploading}…` : "+ Upload logos"}
        </Button>
        <input accept="image/*" className="hidden" multiple onChange={handleFiles} ref={inputRef} type="file" />
      </div>
      {logos.length === 0 ? (
        <p className="rounded-[6px] border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
          No logos yet — the row is hidden on the website.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {logos.map((logo, index) => {
            const fit: Fit = logo.box ? "original" : logo.fit;
            return (
              <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 bg-white p-3" key={logo.id}>
                {/* Same 240×120 tile as the website. */}
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[6px] bg-white shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
                  <LogoImage logo={logo} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="min-w-0 flex-1 truncate text-sm font-medium" title={logo.name}>
                    {logo.name || <span className="text-neutral-400">Unnamed logo</span>}
                  </span>
                  <ActionMenu
                    actions={[
                      {
                        label: "Rename",
                        onSelect: () => {
                          setRenaming(logo);
                          setName(logo.name);
                        },
                      },
                      { label: "Move earlier", disabled: index === 0, onSelect: () => onChange(moveItem(logos, index, index - 1), "Order updated.") },
                      { label: "Move later", disabled: index === logos.length - 1, onSelect: () => onChange(moveItem(logos, index, index + 1), "Order updated.") },
                      { label: "Remove", danger: true, onSelect: () => remove(logo) },
                    ]}
                    label={`Actions for ${logo.name || "logo"}`}
                  />
                </div>
                <SelectField hideLabel label="Layout" onChange={(event) => setFit(logo, event.target.value as Fit)} value={fit}>
                  {(logo.box ? (["original", "contain", "padded", "cover"] as Fit[]) : (["contain", "padded", "cover"] as Fit[])).map((option) => (
                    <option key={option} value={option}>
                      {FIT_LABELS[option]}
                    </option>
                  ))}
                </SelectField>
              </div>
            );
          })}
        </div>
      )}
      {renaming && (
        <Modal
          footer={
            <>
              <Button onClick={() => setRenaming(null)}>Cancel</Button>
              <Button
                onClick={async () => {
                  await update(renaming, { name: name.trim() }, "Logo renamed.");
                  setRenaming(null);
                }}
                variant="primary"
              >
                Save
              </Button>
            </>
          }
          onClose={() => setRenaming(null)}
          title="Rename logo"
        >
          <TextField hint="Used as the image description for screen readers and search engines." label="Name" onChange={setName} value={name} />
        </Modal>
      )}
      {dialog}
    </div>
  );
}
