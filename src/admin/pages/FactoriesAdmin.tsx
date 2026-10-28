import { MouseEvent } from "react";
import type { Factory, FactoryDistance, FactoryGalleryItem, FactoryMixShare } from "../../content/types";
import LogoListEditor from "../LogoListEditor";
import { ActionMenu, DataTable, Thumb, Toggle, useLiveContent } from "../components";
import {
  Button,
  Card,
  ContentEditorFrame,
  ImageField,
  ListControls,
  moveItem,
  PageHeader,
  replaceItem,
  Spinner,
  TextField,
  useContentDoc,
} from "../ui";

// The same map image as the About page "Strategic factory locations" section (636 × 440).
const WORLD_MAP = "/assets/1-967/bea37.png";
const MAP_WIDTH = 636;
const MAP_HEIGHT = 440;
const MARKER_SIZE = 16;

function FactoryList() {
  const { data, commit } = useLiveContent("factories");
  if (!data) return <Spinner />;

  const setActive = (factory: Factory, active: boolean) =>
    commit(
      { items: data.items.map((item) => (item.id === factory.id ? { ...item, active } : item)) },
      active ? `${factory.name} is visible on the website.` : `${factory.name} is hidden from the website.`,
    );

  return (
    <>
      <PageHeader
        description="Each factory has its own page under Our factories, and also feeds the Home “A global footprint” cards, the Sustainability “Three factories” cards and the About page world map. A hidden factory disappears from all of them."
        title="Factories"
      />
      <DataTable
        columns={[
          { header: "Factory ID", cell: (factory) => <span className="text-neutral-500">#{factory.id}</span>, className: "w-24" },
          { header: "Image", cell: (factory) => <Thumb alt={factory.name} src={factory.image} />, className: "w-20" },
          {
            header: "Factory name",
            cell: (factory) => (
              <a className="font-medium hover:text-[#b07c47]" href={`/admin/factories/${factory.id}`}>
                {factory.name}
              </a>
            ),
          },
          { header: "Location", cell: (factory) => `${factory.location}${factory.country ? ` · ${factory.country}` : ""}` },
          {
            header: "Status",
            cell: (factory) => (
              <Toggle
                checked={factory.active}
                label={factory.active ? `Hide ${factory.name}` : `Show ${factory.name}`}
                onChange={(active) => setActive(factory, active)}
              />
            ),
          },
          {
            header: "Action",
            className: "w-16 text-right",
            cell: (factory) => (
              <ActionMenu
                actions={[
                  { label: "View on website", onSelect: () => window.open(`/factories/${factory.slug}`, "_blank", "noopener") },
                  {
                    label: "Edit",
                    onSelect: () => {
                      window.history.pushState({}, "", `/admin/factories/${factory.id}`);
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    },
                  },
                ]}
                label={`Actions for ${factory.name}`}
              />
            ),
          },
        ]}
        empty="No factories."
        rowKey={(factory) => factory.id}
        rows={data.items}
      />
    </>
  );
}

/** Editable list of plain text lines (key strengths, highlights). */
function TextList({
  label,
  items,
  onChange,
  addLabel,
  hint,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  addLabel: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      {items.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <div className="flex-1">
            <TextField label={`${label} ${index + 1}`} onChange={(value) => onChange(replaceItem(items, index, value))} value={item} />
          </div>
          <ListControls count={items.length} index={index} onMove={(from, to) => onChange(moveItem(items, from, to))} onRemove={() => onChange(items.filter((_, i) => i !== index))} />
        </div>
      ))}
      <Button className="self-start" onClick={() => onChange([...items, ""])} variant="ghost">
        + {addLabel}
      </Button>
      {hint && <p className="text-xs text-neutral-500">{hint}</p>}
    </div>
  );
}

