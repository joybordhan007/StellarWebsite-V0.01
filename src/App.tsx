import {
  ComponentType,
  lazy,
  startTransition,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PageReveal from "./components/PageReveal";
import { useContent } from "./content/ContentProvider";
import type { NavigationItem } from "./content/types";

const pageLoaders = {
  "/": () => import("./pages/Home"),
  "/about": () => import("./pages/About"),
  "/capabilities": () => import("./pages/Capabilities"),
  "/contact": () => import("./pages/Contact"),
  "/design-path": () => import("./pages/DesignPath"),
  "/factories": () => import("./pages/GoodEarth"),
  "/factories/goodearth": () => import("./pages/GoodEarth"),
  "/factories/knit-gallery": () => import("./pages/KnitGallery"),
  "/factories/progress": () => import("./pages/Progress"),
  "/products": () => import("./pages/Products"),
  "/privacy-policy": () => import("./pages/LegalPages"),
  "/sustainability": () => import("./pages/Sustainability"),
  "/terms-of-service": () => import("./pages/LegalPages"),
};

const AdminApp = lazy(() => import("./admin/AdminApp"));
const About = lazy(pageLoaders["/about"]);
const Capabilities = lazy(pageLoaders["/capabilities"]);
const Contact = lazy(pageLoaders["/contact"]);
const DesignPath = lazy(pageLoaders["/design-path"]);
const GoodEarth = lazy(pageLoaders["/factories"]);
const Home = lazy(pageLoaders["/"]);
const PrivacyPolicy = lazy(() =>
  pageLoaders["/privacy-policy"]().then((module) => ({
    default: module.PrivacyPolicy,
  })),
);
const KnitGallery = lazy(pageLoaders["/factories/knit-gallery"]);
const Products = lazy(pageLoaders["/products"]);
const Progress = lazy(pageLoaders["/factories/progress"]);
const Sustainability = lazy(pageLoaders["/sustainability"]);
const TermsOfService = lazy(() =>
  pageLoaders["/terms-of-service"]().then((module) => ({
    default: module.TermsOfService,
  })),
);

function prefetchPage(pathname: string) {
  const loader = pageLoaders[pathname as keyof typeof pageLoaders];
  if (loader) void loader().catch(() => undefined);
}

function prefetchLinkProps(href: string) {
  return {
    onPointerEnter: () => prefetchPage(href),
    onFocus: () => prefetchPage(href),
  };
}

type PageProps = {
  onHeightChange?: (height: number) => void;
};

type Page = {
  component: ComponentType<PageProps>;
  height: number;
};

const routes: Record<string, Page> = {
  "/": { component: Home, height: 5565 },
  "/about": { component: About, height: 4794 },
  "/capabilities": {
    component: Capabilities,
    height: 4600,
  },
  "/design-path": {
    component: DesignPath,
    height: 4025,
  },
  "/factories": {
    component: GoodEarth,
    height: 3612,
  },
  "/factories/goodearth": {
    component: GoodEarth,
    height: 3612,
  },
  "/factories/progress": {
    component: Progress,
    height: 3612,
  },
  "/factories/knit-gallery": {
    component: KnitGallery,
    height: 3612,
  },
  "/sustainability": {
    component: Sustainability,
    height: 9963,
  },
  "/products": {
    component: Products,
    height: 3895,
  },
  "/privacy-policy": {
    component: PrivacyPolicy,
    height: 2963,
  },
  "/terms-of-service": {
    component: TermsOfService,
    height: 2963,
  },
  "/contact": {
    component: Contact,
    height: 2963,
  },
};

function isContactCta(target: Element) {
  let element: Element | null = target;

  while (element && element !== document.body) {
    const label = (element.textContent ?? "")
      .toLowerCase()
      .replace(/[\s'’]/g, "");

    if (
      label === "partnerwithus" ||
      label === "partnerwithuspartnerwithus" ||
      label === "letstalk" ||
      label === "letstalkletstalk"
    ) {
      return true;
    }

    element = element.parentElement;
  }

  return false;
}

function DesktopHeader({
  navigation,
  pathname,
  scale,
  scrolled,
  viewportWidth,
}: {
  navigation: NavigationItem[];
  pathname: string;
  scale: number;
  scrolled: boolean;
  viewportWidth: number;
}) {
  const isFactory = pathname.startsWith("/factories");
  const left = (viewportWidth - 1920 * scale) / 2;

  return (
    <header
      className={`desktop-header${scrolled ? " scrolled" : ""}`}
      style={{ height: `${90 * scale}px` }}
    >
      <div
        className="desktop-header-design"
        style={{ left: `${left}px`, transform: `scale(${scale})` }}
      >
        <a className="desktop-header-logo" href="/" aria-label="Stellar home">
          <img src="/assets/1-641/3b80a.svg" alt="Stellar Manufacturing" />
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map(({ href, label }) => {
            const active = pathname === href || (href === "/factories" && isFactory);
            return (
              <a
                aria-current={active ? "page" : undefined}
                className={active ? "active" : ""}
                href={href}
                key={href}
                {...prefetchLinkProps(href)}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <a className="desktop-header-contact" href="/contact" aria-label="Let's talk" {...prefetchLinkProps("/contact")}>
          <span className="contact-roll-viewport" aria-hidden="true">
            <span className="contact-roll-track">
              <span>LET’S TALK</span>
              <span>LET’S TALK</span>
            </span>
          </span>
          <span className="contact-roll-viewport contact-roll-icon" aria-hidden="true">
            <span className="contact-roll-track">
              <img src="/assets/1-641/f356f.svg" alt="" />
              <img src="/assets/1-641/f356f.svg" alt="" />
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}

function FactoryHotspots({ isFactory }: { isFactory: boolean }) {
  if (!isFactory) return null;

  return (
    <nav className="factory-hotspots" aria-label="Factory locations">
      <a href="/factories/goodearth" aria-label="GoodEarth Apparels" {...prefetchLinkProps("/factories/goodearth")} />
      <a href="/factories/progress" aria-label="Progress Apparels" {...prefetchLinkProps("/factories/progress")} />
      <a href="/factories/knit-gallery" aria-label="Knit Gallery" {...prefetchLinkProps("/factories/knit-gallery")} />
    </nav>
  );
}

function MobileHeader({
  navigation,
  pathname,
}: {
  navigation: NavigationItem[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="mobile-header">
      <a className="mobile-brand" href="/" aria-label="Stellar home">
        STELLAR
        <small>MANUFACTURING</small>
      </a>
      <button
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <nav aria-label="Mobile navigation">
          {navigation.map(({ href, label }) => (
            <a
              className={pathname === href ? "active" : ""}
              href={href}
              key={href}
              {...prefetchLinkProps(href)}
            >
              {label}
            </a>
          ))}
          <a href="/contact" {...prefetchLinkProps("/contact")}>Let's talk</a>
        </nav>
      )}
    </header>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const pathnameRef = useRef(window.location.pathname);
  const [navigationVersion, setNavigationVersion] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(window.scrollY > 24);
  const [dynamicPageHeight, setDynamicPageHeight] = useState<number | null>(null);
  const site = useContent("site");
  const seo = useContent("seo");
  const routeKey = routes[pathname] ? pathname : "/";
  const page = routes[routeKey];
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
  const PageComponent = page.component;
  const pageHeight = pathname === "/products" ? (dynamicPageHeight ?? page.height) : page.height;
  const scale = Math.min(1, viewportWidth / 1920);
  const isFactory = pathname.startsWith("/factories");

  useEffect(() => {
    const navigate = () => {
      const nextPathname = window.location.pathname;
      const preserveFactoryScroll =
        pathnameRef.current.startsWith("/factories") &&
        nextPathname.startsWith("/factories");
      pathnameRef.current = nextPathname;
      setDynamicPageHeight(null);
      startTransition(() => {
        setPathname(nextPathname);
        setNavigationVersion((version) => version + 1);
      });
      if (!preserveFactoryScroll && !window.location.hash) window.scrollTo(0, 0);
    };
    const resize = () => setViewportWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const intercept = (event: MouseEvent) => {
      const target = event.target as Element;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!window.location.pathname.startsWith("/admin") && isContactCta(target)) {
        event.preventDefault();
        window.history.pushState({}, "", "/contact");
        navigate();
        return;
      }

      if (!link || link.target || link.origin !== window.location.origin) return;

      event.preventDefault();
      window.history.pushState({}, "", `${link.pathname}${link.search}${link.hash}`);
      navigate();
    };

    window.addEventListener("popstate", navigate);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", intercept);
    return () => {
      window.removeEventListener("popstate", navigate);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", intercept);
    };
  }, []);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    let cancelled = false;
    let frame = 0;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target || cancelled) return false;

      frame = requestAnimationFrame(() => {
        if (!cancelled) target.scrollIntoView({ block: "start" });
      });
      return true;
    };

    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });

    if (!scrollToTarget()) {
      observer.observe(document.querySelector(".design-scale") ?? document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      cancelled = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [navigationVersion, pathname, page.component]);

  const title = seo.pages[routeKey]?.title ?? seo.pages["/"]?.title ?? "";
  useEffect(() => {
    if (!isAdmin && title) document.title = title;
  }, [isAdmin, title]);

  const canvasStyle = useMemo(
    () => ({
      height: `${pageHeight * scale}px`,
      width: `${1920 * scale}px`,
    }),
    [pageHeight, scale],
  );

  if (isAdmin) {
    return (
      <Suspense fallback={null}>
        <AdminApp pathname={pathname} />
      </Suspense>
    );
  }

  return (
    <>
      <DesktopHeader
        navigation={site.navigation}
        pathname={pathname}
        scale={scale}
        scrolled={scrolled}
        viewportWidth={viewportWidth}
      />
      <MobileHeader navigation={site.navigation} pathname={pathname} />
      <main className="site-canvas" style={canvasStyle}>
        <div className="design-scale" style={{ transform: `scale(${scale})` }}>
          <Suspense fallback={null}>
            <PageReveal key={pathname}>
              <PageComponent
                onHeightChange={pathname === "/products" ? setDynamicPageHeight : undefined}
              />
            </PageReveal>
          </Suspense>
          <FactoryHotspots isFactory={isFactory} />
        </div>
      </main>
    </>
  );
}
