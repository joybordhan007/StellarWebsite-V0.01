import { FormEvent, useState } from "react";
import { ACHIEVEMENT_PAGES, type Achievement, type AchievementPage, type AchievementsContent } from "../../content/types";
import { ActionMenu, DataTable, formatDay, Modal, nextId, SelectField, useConfirm, useLiveContent } from "../components";
import { Button, Card, ControlIcon, ImageField, moveItem, PageHeader, Spinner, TextField } from "../ui";

type Commit = (next: AchievementsContent, message: string) => Promise<boolean>;

const PAGE_LABELS: Record<AchievementPage, string> = {
  home: "Home",
  capabilities: "Our capabilities",
  sustainability: "Sustainability",
};

// Five items fill the bar in the design; more still fit but get narrow.
const RECOMMENDED_PER_PAGE = 5;

function formatValue(item: Achievement) {
  return item.value === null ? "—" : `${item.prefix}${item.value.toLocaleString("en-US")}${item.suffix}`;
}

function pagesShowing(content: AchievementsContent, id: number) {
  return ACHIEVEMENT_PAGES.filter((page) => content.pages[page]?.includes(id));
}

/** The item as the website draws it in the stats bar. */
function AchievementPreview({ item }: { item: Pick<Achievement, "icon" | "value" | "prefix" | "suffix" | "label"> }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[6px] bg-[#f9f7f5] px-4 py-5 text-center">
      <div className="size-12">{item.icon && <img alt="" className="size-full object-contain" src={item.icon} />}</div>
      {item.value === null ? (
        <p className="whitespace-pre-line text-[17px] font-semibold uppercase text-[#4a4a4a]">{item.label || "Label"}</p>
      ) : (
        <>
          <p className="text-[28px] font-bold text-[#1d1d1d]">{formatValue(item as Achievement)}</p>
          <p className="whitespace-pre-line text-sm font-medium uppercase text-[#4a4a4a]">{item.label || "Label"}</p>
        </>
      )}
    </div>
  );
}

function AchievementForm({
  content,
  achievement,
  onClose,
  commit,
}: {
  content: AchievementsContent;
  achievement: Achievement | null;
  onClose: () => void;
  commit: Commit;
}) {
  const [icon, setIcon] = useState(achievement?.icon ?? "");
  const [value, setValue] = useState(achievement?.value === null || !achievement ? "" : String(achievement.value));
  const [prefix, setPrefix] = useState(achievement?.prefix ?? "");
  const [suffix, setSuffix] = useState(achievement?.suffix ?? "");
  const [label, setLabel] = useState(achievement?.label ?? "");
  const [pages, setPages] = useState<AchievementPage[]>(achievement ? pagesShowing(content, achievement.id) : []);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const number = value.trim() === "" ? null : Number(value);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!icon) return setError("Add an icon.");
    if (number !== null && (!Number.isFinite(number) || number < 0)) return setError("The number must be 0 or more.");
    if (!label.trim()) return setError("Enter a label.");

    setSaving(true);
    const id = achievement?.id ?? nextId(content.items);
    const fields = { icon, value: number, prefix, suffix, label: label.trim() };
    const items = achievement
      ? content.items.map((item) => (item.id === id ? { ...item, ...fields } : item))
      : [...content.items, { id, ...fields, createdAt: new Date().toISOString() }];
    // Add to newly ticked pages (at the end), remove from unticked ones, keep the rest in place.
    const nextPages = Object.fromEntries(
      ACHIEVEMENT_PAGES.map((page) => {
        const ids = content.pages[page] ?? [];
        if (!pages.includes(page)) return [page, ids.filter((item) => item !== id)];
        return [page, ids.includes(id) ? ids : [...ids, id]];
      }),
    ) as AchievementsContent["pages"];

    const ok = await commit({ items, pages: nextPages }, achievement ? "Achievement updated." : "Achievement added.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form="achievement-form" type="submit" variant="primary">
            {saving ? "Saving…" : achievement ? "Save changes" : "Add achievement"}
          </Button>
        </>
      }
      onClose={onClose}
      size="lg"
      title={achievement ? `Edit achievement #${achievement.id}` : "Add achievement"}
    >
      <form className="grid gap-5 sm:grid-cols-[1fr_220px]" id="achievement-form" onSubmit={submit}>
        <div className="flex flex-col gap-4">
          <ImageField hint="48 × 48 icon, SVG works best." label="Icon" onChange={setIcon} value={icon} />
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-3">
            <TextField label="Before" onChange={setPrefix} placeholder="$" value={prefix} />
            <TextField
              hint="Counts up on the site. Leave empty to show the label as a headline."
              label="Number"
              onChange={setValue}
              type="number"
              value={value}
            />
            <TextField label="After" onChange={setSuffix} placeholder="M+" value={suffix} />
          </div>
          <TextField hint="Press Enter for a line break." label="Label" multiline onChange={setLabel} rows={2} value={label} />
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-1.5 text-sm font-medium text-neutral-700">Show on</legend>
            {ACHIEVEMENT_PAGES.map((page) => (
              <label className="flex items-center gap-2 text-sm" key={page}>
                <input
                  checked={pages.includes(page)}
                  className="size-4 accent-[#1d1d1d]"
                  onChange={(event) =>
                    setPages(event.target.checked ? [...pages, page] : pages.filter((item) => item !== page))
                  }
                  type="checkbox"
                />
                {PAGE_LABELS[page]} page
              </label>
            ))}
          </fieldset>
          {error && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-neutral-700">Preview</span>
          <AchievementPreview item={{ icon, value: number !== null && Number.isFinite(number) ? number : null, prefix, suffix, label }} />
        </div>
      </form>
    </Modal>
  );
}

