import { ReactNode, useEffect, useRef } from "react";

const MAX_STAGGER_STEPS = 4;
const STAGGER_MS = 90;
// Keep in sync with the .reveal transition duration in index.css.
const REVEAL_DURATION_MS = 700;
const IMAGE_FADE_MS = 500;
// Fraction of the viewport height a block's top must pass before it reveals.
const REVEAL_TRIGGER = 0.92;

function clearReveal(element: HTMLElement) {
  element.classList.remove("reveal", "reveal-slide", "reveal-fade", "reveal-visible");
  element.style.removeProperty("--reveal-delay");
}

function isRenderable(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;
  if (element.offsetWidth === 0 || element.offsetHeight === 0) return false;
  return getComputedStyle(element).display !== "none";
}

// Elements that already run a transform animation (marquees) or carry their
// own transform only fade, so the reveal never fights their positioning.
function canSlide(element: HTMLElement) {
  const style = getComputedStyle(element);
  return style.transform === "none" && style.animationName === "none";
}

// Reveal the content blocks of each top-level page section. A section with a
// single child is revealed as a whole.
function collectTargets(page: Element) {
  const groups: HTMLElement[][] = [];

  for (const section of Array.from(page.children)) {
    if (!isRenderable(section)) continue;
    const blocks = Array.from(section.children).filter(isRenderable);
    groups.push(blocks.length > 1 ? blocks : [section]);
  }

  return groups;
}

function fadeInImagesOnLoad(root: HTMLElement) {
  const cleanups: (() => void)[] = [];

  root.querySelectorAll("img").forEach((image) => {
    if (image.complete) return;
    let timer = 0;
    const done = () => {
      image.classList.remove("reveal-image-pending");
      timer = window.setTimeout(() => image.classList.remove("reveal-image"), IMAGE_FADE_MS);
    };
    image.classList.add("reveal-image", "reveal-image-pending");
    image.addEventListener("load", done, { once: true });
    image.addEventListener("error", done, { once: true });
    cleanups.push(() => {
      image.removeEventListener("load", done);
      image.removeEventListener("error", done);
      window.clearTimeout(timer);
      image.classList.remove("reveal-image", "reveal-image-pending");
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

export default function PageReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const page = root?.firstElementChild;
    if (!root || !page) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanupImages = fadeInImagesOnLoad(root);
    const viewportBottom = window.innerHeight;
    const revealed: HTMLElement[] = [];

    for (const group of collectTargets(page)) {
      let step = 0;
      for (const element of group) {
        // Only hide what the visitor cannot see yet, so nothing on screen flickers.
        if (element.getBoundingClientRect().top < viewportBottom) continue;

        element.classList.add("reveal", canSlide(element) ? "reveal-slide" : "reveal-fade");
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(step, MAX_STAGGER_STEPS) * STAGGER_MS}ms`,
        );
        step += 1;
        revealed.push(element);
      }
    }

    const timers = new Set<number>();
    let pending = revealed;
    let frame = 0;

    const show = (element: HTMLElement) => {
      element.classList.add("reveal-visible");
      // Drop the reveal classes afterwards so the element's own hover
      // transitions are no longer overridden.
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        clearReveal(element);
      }, REVEAL_DURATION_MS + MAX_STAGGER_STEPS * STAGGER_MS);
      timers.add(timer);
    };

    // A scroll check rather than IntersectionObserver: it also reveals blocks
    // the visitor jumped past (End key, anchors) and blocks at the very bottom
    // of the page that never cross the trigger line.
    const check = () => {
      frame = 0;
      const triggerLine = window.innerHeight * REVEAL_TRIGGER;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      pending = pending.filter((element) => {
        if (!atBottom && element.getBoundingClientRect().top > triggerLine) return true;
        show(element);
        return false;
      });
      if (pending.length === 0) stopListening();
    };
    const scheduleCheck = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const stopListening = () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
    };

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    scheduleCheck();

    return () => {
      stopListening();
      cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      cleanupImages();
      revealed.forEach(clearReveal);
    };
  }, []);

  return (
    <div className="page-reveal" ref={rootRef}>
      {children}
    </div>
  );
}
