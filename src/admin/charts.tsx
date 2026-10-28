import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

// Validated categorical slots (light surface): views, visitors, messages.
export const SERIES_COLORS = { views: "#2a78d6", visitors: "#eb6834", messages: "#6250d6" } as const;
const GRID = "#ebeae6";
const AXIS_TEXT = "#6b6a66";
const HEIGHT = 220;
const PADDING = { top: 12, right: 12, bottom: 28, left: 40 };

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(600);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.max(240, entry.contentRect.width)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return [ref, width] as const;
}

/** Clean, rounded axis maximum and ticks (0 / 5 / 10 …, compact from 1,000). */
function niceTicks(max: number) {
  if (max <= 0) return [0, 1];
  const rough = max / 4;
  const power = 10 ** Math.floor(Math.log10(rough));
  const step = [1, 2, 5, 10].map((m) => m * power).find((s) => s >= rough) ?? power * 10;
  const top = Math.ceil(max / step) * step;
  return Array.from({ length: Math.round(top / step) + 1 }, (_, i) => i * step);
}

export function compact(value: number) {
  return value >= 1000 ? `${Math.round(value / 100) / 10}K` : String(value);
}

/** First and last x labels hug the plot edges so they're never clipped. */
function edgeAnchor(index: number, count: number) {
  if (index === 0) return "start";
  return index === count - 1 ? "end" : "middle";
}

function shortDay(day: string) {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString(undefined, { month: "short", day: "numeric", timeZone: "UTC" });
}

type Point = { day: string } & Record<string, number | string>;

function Tooltip({ x, width, children }: { x: number; width: number; children: ReactNode }) {
  const left = Math.min(Math.max(x + 12, 0), width - 170);
  return (
    <div className="pointer-events-none absolute top-2 z-10 w-40 rounded-[6px] border border-neutral-200 bg-white px-3 py-2 text-xs shadow-lg" style={{ left }}>
      {children}
    </div>
  );
}

