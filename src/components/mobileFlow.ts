// Phone layout for the 1920px Figma pages. Instead of shrinking the whole canvas to ~20%,
// the page is measured once in its desktop layout and elements get a few `data-m*`
// markers; CSS under `.m-flow` (index.css) turns those into a one-column flow: sections
// stack in their desktop order, wide rows wrap or stack, background photos stay behind
// their text, big paddings, gaps and headings shrink. Removing `.m-flow` restores the
// desktop layout exactly. Markup can override a block with `data-mobile="hide | stack | wrap | full | keep"`.

export const MOBILE_MAX_WIDTH = 1023;
const DESIGN_WIDTH = 1920;
// Absolutely positioned blocks at least this wide (desktop px) join the flow.
const FLOW_MIN_WIDTH = 480;
// Rows of blocks at least this wide stack; rows of narrower blocks wrap two by two.
const STACK_MIN_WIDTH = 300;
const MARKERS = [
  "data-mflow",
  "data-mbg",
  "data-mautoh",
  "data-mpad",
  "data-mpadv",
  "data-mgap",
  "data-mfs",
  "data-mstack",
  "data-mwrap",
  "data-mfull",
  "data-mhalf",
  "data-mws",
  "data-mkeep",
  "data-mhide",
  "data-mgrid",
  "data-minset",
  "data-mimg",
  "data-mspace",
  "data-mgridfit",
  "data-mcenter",
  "data-mhero",
  "data-mhero-text",
  "data-mhero-tag",
  "data-mhero-btn",
  "data-mhead",
];
const VARS = ["--mfs", "--mgap", "--mpadv", "--mminh", "--mar", "order"];


function mobileFontSize(size: number) {
  if (size >= 64) return Math.max(34, Math.round(size * 0.45));
  if (size >= 40) return 28;
  if (size >= 32) return 24;
  if (size >= 24) return 20;
  if (size >= 20) return 18;
  return 0;
}

function clearMarkers(root: HTMLElement) {
  for (const marker of MARKERS) root.querySelectorAll(`[${marker}]`).forEach((element) => element.removeAttribute(marker));
  root.querySelectorAll<HTMLElement>("[data-mvars]").forEach((element) => {
    VARS.forEach((name) => element.style.removeProperty(name));
    element.removeAttribute("data-mvars");
  });
}

function setVar(element: HTMLElement, name: string, value: string) {
  element.style.setProperty(name, value);
  element.setAttribute("data-mvars", "");
}

const hasText = (element: HTMLElement) => Boolean(element.textContent?.trim());

