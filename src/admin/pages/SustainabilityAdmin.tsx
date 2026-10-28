import { FormEvent, ReactNode, useState } from "react";
import type { EnvironmentCard, Milestone, SustainabilityContent } from "../../content/types";
import ImageTable, { logoAdapter } from "../ImageTable";
import { ActionMenu, DataTable, FormModal, LinkTabs, nextId, useConfirm, useLiveContent } from "../components";
import { REPORTS_BASE, ReportEditor, ReportsList } from "./SustainabilityReports";
import { Button, Card, ImageField, moveItem, PageHeader, Spinner, TextField } from "../ui";

// The website rows have room for 4 environment cards and 5 milestones.
const MAX_ENVIRONMENT = 4;
const MAX_MILESTONES = 5;

type Commit = (next: SustainabilityContent, message: string) => Promise<boolean>;

function RowImage({ src, icon = false }: { src: string; icon?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[4px] ${icon ? "size-7 bg-white p-0.5" : "h-8 w-12 bg-neutral-100"}`}>
      {src && <img alt="" className={`size-full ${icon ? "object-contain" : "object-cover"}`} src={src} />}
    </div>
  );
}

function EnvironmentForm({ content, card, onClose, commit }: { content: SustainabilityContent; card: EnvironmentCard | null; onClose: () => void; commit: Commit }) {
  const [draft, setDraft] = useState<EnvironmentCard>(
    card ?? { id: nextId(content.environment), icon: "", title: "", image: "", highlight: { value: "", label: "" }, detail: { value: "", label: "" } },
  );
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const set = (patch: Partial<EnvironmentCard>) => setDraft({ ...draft, ...patch });

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!draft.title.trim()) return setError("Enter a title.");
    if (!draft.image) return setError("Add an image.");
    setSaving(true);
    const next = { ...draft, title: draft.title.trim() };
    const environment = card ? content.environment.map((item) => (item.id === card.id ? next : item)) : [...content.environment, next];
    const ok = await commit({ ...content, environment }, card ? "Card updated." : "Card added.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <FormModal
      error={error}
      id="environment-form"
      onClose={onClose}
      onSubmit={submit}
      saving={saving}
      submitLabel={card ? "Save changes" : "Add card"}
      title={card ? "Edit card" : "Add card"}
    >
      <TextField label="Title" onChange={(title) => set({ title })} required value={draft.title} />
      <ImageField hint="32×32 icon, SVG or transparent PNG." label="Icon" onChange={(icon) => set({ icon })} value={draft.icon} />
      <ImageField hint="Landscape photo (shown 340×204)." label="Image" onChange={(image) => set({ image })} value={draft.image} />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Main figure" onChange={(value) => set({ highlight: { ...draft.highlight, value } })} placeholder="650 KW" value={draft.highlight.value} />
        <TextField label="Main figure text" onChange={(label) => set({ highlight: { ...draft.highlight, label } })} value={draft.highlight.label} />
        <TextField hint="Optional — leave empty to show only the text." label="Second figure" onChange={(value) => set({ detail: { ...draft.detail, value } })} value={draft.detail.value} />
        <TextField label="Second figure text" onChange={(label) => set({ detail: { ...draft.detail, label } })} value={draft.detail.label} />
      </div>
    </FormModal>
  );
}

function MilestoneForm({ content, milestone, onClose, commit }: { content: SustainabilityContent; milestone: Milestone | null; onClose: () => void; commit: Commit }) {
  const [draft, setDraft] = useState<Milestone>(milestone ?? { id: nextId(content.milestones), icon: "", title: "", target: "" });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const set = (patch: Partial<Milestone>) => setDraft({ ...draft, ...patch });

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!draft.title.trim()) return setError("Enter a title.");
    setSaving(true);
    const next = { ...draft, title: draft.title.trim(), target: draft.target.trim() };
    const milestones = milestone ? content.milestones.map((item) => (item.id === milestone.id ? next : item)) : [...content.milestones, next];
    const ok = await commit({ ...content, milestones }, milestone ? "Milestone updated." : "Milestone added.");
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <FormModal
      error={error}
      id="milestone-form"
      onClose={onClose}
      onSubmit={submit}
      saving={saving}
      submitLabel={milestone ? "Save changes" : "Add milestone"}
      title={milestone ? "Edit milestone" : "Add milestone"}
    >
      <TextField label="Title" onChange={(title) => set({ title })} required value={draft.title} />
      <TextField label="Target" onChange={(target) => set({ target })} placeholder="Target: 90 %" value={draft.target} />
      <ImageField hint="32×32 icon, SVG or transparent PNG." label="Icon" onChange={(icon) => set({ icon })} value={draft.icon} />
    </FormModal>
  );
}

const TABS = [
  { href: "/admin/sustainability", label: "Sections & logos" },
  { href: REPORTS_BASE, label: "Reports" },
];

export default function SustainabilityAdmin({ pathname }: { pathname: string }) {
  const { data, commit } = useLiveContent("sustainability");
  const onReports = pathname.startsWith(REPORTS_BASE);
  const tabs = <LinkTabs active={onReports ? REPORTS_BASE : TABS[0].href} tabs={TABS} />;
  if (onReports) {
    if (!data) return <Spinner />;
    const story = data.stories.find((item) => String(item.id) === pathname.slice(REPORTS_BASE.length + 1));
    return story ? (
      <ReportEditor commit={commit} data={data} key={[story.id, story.title, story.background, story.icon, story.text].join("|")} story={story} />
    ) : (
      <ReportsList data={data} tabs={tabs} />
    );
  }
  return <SectionsAndLogos commit={commit} data={data} tabs={tabs} />;
}

function SectionsAndLogos({ data, commit, tabs }: { data: SustainabilityContent | null; commit: Commit; tabs: ReactNode }) {
  const [editingCard, setEditingCard] = useState<EnvironmentCard | "new" | null>(null);
  const [editingMilestone, setEditingMilestone] = useState<Milestone | "new" | null>(null);
  const { confirm, dialog } = useConfirm();

  async function remove(kind: "environment" | "milestones", id: number, name: string) {
    if (!data) return;
    const ok = await confirm({ title: "Delete?", message: `${name || "This item"} will be removed from the website.` });
    if (!ok) return;
    if (kind === "environment") await commit({ ...data, environment: data.environment.filter((item) => item.id !== id) }, "Card deleted.");
    else await commit({ ...data, milestones: data.milestones.filter((item) => item.id !== id) }, "Milestone deleted.");
  }

  return (
    <>
      <PageHeader
        description={
          <>
            {tabs}
            <span className="mt-3 block">Card rows and certification logos of the Sustainability page. Changes are saved as soon as you make them.</span>
          </>
        }
        title="Sustainability"
      />
      {data ? (
        <div className="flex flex-col gap-4">
          <Card
            actions={
              <Button disabled={data.environment.length >= MAX_ENVIRONMENT} onClick={() => setEditingCard("new")} variant="primary">
                + Add card
              </Button>
            }
            description={`“Environmental performance” cards, in this order (up to ${MAX_ENVIRONMENT}).`}
            title={`Environmental performance (${data.environment.length}/${MAX_ENVIRONMENT})`}
          >
            <DataTable
              columns={[
                { header: "Icon", className: "w-16", cell: ({ card }) => <RowImage icon src={card.icon} /> },
                { header: "Image", className: "w-20", cell: ({ card }) => <RowImage src={card.image} /> },
                { header: "Title", cell: ({ card }) => <span className="font-medium whitespace-nowrap">{card.title}</span> },
                {
                  header: "Figures",
                  cell: ({ card }) => (
                    <span className="line-clamp-1 text-neutral-600">
                      {[card.highlight.value, card.highlight.label].filter(Boolean).join(" ")} · {[card.detail.value, card.detail.label].filter(Boolean).join(" ")}
                    </span>
                  ),
                },
                {
                  header: "Actions",
                  className: "w-16 text-right",
                  cell: ({ card, index }) => (
                    <ActionMenu
                      actions={[
                        { label: "Edit", onSelect: () => setEditingCard(card) },
                        { label: "Move up", disabled: index === 0, onSelect: () => commit({ ...data, environment: moveItem(data.environment, index, index - 1) }, "Order updated.") },
                        {
                          label: "Move down",
                          disabled: index === data.environment.length - 1,
                          onSelect: () => commit({ ...data, environment: moveItem(data.environment, index, index + 1) }, "Order updated."),
                        },
                        { label: "Delete", danger: true, onSelect: () => remove("environment", card.id, card.title) },
                      ]}
                      label={`Actions for ${card.title}`}
                    />
                  ),
                },
              ]}
              dense
              empty="No cards — the section shows an empty row."
              rowKey={({ card }) => card.id}
              rows={data.environment.map((card, index) => ({ card, index }))}
            />
          </Card>

          <Card
            actions={
              <Button disabled={data.milestones.length >= MAX_MILESTONES} onClick={() => setEditingMilestone("new")} variant="primary">
                + Add milestone
              </Button>
            }
            description={`“Our next milestones” row, in this order (up to ${MAX_MILESTONES}).`}
            title={`Our next milestones (${data.milestones.length}/${MAX_MILESTONES})`}
          >
            <DataTable
              columns={[
                { header: "Icon", className: "w-16", cell: ({ milestone }) => <RowImage icon src={milestone.icon} /> },
                { header: "Title", cell: ({ milestone }) => <span className="font-medium">{milestone.title}</span> },
                { header: "Target", cell: ({ milestone }) => <span className="text-neutral-600">{milestone.target}</span> },
                {
                  header: "Actions",
                  className: "w-16 text-right",
                  cell: ({ milestone, index }) => (
                    <ActionMenu
                      actions={[
                        { label: "Edit", onSelect: () => setEditingMilestone(milestone) },
                        { label: "Move up", disabled: index === 0, onSelect: () => commit({ ...data, milestones: moveItem(data.milestones, index, index - 1) }, "Order updated.") },
                        {
                          label: "Move down",
                          disabled: index === data.milestones.length - 1,
                          onSelect: () => commit({ ...data, milestones: moveItem(data.milestones, index, index + 1) }, "Order updated."),
                        },
                        { label: "Delete", danger: true, onSelect: () => remove("milestones", milestone.id, milestone.title) },
                      ]}
                      label={`Actions for ${milestone.title}`}
                    />
                  ),
                },
              ]}
              dense
              empty="No milestones — the section shows an empty row."
              rowKey={({ milestone }) => milestone.id}
              rows={data.milestones.map((milestone, index) => ({ milestone, index }))}
            />
          </Card>

          <ImageTable
            adapter={logoAdapter}
            addLabel="Add Logo"
            description="“Certifications & standards”. Each factory has its own certification logos under Factories."
            imageHeader="Logo"
            items={data.certifications}
            nameHeader="Logo name"
            onChange={(certifications, message) => commit({ ...data, certifications }, message)}
            title="Certifications"
          />
        </div>
      ) : (
        <Spinner />
      )}
      {data && editingCard && <EnvironmentForm card={editingCard === "new" ? null : editingCard} commit={commit} content={data} onClose={() => setEditingCard(null)} />}
      {data && editingMilestone && (
        <MilestoneForm commit={commit} content={data} milestone={editingMilestone === "new" ? null : editingMilestone} onClose={() => setEditingMilestone(null)} />
      )}
      {dialog}
    </>
  );
}