/** Click on the map to place the pin; other factories are shown greyed out. */
function MapPicker({ factory, others, onChange }: { factory: Factory; others: Factory[]; onChange: (position: Factory["mapPosition"]) => void }) {
  function place(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Positions are the pin's top-left corner, as on the website.
    const x = ((event.clientX - rect.left) / rect.width) * 100 - (MARKER_SIZE / 2 / MAP_WIDTH) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100 - (MARKER_SIZE / 2 / MAP_HEIGHT) * 100;
    onChange({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
  }
  const pin = (item: Factory, current: boolean) => (
    <span
      className={`pointer-events-none absolute rounded-full border-[3px] border-white ${current ? "bg-[#dea36a] shadow-[0_0_0_5px_rgba(222,163,106,0.35)]" : "bg-neutral-400"}`}
      key={item.id}
      style={{
        left: `${item.mapPosition.x}%`,
        top: `${item.mapPosition.y}%`,
        width: `${(MARKER_SIZE / MAP_WIDTH) * 100}%`,
        aspectRatio: "1",
      }}
      title={item.name}
    />
  );
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-neutral-700">Position on the About page world map</span>
      <div
        aria-label="World map: click to place the factory"
        className="relative w-full max-w-[636px] cursor-crosshair select-none overflow-hidden rounded-[6px] border border-neutral-200 bg-white"
        onClick={place}
        role="button"
        style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}
        tabIndex={0}
      >
        <img alt="" className="absolute inset-0 size-full object-cover" draggable={false} src={WORLD_MAP} />
        {others.map((item) => pin(item, false))}
        {pin(factory, true)}
      </div>
      <p className="text-xs text-neutral-500">
        Click where the factory is. Orange = this factory, grey = the others. ({factory.mapPosition.x}%, {factory.mapPosition.y}%)
      </p>
    </div>
  );
}

