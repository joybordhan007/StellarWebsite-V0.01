import { FormEvent, ReactNode, useState } from "react";
import type { CapabilitiesContent, Capability } from "../../content/types";
import { ActionMenu, DataTable, formatDay, LinkTabs, Modal, nextId, Thumb, Toggle, useConfirm, useLiveContent } from "../components";
import VersatilityEditor from "./VersatilityEditor";
import { Button, ControlIcon, ImageField, moveItem, PageHeader, Spinner, TextField } from "../ui";

// The Home "Ideas to impact" row has room for six cards.
const HOME_LIMIT = 6;

type Commit = (next: CapabilitiesContent, message: string) => Promise<boolean>;

function CapabilityForm({
  content,
  capability,
  onClose,
  commit,
}: {
  content: CapabilitiesContent;
  capability: Capability | null;
  onClose: () => void;
  commit: Commit;
}) {
  const [name, setName] = useState(capability?.name ?? "");
  const [subtitle, setSubtitle] = useState(capability?.subtitle ?? "");
  const [image, setImage] = useState(capability?.image ?? "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return setError("Enter a name.");
    if (!image) return setError("Add an image.");

    setSaving(true);
    const fields = { name: name.trim(), subtitle: subtitle.trim(), image };
    const items = capability
      ? content.items.map((item) => (item.id === capability.id ? { ...item, ...fields } : item))
      : [...content.items, { id: nextId(content.items), ...fields, createdAt: new Date().toISOString(), active: true }];
    const ok = await commit({ ...content, items }, capability ? "Capability updated." : "Capability added.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button disabled={saving} form="capability-form" type="submit" variant="primary">
            {saving ? "Saving…" : capability ? "Save changes" : "Add capability"}
          </Button>
        </>
      }
      onClose={onClose}
      title={capability ? `Edit capability #${capability.id}` : "Add capability"}
    >
      <form className="flex flex-col gap-4" id="capability-form" onSubmit={submit}>
        <TextField label="Name" onChange={setName} required value={name} />
        <TextField
          hint="Shown under the name on the Our Capabilities page (not on the Home page)."
          label="Subtitle"
          multiline
          onChange={setSubtitle}
          rows={3}
          value={subtitle}
        />
        <ImageField hint="Landscape photos work best." label="Image" onChange={setImage} value={image} />
        {error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}
      </form>
    </Modal>
  );
}

function CapabilityView({ content, capability, onClose }: { content: CapabilitiesContent; capability: Capability; onClose: () => void }) {
  return (
    <Modal onClose={onClose} title={`Capability #${capability.id}`}>
      {/* Same card as on the Our Capabilities page. */}
      <div className="overflow-hidden rounded-[8px] bg-[#f9f7f5] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <img alt="" className="h-[250px] w-full object-cover" src={capability.image} />
        <div className="flex flex-col gap-1.5 p-3">
          <p className="text-[18px] font-semibold uppercase text-[#1d1d1d]">{capability.name}</p>
          <p className="text-sm text-[#4a4a4a]">{capability.subtitle}</p>
        </div>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
        <dt className="text-neutral-500">Created</dt>
        <dd>{formatDay(capability.createdAt)}</dd>
        <dt className="text-neutral-500">Status</dt>
        <dd>{capability.active ? "Visible on the website" : "Hidden"}</dd>
        <dt className="text-neutral-500">Home page</dt>
        <dd>{content.homeIds.includes(capability.id) ? "Shown in “Ideas to impact”" : "Not shown"}</dd>
      </dl>
    </Modal>
  );
}

