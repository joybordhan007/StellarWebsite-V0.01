import { FormEvent, ReactNode, SelectHTMLAttributes, useCallback, useEffect, useId, useRef, useState } from "react";
import { mergeContent } from "../content/ContentProvider";
import type { ContentKey, ContentMap } from "../content/types";
import { useAdmin } from "./AdminContext";
import { type Admin, api, ApiError, type ContentMeta } from "./api";
import { Button, ControlIcon } from "./ui";

/** Popup dialog. Closes on Escape and on a click outside the panel. */
export function Modal({
  title,
  children,
  footer,
  onClose,
  size = "md",
}: {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  size?: "md" | "lg";
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const panel = panelRef.current;
    (panel?.querySelector<HTMLElement>("input, textarea, select") ?? panel?.querySelector<HTMLElement>(".modal-footer button"))?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
    >
      <div
        className={`flex max-h-[90vh] w-full flex-col rounded-[6px] bg-white shadow-xl ${size === "lg" ? "max-w-2xl" : "max-w-lg"}`}
        ref={panelRef}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
          <h2 className="font-semibold" id={titleId}>
            {title}
          </h2>
          <Button aria-label="Close" className="px-2" onClick={onClose} variant="ghost">
            <ControlIcon name="remove" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto p-5">{children}</div>
        {footer && <div className="modal-footer flex justify-end gap-2 border-t border-neutral-200 px-5 py-3">{footer}</div>}
      </div>
    </div>
  );
}

/** Popup with a form: Cancel + submit buttons and an error line. */
export function FormModal({
  id,
  title,
  submitLabel,
  saving,
  error,
  onClose,
  onSubmit,
  children,
}: {
  id: string;
  title: string;
  submitLabel: string;
  saving: boolean;
  error: string;
  onClose: () => void;
  onSubmit: (event: FormEvent) => void;
  children: ReactNode;
}) {
  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form={id} type="submit" variant="primary">
            {saving ? "Saving…" : submitLabel}
          </Button>
        </>
      }
      onClose={onClose}
      title={title}
    >
      <form className="flex flex-col gap-4" id={id} onSubmit={onSubmit}>
        {children}
        {error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}
      </form>
    </Modal>
  );
}

type ConfirmOptions = { title: string; message: ReactNode; confirmLabel?: string };

/** Promise-based confirm popup: `if (await confirm({...})) ...`. Render `dialog` once in the page. */
export function useConfirm() {
  const [request, setRequest] = useState<(ConfirmOptions & { resolve: (ok: boolean) => void }) | null>(null);

  const confirm = useCallback(
    (options: ConfirmOptions) => new Promise<boolean>((resolve) => setRequest({ ...options, resolve })),
    [],
  );
  const close = (ok: boolean) => {
    request?.resolve(ok);
    setRequest(null);
  };

  const dialog = request && (
    <Modal
      footer={
        <>
          <Button onClick={() => close(false)}>Cancel</Button>
          <Button className="!bg-red-600 !text-white hover:!bg-red-700" onClick={() => close(true)} variant="danger">
            {request.confirmLabel ?? "Delete"}
          </Button>
        </>
      }
      onClose={() => close(false)}
      title={request.title}
    >
      <div className="text-sm text-neutral-600">{request.message}</div>
    </Modal>
  );

  return { confirm, dialog };
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      aria-checked={checked}
      aria-label={label}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${checked ? "bg-[#1d1d1d]" : "bg-neutral-300"}`}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      role="switch"
      title={label}
      type="button"
    >
      <span
        className={`inline-block size-5 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-[22px]" : "translate-x-0.5"}`}
      />
    </button>
  );
}

export type MenuAction = { label: string; onSelect: () => void; danger?: boolean; disabled?: boolean };