/** Measures the page in its desktop layout and marks it for the phone layout. */
export function applyMobileFlow(page: HTMLElement, canvas: HTMLElement) {
  page.classList.remove("m-flow");
  clearMarkers(page);
  const previousWidth = canvas.style.width;
  canvas.style.width = `${DESIGN_WIDTH}px`;

  type Box = { element: HTMLElement; style: CSSStyleDeclaration; width: number; height: number; left: number };
  const boxes: Box[] = [];
  page.querySelectorAll<HTMLElement>("*").forEach((element) => {
    if (!(element instanceof HTMLElement)) return;
    boxes.push({ element, style: getComputedStyle(element), width: element.offsetWidth, height: element.offsetHeight, left: element.offsetLeft });
  });
  const sizeOf = new Map(boxes.map((box) => [box.element, box]));

  // Sections stack in their desktop order (top to bottom); tiny loose decorations go.
  (Array.from(page.children) as HTMLElement[])
    .map((section, index) => ({ section, index, top: section.offsetTop, left: section.offsetLeft, width: section.offsetWidth, height: section.offsetHeight }))
    .sort((a, b) => a.top - b.top || a.index - b.index)
    .forEach(({ section, left, width, height }, order) => {
      setVar(section, "order", String(order));
      if (width < FLOW_MIN_WIDTH || height === 0) return section.setAttribute("data-mhide", "");
      section.setAttribute("data-mflow", "");
      const style = getComputedStyle(section);
      if (Math.max(parseFloat(style.paddingTop), parseFloat(style.paddingBottom)) < 24) section.setAttribute("data-mspace", "");
      if (left >= 40 && parseFloat(style.paddingLeft) < 16) section.setAttribute("data-minset", "");
    });

  const kept = new Set<Element>();
  for (const { element, style, width, height, left } of boxes) {
    const parent = element.parentElement as HTMLElement;
    // Moving strips (marquees) and scrollers keep their own widths.
    if (style.animationName !== "none" || kept.has(parent)) {
      element.setAttribute("data-mkeep", "");
      kept.add(element);
    }
    if (style.overflowX === "auto" || style.overflowX === "scroll") Array.from(element.children).forEach((child) => kept.add(child));
    // `data-mobile="keep"` (charts) keeps its inner layout as designed.
    if (kept.has(element) || element.closest("[data-mobile~=keep]")) continue;

    // Wide blocks, and text panels of a real size, leave their absolute spot and join the flow.
    const panel = width >= 200 && height >= 100 && hasText(element);
    if (style.position === "absolute" && (width >= FLOW_MIN_WIDTH || panel) && parent !== page) {
      const parentBox = sizeOf.get(parent);
      const fillsParent = parentBox && width >= parentBox.width * 0.9 && height >= parentBox.height * 0.9;
      if (fillsParent && !hasText(element)) {
        // A background layer: it stays behind whatever flows in front of it.
        element.setAttribute("data-mbg", "");
        if (parentBox && parent.getAttribute("data-mbg") === null) {
          parent.setAttribute("data-mautoh", "");
          setVar(parent, "--mminh", `${Math.round(Math.min(560, parentBox.height * 0.6))}px`);
        }
        continue;
      }
      element.setAttribute("data-mflow", "");
      if (left >= 40 && parseFloat(style.paddingLeft) < 16) element.setAttribute("data-minset", "");
      if (!hasText(element) && element.querySelector("img")) {
        element.setAttribute("data-mimg", "");
        setVar(element, "--mar", `${width} / ${Math.max(1, height)}`);
      }
      if (parent !== page && parent.getAttribute("data-mbg") === null) parent.setAttribute("data-mautoh", "");
    }

    const padX = Math.max(parseFloat(style.paddingLeft), parseFloat(style.paddingRight));
    if (padX >= 48) element.setAttribute("data-mpad", "");
    const padY = Math.max(parseFloat(style.paddingTop), parseFloat(style.paddingBottom));
    if (padY >= 48) {
      element.setAttribute("data-mpadv", "");
      setVar(element, "--mpadv", `${Math.round(Math.min(48, padY * 0.5))}px`);
    }

    const gap = parseFloat(style.columnGap) || parseFloat(style.rowGap) || 0;
    if (gap >= 32) {
      element.setAttribute("data-mgap", "");
      setVar(element, "--mgap", `${Math.round(Math.max(16, gap * 0.4))}px`);
    }

    const fontSize = mobileFontSize(parseFloat(style.fontSize));
    if (fontSize && element.childElementCount === 0 && hasText(element)) {
      element.setAttribute("data-mfs", "");
      setVar(element, "--mfs", `${fontSize}px`);
    }

    if ((style.whiteSpace === "nowrap" || style.whiteSpace === "pre") && (width > 100 || (element.textContent?.trim().length ?? 0) > 12)) {
      element.setAttribute("data-mws", "");
      // Text that was centred as one line keeps its wrapped lines centred.
      const parentStyle = sizeOf.get(parent)?.style;
      if (parentStyle && parentStyle.flexDirection.startsWith("column") && parentStyle.alignItems === "center") element.setAttribute("data-mcenter", "");
    }

    if (style.display === "grid" && style.gridTemplateColumns.split(" ").length >= 3) element.setAttribute("data-mgrid", "");
    // One-cell content-sized grids around a photo or map follow the column width instead.
    if (style.display.endsWith("grid") && width >= STACK_MIN_WIDTH && style.gridTemplateColumns.split(" ").length === 1) element.setAttribute("data-mgridfit", "");

    const isRow = (style.display === "flex" || style.display === "inline-flex") && style.flexDirection.startsWith("row");
    if (isRow && element.childElementCount > 1 && width > 400 && !element.hasAttribute("data-mobile")) {
      const children = (Array.from(element.children) as HTMLElement[]).filter((child) => (sizeOf.get(child)?.width ?? 0) > 0);
      const widths = children.map((child) => sizeOf.get(child)?.width ?? 0);
      const heights = children.map((child) => sizeOf.get(child)?.height ?? 0);
      // Hairline dividers between items make no sense once the row wraps.
      const isDivider = (index: number) => widths[index] <= 3 || heights[index] <= 3;
      const items = children.filter((_, index) => !isDivider(index));
      const itemWidths = widths.filter((_, index) => !isDivider(index));
      const widest = Math.max(0, ...itemWidths);
      const average = itemWidths.reduce((sum, value) => sum + value, 0) / Math.max(1, itemWidths.length);
      const total = itemWidths.reduce((sum, value) => sum + value, 0);
      // An icon next to its text is not a row of blocks: leave it alone.
      const blocks = itemWidths.filter((value) => value >= 100).length;
      if (blocks < 2) continue;
      // A row of photos only: two per row, each keeping its proportions.
      if (items.every((child) => !hasText(child) && child.querySelector("img"))) {
        element.setAttribute("data-mwrap", "");
        items.forEach((child, index) => {
          child.setAttribute("data-mhalf", "");
          child.setAttribute("data-mimg", "");
          setVar(child, "--mar", `${itemWidths[index]} / ${Math.max(1, sizeOf.get(child)?.height ?? 1)}`);
        });
        continue;
      }
      // A heading row spread across the page (title · text · link) reads top to bottom.
      const headingRow = style.justifyContent === "space-between" && items.length <= 4 && items.every(hasText) && (sizeOf.get(element)?.height ?? 0) < 260;
      if (headingRow || (widest >= STACK_MIN_WIDTH && (items.length <= 2 || average >= 360))) {
        element.setAttribute("data-mstack", "");
        if (headingRow) element.setAttribute("data-mhead", "");
        items.forEach((child, index) => itemWidths[index] >= STACK_MIN_WIDTH && child.setAttribute("data-mfull", ""));
      } else if (total > 380) {
        element.setAttribute("data-mwrap", "");
        items.forEach((child) => child.setAttribute("data-mhalf", ""));
      } else continue;
      children.forEach((child, index) => isDivider(index) && child.setAttribute("data-mhide", ""));
    }
  }

  markHero(page, sizeOf);

  canvas.style.width = previousWidth;
  page.classList.add("m-flow");
}

