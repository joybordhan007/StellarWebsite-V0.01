import { ReactNode, useEffect, useState } from "react";
import { mergeContent } from "../../content/ContentProvider";
import { useAdmin } from "../AdminContext";
import { api, formatDate, type Message, type Stats } from "../api";
import { BarList, ColumnChart, LineChart, SERIES_COLORS } from "../charts";
import { Card, PageHeader, Spinner } from "../ui";

type Report = {
  days: number;
  current: { views: number; visitors: number; messages: number };
  previous: { views: number; visitors: number; messages: number };
  series: { day: string; views: number; visitors: number; messages: number }[];
  pages: { label: string; count: number }[];
  referrers: { label: string; count: number }[];
  devices: { label: string; count: number }[];
};

const RANGES = [7, 30, 90] as const;

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/about": "About us",
  "/capabilities": "Our capabilities",
  "/design-path": "Design path",
  "/factories": "Our factories",
  "/sustainability": "Sustainability",
  "/products": "Products",
  "/contact": "Let's talk",
  "/privacy-policy": "Privacy policy",
  "/terms-of-service": "Terms of service",
};

function pageName(path: string) {
  if (PAGE_NAMES[path]) return `${PAGE_NAMES[path]} (${path})`;
  if (path.startsWith("/factories/")) return `Factory: ${path.split("/")[2]}`;
  return path;
}

function Delta({ current, previous }: { current: number; previous: number }) {
  if (previous === 0) return <span className="text-xs text-neutral-400">{current > 0 ? "new" : "—"} vs previous period</span>;
  const change = Math.round(((current - previous) / previous) * 100);
  const up = change >= 0;
  return (
    <span className="text-xs text-neutral-500">
      <span className={up ? "text-emerald-700" : "text-red-700"}>
        {up ? "▲" : "▼"} {Math.abs(change)}%
      </span>{" "}
      vs previous period
    </span>
  );
}