/** Daily line chart (one axis). Crosshair + tooltip on hover. */
export function LineChart({ data, series }: { data: Point[]; series: { key: string; label: string; color: string }[] }) {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const plotWidth = width - PADDING.left - PADDING.right;
  const plotHeight = HEIGHT - PADDING.top - PADDING.bottom;
  const max = Math.max(...data.flatMap((point) => series.map((s) => Number(point[s.key]) || 0)), 0);
  const ticks = niceTicks(max);
  const top = ticks[ticks.length - 1];
  const x = (i: number) => PADDING.left + (data.length <= 1 ? plotWidth / 2 : (i / (data.length - 1)) * plotWidth);
  const y = (value: number) => PADDING.top + plotHeight - (value / top) * plotHeight;
  const labelEvery = Math.max(1, Math.ceil(data.length / 7));

  function move(event: MouseEvent<SVGRectElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    setHover(Math.max(0, Math.min(data.length - 1, Math.round(ratio * (data.length - 1)))));
  }

  const point = hover === null ? null : data[hover];
  return (
    <div className="relative" ref={ref}>
      <svg aria-hidden="true" className="block" height={HEIGHT} width={width}>
        {ticks.map((tick) => (
          <g key={tick}>
            <line stroke={GRID} strokeWidth={1} x1={PADDING.left} x2={width - PADDING.right} y1={y(tick)} y2={y(tick)} />
            <text fill={AXIS_TEXT} fontSize={11} textAnchor="end" x={PADDING.left - 8} y={y(tick) + 4}>
              {compact(tick)}
            </text>
          </g>
        ))}
        {data.map((p, i) =>
          i % labelEvery === 0 || i === data.length - 1 ? (
            <text fill={AXIS_TEXT} fontSize={11} key={p.day} textAnchor={edgeAnchor(i, data.length)} x={x(i)} y={HEIGHT - 8}>
              {shortDay(p.day)}
            </text>
          ) : null,
        )}
        {series.map((s, si) => {
          const path = data.map((p, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(Number(p[s.key]) || 0)}`).join(" ");
          return (
            <g key={s.key}>
              {si === 0 && (
                <path d={`${path} L${x(data.length - 1)},${y(0)} L${x(0)},${y(0)} Z`} fill={s.color} opacity={0.1} />
              )}
              <path d={path} fill="none" stroke={s.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </g>
          );
        })}
        {point && hover !== null && (
          <g>
            <line stroke="#b5b3ad" strokeWidth={1} x1={x(hover)} x2={x(hover)} y1={PADDING.top} y2={PADDING.top + plotHeight} />
            {series.map((s) => (
              <circle cx={x(hover)} cy={y(Number(point[s.key]) || 0)} fill={s.color} key={s.key} r={4.5} stroke="#fff" strokeWidth={2} />
            ))}
          </g>
        )}
        <rect fill="transparent" height={plotHeight} onMouseLeave={() => setHover(null)} onMouseMove={move} width={plotWidth} x={PADDING.left} y={PADDING.top} />
      </svg>
      {point && hover !== null && (
        <Tooltip width={width} x={x(hover)}>
          <p className="mb-1 font-medium text-neutral-900">{shortDay(point.day)}</p>
          {series.map((s) => (
            <p className="flex items-center justify-between gap-3 text-neutral-600" key={s.key}>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-0.5 w-3 rounded" style={{ background: s.color }} />
                {s.label}
              </span>
              <span className="font-medium text-neutral-900 tabular-nums">{Number(point[s.key]).toLocaleString()}</span>
            </p>
          ))}
        </Tooltip>
      )}
    </div>
  );
}

/** Daily column chart for a single series, hover tooltip per column. */
export function ColumnChart({ data, valueKey, label, color }: { data: Point[]; valueKey: string; label: string; color: string }) {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const plotWidth = width - PADDING.left - PADDING.right;
  const plotHeight = HEIGHT - PADDING.top - PADDING.bottom;
  const max = Math.max(...data.map((p) => Number(p[valueKey]) || 0), 0);
  const ticks = niceTicks(max);
  const top = ticks[ticks.length - 1];
  const slot = plotWidth / Math.max(1, data.length);
  const barWidth = Math.max(2, Math.min(24, slot - 2));
  const y = (value: number) => PADDING.top + plotHeight - (value / top) * plotHeight;
  const labelEvery = Math.max(1, Math.ceil(data.length / 7));

  return (
    <div className="relative" ref={ref}>
      <svg aria-hidden="true" className="block" height={HEIGHT} width={width}>
        {ticks.map((tick) => (
          <g key={tick}>
            <line stroke={GRID} strokeWidth={1} x1={PADDING.left} x2={width - PADDING.right} y1={y(tick)} y2={y(tick)} />
            <text fill={AXIS_TEXT} fontSize={11} textAnchor="end" x={PADDING.left - 8} y={y(tick) + 4}>
              {compact(tick)}
            </text>
          </g>
        ))}
        {data.map((p, i) => {
          const value = Number(p[valueKey]) || 0;
          const cx = PADDING.left + slot * i + slot / 2;
          const h = (value / top) * plotHeight;
          const r = Math.min(4, h, barWidth / 2);
          // Rounded data end, square at the baseline.
          const path = h <= 0 ? "" : `M${cx - barWidth / 2},${y(0)} V${y(value) + r} Q${cx - barWidth / 2},${y(value)} ${cx - barWidth / 2 + r},${y(value)} H${cx + barWidth / 2 - r} Q${cx + barWidth / 2},${y(value)} ${cx + barWidth / 2},${y(value) + r} V${y(0)} Z`;
          return (
            <g key={p.day} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect fill="transparent" height={plotHeight} width={slot} x={PADDING.left + slot * i} y={PADDING.top} />
              {path && <path d={path} fill={color} opacity={hover === null || hover === i ? 1 : 0.55} />}
              {(i % labelEvery === 0 || i === data.length - 1) && (
                <text fill={AXIS_TEXT} fontSize={11} textAnchor={edgeAnchor(i, data.length)} x={cx} y={HEIGHT - 8}>
                  {shortDay(p.day)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {hover !== null && data[hover] && (
        <Tooltip width={width} x={PADDING.left + slot * hover + slot / 2}>
          <p className="mb-1 font-medium text-neutral-900">{shortDay(data[hover].day)}</p>
          <p className="flex items-center justify-between gap-3 text-neutral-600">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2 rounded-sm" style={{ background: color }} />
              {label}
            </span>
            <span className="font-medium text-neutral-900 tabular-nums">{Number(data[hover][valueKey]).toLocaleString()}</span>
          </p>
        </Tooltip>
      )}
    </div>
  );
}

/** Ranked horizontal bars (top pages, sources, devices); value at the bar tip. */
export function BarList({ rows, color, empty }: { rows: { label: string; count: number }[]; color: string; empty: string }) {
  const max = Math.max(...rows.map((row) => row.count), 1);
  const total = rows.reduce((sum, row) => sum + row.count, 0);
  if (rows.length === 0) return <p className="py-6 text-center text-sm text-neutral-500">{empty}</p>;
  return (
    <ul className="flex flex-col gap-2.5">
      {rows.map((row) => (
        <li className="group" key={row.label} title={`${row.label}: ${row.count.toLocaleString()} (${Math.round((row.count / total) * 100)}%)`}>
          <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
            <span className="truncate text-neutral-700">{row.label}</span>
            <span className="shrink-0 tabular-nums text-neutral-900">
              {row.count.toLocaleString()} <span className="text-xs text-neutral-500">{Math.round((row.count / total) * 100)}%</span>
            </span>
          </div>
          <div className="h-2 rounded-r-[4px] bg-neutral-100">
            <div className="h-2 rounded-r-[4px] transition-[width]" style={{ width: `${(row.count / max) * 100}%`, background: color }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
