import { FormEvent, ReactNode, useState } from "react";
import { chartAxis } from "../../components/SustainabilityStories";
import type { ChartRow, ChartSeries, StoryChart, StoryStat, SustainabilityContent, SustainabilityStory } from "../../content/types";
import { ActionMenu, DataTable, FormModal, nextId, SelectField, useConfirm } from "../components";
import { Button, Card, ImageField, moveItem, PageHeader, replaceItem, TextField } from "../ui";

export const REPORTS_BASE = "/admin/sustainability/reports";
// The left column and the chart card have room for this much.
const MAX_STATS = 5;
const MAX_CHARTS = 2;
const MAX_SERIES = 4;
const MAX_ROWS = { columns: 8, bars: 8 };
const PALETTE = ["#706ee7", "#55c4ae", "#ff928a", "#f2b84b"];

type Commit = (next: SustainabilityContent, message: string) => Promise<boolean>;

function open(href: string) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function RowImage({ src, icon = false }: { src: string; icon?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[4px] ${icon ? "size-7 bg-white p-0.5" : "h-8 w-12 bg-neutral-100"}`}>
      {src && <img alt="" className={`size-full ${icon ? "object-contain" : "object-cover"}`} src={src} />}
    </div>
  );
}

const formatNumber = (value: number) => value.toLocaleString("en-US", { maximumFractionDigits: 3 });

export function ReportsList({ data, tabs }: { data: SustainabilityContent; tabs: ReactNode }) {
  return (
    <>
      <PageHeader
        description={
          <>
            {tabs}
            <span className="mt-3 block">
              The full-screen report sections of the Sustainability page (“Powered by the sun” …). Open a section to edit its text, highlights and chart data. Changes are saved as soon as you make them.
            </span>
          </>
        }
        title="Sustainability"
      />
      <DataTable
        columns={[
          { header: "Background", className: "w-24", cell: (story) => <RowImage src={story.background} /> },
          {
            header: "Section",
            cell: (story) => (
              <a className="font-medium whitespace-nowrap text-neutral-900 hover:underline" href={`${REPORTS_BASE}/${story.id}`}>
                {story.title}
              </a>
            ),
          },
          { header: "Highlights", className: "w-28", cell: (story) => story.stats.length },
          { header: "Charts", cell: (story) => <span className="line-clamp-1 text-neutral-600">{story.charts.map((chart) => chart.title).join(" · ") || "—"}</span> },
          {
            header: "Actions",
            className: "w-16 text-right",
            cell: (story) => <ActionMenu actions={[{ label: "Edit", onSelect: () => open(`${REPORTS_BASE}/${story.id}`) }]} label={`Actions for ${story.title}`} />,
          },
        ]}
        dense
        empty="No report sections."
        rowKey={(story) => story.id}
        rows={data.stories}
      />
    </>
  );
}

function StatForm({ stat, stats, onClose, onSave }: { stat: StoryStat | null; stats: StoryStat[]; onClose: () => void; onSave: (stat: StoryStat) => Promise<boolean> }) {
  const [draft, setDraft] = useState<StoryStat>(stat ?? { id: nextId(stats), icon: "", value: "", label: "" });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!draft.value.trim()) return setError("Enter the figure.");
    setSaving(true);
    const ok = await onSave({ ...draft, value: draft.value.trim(), label: draft.label.trim() });
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <FormModal error={error} id="stat-form" onClose={onClose} onSubmit={submit} saving={saving} submitLabel={stat ? "Save changes" : "Add highlight"} title={stat ? "Edit highlight" : "Add highlight"}>
      <TextField label="Figure" onChange={(value) => setDraft({ ...draft, value })} placeholder="2.76 GWh" required value={draft.value} />
      <TextField label="Text" onChange={(label) => setDraft({ ...draft, label })} value={draft.label} />
      <ImageField hint="20×20 icon, SVG or transparent PNG." label="Icon" onChange={(icon) => setDraft({ ...draft, icon })} value={draft.icon} />
    </FormModal>
  );
}

function ChartForm({ chart, charts, onClose, onSave }: { chart: StoryChart | null; charts: StoryChart[]; onClose: () => void; onSave: (chart: StoryChart) => Promise<boolean> }) {
  const [draft, setDraft] = useState<StoryChart>(
    chart ?? { id: nextId(charts), type: "columns", icon: "", title: "", subtitle: "", series: [{ id: 1, name: "", color: PALETTE[0] }], rows: [], axisMax: 0, axisStep: 0 },
  );
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const set = (patch: Partial<StoryChart>) => setDraft({ ...draft, ...patch });

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!draft.title.trim()) return setError("Enter a title.");
    if ((draft.axisMax > 0) !== (draft.axisStep > 0)) return setError("Fill in both the axis end and the step, or leave both at 0.");
    setSaving(true);
    const ok = await onSave({ ...draft, title: draft.title.trim(), subtitle: draft.subtitle.trim() });
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <FormModal error={error} id="chart-form" onClose={onClose} onSubmit={submit} saving={saving} submitLabel={chart ? "Save changes" : "Add chart"} title={chart ? "Edit chart" : "Add chart"}>
      <TextField label="Title" onChange={(title) => set({ title })} required value={draft.title} />
      <TextField label="Subtitle" onChange={(subtitle) => set({ subtitle })} placeholder="MWh per year" value={draft.subtitle} />
      <SelectField label="Chart type" onChange={(event) => set({ type: event.target.value as StoryChart["type"] })} value={draft.type}>
        <option value="columns">Columns (e.g. per year, can be stacked)</option>
        <option value="bars">Horizontal bars with values</option>
      </SelectField>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField hint="0 = automatic" label="Axis end" onChange={(value) => set({ axisMax: Math.max(0, Number(value) || 0) })} type="number" value={String(draft.axisMax)} />
        <TextField hint="0 = automatic" label="Axis step" onChange={(value) => set({ axisStep: Math.max(0, Number(value) || 0) })} type="number" value={String(draft.axisStep)} />
      </div>
      <ImageField hint="24×24 icon next to the title." label="Icon" onChange={(icon) => set({ icon })} value={draft.icon} />
    </FormModal>
  );
}

function SeriesForm({ series, list, onClose, onSave }: { series: ChartSeries | null; list: ChartSeries[]; onClose: () => void; onSave: (series: ChartSeries) => Promise<boolean> }) {
  const [draft, setDraft] = useState<ChartSeries>(series ?? { id: nextId(list), name: "", color: PALETTE[list.length % PALETTE.length] });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (list.length > 0 && !draft.name.trim() && (series ? list.length > 1 : true)) return setError("Enter a name for the legend.");
    setSaving(true);
    const ok = await onSave({ ...draft, name: draft.name.trim() });
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <FormModal error={error} id="series-form" onClose={onClose} onSubmit={submit} saving={saving} submitLabel={series ? "Save changes" : "Add series"} title={series ? "Edit series" : "Add series"}>
      <TextField hint="Shown in the legend when a chart has more than one series." label="Name" onChange={(name) => setDraft({ ...draft, name })} value={draft.name} />
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-neutral-700">Colour</span>
        <div className="flex items-center gap-3">
          <input aria-label="Colour" className="h-10 w-14 cursor-pointer rounded-md border border-neutral-300 bg-white p-1" onChange={(event) => setDraft({ ...draft, color: event.target.value })} type="color" value={draft.color} />
          <div className="flex gap-2">
            {PALETTE.map((color) => (
              <button aria-label={`Use ${color}`} className="size-7 rounded-md border border-neutral-300" key={color} onClick={() => setDraft({ ...draft, color })} style={{ background: color }} type="button" />
            ))}
          </div>
        </div>
      </div>
    </FormModal>
  );
}

function RowForm({ chart, row, onClose, onSave }: { chart: StoryChart; row: ChartRow | null; onClose: () => void; onSave: (row: ChartRow) => Promise<boolean> }) {
  const [label, setLabel] = useState(row?.label ?? "");
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(chart.series.map((series) => [String(series.id), row ? String(row.values[String(series.id)] ?? 0) : ""])),
  );
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!label.trim()) return setError("Enter a label.");
    const parsed = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, Number(value)]));
    if (Object.values(parsed).some((value) => !Number.isFinite(value) || value < 0)) return setError("Values must be numbers of 0 or more.");
    setSaving(true);
    const ok = await onSave({ id: row?.id ?? nextId(chart.rows), label: label.trim(), values: parsed });
    setSaving(false);
    if (ok) onClose();
  }

  return (
    <FormModal error={error} id="row-form" onClose={onClose} onSubmit={submit} saving={saving} submitLabel={row ? "Save changes" : "Add row"} title={row ? "Edit data" : "Add data"}>
      <TextField
        hint={chart.type === "columns" ? "Shown under the column, e.g. a year." : "Shown left of the bar. Press Enter for a second line."}
        label="Label"
        multiline={chart.type === "bars"}
        onChange={setLabel}
        required
        rows={2}
        value={label}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {chart.series.map((series) => (
          <TextField
            key={series.id}
            label={chart.series.length > 1 ? series.name || "Value" : "Value"}
            onChange={(value) => setValues({ ...values, [String(series.id)]: value })}
            type="number"
            value={values[String(series.id)] ?? ""}
          />
        ))}
      </div>
    </FormModal>
  );
}

function ChartCard({ chart, index, count, setChart, moveChart, removeChart }: {
  chart: StoryChart;
  index: number;
  count: number;
  setChart: (chart: StoryChart, message: string) => Promise<boolean>;
  moveChart: (to: number) => void;
  removeChart: () => void;
}) {
  const [editing, setEditing] = useState<"chart" | { series: ChartSeries | null } | { row: ChartRow | null } | null>(null);
  const { confirm, dialog } = useConfirm();
  const { max } = chartAxis(chart);
  const rowsFull = chart.rows.length >= MAX_ROWS[chart.type];

  async function removeSeries(series: ChartSeries) {
    const ok = await confirm({ title: "Delete series?", message: `${series.name || "This series"} and its values will be removed from the chart.` });
    if (!ok) return;
    const key = String(series.id);
    const rows = chart.rows.map((row) => ({ ...row, values: Object.fromEntries(Object.entries(row.values).filter(([id]) => id !== key)) }));
    await setChart({ ...chart, series: chart.series.filter((item) => item.id !== series.id), rows }, "Series deleted.");
  }

  async function removeRow(row: ChartRow) {
    const ok = await confirm({ title: "Delete data?", message: `${row.label.replace(/\n/g, " ")} will be removed from the chart.` });
    if (ok) await setChart({ ...chart, rows: chart.rows.filter((item) => item.id !== row.id) }, "Data deleted.");
  }

  return (
    <Card
      actions={
        <>
          <Button onClick={() => setEditing("chart")}>Edit chart</Button>
          <ActionMenu
            actions={[
              { label: "Move up", disabled: index === 0, onSelect: () => moveChart(index - 1) },
              { label: "Move down", disabled: index === count - 1, onSelect: () => moveChart(index + 1) },
              { label: "Delete chart", danger: true, onSelect: removeChart },
            ]}
            label={`Actions for chart ${chart.title}`}
          />
        </>
      }
      description={`${chart.type === "columns" ? "Columns" : "Horizontal bars"} · ${chart.subtitle || "no subtitle"} · axis 0–${formatNumber(max)}${chart.axisMax ? "" : " (automatic)"}`}
      title={`Chart: ${chart.title}`}
    >
      {chart.type === "columns" && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-neutral-800">Series (legend)</h3>
            <Button disabled={chart.series.length >= MAX_SERIES} onClick={() => setEditing({ series: null })} variant="ghost">
              + Add series
            </Button>
          </div>
          <DataTable
            columns={[
              { header: "Colour", className: "w-20", cell: (series) => <span className="block size-5 rounded-[4px] border border-neutral-200" style={{ background: series.color }} /> },
              { header: "Name", cell: (series) => series.name || <span className="text-neutral-400">—</span> },
              {
                header: "Actions",
                className: "w-16 text-right",
                cell: (series) => {
                  const position = chart.series.indexOf(series);
                  return (
                    <ActionMenu
                      actions={[
                        { label: "Edit", onSelect: () => setEditing({ series }) },
                        { label: "Move up", disabled: position === 0, onSelect: () => setChart({ ...chart, series: moveItem(chart.series, position, position - 1) }, "Order updated.") },
                        { label: "Move down", disabled: position === chart.series.length - 1, onSelect: () => setChart({ ...chart, series: moveItem(chart.series, position, position + 1) }, "Order updated.") },
                        { label: "Delete", danger: true, disabled: chart.series.length === 1, onSelect: () => removeSeries(series) },
                      ]}
                      label={`Actions for ${series.name || "series"}`}
                    />
                  );
                },
              },
            ]}
            dense
            empty="No series."
            rowKey={(series) => series.id}
            rows={chart.series}
          />
          <p className="text-xs text-neutral-500">The first series is drawn at the bottom of each column.</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-neutral-800">
            Data ({chart.rows.length}/{MAX_ROWS[chart.type]})
          </h3>
          <Button disabled={rowsFull} onClick={() => setEditing({ row: null })} variant="primary">
            + Add data
          </Button>
        </div>
        <DataTable
          columns={[
            { header: chart.type === "columns" ? "Label (e.g. year)" : "Label", cell: (row) => <span className="font-medium whitespace-nowrap">{row.label.replace(/\n/g, " ")}</span> },
            ...chart.series.map((series) => ({
              header: chart.series.length > 1 ? series.name || "Value" : "Value",
              className: "text-right",
              cell: (row: ChartRow) => formatNumber(Number(row.values[String(series.id)]) || 0),
            })),
            {
              header: "Actions",
              className: "w-16 text-right",
              cell: (row: ChartRow) => {
                const position = chart.rows.indexOf(row);
                return (
                  <ActionMenu
                    actions={[
                      { label: "Edit", onSelect: () => setEditing({ row }) },
                      { label: "Move up", disabled: position === 0, onSelect: () => setChart({ ...chart, rows: moveItem(chart.rows, position, position - 1) }, "Order updated.") },
                      { label: "Move down", disabled: position === chart.rows.length - 1, onSelect: () => setChart({ ...chart, rows: moveItem(chart.rows, position, position + 1) }, "Order updated.") },
                      { label: "Delete", danger: true, onSelect: () => removeRow(row) },
                    ]}
                    label={`Actions for ${row.label}`}
                  />
                );
              },
            },
          ]}
          dense
          empty="No data yet — the chart is empty."
          rowKey={(row) => row.id}
          rows={chart.rows}
        />
      </div>

      {editing === "chart" && <ChartForm chart={chart} charts={[]} onClose={() => setEditing(null)} onSave={(next) => setChart(next, "Chart updated.")} />}
      {editing && editing !== "chart" && "series" in editing && (
        <SeriesForm
          list={chart.series}
          onClose={() => setEditing(null)}
          onSave={(series) =>
            editing.series
              ? setChart({ ...chart, series: chart.series.map((item) => (item.id === series.id ? series : item)) }, "Series updated.")
              : setChart({ ...chart, series: [...chart.series, series] }, "Series added.")
          }
          series={editing.series}
        />
      )}
      {editing && editing !== "chart" && "row" in editing && (
        <RowForm
          chart={chart}
          onClose={() => setEditing(null)}
          onSave={(row) =>
            editing.row ? setChart({ ...chart, rows: chart.rows.map((item) => (item.id === row.id ? row : item)) }, "Data updated.") : setChart({ ...chart, rows: [...chart.rows, row] }, "Data added.")
          }
          row={editing.row}
        />
      )}
      {dialog}
    </Card>
  );
}

export function ReportEditor({ data, commit, story }: { data: SustainabilityContent; commit: Commit; story: SustainabilityStory }) {
  const [background, setBackground] = useState(story.background);
  const [icon, setIcon] = useState(story.icon);
  const [title, setTitle] = useState(story.title);
  const [text, setText] = useState(story.text);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingStat, setEditingStat] = useState<StoryStat | "new" | null>(null);
  const [addingChart, setAddingChart] = useState(false);
  const { confirm, dialog } = useConfirm();

  const save = (next: SustainabilityStory, message: string) => commit({ ...data, stories: data.stories.map((item) => (item.id === story.id ? next : item)) }, message);
  const setStats = (stats: StoryStat[], message: string) => save({ ...story, stats }, message);
  const setCharts = (charts: StoryChart[], message: string) => save({ ...story, charts }, message);
  const changed = background !== story.background || icon !== story.icon || title !== story.title || text !== story.text;

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!title.trim()) return setError("Enter a title.");
    setError("");
    setSaving(true);
    await save({ ...story, background, icon, title: title.trim(), text: text.trim() }, "Section updated.");
    setSaving(false);
  }

  async function removeStat(stat: StoryStat) {
    const ok = await confirm({ title: "Delete highlight?", message: `${stat.value} will be removed from the website.` });
    if (ok) await setStats(story.stats.filter((item) => item.id !== stat.id), "Highlight deleted.");
  }

  async function removeChart(chart: StoryChart) {
    const ok = await confirm({ title: "Delete chart?", message: `${chart.title} and all its data will be removed from the website.` });
    if (ok) await setCharts(story.charts.filter((item) => item.id !== chart.id), "Chart deleted.");
  }

  return (
    <>
      <PageHeader
        actions={
          <Button disabled={story.charts.length >= MAX_CHARTS} onClick={() => setAddingChart(true)}>
            + Add chart
          </Button>
        }
        description={
          <>
            <a className="text-neutral-600 hover:text-neutral-900 hover:underline" href={REPORTS_BASE}>
              ← All report sections
            </a>
            <span className="mt-1 block">A report section of the Sustainability page. Up to {MAX_CHARTS} charts fit on the right.</span>
          </>
        }
        title={story.title}
      />
      <div className="flex flex-col gap-4">
        <Card title="Section">
          <form className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)]" onSubmit={submit}>
            <div className="flex flex-col gap-4">
              <ImageField hint="Full-width photo behind the section (1920×864)." label="Background" onChange={setBackground} value={background} />
              <ImageField hint="24×24 icon next to the title." label="Icon" onChange={setIcon} value={icon} />
            </div>
            <div className="flex flex-col gap-4">
              <TextField label="Title" onChange={setTitle} required value={title} />
              <TextField label="Text" multiline onChange={setText} rows={6} value={text} />
              {error && (
                <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}
              <div className="flex gap-2">
                <Button disabled={saving || !changed} type="submit" variant="primary">
                  {saving ? "Saving…" : "Save changes"}
                </Button>
                {changed && (
                  <Button
                    onClick={() => {
                      setBackground(story.background);
                      setIcon(story.icon);
                      setTitle(story.title);
                      setText(story.text);
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
            <Button disabled={story.stats.length >= MAX_STATS} onClick={() => setEditingStat("new")} variant="primary">
              + Add highlight
            </Button>
          }
          description="Figures under the text, in this order."
          title={`Highlights (${story.stats.length}/${MAX_STATS})`}
        >
          <DataTable
            columns={[
              { header: "Icon", className: "w-16", cell: (stat) => <RowImage icon src={stat.icon} /> },
              { header: "Figure", className: "w-32", cell: (stat) => <span className="font-medium whitespace-nowrap">{stat.value}</span> },
              { header: "Text", cell: (stat) => <span className="line-clamp-1 text-neutral-600">{stat.label}</span> },
              {
                header: "Actions",
                className: "w-16 text-right",
                cell: (stat) => {
                  const position = story.stats.indexOf(stat);
                  return (
                    <ActionMenu
                      actions={[
                        { label: "Edit", onSelect: () => setEditingStat(stat) },
                        { label: "Move up", disabled: position === 0, onSelect: () => setStats(moveItem(story.stats, position, position - 1), "Order updated.") },
                        { label: "Move down", disabled: position === story.stats.length - 1, onSelect: () => setStats(moveItem(story.stats, position, position + 1), "Order updated.") },
                        { label: "Delete", danger: true, onSelect: () => removeStat(stat) },
                      ]}
                      label={`Actions for ${stat.value}`}
                    />
                  );
                },
              },
            ]}
            dense
            empty="No highlights — the box is hidden."
            rowKey={(stat) => stat.id}
            rows={story.stats}
          />
        </Card>

        {story.charts.map((chart, index) => (
          <ChartCard
            chart={chart}
            count={story.charts.length}
            index={index}
            key={chart.id}
            moveChart={(to) => setCharts(moveItem(story.charts, index, to), "Order updated.")}
            removeChart={() => removeChart(chart)}
            setChart={(next, message) => setCharts(replaceItem(story.charts, index, next), message)}
          />
        ))}
      </div>
      {editingStat && (
        <StatForm
          onClose={() => setEditingStat(null)}
          onSave={(stat) =>
            editingStat === "new" ? setStats([...story.stats, stat], "Highlight added.") : setStats(story.stats.map((item) => (item.id === stat.id ? stat : item)), "Highlight updated.")
          }
          stat={editingStat === "new" ? null : editingStat}
          stats={story.stats}
        />
      )}
      {addingChart && <ChartForm chart={null} charts={story.charts} onClose={() => setAddingChart(false)} onSave={(chart) => setCharts([...story.charts, chart], "Chart added.")} />}
      {dialog}
    </>
  );
}