function StatTile({ label, value, delta, href }: { label: string; value: number; delta?: ReactNode; href?: string }) {
  const body = (
    <>
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 text-3xl font-semibold tabular-nums text-neutral-900">{value.toLocaleString()}</p>
      {delta && <div className="mt-1">{delta}</div>}
    </>
  );
  const className = "rounded-[6px] border border-neutral-200 bg-white p-4";
  return href ? (
    <a className={`${className} transition-colors hover:border-[#dea36a]`} href={href}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

function DataTable({ rows }: { rows: Report["series"] }) {
  return (
    <details className="text-sm">
      <summary className="cursor-pointer text-neutral-500 hover:text-neutral-800">Show as table</summary>
      <div className="mt-2 max-h-64 overflow-auto rounded-[6px] border border-neutral-200">
        <table className="w-full text-left">
          <thead className="sticky top-0 bg-neutral-50 text-xs uppercase text-neutral-500">
            <tr>
              <th className="px-3 py-2 font-medium">Day</th>
              <th className="px-3 py-2 text-right font-medium">Page views</th>
              <th className="px-3 py-2 text-right font-medium">Visitors</th>
              <th className="px-3 py-2 text-right font-medium">Messages</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 tabular-nums">
            {[...rows].reverse().map((row) => (
              <tr key={row.day}>
                <td className="px-3 py-1.5">{row.day}</td>
                <td className="px-3 py-1.5 text-right">{row.views}</td>
                <td className="px-3 py-1.5 text-right">{row.visitors}</td>
                <td className="px-3 py-1.5 text-right">{row.messages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export default function Overview() {
  const { admin, handleError } = useAdmin();
  const [days, setDays] = useState<(typeof RANGES)[number]>(30);
  const [report, setReport] = useState<Report | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [latest, setLatest] = useState<Message[]>([]);
  const [content, setContent] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    Promise.all([api<Stats>("/stats"), api<{ messages: Message[] }>("/messages"), api<{ content: Record<string, unknown> }>("/content")])
      .then(([statsResult, messagesResult, contentResult]) => {
        setStats(statsResult);
        setLatest(messagesResult.messages.slice(0, 5));
        setContent(contentResult.content);
      })
      .catch(handleError);
  }, [handleError]);

  useEffect(() => {
    setReport(null);
    api<Report>(`/reports?days=${days}`).then(setReport).catch(handleError);
  }, [days, handleError]);

  const catalog = content && mergeContent("catalog", content.catalog);
  const capabilities = content && mergeContent("capabilities", content.capabilities);
  const factories = content && mergeContent("factories", content.factories);
  const brands = content && mergeContent("brands", content.brands);
  const achievements = content && mergeContent("achievements", content.achievements);

  const contentTiles = catalog && capabilities && factories && brands && achievements && [
    { label: "Products on the website", value: catalog.products.filter((product) => product.active).length, href: "/admin/products" },
    { label: "Product categories", value: catalog.categories.length, href: "/admin/products/categories" },
    { label: "Capabilities", value: capabilities.items.filter((item) => item.active).length, href: "/admin/capabilities" },
    { label: "Factories", value: factories.items.filter((factory) => factory.active).length, href: "/admin/factories" },
    { label: "Brand logos", value: brands.logos.length, href: "/admin/brands" },
    { label: "Achievements", value: achievements.items.length, href: "/admin/achievements" },
  ];

  return (
    <>
      <PageHeader description="How the website is doing, and what's on it." title={`Welcome, ${admin.name}`} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-neutral-900">Website traffic</h2>
          <div aria-label="Time range" className="inline-flex rounded-[6px] border border-neutral-200 bg-white p-0.5" role="group">
            {RANGES.map((range) => (
              <button
                aria-pressed={days === range}
                className={`rounded-[4px] px-3 py-1.5 text-sm transition-colors ${days === range ? "bg-[#1d1d1d] text-white" : "text-neutral-600 hover:bg-neutral-100"}`}
                key={range}
                onClick={() => setDays(range)}
                type="button"
              >
                Last {range} days
              </button>
            ))}
          </div>
        </div>

        {!report ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <StatTile delta={<Delta current={report.current.views} previous={report.previous.views} />} label="Page views" value={report.current.views} />
              <StatTile delta={<Delta current={report.current.visitors} previous={report.previous.visitors} />} label="Visitors" value={report.current.visitors} />
              <StatTile delta={<Delta current={report.current.messages} previous={report.previous.messages} />} href="/admin/messages" label="Enquiries" value={report.current.messages} />
              <StatTile href="/admin/messages" label="Unread messages" value={stats?.unreadMessages ?? 0} />
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <Card
                actions={
                  <div className="flex items-center gap-4 text-xs text-neutral-600">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-0.5 w-4 rounded" style={{ background: SERIES_COLORS.views }} />
                      Page views
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-0.5 w-4 rounded" style={{ background: SERIES_COLORS.visitors }} />
                      Visitors
                    </span>
                  </div>
                }
                description="Per day. Visitors are counted once per day."
                title="Traffic"
              >
                <LineChart
                  data={report.series}
                  series={[
                    { key: "views", label: "Page views", color: SERIES_COLORS.views },
                    { key: "visitors", label: "Visitors", color: SERIES_COLORS.visitors },
                  ]}
                />
                <DataTable rows={report.series} />
              </Card>
              <Card description="Contact form messages per day." title="Enquiries">
                <ColumnChart color={SERIES_COLORS.messages} data={report.series} label="Enquiries" valueKey="messages" />
              </Card>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <Card title="Most viewed pages">
                <BarList color={SERIES_COLORS.views} empty="No visits yet." rows={report.pages.map((row) => ({ label: pageName(row.label), count: row.count }))} />
              </Card>
              <Card description="Where visitors came from." title="Traffic sources">
                <BarList color={SERIES_COLORS.views} empty="No visits yet." rows={report.referrers.map((row) => ({ label: row.label || "Direct / bookmark", count: row.count }))} />
              </Card>
              <Card title="Devices">
                <BarList
                  color={SERIES_COLORS.views}
                  empty="No visits yet."
                  rows={report.devices.map((row) => ({ label: row.label.charAt(0).toUpperCase() + row.label.slice(1), count: row.count }))}
                />
              </Card>
            </div>
          </>
        )}

        <h2 className="mt-2 text-base font-semibold text-neutral-900">Website content</h2>
        {!contentTiles ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {contentTiles.map((tile) => (
              <StatTile href={tile.href} key={tile.label} label={tile.label} value={tile.value} />
            ))}
          </div>
        )}

        <Card title="Latest messages">
          {latest.length === 0 ? (
            <p className="text-sm text-neutral-500">No messages yet. Contact form submissions appear here.</p>
          ) : (
            <ul className="-my-2 divide-y divide-neutral-100">
              {latest.map((message) => (
                <li key={message.id}>
                  <a className="flex items-center justify-between gap-4 py-2.5 hover:text-[#b07c47]" href={`/admin/messages?id=${message.id}`}>
                    <span className="min-w-0">
                      <span className={`block truncate text-sm ${message.is_read ? "" : "font-semibold"}`}>{message.name}</span>
                      <span className="block truncate text-xs text-neutral-500">{message.data.message || message.email}</span>
                    </span>
                    <span className="shrink-0 text-xs text-neutral-400">{formatDate(message.created_at)}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}