/** The ⋮ button with a dropdown of row actions. Positioned fixed so table scrolling never clips it. */
export function ActionMenu({ actions, label = "Actions" }: { actions: MenuAction[]; label?: string }) {
  const [position, setPosition] = useState<{ top: number; right: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!position) return;
    const close = (event: Event) => {
      if (event.type === "mousedown" && menuRef.current?.contains(event.target as Node)) return;
      if (event.type === "mousedown" && buttonRef.current?.contains(event.target as Node)) return;
      setPosition(null);
    };
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setPosition(null);
    window.addEventListener("mousedown", close);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    menuRef.current?.querySelector<HTMLElement>("button:not(:disabled)")?.focus();
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [position]);

  function toggle() {
    if (position) return setPosition(null);
    const rect = buttonRef.current!.getBoundingClientRect();
    setPosition({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
  }

  return (
    <>
      <button
        aria-expanded={Boolean(position)}
        aria-haspopup="menu"
        aria-label={label}
        className="inline-flex size-8 items-center justify-center rounded-[6px] text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
        onClick={toggle}
        ref={buttonRef}
        type="button"
      >
        <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="12" cy="19" r="1.8" />
        </svg>
      </button>
      {position && (
        <div
          className="fixed z-50 min-w-40 rounded-[6px] border border-neutral-200 bg-white py-1 shadow-lg"
          ref={menuRef}
          role="menu"
          style={position}
        >
          {actions.map((action) => (
            <button
              className={`block w-full px-3 py-2 text-left text-sm disabled:opacity-40 ${action.danger ? "text-red-600 hover:bg-red-50" : "text-neutral-700 hover:bg-neutral-100"}`}
              disabled={action.disabled}
              key={action.label}
              onClick={() => {
                setPosition(null);
                action.onSelect();
              }}
              role="menuitem"
              type="button"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export type Column<T> = { header: string; cell: (row: T) => ReactNode; className?: string };

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  empty,
  pageSize = 20,
  dense = false,
}: {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string | number;
  empty: ReactNode;
  pageSize?: number;
  /** Rows of at most 40px (image lists). */
  dense?: boolean;
}) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  const current = Math.min(page, pageCount - 1);
  const visible = rows.slice(current * pageSize, (current + 1) * pageSize);

  return (
    <div className="overflow-hidden rounded-[6px] border border-neutral-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
            <tr>
              {columns.map((column) => (
                <th className={`px-4 ${dense ? "py-2" : "py-3"} font-medium whitespace-nowrap ${column.className ?? ""}`} key={column.header} scope="col">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {visible.length === 0 ? (
              <tr>
                <td className="px-4 py-10 text-center text-neutral-500" colSpan={columns.length}>
                  {empty}
                </td>
              </tr>
            ) : (
              visible.map((row) => (
                <tr className="hover:bg-neutral-50/70" key={rowKey(row)}>
                  {columns.map((column) => (
                    <td className={`px-4 ${dense ? "h-[39px] py-0" : "py-2.5"} align-middle ${column.className ?? ""}`} key={column.header}>
                      {column.cell(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {rows.length > pageSize && (
        <div className="flex items-center justify-between gap-3 border-t border-neutral-200 px-4 py-2.5 text-sm text-neutral-600">
          <span>
            {current * pageSize + 1}–{Math.min(rows.length, (current + 1) * pageSize)} of {rows.length}
          </span>
          <div className="flex gap-2">
            <Button disabled={current === 0} onClick={() => setPage(current - 1)}>
              Previous
            </Button>
            <Button disabled={current >= pageCount - 1} onClick={() => setPage(current + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function SelectField({
  label,
  children,
  hideLabel = false,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string; hideLabel?: boolean }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label className={hideLabel ? "sr-only" : "text-sm font-medium text-neutral-700"} htmlFor={id}>
        {label}
      </label>
      <select
        className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none focus:border-[#dea36a] focus:ring-2 focus:ring-[#dea36a]/30"
        id={id}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

/** Tabs that are links, so each tab has its own URL. */
export function LinkTabs({ tabs, active }: { tabs: { href: string; label: string }[]; active: string }) {
  return (
    <nav aria-label="Sections" className="flex gap-1 border-b border-neutral-200">
      {tabs.map((tab) => (
        <a
          aria-current={tab.href === active ? "page" : undefined}
          className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${tab.href === active ? "border-[#1d1d1d] text-neutral-900" : "border-transparent text-neutral-500 hover:text-neutral-900"}`}
          href={tab.href}
          key={tab.href}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
}

export function Thumb({ src, alt = "", contain = false }: { src: string; alt?: string; contain?: boolean }) {
  return (
    <div className={`size-12 shrink-0 overflow-hidden rounded-[6px] bg-neutral-100 ${contain ? "p-2" : ""}`}>
      {src && <img alt={alt} className={`size-full ${contain ? "object-contain" : "object-cover"}`} loading="lazy" src={src} />}
    </div>
  );
}

export function formatDay(value: string) {
  return new Date(value).toLocaleDateString(undefined, { dateStyle: "medium" });
}

export function nextId(items: { id: number }[]) {
  return items.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

/**
 * Loads one content document for record-style editing: every change is saved
 * immediately with `commit`, guarded against overwriting someone else's edit.
 */
export function useLiveContent<K extends ContentKey>(key: K) {
  const { handleError, notify } = useAdmin();
  const [data, setData] = useState<ContentMap[K] | null>(null);
  const baseRef = useRef<string | null>(null);

  const load = useCallback(async () => {
    try {
      const [{ data: stored }, { meta }] = await Promise.all([
        api<{ data: unknown }>(`/content/${key}`),
        api<{ meta: ContentMeta }>(`/content/${key}/meta`),
      ]);
      baseRef.current = meta?.updated_at ?? null;
      setData(mergeContent(key, stored));
    } catch (error) {
      handleError(error);
    }
  }, [handleError, key]);

  useEffect(() => {
    void load();
  }, [load]);

  const commit = useCallback(
    async (next: ContentMap[K], message: string) => {
      try {
        const result = await api<{ meta: ContentMeta }>(`/content/${key}`, {
          method: "PUT",
          body: { data: next, baseUpdatedAt: baseRef.current },
        });
        baseRef.current = result.meta?.updated_at ?? null;
        setData(next);
        notify(message);
        return true;
      } catch (error) {
        handleError(error);
        if (error instanceof ApiError && error.status === 409) await load();
        return false;
      }
    },
    [handleError, key, load, notify],
  );

  return { data, commit };
}

/** Profile photo, or the initials when there is none. */
export function Avatar({ admin, size = 40 }: { admin: Admin; size?: number }) {
  const initials = admin.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
  return admin.avatar ? (
    <img alt="" className="shrink-0 rounded-full object-cover" src={admin.avatar} style={{ width: size, height: size }} />
  ) : (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full bg-[#dea36a] font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initials || "A"}
    </span>
  );
}
