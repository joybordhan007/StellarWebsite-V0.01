import { ComponentType, FormEvent, lazy, Suspense, useEffect, useState } from "react";
import { AdminProvider, useAdmin } from "./AdminContext";
import { type Admin, api, ApiError } from "./api";
import { Avatar } from "./components";
import { Button, Spinner, TextField } from "./ui";

const Overview = lazy(() => import("./pages/Overview"));
const Messages = lazy(() => import("./pages/Messages"));
const ProductsAdmin = lazy(() => import("./pages/ProductsAdmin"));
const CapabilitiesAdmin = lazy(() => import("./pages/CapabilitiesAdmin"));
const AchievementsAdmin = lazy(() => import("./pages/AchievementsAdmin"));
const OfficesEditor = lazy(() => import("./pages/OfficesEditor"));
const SiteSettings = lazy(() => import("./pages/SiteSettings"));
const SeoEditor = lazy(() => import("./pages/SeoEditor"));
const LegalEditor = lazy(() => import("./pages/LegalEditor"));
const FactoriesAdmin = lazy(() => import("./pages/FactoriesAdmin"));
const BrandsAdmin = lazy(() => import("./pages/BrandsAdmin"));
const AboutAdmin = lazy(() => import("./pages/AboutAdmin"));
const SustainabilityAdmin = lazy(() => import("./pages/SustainabilityAdmin"));
const FooterAdmin = lazy(() => import("./pages/FooterAdmin"));
const Profile = lazy(() => import("./pages/Profile"));

type Section = { href: string; label: string; icon: string; component: ComponentType<{ pathname: string }> };