function HomeOrder({ content, onClose, commit }: { content: CapabilitiesContent; onClose: () => void; commit: Commit }) {
  const [ids, setIds] = useState(content.homeIds);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    const ok = await commit({ ...content, homeIds: ids }, "Home page capabilities updated.");
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
      title="Home page: Ideas to impact"
    >
      <p className="text-sm text-neutral-500">
        Up to {HOME_LIMIT} capabilities show on the Home page, in this order (name and image only). Turn on “Home” in
        the table to add one.
      </p>
      <ol className="flex flex-col gap-2">
        {ids.map((id, index) => {
          const capability = content.items.find((item) => item.id === id);
          if (!capability) return null;
          return (
            <li className="flex items-center gap-3 rounded-[6px] border border-neutral-200 p-2" key={id}>
              <span className="w-6 text-center text-xs text-neutral-400">{index + 1}</span>
              <Thumb src={capability.image} />
              <span className={`flex-1 truncate text-sm ${capability.active ? "" : "text-neutral-400"}`}>
                {capability.name}
                {!capability.active && " (hidden)"}
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
    </Modal>
  );
}

function CapabilitiesList({ tabs }: { tabs: ReactNode }) {
  const { data: content, commit } = useLiveContent("capabilities");
  const [editing, setEditing] = useState<Capability | "new" | null>(null);
  const [viewing, setViewing] = useState<Capability | null>(null);
  const [arranging, setArranging] = useState(false);
  const { confirm, dialog } = useConfirm();

  if (!content) return <Spinner />;

  const homeFull = content.homeIds.length >= HOME_LIMIT;

  const update = (capability: Capability, patch: Partial<Capability>, message: string) =>
    commit({ ...content, items: content.items.map((item) => (item.id === capability.id ? { ...item, ...patch } : item)) }, message);

  const setOnHome = (capability: Capability, onHome: boolean) =>
    commit(
      {
        ...content,
        homeIds: onHome ? [...content.homeIds, capability.id] : content.homeIds.filter((id) => id !== capability.id),
      },
      onHome ? `${capability.name} added to the home page.` : `${capability.name} removed from the home page.`,
    );

  const move = (index: number, to: number) => commit({ ...content, items: moveItem(content.items, index, to) }, "Order updated.");

  async function remove(capability: Capability, current: CapabilitiesContent) {
    const ok = await confirm({
      title: "Delete capability?",
      message: (
        <>
          <strong>{capability.name}</strong> will be removed from the website. This can't be undone.
        </>
      ),
    });
    if (!ok) return;
    await commit(
      {
        ...current,
        items: current.items.filter((item) => item.id !== capability.id),
        homeIds: current.homeIds.filter((id) => id !== capability.id),
      },
      "Capability deleted.",
    );
  }

  return (
    <>
      <PageHeader
        actions={
          <>
            <Button onClick={() => setArranging(true)}>
              Arrange home page ({content.homeIds.length}/{HOME_LIMIT})
            </Button>
            <Button onClick={() => setEditing("new")} variant="primary">
              + Add capability
            </Button>
          </>
        }
        description={
          <>
            {tabs}
            <span className="mt-3 block">
              Cards in “Integrated for a stronger tomorrow” on the Our Capabilities page (4 per row, in this order) and in “Ideas to impact” on the Home page. Changes are saved as soon as you make them.
            </span>
          </>
        }
        title="Our capabilities"
      />
      <DataTable
        columns={[
          { header: "ID", cell: (item) => <span className="text-neutral-500">#{item.id}</span>, className: "w-16" },
          { header: "Image", cell: (item) => <Thumb alt={item.name} src={item.image} />, className: "w-20" },
          { header: "Name", cell: (item) => <span className="font-medium">{item.name}</span> },
          {
            header: "Subtitle",
            cell: (item) => <span className="line-clamp-2 max-w-md text-neutral-600">{item.subtitle}</span>,
          },
          { header: "Created", cell: (item) => <span className="whitespace-nowrap">{formatDay(item.createdAt)}</span> },
          {
            header: "Status",
            cell: (item) => (
              <Toggle
                checked={item.active}
                label={item.active ? `Hide ${item.name}` : `Show ${item.name}`}
                onChange={(active) => update(item, { active }, active ? `${item.name} is visible.` : `${item.name} is hidden.`)}
              />
            ),
          },
          {
            header: "Home",
            cell: (item) => {
              const onHome = content.homeIds.includes(item.id);
              return (
                <Toggle
                  checked={onHome}
                  disabled={!onHome && homeFull}
                  label={!onHome && homeFull ? `The home page already shows ${HOME_LIMIT}` : `Show ${item.name} on the home page`}
                  onChange={(value) => setOnHome(item, value)}
                />
              );
            },
          },
          {
            header: "Action",
            className: "w-16 text-right",
            cell: (item) => {
              const index = content.items.indexOf(item);
              return (
                <ActionMenu
                  actions={[
                    { label: "View", onSelect: () => setViewing(item) },
                    { label: "Edit", onSelect: () => setEditing(item) },
                    { label: "Move up", disabled: index === 0, onSelect: () => move(index, index - 1) },
                    { label: "Move down", disabled: index === content.items.length - 1, onSelect: () => move(index, index + 1) },
                    { label: "Delete", danger: true, onSelect: () => remove(item, content) },
                  ]}
                  label={`Actions for ${item.name}`}
                />
              );
            },
          },
        ]}
        empty="No capabilities yet."
        pageSize={50}
        rowKey={(item) => item.id}
        rows={content.items}
      />
      {editing && (
        <CapabilityForm
          capability={editing === "new" ? null : editing}
          commit={commit}
          content={content}
          onClose={() => setEditing(null)}
        />
      )}
      {viewing && <CapabilityView capability={viewing} content={content} onClose={() => setViewing(null)} />}
      {arranging && <HomeOrder commit={commit} content={content} onClose={() => setArranging(false)} />}
      {dialog}
    </>
  );
}

const TABS = [
  { href: "/admin/capabilities", label: "Capabilities" },
  { href: "/admin/capabilities/versatility", label: "Versatility across categories" },
];

export default function CapabilitiesAdmin({ pathname }: { pathname: string }) {
  const onVersatility = pathname.startsWith("/admin/capabilities/versatility");
  const tabs = <LinkTabs active={onVersatility ? TABS[1].href : TABS[0].href} tabs={TABS} />;
  return onVersatility ? <VersatilityEditor tabs={tabs} /> : <CapabilitiesList tabs={tabs} />;
}
