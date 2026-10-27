import { createContext, ReactNode, useCallback, useContext, useMemo, useRef, useState } from "react";
import { type Admin, ApiError } from "./api";

type Toast = { id: number; message: string; tone: "success" | "error" };

type AdminContextValue = {
  admin: Admin;
  setAdmin: (admin: Admin | null) => void;
  notify: (message: string, tone?: Toast["tone"]) => void;
  /** Shows an API error as a toast, and returns to the login screen when the session expired. */
  handleError: (error: unknown) => void;
};

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({
  admin,
  setAdmin,
  children,
}: {
  admin: Admin;
  setAdmin: (admin: Admin | null) => void;
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  const notify = useCallback((message: string, tone: Toast["tone"] = "success") => {
    const id = ++nextId.current;
    setToasts((current) => [...current, { id, message, tone }]);
    window.setTimeout(() => setToasts((current) => current.filter((toast) => toast.id !== id)), 4000);
  }, []);

  const handleError = useCallback(
    (error: unknown) => {
      if (error instanceof ApiError && error.status === 401) {
        setAdmin(null);
        return;
      }
      notify(error instanceof Error ? error.message : "Something went wrong.", "error");
    },
    [notify, setAdmin],
  );

  const value = useMemo(
    () => ({ admin, setAdmin, notify, handleError }),
    [admin, setAdmin, notify, handleError],
  );

  return (
    <AdminContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="fixed bottom-4 right-4 z-50 flex w-[min(360px,calc(100vw-32px))] flex-col gap-2">
        {toasts.map((toast) => (
          <div
            className={`rounded-[6px] px-4 py-3 text-sm text-white shadow-lg ${toast.tone === "error" ? "bg-red-600" : "bg-neutral-900"}`}
            key={toast.id}
            role={toast.tone === "error" ? "alert" : "status"}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const value = useContext(AdminContext);
  if (!value) throw new Error("useAdmin must be used inside AdminProvider");
  return value;
}
