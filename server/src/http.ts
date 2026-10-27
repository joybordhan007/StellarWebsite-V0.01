import type { NextFunction, Request, Response } from "express";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

/** Reads a string field from a request body, trimming it and enforcing a max length. */
export function readString(
  body: unknown,
  field: string,
  { max = 500, required = true }: { max?: number; required?: boolean } = {},
) {
  const value = (body as Record<string, unknown> | undefined)?.[field];
  if (value === undefined || value === null || value === "") {
    if (required) throw new HttpError(400, `${field} is required.`);
    return "";
  }
  if (typeof value !== "string") throw new HttpError(400, `${field} must be text.`);
  const trimmed = value.trim();
  if (required && !trimmed) throw new HttpError(400, `${field} is required.`);
  if (trimmed.length > max) throw new HttpError(400, `${field} is too long (max ${max}).`);
  return trimmed;
}

export function readId(value: string | string[] | undefined) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) throw new HttpError(400, "Invalid id.");
  return id;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isEmail(value: string) {
  return EMAIL_PATTERN.test(value);
}

/** Small in-memory limiter; enough for a single-process app on shared hosting. */
export function rateLimit({ windowMs, max }: { windowMs: number; max: number }) {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return (req: Request, _res: Response, next: NextFunction) => {
    const key = req.ip ?? "unknown";
    const now = Date.now();
    const entry = hits.get(key);

    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      if (hits.size > 10_000) {
        for (const [ip, value] of hits) if (value.resetAt <= now) hits.delete(ip);
      }
      return next();
    }

    entry.count += 1;
    if (entry.count > max) {
      return next(new HttpError(429, "Too many requests. Please wait a few minutes and try again."));
    }
    next();
  };
}

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof HttpError) {
    res.status(error.status).json({ error: error.message });
    return;
  }
  const status = (error as { status?: number; type?: string }).status;
  if (status && status >= 400 && status < 500) {
    res.status(status).json({ error: (error as Error).message || "Bad request." });
    return;
  }
  console.error(error);
  res.status(500).json({ error: "Something went wrong on the server." });
}
