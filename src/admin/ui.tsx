import {
  ButtonHTMLAttributes,
  ChangeEvent,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { mergeContent } from "../content/ContentProvider";
import type { ContentKey, ContentMap } from "../content/types";
import { useAdmin } from "./AdminContext";
import { api, ApiError, type ContentMeta, formatDate, uploadImage } from "./api";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#1d1d1d] text-white hover:bg-black",
  secondary: "border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50",
  danger: "border border-red-200 bg-white text-red-700 hover:bg-red-50",
  ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
};

export function Button({
  variant = "secondary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${buttonStyles[variant]} ${className}`}
      type="button"
      {...props}
    />
  );
}

export function Spinner({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 py-10 text-sm text-neutral-500" role="status">
      <span className="size-4 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-800" />
      {label}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
        {description && <div className="mt-1 max-w-2xl text-sm text-neutral-500">{description}</div>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Card({
  title,
  description,
  actions,
  children,
}: {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[6px] border border-neutral-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {(title || actions) && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && <h2 className="text-base font-semibold text-neutral-900">{title}</h2>}
            {description && <p className="mt-0.5 text-sm text-neutral-500">{description}</p>}
          </div>
          {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
        </div>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

const inputClass =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[#dea36a] focus:ring-2 focus:ring-[#dea36a]/30 disabled:bg-neutral-100 disabled:text-neutral-500";

export function TextField({
  label,
  value,
  onChange,
  hint,
  multiline = false,
  rows = 4,
  type = "text",
  placeholder,
  disabled,
  maxLength,
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  hint?: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange?.(event.target.value);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label className="text-sm font-medium text-neutral-700" htmlFor={id}>
          {label}
        </label>
        {maxLength && (
          <span className={`text-xs ${value.length > maxLength ? "text-red-600" : "text-neutral-400"}`}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      {multiline ? (
        <textarea
          className={`${inputClass} resize-y`}
          disabled={disabled}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          value={value}
        />
      ) : (
        <input
          autoComplete={autoComplete}
          className={`${inputClass} h-10`}
          disabled={disabled}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
      )}
      {hint && <p className="text-xs text-neutral-500">{hint}</p>}
    </div>
  );
}

const controlIcons = {
  up: "M12 19V5M5 12l7-7 7 7",
  down: "M12 5v14M19 12l-7 7-7-7",
  remove: "M6 6l12 12M18 6L6 18",
};

export function ControlIcon({ name }: { name: keyof typeof controlIcons }) {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <path d={controlIcons[name]} />
    </svg>
  );
}

/** Move up / move down / remove controls for an item in an editable list. */
export function ListControls({
  index,
  count,
  onMove,
  onRemove,
  removeLabel = "Remove",
}: {
  index: number;
  count: number;
  onMove: (from: number, to: number) => void;
  onRemove: () => void;
  removeLabel?: string;
}) {
  return (
    <div className="flex shrink-0 gap-1">
      <Button aria-label="Move up" disabled={index === 0} onClick={() => onMove(index, index - 1)} variant="ghost">
        <ControlIcon name="up" />
      </Button>
      <Button
        aria-label="Move down"
        disabled={index === count - 1}
        onClick={() => onMove(index, index + 1)}
        variant="ghost"
      >
        <ControlIcon name="down" />
      </Button>
      <Button aria-label={removeLabel} onClick={onRemove} variant="ghost">
        <ControlIcon name="remove" />
      </Button>
    </div>
  );
}

export function moveItem<T>(items: T[], from: number, to: number) {
  if (to < 0 || to >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function replaceItem<T>(items: T[], index: number, item: T) {
  return items.map((current, i) => (i === index ? item : current));
}

export function ImageField({
  label,
  value,
  onChange,
  hint,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  hint?: string;
  compact?: boolean;
}) {
  const { handleError } = useAdmin();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setUploading(true);
    try {
      onChange((await uploadImage(file)).url);
    } catch (error) {
      handleError(error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <div className={`flex gap-3 ${compact ? "flex-col" : "items-start"}`}>
        <div
          className={`shrink-0 overflow-hidden rounded-[6px] border border-neutral-200 bg-neutral-200 ${compact ? "aspect-[372/420] w-full" : "size-24 p-3"}`}
        >
          {value && <img alt="" className={`size-full ${compact ? "object-cover" : "object-contain"}`} src={value} />}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <Button disabled={uploading} onClick={() => inputRef.current?.click()}>
              {uploading ? "Uploading…" : value ? "Replace" : "Upload"}
            </Button>
          </div>
          {!compact && (
            <input
              aria-label={`${label} URL`}
              className={inputClass}
              onChange={(event) => onChange(event.target.value)}
              placeholder="/uploads/… or https://…"
              value={value}
            />
          )}
          {hint && <p className="text-xs text-neutral-500">{hint}</p>}
        </div>
      </div>
      <input accept="image/*" className="hidden" onChange={handleFile} ref={inputRef} type="file" />
    </div>
  );
}

/** Loads one content document for editing and tracks unsaved changes. */
export function useContentDoc<K extends ContentKey>(key: K) {
  const { handleError, notify } = useAdmin();
  const [draft, setDraft] = useState<ContentMap[K] | null>(null);
  const [savedJson, setSavedJson] = useState("");
  const [meta, setMeta] = useState<ContentMeta>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const [{ data }, { meta }] = await Promise.all([
        api<{ data: unknown }>(`/content/${key}`),
        api<{ meta: ContentMeta }>(`/content/${key}/meta`),
      ]);
      const merged = mergeContent(key, data);
      setDraft(merged);
      setSavedJson(JSON.stringify(merged));
      setMeta(meta);
    } catch (error) {
      handleError(error);
    }
  }, [handleError, key]);

  useEffect(() => {
    void load();
  }, [load]);

  const dirty = draft !== null && JSON.stringify(draft) !== savedJson;

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  async function save() {
    if (!draft) return;
    setSaving(true);
    try {
      const result = await api<{ meta: ContentMeta }>(`/content/${key}`, {
        method: "PUT",
        body: { data: draft, baseUpdatedAt: meta?.updated_at ?? null },
      });
      setSavedJson(JSON.stringify(draft));
      setMeta(result.meta);
      notify("Saved. The website now shows your changes.");
    } catch (error) {
      handleError(error);
      if (error instanceof ApiError && error.status === 409) await load();
    } finally {
      setSaving(false);
    }
  }

  async function resetToDefault() {
    if (!window.confirm("Restore the original website content for this section? Your edits will be lost.")) return;
    try {
      await api(`/content/${key}`, { method: "DELETE" });
      await load();
      notify("Restored the original content.");
    } catch (error) {
      handleError(error);
    }
  }

  function discard() {
    if (savedJson) setDraft(JSON.parse(savedJson) as ContentMap[K]);
  }

  return { draft, setDraft, dirty, saving, save, discard, resetToDefault, meta };
}

/** Header actions + sticky save bar shared by every content editor. */
export function ContentEditorFrame({
  title,
  description,
  doc,
  children,
  actions,
  allowReset = true,
}: {
  title: string;
  description?: ReactNode;
  doc: Pick<ReturnType<typeof useContentDoc>, "dirty" | "saving" | "save" | "discard" | "resetToDefault" | "meta"> & {
    draft: unknown;
  };
  children: ReactNode;
  actions?: ReactNode;
  /** Off for editors that show only part of a document (resetting would wipe the rest). */
  allowReset?: boolean;
}) {
  return (
    <div className="pb-24">
      <PageHeader
        actions={
          <>
            {actions}
            {allowReset && (
              <Button onClick={doc.resetToDefault} variant="ghost">
                Restore original
              </Button>
            )}
          </>
        }
        description={
          <>
            {description}
            {doc.meta && (
              <span className="mt-1 block text-xs text-neutral-400">
                Last saved {formatDate(doc.meta.updated_at)}
                {doc.meta.updated_by ? ` by ${doc.meta.updated_by}` : ""}
              </span>
            )}
          </>
        }
        title={title}
      />
      {doc.draft ? <div className="flex flex-col gap-4">{children}</div> : <Spinner />}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white/95 backdrop-blur transition-transform duration-200 lg:left-64 ${doc.dirty ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between gap-3 px-6 py-3">
          <span className="text-sm text-neutral-600">You have unsaved changes</span>
          <div className="flex gap-2">
            <Button disabled={doc.saving} onClick={doc.discard}>
              Discard
            </Button>
            <Button disabled={doc.saving} onClick={doc.save} variant="primary">
              {doc.saving ? "Saving…" : "Save changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
