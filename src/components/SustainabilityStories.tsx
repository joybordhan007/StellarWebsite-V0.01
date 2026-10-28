import { useEffect, useRef } from "react";
import type { ChartRow, StoryChart, SustainabilityStory } from "../content/types";

// Each report section fills one 1920×864 frame of the design.
const SECTION_HEIGHT = 864;
// A chart card on its own is 613px tall in the design.
const SINGLE_COLUMNS_HEIGHT = 423;
const SINGLE_BARS_HEIGHT = 506;

function rowValue(row: ChartRow, seriesId: number) {
  return Number(row.values[String(seriesId)]) || 0;
}

function rowTotal(chart: StoryChart, row: ChartRow) {
  return chart.series.reduce((sum, series) => sum + rowValue(row, series.id), 0);
}

/** Axis end and step: the saved ones, or a round step that fits the largest value. */
export function chartAxis(chart: StoryChart) {
  if (chart.axisMax > 0 && chart.axisStep > 0) return { max: chart.axisMax, step: chart.axisStep };
  const largest = Math.max(1, ...chart.rows.map((row) => (chart.type === "columns" ? rowTotal(chart, row) : rowValue(row, chart.series[0]?.id ?? 0))));
  const rough = largest / (chart.type === "columns" ? 6 : 10);
  const magnitude = 10 ** Math.floor(Math.log10(rough));
  const step = [1, 2, 2.5, 5, 10].map((n) => n * magnitude).find((n) => n >= rough) ?? rough;
  return { max: Math.ceil(largest / step) * step, step };
}

function ticks(max: number, step: number) {
  const list: number[] = [];
  for (let value = 0; value <= max + step / 1000; value += step) list.push(Math.round(value * 1000) / 1000);
  return list;
}