// Icon paths: 24x24 outline glyphs.
const sections: Section[] = [
  { href: "/admin", label: "Overview", icon: "M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10", component: Overview },
  { href: "/admin/messages", label: "Messages", icon: "M4 6h16v12H4zM4 6l8 7 8-7", component: Messages },
  { href: "/admin/products", label: "Products", icon: "M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10", component: ProductsAdmin },
  { href: "/admin/capabilities", label: "Capabilities", icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z", component: CapabilitiesAdmin },
  { href: "/admin/achievements", label: "Achievements", icon: "M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3", component: AchievementsAdmin },
  { href: "/admin/factories", label: "Factories", icon: "M3 21h18M5 21V9l5 3V9l5 3V5h4v16", component: FactoriesAdmin },
  { href: "/admin/brands", label: "Brand logos", icon: "M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.4l6-.9z", component: BrandsAdmin },
  { href: "/admin/about", label: "About us", icon: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 8h.01M11 12h1v5h1", component: AboutAdmin },
  { href: "/admin/sustainability", label: "Sustainability", icon: "M5 21c0-9 5-14 14-16-1 9-6 14-14 16zM5 21l7-7", component: SustainabilityAdmin },
  { href: "/admin/offices", label: "Offices", icon: "M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12zM12 11a2 2 0 100-4 2 2 0 000 4z", component: OfficesEditor },
  { href: "/admin/footer", label: "Footer", icon: "M4 4h16v16H4zM4 15h16M8 18h3", component: FooterAdmin },
  { href: "/admin/site", label: "Site settings", icon: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z", component: SiteSettings },
  { href: "/admin/seo", label: "SEO", icon: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3", component: SeoEditor },
  { href: "/admin/legal", label: "Legal pages", icon: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6", component: LegalEditor },
  { href: "/admin/profile", label: "My profile", icon: "M20 21a8 8 0 00-16 0M12 13a5 5 0 100-10 5 5 0 000 10z", component: Profile },
];

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

function LoginScreen({ onLogin }: { onLogin: (admin: Admin) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const result = await api<{ admin: Admin }>("/auth/login", { method: "POST", body: { email, password } });
      onLogin(result.admin);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Login failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-root flex min-h-screen items-center justify-center bg-neutral-100 px-4">
      <form className="w-full max-w-sm rounded-[6px] bg-white p-8 shadow-sm" onSubmit={submit}>
        <p className="text-xs font-semibold tracking-[0.3em] text-[#b07c47]">STELLAR</p>
        <h1 className="mt-2 text-xl font-semibold text-neutral-900">Admin dashboard</h1>
        <p className="mt-1 text-sm text-neutral-500">Sign in to manage the website.</p>
        <div className="mt-6 flex flex-col gap-4">
          <TextField autoComplete="username" label="Email" onChange={setEmail} required type="email" value={email} />
          <TextField
            autoComplete="current-password"
            label="Password"
            onChange={setPassword}
            required
            type="password"
            value={password}
          />
          {error && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
          <Button className="w-full py-2.5" disabled={busy} type="submit" variant="primary">
            {busy ? "Signing in…" : "Sign in"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function Layout({ pathname }: { pathname: string }) {
  const { admin, setAdmin, handleError } = useAdmin();
  const [menuOpen, setMenuOpen] = useState(false);
  const active =
    sections.find((section) => section.href !== "/admin" && pathname.startsWith(section.href)) ??
    sections[0];
  const Page = active.component;

  useEffect(() => {
    document.title = `${active.label} | Stellar Admin`;
    setMenuOpen(false);
  }, [active]);

  async function logout() {
    try {
      await api("/auth/logout", { method: "POST" });
      setAdmin(null);
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <div className="admin-root min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3 lg:hidden">
        <span className="font-semibold">Stellar Admin</span>
        <Button aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} variant="ghost">
          Menu
        </Button>
      </header>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-[#1d1d1d] text-neutral-300 transition-transform lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-6 py-6">
          <p className="text-sm font-semibold tracking-[0.35em] text-white">STELLAR</p>
          <p className="mt-0.5 text-[10px] tracking-[0.3em] text-[#dea36a]">ADMIN DASHBOARD</p>
        </div>
        <nav aria-label="Dashboard" className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 [scrollbar-color:rgba(255,255,255,0.18)_transparent] [scrollbar-width:thin]">
          {sections.map((section) => (
            <a
              aria-current={section === active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${section === active ? "bg-white/10 text-white" : "hover:bg-white/5 hover:text-white"}`}
              href={section.href}
              key={section.href}
            >
              <Icon path={section.icon} />
              {section.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <a className="mb-3 block text-sm text-[#dea36a] hover:underline" href="/" rel="noreferrer" target="_blank">
            View website ↗
          </a>
          <a className="flex items-center gap-3 rounded-md p-1 hover:bg-white/5" href="/admin/profile">
            <Avatar admin={admin} size={36} />
            <span className="min-w-0">
              <span className="block truncate text-sm text-white">{admin.name}</span>
              <span className="block truncate text-xs text-neutral-400">{admin.email}</span>
            </span>
          </a>
          <button className="mt-3 text-sm text-neutral-300 hover:text-white" onClick={logout} type="button">
            Log out
          </button>
        </div>
      </aside>
      {menuOpen && (
        <div aria-hidden="true" className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setMenuOpen(false)} />
      )}
      <main className="lg:pl-64">
        <div className="px-6 py-6">
          <Suspense fallback={<Spinner />}>
            <Page pathname={pathname} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default function AdminApp({ pathname }: { pathname: string }) {
  const [admin, setAdmin] = useState<Admin | null | undefined>(undefined);
  const [startupError, setStartupError] = useState("");

  useEffect(() => {
    api<{ admin: Admin }>("/auth/me")
      .then((result) => setAdmin(result.admin))
      .catch((error) => {
        if (error instanceof ApiError && error.status === 401) setAdmin(null);
        else setStartupError(error instanceof Error ? error.message : "Can't reach the server.");
      });
  }, []);

  if (startupError) {
    return (
      <div className="admin-root flex min-h-screen items-center justify-center bg-neutral-100 px-4">
        <div className="max-w-md rounded-[6px] bg-white p-8 text-sm text-neutral-600 shadow-sm">
          <h1 className="mb-2 text-lg font-semibold text-neutral-900">Admin dashboard unavailable</h1>
          {startupError}
        </div>
      </div>
    );
  }
  if (admin === undefined) {
    return (
      <div className="admin-root flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (!admin) return <LoginScreen onLogin={setAdmin} />;

  return (
    <AdminProvider admin={admin} setAdmin={setAdmin}>
      <Layout pathname={pathname} />
    </AdminProvider>
  );
}
