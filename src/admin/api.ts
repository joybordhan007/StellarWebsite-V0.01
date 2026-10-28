export type Admin = { id: number; email: string; name: string; avatar: string | null; created_at: string };

export type Message = {
  id: number;
  name: string;
  email: string;
  data: Record<string, string>;
  is_read: boolean;
  created_at: string;
};

export type Media = {
  id: number;
  filename: string;
  original_name: string;
  mime: string;
  size: number;
  url: string;
  created_at: string;
};

export type Stats = {
  messages: number;
  unreadMessages: number;
  media: number;
  editedContent: number;
  admins: number;
};

export type ContentMeta = { updated_at: string; updated_by: string | null } | null;

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

type RequestOptions = { method?: string; body?: unknown; form?: FormData };

export async function api<T>(path: string, { method = "GET", body, form }: RequestOptions = {}) {
  const init: RequestInit = { method, credentials: "same-origin" };
  if (form) {
    init.body = form;
  } else if (body !== undefined) {
    init.headers = { "Content-Type": "application/json" };
    init.body = JSON.stringify(body);
  }

  let response: Response;
  try {
    response = await fetch(`/api${path}`, init);
  } catch {
    throw new ApiError("Can't reach the server. Check your connection and try again.", 0);
  }

  const isJson = Boolean(response.headers.get("content-type")?.includes("application/json"));
  const data = isJson ? ((await response.json()) as T & { error?: string }) : null;

  if (!isJson) {
    throw new ApiError(
      "The backend server isn't reachable. Run “pnpm server” in the project folder, make sure .env.local contains API_PROXY=http://localhost:3001, then reload. Details: server/README.md.",
      response.status,
    );
  }
  if (!response.ok) {
    throw new ApiError(data?.error ?? `Request failed (${response.status}).`, response.status);
  }
  return data as T;
}

export function uploadImage(file: File) {
  const form = new FormData();
  form.append("file", file);
  return api<{ media: Media }>("/media", { method: "POST", form }).then((result) => result.media);
}

export function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