/** Ordered list of what one page's stats bar shows, edited in place. */
function PageBar({ page, content, commit }: { page: AchievementPage; content: AchievementsContent; commit: Commit }) {
  const ids = content.pages[page] ?? [];
  const available = content.items.filter((item) => !ids.includes(item.id));
  const setIds = (next: number[], message: string) => commit({ ...content, pages: { ...content.pages, [page]: next } }, message);

  return (
    <Card description={`${ids.length} shown${ids.length > RECOMMENDED_PER_PAGE ? ` — ${RECOMMENDED_PER_PAGE} fit best` : ""}`} title={`${PAGE_LABELS[page]} page`}>
      {ids.length === 0 ? (
        <p className="text-sm text-neutral-500">Nothing shown — the stats bar is hidden on this page.</p>
      ) : (
        <ol className="flex flex-col gap-2">
          {ids.map((id, index) => {
            const item = content.items.find((entry) => entry.id === id);
            if (!item) return null;
            return (
              <li className="flex items-center gap-2 rounded-[6px] border border-neutral-200 p-2" key={id}>
                <img alt="" className="size-8 shrink-0 object-contain" src={item.icon} />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{formatValue(item)}</span>
                  <span className="block truncate text-xs text-neutral-500">{item.label.replace(/\n/g, " ")}</span>
                </span>
                <Button
                  aria-label="Move up"
                  className="px-2"
                  disabled={index === 0}
                  onClick={() => setIds(moveItem(ids, index, index - 1), "Order updated.")}
                  variant="ghost"
                >
                  <ControlIcon name="up" />
                </Button>
                <Button
                  aria-label="Move down"
                  className="px-2"
                  disabled={index === ids.length - 1}
                  onClick={() => setIds(moveItem(ids, index, index + 1), "Order updated.")}
                  variant="ghost"
                >
                  <ControlIcon name="down" />
                </Button>
                <Button
                  aria-label={`Remove from the ${PAGE_LABELS[page]} page`}
                  className="px-2"
                  onClick={() => setIds(ids.filter((entry) => entry !== id), "Removed from the page.")}
                  variant="ghost"
                >
                  <ControlIcon name="remove" />
                </Button>
              </li>
            );
          })}
        </ol>
      )}
      {available.length > 0 && (
        <SelectField
          hideLabel
          label={`Add an achievement to the ${PAGE_LABELS[page]} page`}
          onChange={(event) => {
            if (event.target.value) setIds([...ids, Number(event.target.value)], "Added to the page.");
          }}
          value=""
        >
          <option value="">+ Add to this page…</option>
          {available.map((item) => (
            <option key={item.id} value={item.id}>
              {formatValue(item)} {item.label.replace(/\n/g, " ")}
            </option>
          ))}
        </SelectField>
      )}
    </Card>
  );
}

