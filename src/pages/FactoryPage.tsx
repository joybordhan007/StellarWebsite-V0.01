import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import LogoMarquee from "../components/LogoMarquee";
import { useContent } from "../content/ContentProvider";
import type { Factory, FactoryMixShare } from "../content/types";

const assetPathPrefix = "/assets/1-2277";
const imgArrowSubdirectoryForward = `${assetPathPrefix}/f356f.svg`;
const imgImage = `${assetPathPrefix}/c1f82.jpg`;
const imgArrowForwardLong = `${assetPathPrefix}/887e7.svg`;
const imgStellarLogo3 = `${assetPathPrefix}/3b80a.svg`;
const imgArrowForwardLong1 = `${assetPathPrefix}/77a61.svg`;
const imgArrowForwardLong2 = `${assetPathPrefix}/7a5e8.svg`;
const imgArrowBack = `${assetPathPrefix}/d25a0.svg`;
const imgArrowForwardLong3 = `${assetPathPrefix}/bdbfe.svg`;
const imgLocationPin = `${assetPathPrefix}/40da2.svg`;

/** Product-mix colours, in order (the design's orange, black and grey, then extras). */
const MIX_COLORS = ["#DEA36A", "#1D1D1D", "#979797", "#C9B8A6", "#5F6B5A"];
const GALLERY_VISIBLE = 7;
const GALLERY_GAP = 16;

function Lines({ text, last = "leading-[1.2]" }: { text: string; last?: string }) {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <p className={index === lines.length - 1 ? last : "leading-[1.2] mb-0"} key={index}>
      {line}
    </p>
  ));
}

/** Ring chart of the product mix: segments start at the top and run clockwise. */
function MixDonut({ shares }: { shares: FactoryMixShare[] }) {
  const radius = 34.41;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <svg aria-hidden="true" className="relative shrink-0 size-[80px]" viewBox="0 0 80 80">
      <circle cx="40" cy="40" fill="none" r={radius} stroke="#D9D9D9" strokeWidth="11.18" />
      {shares.map((share, index) => {
        const length = (Math.max(0, Math.min(share.percent, 100)) / 100) * circumference;
        const segment = (
          <circle
            cx="40"
            cy="40"
            fill="none"
            key={index}
            r={radius}
            stroke={MIX_COLORS[index % MIX_COLORS.length]}
            strokeDasharray={`${length} ${circumference - length}`}
            strokeDashoffset={-offset}
            strokeWidth="11.18"
            transform="rotate(-90 40 40)"
          />
        );
        offset += length;
        return segment;
      })}
    </svg>
  );
}