/**
 * The page hero (first section, a photo with text over it) gets a compact phone layout: about half
 * the screen tall, the heading/text/button block at the bottom and the slogan box as a slim strip.
 */
function markHero(page: HTMLElement, sizeOf: Map<HTMLElement, { style: CSSStyleDeclaration; height: number }>) {
  const hero = (Array.from(page.children) as HTMLElement[])
    .filter((section) => section.hasAttribute("data-mflow"))
    .sort((a, b) => Number(a.style.order) - Number(b.style.order))[0];
  if (!hero || !hero.querySelector(":scope > [data-mbg]")) return;
  const blocks = (Array.from(hero.children) as HTMLElement[]).filter((child) => child.hasAttribute("data-mflow") && hasText(child));
  if (!blocks.length) return;
  hero.setAttribute("data-mhero", "");
  const [text, ...tags] = blocks;
  text.setAttribute("data-mhero-text", "");
  text.querySelectorAll<HTMLElement>("*").forEach((element) => {
    const box = sizeOf.get(element);
    if (!box) return;
    const size = parseFloat(box.style.fontSize);
    if (element.childElementCount === 0 && hasText(element)) {
      element.setAttribute("data-mfs", "");
      setVar(element, "--mfs", size >= 40 ? "26px" : size >= 18 ? "15px" : "14px");
    }
    const filled = box.style.backgroundColor !== "rgba(0, 0, 0, 0)" && box.style.backgroundColor !== "transparent";
    if (filled && box.height >= 40 && box.height <= 80 && hasText(element)) element.setAttribute("data-mhero-btn", "");
  });
  tags.forEach((tag) => {
    tag.setAttribute("data-mhero-tag", "");
    tag.querySelectorAll<HTMLElement>("*").forEach((element) => {
      const box = sizeOf.get(element);
      if (box && box.height <= 3) element.setAttribute("data-mhide", "");
      else if (element.childElementCount === 0 && hasText(element)) {
        element.setAttribute("data-mfs", "");
        setVar(element, "--mfs", "11px");
      }
    });
  });
}

export function removeMobileFlow(page: HTMLElement) {
  page.classList.remove("m-flow");
  clearMarkers(page);
}