export default function AchievementsAdmin() {
  const { data: content, commit } = useLiveContent("achievements");
  const [editing, setEditing] = useState<Achievement | "new" | null>(null);
  const { confirm, dialog } = useConfirm();

  if (!content) return <Spinner />;

  async function remove(item: Achievement, current: AchievementsContent) {
    const shownOn = pagesShowing(current, item.id).map((page) => PAGE_LABELS[page]);
    const ok = await confirm({
      title: "Delete achievement?",
      message: (
        <>
          <strong>{formatValue(item)} {item.label.replace(/\n/g, " ")}</strong> will be deleted
          {shownOn.length > 0 ? ` and removed from: ${shownOn.join(", ")}` : ""}. This can't be undone.
        </>
      ),
    });
    if (!ok) return;
    await commit(
      {
        items: current.items.filter((entry) => entry.id !== item.id),
        pages: Object.fromEntries(
          ACHIEVEMENT_PAGES.map((page) => [page, (current.pages[page] ?? []).filter((id) => id !== item.id)]),
        ) as AchievementsContent["pages"],
      },
      "Achievement deleted.",
    );
  }

  return (
    <>
      <PageHeader
        actions={
          <Button onClick={() => setEditing("new")} variant="primary">
            + Add achievement
          </Button>
        }
        description="The stats bar under the hero on the Home, Our Capabilities and Sustainability pages. One achievement can show on several pages. Changes are saved as soon as you make them."
        title="Achievements"
      />
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 xl:grid-cols-3">
          {ACHIEVEMENT_PAGES.map((page) => (
            <PageBar commit={commit} content={content} key={page} page={page} />
          ))}
        </div>
        <DataTable
          columns={[
            { header: "ID", cell: (item) => <span className="text-neutral-500">#{item.id}</span>, className: "w-16" },
            {
              header: "Icon",
              className: "w-20",
              cell: (item) => (
                <div className="flex size-12 items-center justify-center rounded-[6px] bg-[#f9f7f5]">
                  <img alt="" className="size-8 object-contain" src={item.icon} />
                </div>
              ),
            },
            { header: "Number", cell: (item) => <span className="font-semibold whitespace-nowrap">{formatValue(item)}</span> },
            { header: "Label", cell: (item) => <span className="whitespace-pre-line">{item.label}</span> },
            {
              header: "Shown on",
              cell: (item) => {
                const pages = pagesShowing(content, item.id);
                return pages.length === 0 ? (
                  <span className="text-neutral-400">Not shown</span>
                ) : (
                  <span className="flex flex-wrap gap-1">
                    {pages.map((page) => (
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700" key={page}>
                        {PAGE_LABELS[page]}
                      </span>
                    ))}
                  </span>
                );
              },
            },
            { header: "Created", cell: (item) => <span className="whitespace-nowrap">{formatDay(item.createdAt)}</span> },
            {
              header: "Action",
              className: "w-16 text-right",
              cell: (item) => (
                <ActionMenu
                  actions={[
                    { label: "Edit", onSelect: () => setEditing(item) },
                    { label: "Delete", danger: true, onSelect: () => remove(item, content) },
                  ]}
                  label={`Actions for ${item.label}`}
                />
              ),
            },
          ]}
          empty="No achievements yet."
          pageSize={50}
          rowKey={(item) => item.id}
          rows={content.items}
        />
      </div>
      {editing && (
        <AchievementForm
          achievement={editing === "new" ? null : editing}
          commit={commit}
          content={content}
          onClose={() => setEditing(null)}
        />
      )}
      {dialog}
    </>
  );
}
