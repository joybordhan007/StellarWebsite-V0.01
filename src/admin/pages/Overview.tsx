import { useEffect, useState } from "react";
import { useAdmin } from "../AdminContext";
import { api, formatDate, type Message, type Stats } from "../api";
import { Card, PageHeader, Spinner } from "../ui";

const shortcuts = [
  { href: "/admin/products", label: "Products", text: "Categories and product photos" },
  { href: "/admin/offices", label: "Offices", text: "Addresses, phones and opening hours" },
  { href: "/admin/site", label: "Site settings", text: "Footer, contact details, social links, menu" },
  { href: "/admin/seo", label: "SEO", text: "Page titles and search descriptions" },
  { href: "/admin/legal", label: "Legal pages", text: "Privacy policy and terms" },
  { href: "/admin/media", label: "Media library", text: "All uploaded images" },
];

export default function Overview() {
  const { admin, handleError } = useAdmin();
  const [stats, setStats] = useState<Stats | null>(null);
  const [latest, setLatest] = useState<Message[]>([]);

  useEffect(() => {
    Promise.all([api<Stats>("/stats"), api<{ messages: Message[] }>("/messages")])
      .then(([statsResult, messagesResult]) => {
        setStats(statsResult);
        setLatest(messagesResult.messages.slice(0, 5));
      })
      .catch(handleError);
  }, [handleError]);

  const tiles = stats && [
    { label: "Unread messages", value: stats.unreadMessages, href: "/admin/messages" },
    { label: "All messages", value: stats.messages, href: "/admin/messages" },
    { label: "Uploaded images", value: stats.media, href: "/admin/media" },
    { label: "Customized sections", value: stats.editedContent, href: "/admin/site" },
  ];

  return (
    <>
      <PageHeader description="Everything you can change on the website, in one place." title={`Welcome, ${admin.name}`} />
      {!tiles ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {tiles.map((tile) => (
              <a
                className="rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-[#dea36a]"
                href={tile.href}
                key={tile.label}
              >
                <p className="text-sm text-neutral-500">{tile.label}</p>
                <p className="mt-1 text-3xl font-semibold tabular-nums">{tile.value}</p>
              </a>
            ))}
          </div>

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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shortcuts.map((shortcut) => (
              <a
                className="rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-[#dea36a]"
                href={shortcut.href}
                key={shortcut.href}
              >
                <p className="font-medium">{shortcut.label}</p>
                <p className="mt-1 text-sm text-neutral-500">{shortcut.text}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
