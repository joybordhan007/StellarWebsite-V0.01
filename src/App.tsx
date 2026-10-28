import {
  ComponentType,
  lazy,
  startTransition,
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PageReveal from "./components/PageReveal";
import { MOBILE_MAX_WIDTH } from "./components/mobileFlow";

// Same breakpoint as the `@media (max-width: 1023px)` block in index.css.
const MOBILE_QUERY = `(max-width: ${MOBILE_MAX_WIDTH}px)`;
import { useBackendAvailable, useContent } from "./content/ContentProvider";
import type { NavigationItem } from "./content/types";

const pageLoaders = {
  "/": () => import("./pages/Home"),
  "/about": () => import("./pages/About"),
  "/capabilities": () => import("./pages/Capabilities"),
  "/contact": () => import("./pages/Contact"),
  "/design-path": () => import("./pages/DesignPath"),
  "/factories": () => import("./pages/FactoryPage"),
  "/factories/goodearth": () => import("./pages/FactoryPage"),
  "/factories/knit-gallery": () => import("./pages/FactoryPage"),
  "/factories/progress": () => import("./pages/FactoryPage"),
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
const FactoryPage = lazy(pageLoaders["/factories"]);
const Home = lazy(pageLoaders["/"]);
const PrivacyPolicy = lazy(() =>
  pageLoaders["/privacy-policy"]().then((module) => ({
    default: module.PrivacyPolicy,
  })),
);
const Products = lazy(pageLoaders["/products"]);
const Sustainability = lazy(pageLoaders["/sustainability"]);
const TermsOfService = lazy(() =>
  pageLoaders["/terms-of-service"]().then((module) => ({
    default: module.TermsOfService,
  })),
);

const FACTORY_PATH = /^\/factories\/[\w-]+$/;

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
  pathname?: string;
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
    component: FactoryPage,
    height: 3612,
  },
  "/factories/goodearth": {
    component: FactoryPage,
    height: 3612,
  },
  "/factories/progress": {
    component: FactoryPage,
    height: 3612,
  },
  "/factories/knit-gallery": {
    component: FactoryPage,
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
          <img src="/assets/common/stellar-logo-white.svg" alt="Stellar Manufacturing" />
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
              <img src="/assets/common/arrow-subdirectory-forward.svg" alt="" />
              <img src="/assets/common/arrow-subdirectory-forward.svg" alt="" />
            </span>
          </span>
        </a>
      </div>
    </header>
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

  // The menu closes whenever the page changes (links are handled by the client-side router).
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
        <nav aria-label="Mobile navigation" onClick={(event) => (event.target as Element).closest("a") && setOpen(false)}>
          {navigation.map(({ href, label }) => (
            <a
              className={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "active" : ""}
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
  // The width without the scrollbar, so the scaled 1920px canvas never overflows sideways.
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  // The phone layout uses the very media query the CSS uses, so the two never disagree.
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);
  const [scrolled, setScrolled] = useState(window.scrollY > 24);
  const [dynamicPageHeight, setDynamicPageHeight] = useState<number | null>(null);
  const scrollToTopOnCommit = useRef(false);
  const site = useContent("site");
  const seo = useContent("seo");
  // Any /factories/<slug> renders the factory page (FactoryPage picks the factory).
  const routeKey = routes[pathname] ? pathname : FACTORY_PATH.test(pathname) ? "/factories" : "/";
  const page = routes[routeKey];
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
  const PageComponent = page.component;
  const pageHeight = dynamicPageHeight ?? page.height;
  const scale = isMobile ? 1 : Math.min(1, viewportWidth / 1920);

  useEffect(() => {
    const navigate = () => {
      const nextPathname = window.location.pathname;
      const preserveFactoryScroll =
        pathnameRef.current.startsWith("/factories") &&
        nextPathname.startsWith("/factories");
      pathnameRef.current = nextPathname;
      // Scroll once the new page is on screen (see below), not while the old one is still shown.
      scrollToTopOnCommit.current = !preserveFactoryScroll && !window.location.hash;
      startTransition(() => {
        setDynamicPageHeight(null);
        setPathname(nextPathname);
        setNavigationVersion((version) => version + 1);
      });
    };
    const resize = () => {
      setViewportWidth(document.documentElement.clientWidth);
      setIsMobile(window.matchMedia(MOBILE_QUERY).matches);
    };
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
    // The scrollbar appearing or disappearing changes the width without a resize event.
    const widthObserver = new ResizeObserver(resize);
    widthObserver.observe(document.documentElement);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", intercept);
    return () => {
      window.removeEventListener("popstate", navigate);
      window.removeEventListener("resize", resize);
      widthObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", intercept);
    };
  }, []);

  // Same frame as the page swap, so the old page never visibly jumps to the top first.
  useLayoutEffect(() => {
    if (!scrollToTopOnCommit.current) return;
    scrollToTopOnCommit.current = false;
    window.scrollTo(0, 0);
  }, [navigationVersion]);

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

  // Page-view reporting for the dashboard Overview. Only the first view carries the
  // external referrer; later views are in-site navigation.
  const backendAvailable = useBackendAvailable();
  const firstViewRef = useRef(true);
  useEffect(() => {
    if (isAdmin || !backendAvailable) return;
    const referrer = firstViewRef.current ? document.referrer : "";
    firstViewRef.current = false;
    void fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, referrer }),
      keepalive: true,
    }).catch(() => undefined);
  }, [backendAvailable, isAdmin, pathname]);

  const canvasStyle = useMemo(
    () => (isMobile ? undefined : { height: `${pageHeight * scale}px`, width: `${1920 * scale}px` }),
    [isMobile, pageHeight, scale],
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
        <div className={isMobile ? "design-scale is-mobile" : "design-scale"} style={isMobile ? undefined : { transform: `scale(${scale})` }}>
          <Suspense fallback={null}>
            <PageReveal key={pathname} mobile={isMobile}>
              <PageComponent
                onHeightChange={setDynamicPageHeight}
                pathname={pathname}
              />
            </PageReveal>
          </Suspense>
        </div>
      </main>
    </>
  );
}