function ChartHeader({ chart }: { chart: StoryChart }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          <div className="content-stretch flex items-center p-[4px] relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              {chart.icon && <img alt="" className="absolute block inset-0 max-w-none size-full" src={chart.icon} />}
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-0 not-italic relative text-[#1d1d1d] text-[18px] uppercase">
            <p className="leading-[1.2]">{chart.title}</p>
          </div>
        </div>
        {chart.subtitle && (
          <p className="font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)]">{chart.subtitle}</p>
        )}
      </div>
      {chart.type === "columns" && chart.series.length > 1 && (
        <div className="content-stretch flex flex-wrap gap-x-[16px] items-start relative shrink-0">
          {chart.series.map((series) => (
            <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0" key={series.id}>
              <div className="border border-solid border-white relative shrink-0 size-[16px]" style={{ background: series.color }} />
              <p className="font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">
                {series.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ColumnChart({ chart, height, boxed }: { chart: StoryChart; height: number; boxed: boolean }) {
  const { max, step } = chartAxis(chart);
  const axis = ticks(max, step);
  return (
    <div className={`grid grid-cols-[auto_minmax(0,1fr)] gap-x-[16px] gap-y-[16px] relative shrink-0 w-full ${boxed ? "bg-white p-[8px] rounded-[6px]" : ""}`}>
      <div
        className="flex flex-col font-['Inter:Regular'] font-normal items-end justify-between leading-[1.2] px-[4px] text-[#4a4a4a] text-[16px] whitespace-nowrap"
        style={{ height }}
      >
        {[...axis].reverse().map((value) => (
          <p key={value}>{value.toLocaleString("en-US")}</p>
        ))}
      </div>
      <div className="relative" style={{ height }}>
        <div className="absolute flex flex-col inset-[10px_0_9px_0] justify-between">
          {axis.map((value, index) => (
            <div
              className={`h-0 w-full border-t ${
                index === axis.length - 1 ? "border-solid border-[rgba(0,0,0,0.3)]" : "border-dashed border-[rgba(0,0,0,0.12)]"
              }`}
              key={value}
            />
          ))}
        </div>
        <div className="absolute flex inset-[10px_0_9px_0] items-end">
          {chart.rows.map((row, index) => (
            <div
              className={`flex flex-[1_0_0] h-full items-end justify-center min-w-px ${index ? "border-l border-dashed border-[rgba(0,0,0,0.12)]" : ""}`}
              key={row.id}
            >
              <div className="sustainability-data-chart-bar flex flex-col-reverse h-full w-[72%]">
                {chart.series.map((series) => (
                  <div
                    className="opacity-80 shrink-0 w-full"
                    key={series.id}
                    style={{
                      background: series.color,
                      height: `${(rowValue(row, series.id) / max) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div />
      <div className="flex font-['Inter:Regular'] font-normal leading-[1.2] text-[#4a4a4a] text-[16px]">
        {chart.rows.map((row) => (
          <p className="flex-[1_0_0] min-w-px text-center whitespace-pre-line" key={row.id}>
            {row.label}
          </p>
        ))}
      </div>
    </div>
  );
}

function BarChart({ chart, height, boxed }: { chart: StoryChart; height: number; boxed: boolean }) {
  const { max, step } = chartAxis(chart);
  const axis = ticks(max, step);
  const series = chart.series[0];
  return (
    <div className={`flex flex-col gap-[8px] p-[8px] relative rounded-[6px] shrink-0 w-full ${boxed ? "bg-white" : ""}`} style={{ height }}>
      <div className="flex flex-[1_0_0] gap-[8px] min-h-px px-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular'] font-normal items-end leading-[1.2] pt-[27px] shrink-0 text-[#4a4a4a] text-[16px]">
          {chart.rows.map((row) => (
            <div className="flex flex-[1_0_0] items-center min-h-px text-left whitespace-pre-line" key={row.id}>
              {row.label}
            </div>
          ))}
        </div>
        <div className="flex flex-[1_0_0] flex-col min-w-px relative">
          <div className="flex font-['Inter:Regular'] font-normal h-[27px] leading-[normal] relative shrink-0 text-[#4a4a4a] text-[16px]">
            {axis.map((value, index) => (
              <p
                data-mobile={axis.length > 6 && index % 2 ? "hide" : undefined}
                className="chart-tick -translate-x-1/2 absolute whitespace-nowrap"
                key={value}
                style={{ left: `${(value / max) * 100}%` }}
              >
                {value}
              </p>
            ))}
          </div>
          <div className="flex flex-[1_0_0] flex-col min-h-px relative">
            {axis.map((value, index) => (
              <div
                className={`absolute bottom-0 top-0 w-0 border-l ${
                  index === 0 ? "border-solid border-[rgba(0,0,0,0.3)]" : "border-dashed border-[rgba(0,0,0,0.12)]"
                }`}
                key={value}
                style={{ left: `${(value / max) * 100}%` }}
              />
            ))}
            {chart.rows.map((row) => {
              const value = series ? rowValue(row, series.id) : 0;
              return (
                <div className="flex flex-[1_0_0] gap-[16px] items-center min-h-px relative border-b border-dashed border-[rgba(0,0,0,0.06)]" key={row.id}>
                  <div
                    className="sustainability-data-chart-bar sustainability-data-chart-bar--x h-[calc(100%-16px)] opacity-80 shrink-0"
                    style={{
                      background: series?.color,
                      width: `${Math.max(0.2, (value / max) * 100)}%`,
                    }}
                  />
                  <p className="font-['Inter:Regular'] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Bars grow in the first time the chart scrolls into view. */
function useChartReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chart = ref.current;
    if (!chart) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chart.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        chart.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(chart);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ChartBlock({ chart, single }: { chart: StoryChart; single: boolean }) {
  const revealRef = useChartReveal();
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <ChartHeader chart={chart} />
      {/* Charts keep their own rows on phones. */}
      <div className="sustainability-data-chart w-full" data-mobile="keep" ref={revealRef}>
        {chart.type === "bars" ? (
          <BarChart boxed={!single} chart={chart} height={single ? SINGLE_BARS_HEIGHT : Math.max(200, chart.rows.length * 36 + 43)} />
        ) : (
          <ColumnChart boxed={!single} chart={chart} height={single ? SINGLE_COLUMNS_HEIGHT : 140} />
        )}
      </div>
    </div>
  );
}

function Story({ story }: { story: SustainabilityStory }) {
  return (
    <>
      <div className="absolute inset-0">
        {story.background && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={story.background} />}
      </div>
      <div
        className="story-content -translate-y-1/2 absolute content-stretch flex gap-[24px] items-center left-[180px] top-1/2 w-[1560px]"
      >
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative self-start">
          <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  {story.icon && <img alt="" className="absolute block inset-0 max-w-none size-full" src={story.icon} />}
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-0 not-italic relative text-[#1d1d1d] text-[18px] uppercase">
                <p className="leading-[1.2]">{story.title}</p>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full">
              <p className="leading-[1.3] whitespace-pre-line">{story.text}</p>
            </div>
          </div>
          {story.stats.length > 0 && (
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
              {story.stats.map((stat) => (
                <div className="content-stretch flex gap-[6px] items-start relative shrink-0" key={stat.id}>
                  <div className="content-stretch flex items-center p-[4px] relative shrink-0">
                    <div className="relative shrink-0 size-[20px]">
                      {stat.icon && <img alt="" className="absolute block inset-0 max-w-none size-full" src={stat.icon} />}
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] min-w-0 not-italic relative">
                    <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase">
                      <p className="leading-[1.2]">{stat.value}</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]">
                      <p className="leading-[1.2]">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {story.charts.length > 0 && (
          <div className={`bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[24px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[878px] ${story.charts.length === 1 ? "min-h-[613px]" : ""}`}>
            {story.charts.map((chart) => (
              <ChartBlock chart={chart} key={chart.id} single={story.charts.length === 1} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

/** The full-screen report sections of the Sustainability page, one 1920×864 frame each. */
export default function SustainabilityStories({ stories, className }: { stories: SustainabilityStory[]; className: string }) {
  return (
    <div className={`sustainability-stories ${className}`} style={{ height: stories.length * SECTION_HEIGHT }}>
      {stories.map((story) => (
        <section className="h-[864px] relative w-full" key={story.id}>
          <div className="absolute inset-0 overflow-hidden">
            <Story story={story} />
          </div>
        </section>
      ))}
    </div>
  );
}
