import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { defaultContent } from "./defaults";
import type { ContentKey, ContentMap } from "./types";

type StoredContent = Partial<Record<string, unknown>>;

declare global {
  interface Window {
    /** Edited content, embedded into the page by the production server. */
    __STELLAR_CONTENT__?: StoredContent;
  }
}

const ContentContext = createContext<StoredContent>({});
/** Whether the backend answered (production server or dev proxy); false in the Figma Make preview. */
const BackendContext = createContext(false);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Stored documents override the defaults field by field, two levels deep (so
 * seo.pages and site.social keep entries the stored copy lacks). A document saved
 * before a new field existed still picks up that field's default. Lists are
 * replaced as a whole.
 */
export function mergeContent<K extends ContentKey>(key: K, stored: unknown): ContentMap[K] {
  const fallback = defaultContent[key] as Record<string, unknown>;
  if (!isPlainObject(stored)) return fallback as ContentMap[K];

  const merged: Record<string, unknown> = { ...fallback };
  for (const [field, value] of Object.entries(stored)) {
    const base = fallback[field];
    merged[field] = isPlainObject(base) && isPlainObject(value) ? { ...base, ...value } : value;
  }
  return merged as ContentMap[K];
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<StoredContent>(() => window.__STELLAR_CONTENT__ ?? {});
  const [backend, setBackend] = useState(() => Boolean(window.__STELLAR_CONTENT__));

  useEffect(() => {
    // The production server embeds content in the page; elsewhere (local dev,
    // Figma Make preview) try the API and quietly keep the defaults if it's absent.
    if (window.__STELLAR_CONTENT__) return;
    let cancelled = false;

    fetch("/api/content")
      .then((response) =>
        response.ok && response.headers.get("content-type")?.includes("application/json")
          ? (response.json() as Promise<{ content?: StoredContent }>)
          : null,
      )
      .then((result) => {
        if (!cancelled && result?.content) {
          setStored(result.content);
          setBackend(true);
        }
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <BackendContext.Provider value={backend}>
      <ContentContext.Provider value={stored}>{children}</ContentContext.Provider>
    </BackendContext.Provider>
  );
}

export function useContent<K extends ContentKey>(key: K): ContentMap[K] {
  const stored = useContext(ContentContext)[key];
  return useMemo(() => mergeContent(key, stored), [key, stored]);
}

export function useBackendAvailable() {
  return useContext(BackendContext);
}