function FactoryEditor({ id }: { id: number }) {
  const doc = useContentDoc("factories");
  const items = doc.draft?.items ?? [];
  const index = items.findIndex((item) => item.id === id);
  const factory = items[index];

  const update = (patch: Partial<Factory>) => {
    if (!doc.draft || !factory) return;
    doc.setDraft({ items: replaceItem(items, index, { ...factory, ...patch }) });
  };

  if (doc.draft && !factory) {
    return (
      <PageHeader
        description={
          <a className="text-[#b07c47] hover:underline" href="/admin/factories">
            ← Back to factories
          </a>
        }
        title="Factory not found"
      />
    );
  }

  const setStat = (i: number, patch: Partial<Factory["stats"][number]>) =>
    update({ stats: replaceItem(factory.stats, i, { ...factory.stats[i], ...patch }) });
  const setFeature = (i: number, patch: Partial<Factory["features"][number]>) =>
    update({ features: replaceItem(factory.features, i, { ...factory.features[i], ...patch }) });
  const setMix = (mix: FactoryMixShare[]) => update({ productMix: mix });
  const setGallery = (gallery: FactoryGalleryItem[]) => update({ gallery });
  const setDistances = (distances: FactoryDistance[]) => update({ distances });
  const mixTotal = factory ? factory.productMix.reduce((sum, share) => sum + (Number(share.percent) || 0), 0) : 0;

  return (
    <ContentEditorFrame
      actions={
        <>
          <a className="inline-flex items-center rounded-md px-3.5 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100" href="/admin/factories">
            ← All factories
          </a>
          {factory && (
            <a
              className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm font-medium hover:bg-neutral-50"
              href={`/factories/${factory.slug}`}
              rel="noreferrer"
              target="_blank"
            >
              View page ↗
            </a>
          )}
        </>
      }
      allowReset={false}
      description="Everything on this factory's page, plus its cards on the Home and Sustainability pages and its pin on the About map."
      doc={doc}
      title={factory ? factory.name : "Factory"}
    >
      {factory && (
        <>
          <Card description="Used on the factory tabs, the Home and Sustainability cards and the About map." title="Factory">
            <div className="flex items-center justify-between gap-4 rounded-[6px] bg-neutral-50 px-3 py-2">
              <span className="text-sm text-neutral-700">Show this factory on the website</span>
              <Toggle checked={factory.active} label="Show this factory on the website" onChange={(active) => update({ active })} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Factory name" onChange={(name) => update({ name })} value={factory.name} />
              <TextField hint="Short, e.g. “Dhaka, Bangladesh”." label="Location" onChange={(location) => update({ location })} value={factory.location} />
              <TextField hint="Groups the factories on the About map legend." label="Country" onChange={(country) => update({ country })} value={factory.country} />
              <TextField hint="e.g. LEED Zero" label="Certification" onChange={(certification) => update({ certification })} value={factory.certification} />
              <TextField hint="e.g. Woven, Knits (shown on the Home card)" label="Speciality" onChange={(specialty) => update({ specialty })} value={factory.specialty} />
              <TextField disabled hint="The page address can't be changed." label="Page address" value={`/factories/${factory.slug}`} />
            </div>
            <ImageField hint="Shown on the factory tabs and the Home and Sustainability cards." label="Factory photo" onChange={(image) => update({ image })} value={factory.image} />
            <MapPicker factory={factory} onChange={(mapPosition) => update({ mapPosition })} others={items.filter((item) => item.id !== factory.id && item.active)} />
          </Card>

          <Card title="Facility overview">
            <TextField label="Small heading" onChange={(eyebrow) => update({ overview: { ...factory.overview, eyebrow } })} value={factory.overview.eyebrow} />
            <TextField label="Heading" onChange={(heading) => update({ overview: { ...factory.overview, heading } })} value={factory.overview.heading} />
            <TextField
              hint="Press Enter for a line break."
              label="Description"
              multiline
              onChange={(description) => update({ overview: { ...factory.overview, description } })}
              rows={4}
              value={factory.overview.description}
            />
          </Card>

          <Card description="Six figures in two rows of three." title="Key figures">
            <div className="grid gap-4 lg:grid-cols-2">
              {factory.stats.map((stat, i) => (
                <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 p-3" key={i}>
                  <ImageField label={`Figure ${i + 1} icon`} onChange={(icon) => setStat(i, { icon })} value={stat.icon} />
                  <div className="grid grid-cols-2 gap-3">
                    <TextField label="Value" onChange={(value) => setStat(i, { value })} value={stat.value} />
                    <TextField label="Label" onChange={(label) => setStat(i, { label })} value={stat.label} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card description="The ring chart and its legend. Shares should add up to 100%." title="Product mix (percentages)">
            {factory.productMix.map((share, i) => (
              <div className="flex items-end gap-2" key={i}>
                <div className="flex-1">
                  <TextField label={`Category ${i + 1}`} onChange={(label) => setMix(replaceItem(factory.productMix, i, { ...share, label }))} value={share.label} />
                </div>
                <div className="w-28">
                  <TextField label="Percent" onChange={(value) => setMix(replaceItem(factory.productMix, i, { ...share, percent: Number(value) || 0 }))} type="number" value={String(share.percent)} />
                </div>
                <ListControls count={factory.productMix.length} index={i} onMove={(from, to) => setMix(moveItem(factory.productMix, from, to))} onRemove={() => setMix(factory.productMix.filter((_, j) => j !== i))} />
              </div>
            ))}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Button disabled={factory.productMix.length >= 5} onClick={() => setMix([...factory.productMix, { label: "", percent: 0 }])} variant="ghost">
                + Add category
              </Button>
              <span className={`text-sm ${Math.abs(mixTotal - 100) < 0.05 ? "text-neutral-500" : "text-red-600"}`}>Total: {Math.round(mixTotal * 10) / 10}%</span>
            </div>
          </Card>

          <Card title="Key strengths">
            <TextList addLabel="Add strength" hint="Up to 6 fit the panel." items={factory.keyStrengths} label="Strength" onChange={(keyStrengths) => update({ keyStrengths })} />
          </Card>

          <Card description="“Inside our factory”: seven show at a time; with more, the arrows scroll." title="Photo gallery">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {factory.gallery.map((item, i) => (
                <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 p-3" key={i}>
                  <ImageField compact label={`Photo ${i + 1}`} onChange={(image) => setGallery(replaceItem(factory.gallery, i, { ...item, image }))} value={item.image} />
                  <TextField label="Caption" onChange={(caption) => setGallery(replaceItem(factory.gallery, i, { ...item, caption }))} value={item.caption} />
                  <ListControls count={factory.gallery.length} index={i} onMove={(from, to) => setGallery(moveItem(factory.gallery, from, to))} onRemove={() => setGallery(factory.gallery.filter((_, j) => j !== i))} />
                </div>
              ))}
            </div>
            <Button className="self-start" onClick={() => setGallery([...factory.gallery, { image: "", caption: "" }])} variant="ghost">
              + Add photo
            </Button>
          </Card>

          <Card description="The “Product mix” icon grid next to the factory address: six items in two rows." title="Product mix (capabilities)">
            <div className="grid gap-4 lg:grid-cols-2">
              {factory.features.map((feature, i) => (
                <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 p-3" key={i}>
                  <ImageField label={`Item ${i + 1} icon`} onChange={(icon) => setFeature(i, { icon })} value={feature.icon} />
                  <TextField hint="Press Enter for a line break." label="Label" multiline onChange={(label) => setFeature(i, { label })} rows={2} value={feature.label} />
                </div>
              ))}
            </div>
          </Card>

          <Card title="Address & map">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Company name" onChange={(legalName) => update({ legalName })} value={factory.legalName} />
              <TextField label="Area" onChange={(region) => update({ region })} value={factory.region} />
            </div>
            <TextField hint="Press Enter for a line break." label="Address" multiline onChange={(address) => update({ address })} rows={4} value={factory.address} />
            <TextField
              hint="What the embedded Google map searches for. Leave empty to use the address."
              label="Map search"
              onChange={(mapQuery) => update({ mapQuery })}
              value={factory.mapQuery}
            />
          </Card>

          <Card title="Distance measure">
            {factory.distances.map((distance, i) => (
              <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 p-3 sm:flex-row sm:items-start" key={i}>
                <div className="sm:w-80">
                  <ImageField label="Icon" onChange={(icon) => setDistances(replaceItem(factory.distances, i, { ...distance, icon }))} value={distance.icon} />
                </div>
                <div className="flex-1">
                  <TextField label="Text" onChange={(text) => setDistances(replaceItem(factory.distances, i, { ...distance, text }))} placeholder="Airport: ~ 30 km" value={distance.text} />
                </div>
                <ListControls count={factory.distances.length} index={i} onMove={(from, to) => setDistances(moveItem(factory.distances, from, to))} onRemove={() => setDistances(factory.distances.filter((_, j) => j !== i))} />
              </div>
            ))}
            <Button
              className="self-start"
              onClick={() => setDistances([...factory.distances, { icon: factory.distances[0]?.icon ?? "", text: "" }])}
              variant="ghost"
            >
              + Add distance
            </Button>
          </Card>

          <Card description="Bullet points on this factory's card on the Sustainability page." title="Sustainability highlights">
            <TextList addLabel="Add highlight" items={factory.sustainabilityHighlights} label="Highlight" onChange={(sustainabilityHighlights) => update({ sustainabilityHighlights })} />
          </Card>

          <Card description="Saved with the rest of the page when you press Save changes." title="Certifications & standards">
            <LogoListEditor logos={factory.certifications} onChange={(certifications) => update({ certifications })} />
          </Card>
        </>
      )}
    </ContentEditorFrame>
  );
}

export default function FactoriesAdmin({ pathname }: { pathname: string }) {
  const id = Number(pathname.split("/")[3]);
  return Number.isInteger(id) && id > 0 ? <FactoryEditor id={id} key={id} /> : <FactoryList />;
}

