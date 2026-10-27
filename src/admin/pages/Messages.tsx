import { useEffect, useState } from "react";
import { useAdmin } from "../AdminContext";
import { api, formatDate, type Message } from "../api";
import { Button, PageHeader, Spinner } from "../ui";

const FIELD_LABELS: [string, string][] = [
  ["email", "Email"],
  ["phone", "Phone"],
  ["company", "Company"],
];

export default function Messages() {
  const { handleError, notify } = useAdmin();
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [selectedId, setSelectedId] = useState<number | null>(() => {
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    return Number.isInteger(id) && id > 0 ? id : null;
  });

  useEffect(() => {
    api<{ messages: Message[] }>("/messages")
      .then((result) => setMessages(result.messages))
      .catch(handleError);
  }, [handleError]);

  const selected = messages?.find((message) => message.id === selectedId) ?? null;
  const visible = messages?.filter((message) => filter === "all" || !message.is_read) ?? [];
  const unreadCount = messages?.filter((message) => !message.is_read).length ?? 0;

  async function setRead(message: Message, isRead: boolean) {
    setMessages((current) =>
      current?.map((item) => (item.id === message.id ? { ...item, is_read: isRead } : item)) ?? null,
    );
    try {
      await api(`/messages/${message.id}`, { method: "PATCH", body: { is_read: isRead } });
    } catch (error) {
      handleError(error);
    }
  }

  function open(message: Message) {
    setSelectedId(message.id);
    if (!message.is_read) void setRead(message, true);
  }

  async function remove(message: Message) {
    if (!window.confirm(`Delete the message from ${message.name}? This can't be undone.`)) return;
    try {
      await api(`/messages/${message.id}`, { method: "DELETE" });
      setMessages((current) => current?.filter((item) => item.id !== message.id) ?? null);
      setSelectedId(null);
      notify("Message deleted.");
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <>
      <PageHeader
        description="Messages sent through the website contact form."
        title={`Messages${unreadCount ? ` (${unreadCount} unread)` : ""}`}
      />
      {!messages ? (
        <Spinner />
      ) : (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="overflow-hidden rounded-[6px] border border-neutral-200 bg-white">
            <div className="flex gap-1 border-b border-neutral-200 p-2" role="group" aria-label="Filter">
              {(["all", "unread"] as const).map((value) => (
                <Button
                  aria-pressed={filter === value}
                  className={filter === value ? "bg-neutral-100 text-neutral-900" : ""}
                  key={value}
                  onClick={() => setFilter(value)}
                  variant="ghost"
                >
                  {value === "all" ? "All" : "Unread"}
                </Button>
              ))}
            </div>
            {visible.length === 0 ? (
              <p className="p-5 text-sm text-neutral-500">
                {filter === "unread" ? "No unread messages." : "No messages yet."}
              </p>
            ) : (
              <ul className="max-h-[70vh] divide-y divide-neutral-100 overflow-y-auto">
                {visible.map((message) => (
                  <li key={message.id}>
                    <button
                      className={`flex w-full flex-col gap-0.5 px-4 py-3 text-left transition-colors hover:bg-neutral-50 ${message.id === selectedId ? "bg-[#dea36a]/10" : ""}`}
                      onClick={() => open(message)}
                      type="button"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className={`truncate text-sm ${message.is_read ? "text-neutral-700" : "font-semibold text-neutral-900"}`}>
                          {!message.is_read && <span className="mr-2 inline-block size-2 rounded-full bg-[#dea36a]" />}
                          {message.name}
                        </span>
                        <span className="shrink-0 text-xs text-neutral-400">{formatDate(message.created_at)}</span>
                      </span>
                      <span className="truncate text-xs text-neutral-500">{message.data.message || message.email}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-[6px] border border-neutral-200 bg-white p-6">
            {!selected ? (
              <p className="text-sm text-neutral-500">Select a message to read it.</p>
            ) : (
              <article>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold">{selected.name}</h2>
                    <p className="text-xs text-neutral-400">{formatDate(selected.created_at)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="inline-flex items-center rounded-md bg-[#1d1d1d] px-3.5 py-2 text-sm font-medium text-white hover:bg-black"
                      href={`mailto:${selected.email}?subject=${encodeURIComponent("Re: your message to Stellar Manufacturing")}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Reply by email
                    </a>
                    <Button onClick={() => setRead(selected, !selected.is_read)}>
                      Mark as {selected.is_read ? "unread" : "read"}
                    </Button>
                    <Button onClick={() => remove(selected)} variant="danger">
                      Delete
                    </Button>
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
                  {FIELD_LABELS.filter(([key]) => selected.data[key]).map(([key, label]) => (
                    <div className="contents" key={key}>
                      <dt className="text-neutral-500">{label}</dt>
                      <dd className="break-all">{selected.data[key]}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 whitespace-pre-wrap rounded-[6px] bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-800">
                  {selected.data.message || <span className="text-neutral-400">(No message text)</span>}
                </div>
              </article>
            )}
          </div>
        </div>
      )}
    </>
  );
}