function Gallery({ factory }: { factory: Factory }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ back: false, forward: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setCanScroll({
        back: track.scrollLeft > 1,
        forward: track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    return () => track.removeEventListener("scroll", update);
  }, [factory.gallery.length]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (track && card) track.scrollBy({ left: direction * (card.offsetWidth + GALLERY_GAP), behavior: "smooth" });
  };

  // Arrows only dim when the row actually scrolls (more photos than fit), as in the design.
  const scrollable = canScroll.back || canScroll.forward;
  const arrowClass = `bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0 transition-opacity disabled:cursor-default ${scrollable ? "disabled:opacity-40" : ""}`;

  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 px-[180px] py-[56px] top-[1722px] w-[1920px]" data-name="Gallery">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap">
          <p className="leading-[1.2]">INSIDE OUR FACTORY</p>
        </div>
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
          <button aria-label="Previous photos" className={arrowClass} disabled={!canScroll.back} onClick={() => scrollBy(-1)} type="button">
            <span className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowBack} />
            </span>
          </button>
          <button aria-label="Next photos" className={arrowClass} disabled={!canScroll.forward} onClick={() => scrollBy(1)} type="button">
            <span className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong3} />
            </span>
          </button>
        </div>
      </div>
      <div className="factory-gallery-track content-stretch flex gap-[16px] items-start relative shrink-0 w-full" ref={trackRef}>
        {factory.gallery.map((item, index) => (
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0"
            key={index}
            style={{ width: `calc((100% - ${(GALLERY_VISIBLE - 1) * GALLERY_GAP}px) / ${GALLERY_VISIBLE})` }}
          >
            <div className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
              <img alt={item.caption} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={item.image} />
            </div>
            <div className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full">
                <p className="leading-[1.2]">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FactoryTabs({ factories, current }: { factories: Factory[]; current: Factory }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-1/2 overflow-clip top-[944px] w-[1560px]" data-name="Factory tabs">
      {factories.map((factory) => {
        const selected = factory.id === current.id;
        const inner = (
          <>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <div className="h-[96px] relative shrink-0 w-[171px]">
                <div className="absolute inset-0 rounded-[6px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={factory.image} />
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] h-full items-start leading-[0] not-italic relative shrink-0 text-left w-[234px]">
                  <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full">
                    <p className="leading-[1.2]">{factory.name}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full">
                    <p className="leading-[1.2]">{factory.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={selected ? imgArrowForwardLong2 : imgArrowForwardLong1} />
            </div>
          </>
        );
        return selected ? (
          <div
            aria-current="page"
            className="bg-[rgba(222,163,106,0.5)] border-3 border-[rgba(222,163,106,0.4)] border-solid content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] shrink-0 w-[504px]"
            key={factory.id}
          >
            {inner}
          </div>
        ) : (
          <a
            className="bg-white content-stretch cursor-pointer drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex h-[118px] items-center justify-between p-[8px] relative rounded-[8px] shrink-0 w-[504px]"
            href={`/factories/${factory.slug}`}
            key={factory.id}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}

function StatRow({ stats }: { stats: Factory["stats"] }) {
  return (
    <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full">
      {stats.map((stat, index) => (
        <div className="contents" key={index}>
          {index > 0 && <div className="bg-[rgba(0,0,0,0.1)] h-[100px] relative shrink-0 w-px" />}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative">
            <img alt="" className="relative shrink-0 size-[48px] object-contain" src={stat.icon} />
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
              <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]">
                <p className="leading-[1.2]">{stat.value}</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase">
                <p className="leading-[1.2]">{stat.label}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureRow({ features }: { features: Factory["features"] }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      {features.map((feature, index) => (
        <div className="contents" key={index}>
          {index > 0 && <div className="bg-[rgba(0,0,0,0.1)] h-[64px] relative shrink-0 w-[1.5px]" />}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[90px] items-center min-w-px relative">
            <img alt="" className="relative shrink-0 size-[40px] object-contain" src={feature.icon} />
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center w-[min-content] whitespace-pre-wrap">
              <Lines text={feature.label} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "View";
};

function Component1({ className, property1 = "View" }: Component1Props) {
  return (
    <div className={className || "bg-[#1d1d1d] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px]"} data-node-id="1:112">
      <div className="h-[18px] overflow-clip relative shrink-0 w-[86px]" data-node-id="1:113" data-name="Frame">
        <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[0] left-0 not-italic text-[#f6f6f6] text-[16px] top-0 whitespace-nowrap" data-node-id="1:114">
          <p className="leading-[1.2] mb-0">LET’S TALK</p>
          <p className="leading-[1.2]">LET’S TALK</p>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="1:115" data-name="Frame">
        <div className="absolute left-0 size-[18px] top-0" data-node-id="1:116" data-name="arrow-subdirectory-forward">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowSubdirectoryForward} />
        </div>
        <div className="absolute left-0 size-[18px] top-[20px]" data-node-id="1:117" data-name="arrow-subdirectory-forward">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowSubdirectoryForward} />
        </div>
      </div>
    </div>
  );
}


/** One page for every factory: /factories/<slug>. Hidden factories fall back to the first visible one. */
export default function FactoryPage({ pathname = "" }: { pathname?: string }) {
  const { items } = useContent("factories");
  const visible = items.filter((factory) => factory.active);
  const listed = visible.length > 0 ? visible : items;
  const slug = pathname.split("/")[2] ?? "";
  const factory = listed.find((item) => item.slug === slug) ?? listed[0];

  if (!factory) return null;

  return (
    <div className="bg-[#fafafa] relative h-[3612px] w-[1920px]" data-name="our factories">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-[-0.5px] h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:2279" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:2280" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" decoding="async" fetchPriority="high" loading="eager" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:2281" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-[305px] w-[999px]" data-node-id="1:2282" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap" data-node-id="1:2283" data-name="Frame">
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:2284">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`People. Products. `}</p>
              <p className="leading-[1.2] whitespace-pre">A Greener Tomorrow.</p>
            </div>
            <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:2285" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2] mb-0 whitespace-pre">{`A LEED Zero–certified green garment factory specializing in high-quality `}</p>
              <p className="leading-[1.2] whitespace-pre">woven garments with a strong focus on sustainability, innovation and ethical manufacturing.</p>
            </div>
          </div>
          <div className="partner-with-us-cta bg-[#dea36a] content-stretch cursor-pointer flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0" data-node-id="1:2286" data-name="Frame">
            <div className="partner-cta-label [word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:2287">
              <span className="partner-cta-label-track">
                <span>Partner With Us</span>
                <span aria-hidden="true">Partner With Us</span>
              </span>
            </div>
            <div className="partner-cta-icon relative shrink-0 size-[24px]" data-node-id="1:2288" data-name="arrow-forward-long">
              <span className="partner-cta-icon-track" aria-hidden="true">
                <img alt="" src={imgArrowForwardLong} />
                <img alt="" src={imgArrowForwardLong} />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start pl-[48px] pr-[180px] py-[48px] right-0" data-node-id="1:2289" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:2290" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:2291" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:2292" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PEOPLE</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:2293" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:2294" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PRODUCTS</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:2295" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:2296" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PLANET</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:2297" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:2298" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">A BRIGHTER TOMORROW</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:2299" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:2300" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:2301" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:2315" data-name="Frame">
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2316" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:2317">
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2318" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:2319">
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2320" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:2321">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2322" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:2323">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <div className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2324" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap" data-node-id="1:2325">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2326" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:2327">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:2328" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:2329">
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <FactoryTabs current={factory} factories={listed} />
      <Gallery factory={factory} />
      <div className="absolute bg-white content-stretch flex gap-[24px] items-start left-0 px-[180px] py-[40px] top-[2243px] w-[1920px]" data-name="Location">
        <div className="bg-white content-stretch flex flex-col gap-[16px] h-[272.5px] items-start p-[16px] relative shrink-0 w-[639px]">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] uppercase w-full">
            <p className="leading-[1.2]">Product Mix</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
            <FeatureRow features={factory.features.slice(0, 3)} />
            <div className="content-stretch flex items-center justify-between px-[29px] relative shrink-0 w-full">
              <div className="bg-[rgba(0,0,0,0.1)] h-[1.5px] relative shrink-0 w-[134px]" />
              <div className="bg-[rgba(0,0,0,0.1)] h-[1.5px] relative shrink-0 w-[134px]" />
              <div className="bg-[rgba(0,0,0,0.1)] h-[1.5px] relative shrink-0 w-[134px]" />
            </div>
            <FeatureRow features={factory.features.slice(3, 6)} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative self-stretch shrink-0 w-[635px]">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] uppercase w-full">
            <p className="leading-[1.2]">Factory</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d] w-[205px]">
                <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[20px] w-full">
                  <p className="leading-[1.2]">{factory.legalName}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[14px] w-full">
                  <p className="leading-[1.2]">{factory.region}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[9.38%_18%_3.13%_18.75%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocationPin} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">
                  <Lines text={factory.address} />
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 h-[206px] ml-0 mt-0 relative row-1 w-[355px]">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(factory.mapQuery || factory.address.replace(/\n/g, " "))}&output=embed`}
                  title={`${factory.name} factory location`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative self-stretch shrink-0 w-[238px]">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] uppercase w-full">
            <p className="leading-[1.2]">Distance Measure</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
            {factory.distances.map((distance, index) => (
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" key={index}>
                <img alt="" className="relative shrink-0 size-[32px] object-contain" src={distance.icon} />
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#4a4a4a] text-[14px]">
                  <p className="leading-[1.2]">{distance.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-0 px-[180px] top-[2695.5px] w-[1920px]" data-name="Certifications">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap">
          <p className="leading-[1.2]">{`CERTIFICATIONS & STANDARDS`}</p>
        </div>
        <LogoMarquee className="h-[120px] relative shrink-0 w-[1560px]" label={`${factory.name} certifications`} logos={factory.certifications} />
      </div>
      <div id="factory-profile" className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-[1162px] w-[1920px]" data-name="Profile" style={{ scrollMarginTop: "110px" }}>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[48px] text-center uppercase w-full">
          <p className="leading-[1.2]">{factory.name}</p>
        </div>
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[180px] py-[40px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-[504px]">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]">
              <p className="leading-[1.2]">{factory.overview.eyebrow}</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-[501px]">
              <p className="leading-[1.2]">{factory.overview.heading}</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content] whitespace-pre-wrap">
              <Lines text={factory.overview.description} />
            </div>
          </div>
          <div className="bg-[#f9f7f5] content-stretch flex flex-col gap-[8px] h-[290px] items-center justify-center relative shrink-0 w-[636px]">
            <StatRow stats={factory.stats.slice(0, 3)} />
            <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-[550px]" />
            <StatRow stats={factory.stats.slice(3, 6)} />
          </div>
          <div className="flex flex-row items-center self-stretch">
            {/* The design tightens this panel when there are more than four strengths. */}
            <div
              className={`bg-[#f9f7f5] content-stretch flex flex-col items-center p-[8px] relative shrink-0 w-[372px] ${factory.keyStrengths.length > 4 ? "gap-[22px]" : "gap-[37px] h-full"}`}
            >
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-full">
                  <p className="leading-[1.2]">Product Mix</p>
                </div>
                <div className="content-stretch flex gap-[62px] items-center relative shrink-0 w-full">
                  <MixDonut shares={factory.productMix} />
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[158px]">
                    {factory.productMix.map((share, index) => (
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" key={index}>
                        <span className="relative rounded-full shrink-0 size-[8px]" style={{ background: MIX_COLORS[index % MIX_COLORS.length] }} />
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[1.2]">{`${share.percent}%: ${share.label}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-[min-content]">
                  <p className="leading-[1.2]">Key Strengths</p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  {factory.keyStrengths.map((strength, index) => (
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" key={index}>
                      <span className="relative rounded-full shrink-0 size-[8px]" style={{ background: MIX_COLORS[0] }} />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[1.2]">{strength}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
