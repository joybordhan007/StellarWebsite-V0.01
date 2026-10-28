import type { CSSProperties } from "react";
import AchievementsBar from "../components/AchievementsBar";
import Footer from "../components/Footer";
import LogoMarquee from "../components/LogoMarquee";
import { useContent } from "../content/ContentProvider";
import type { Capability, Product } from "../content/types";

const assetPathPrefix = "/assets/1-641";
const imgArrowSubdirectoryForward = `${assetPathPrefix}/f356f.svg`;
const imgImage = `${assetPathPrefix}/afbbf.jpg`;
const imgRectangle9136 = `${assetPathPrefix}/69cf3.jpg`;
const imgRectangle9137 = `${assetPathPrefix}/2504f.png`;
const imgArrowForwardLong = `${assetPathPrefix}/887e7.svg`;
const imgStellarLogo3 = `${assetPathPrefix}/3b80a.svg`;
const imgArrowForwardLong1 = `${assetPathPrefix}/bdbfe.svg`;
const imgArrowForwardLong2 = `${assetPathPrefix}/77a61.svg`;
const imgVector = `${assetPathPrefix}/ee01d.svg`;
const imgGroup18 = `${assetPathPrefix}/86960.svg`;
const imgLayer1 = `${assetPathPrefix}/0c357.svg`;
const imgFrame3 = `${assetPathPrefix}/6576e.svg`;
const imgGroup19 = `${assetPathPrefix}/0df6b.svg`;

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

// Each card is 372px wide with a 24px gap.
const FASHION_CARD_STRIDE = 396;
// Seamless looping needs the cards to be wider than the 1164px viewport.
const FASHION_MIN_LOOP_CARDS = 3;

function FashionCarousel({ className }: { className: string }) {
  const { products, homeProductIds } = useContent("catalog");
  const cards = homeProductIds
    .map((id) => products.find((product) => product.id === id && product.active))
    .filter((product): product is Product => Boolean(product));
  const loops = cards.length >= FASHION_MIN_LOOP_CARDS;
  const rendered = loops ? [...cards, ...cards] : cards;
  const style = {
    "--fashion-cycle": `-${cards.length * FASHION_CARD_STRIDE}px`,
    "--fashion-duration": `${cards.length * 4}s`,
  } as CSSProperties;

  return (
    <div
      aria-label="Fashion collection images"
      className={className}
      data-node-id="1:132"
      data-static={loops ? undefined : ""}
      role="region"
      style={style}
      tabIndex={0}
    >
      {rendered.map((product, index) => (
        <div
          aria-hidden={index >= cards.length || undefined}
          className="absolute bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center rounded-[8px] top-0 w-[372px]"
          key={index}
          style={{ left: index * FASHION_CARD_STRIDE }}
        >
          <div className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
            <img alt={product.name} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={product.image} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] uppercase w-full">
              <p className="leading-[1.2]">{product.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const brands = useContent("brands");
  const factories = useContent("factories").items.filter((factory) => factory.active);
  const capabilities = useContent("capabilities");
  const homeCapabilities = capabilities.homeIds
    .map((id) => capabilities.items.find((item) => item.id === id && item.active))
    .filter((item): item is Capability => Boolean(item))
    .slice(0, 6);

  return (
    <div className="bg-[#fafafa] relative h-[5565px] w-[1920px]" data-node-id="1:641" data-name="Home">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:643" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:644" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" decoding="async" fetchPriority="high" loading="eager" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:645" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 0%, rgba(29, 29, 29, 0) 38.932%, rgba(29, 29, 29, 0) 72.244%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-[305px] w-[999px]" data-node-id="1:646" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap" data-node-id="1:647" data-name="Frame">
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:648">
              <p className="leading-[1.2] mb-0">PEOPLE. PRODUCTS.</p>
              <p className="leading-[1.2]">PLANET.</p>
            </div>
            <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:649" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2] mb-0">A more sustainable fashion industry.</p>
              <p className="leading-[1.2]">is within reach.</p>
            </div>
          </div>
          <div className="partner-with-us-cta bg-[#dea36a] content-stretch cursor-pointer flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0" data-node-id="1:650" data-name="Frame">
            <div className="partner-cta-label [word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:651">
              <span className="partner-cta-label-track">
                <span>Partner With Us</span>
                <span aria-hidden="true">Partner With Us</span>
              </span>
            </div>
            <div className="partner-cta-icon relative shrink-0 size-[24px]" data-node-id="1:652" data-name="arrow-forward-long">
              <span className="partner-cta-icon-track" aria-hidden="true">
                <img alt="" src={imgArrowForwardLong} />
                <img alt="" src={imgArrowForwardLong} />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start p-[48px] right-[-70px] w-[421px]" data-node-id="1:653" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:654" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:655" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:656" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">BETTER</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:657" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:658" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">FASHION</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:659" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:660" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">BRIGHTER</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:661" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:662" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">TOMORROW</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:663" />
          </div>
        </div>
      </div>
      <AchievementsBar page="home" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:771" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:772" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:786" data-name="Frame">
          <div className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:787" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap" data-node-id="1:788">
              <p className="leading-[1.2]">Home</p>
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:789" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:790">
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:791" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:792">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:793" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:794">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:795" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:796">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:797" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:798">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:799" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:800">
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-1/2 px-[180px] py-[40px] top-[1264px] w-[1920px]" data-node-id="1:802" data-name="Frame">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[372px]" data-node-id="1:803" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:804" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:805">
              <p className="leading-[1.2]">WHAT WE MAKE</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full" data-node-id="1:806">
              <p className="leading-[1.2]">FASHION FOR EVERY GENERATION</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:807">
              <p className="leading-[1.2]">Versatile, high-quality apparel across menswear, womenswear and kidswear for global markets</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="1:808" data-name="Frame">
            <a
              aria-label="View all products"
              className="content-stretch flex gap-[8px] items-center border-b border-[#dea36a] pb-[4px] relative shrink-0 font-['Inter:Medium'] font-medium text-[#1d1d1d] text-[14px] uppercase whitespace-nowrap"
              href="/products"
            >
              <span>VIEW ALL</span>
              <img alt="" className="h-[18px] w-[18px]" src={imgArrowForwardLong1} />
            </a>
          </div>
        </div>
        <FashionCarousel className="fashion-card-viewport h-[497px] relative shrink-0 w-[1164px]" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[178px] py-[56px] top-[1941px] w-[1920px]" data-node-id="1:814" data-name="Frame">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:815" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0" data-node-id="1:816" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:817">
              <p className="leading-[1.2]">OUR CAPABILITIES</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap" data-node-id="1:818">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`IDEAS TO `}</p>
              <p className="leading-[1.2] whitespace-pre">IMPACT</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[546px]" data-node-id="1:819">
            <p className="leading-[1.2]">An integrated approach from design and sourcing to manufacturing and delivery, with a focus on quality, innovation and sustainability</p>
          </div>
          <a aria-label="View all capabilities" className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 text-inherit no-underline" data-node-id="1:820" data-name="Frame" href="/capabilities#integrated-capabilities">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:821" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:822">
                <p className="leading-[1.2]">VIEW ALL CAPABILITIES</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="1:823" data-name="arrow-forward-long">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong2} />
              </div>
            </div>
            <div className="h-[3px] relative shrink-0 w-[153px]" data-node-id="1:824" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </a>
        </div>
        <div className="home-capabilities-grid content-stretch gap-[24px] items-center p-[2px] relative shrink-0 w-full" data-node-id="1:825" data-name="Frame">
          {homeCapabilities.map((capability) => (
            <div className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]" key={capability.id}>
              <div className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={capability.image} />
              </div>
              <div className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full">
                  <p className="leading-[1.2]">{capability.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[178px] py-[80px] top-[2623px] w-[1920px]" data-node-id="1:858" data-name="Frame">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:859" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0" data-node-id="1:860" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:861">
              <p className="leading-[1.2]">OUR FACTORIES</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap" data-node-id="1:862">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`A GLOBAL `}</p>
              <p className="leading-[1.2] whitespace-pre">FOOTPRINT.</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[546px]" data-node-id="1:863">
            <p className="leading-[1.2]">Three strategic manufacturing facilities across Bangladesh and India, combining scale, expertise and responsible practices.</p>
          </div>
          <a aria-label="View our factories" className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 text-inherit no-underline" data-node-id="1:864" data-name="Frame" href="/factories">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:865" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:866">
                <p className="leading-[1.2]">VIEW OUR FACTORIES</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="1:867" data-name="arrow-forward-long">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong2} />
              </div>
            </div>
            <div className="h-[3px] relative shrink-0 w-[153px]" data-node-id="1:868" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </a>
        </div>
        <div className="content-stretch flex gap-[24px] items-center overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:869" data-name="Frame">
          {factories.map((factory) => (
            <a aria-label={`${factory.name} factory profile`} className="factory-profile-card bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[504px]" href={`/factories/${factory.slug}#factory-profile`} key={factory.id}>
              <div className="h-[430px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={factory.image} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full">
                    <p className="leading-[1.2]">{factory.name}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full">
                    <p className="leading-[1.2]">{factory.location}</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#1d1d1d] text-[16px] w-full">
                  <p className="leading-[1.2]">{[factory.certification, factory.specialty].filter(Boolean).join(" | ")}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[4538px] w-[1920px]" data-node-id="1:891" data-name="Frame">
        <div className="flex flex-row items-center self-stretch" data-node-id="1:892">
          <div className="bg-white content-stretch flex flex-col gap-[24px] h-full items-start justify-center pl-[180px] pr-[24px] relative shrink-0 w-[576px]" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:893" data-name="Frame">
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:894">
                <p className="leading-[1.2]">SUSTAINABILITY</p>
              </div>
              <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full whitespace-pre-wrap" data-node-id="1:895">
                <p className="leading-[1.2] mb-0">{`RESPONSIBLE FASHION. `}</p>
                <p className="leading-[1.2]">REAL IMPACT.</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:896">
                <p className="leading-[1.2]">We are committed to people, the planet and a more sustainable fashion industry.</p>
              </div>
            </div>
            <a aria-label="Our sustainability approach" className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 text-inherit no-underline" data-node-id="1:897" data-name="Frame" href="/sustainability">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:898" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:899">
                  <p className="leading-[1.2]">OUR SUSTAINABILITY APPROACH</p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-node-id="1:900" data-name="arrow-forward-long">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong2} />
                  </div>
              </div>
              <div className="h-[3px] relative shrink-0 w-[153px]" data-node-id="1:901" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            </a>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[434px] min-w-px relative" data-node-id="1:902">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9136} />
        </div>
        <div className="flex flex-row items-center self-stretch" data-node-id="1:903">
          <div className="bg-[#1d4222] content-stretch flex flex-col gap-[32px] h-full items-start justify-center pl-[24px] pr-[180px] relative shrink-0 w-[777px]" data-name="Frame">
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:904" data-name="Frame">
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0" data-node-id="1:905" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:906" data-name="Layer_1">
                  <div className="absolute inset-[10.42%_6.94%_6.25%_4.17%]" data-node-id="1:907" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup18} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0" data-node-id="1:911" data-name="Frame">
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full" data-node-id="1:912">
                  <p className="leading-[1.2]">PEOPLE</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full" data-node-id="1:913">
                  <p className="leading-[1.2]">Safe, fair and empowered communities</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:914" data-name="Frame">
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0" data-node-id="1:915" data-name="Frame">
                <div className="relative shrink-0 size-[24px]" data-node-id="1:916" data-name="Layer_1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0" data-node-id="1:921" data-name="Frame">
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full" data-node-id="1:922">
                  <p className="leading-[1.2]">PRODUCTS</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full" data-node-id="1:923">
                  <p className="leading-[1.2]">Low-impact, long-lasting fashion</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:924" data-name="Frame">
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0" data-node-id="1:925" data-name="Frame">
                <div className="relative shrink-0 size-[24px]" data-node-id="1:926" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0" data-node-id="1:928" data-name="Frame">
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full" data-node-id="1:929">
                  <p className="leading-[1.2]">PLANET</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full" data-node-id="1:930">
                  <p className="leading-[1.2]">Efficient use of resources and lower emissions</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:931" data-name="Frame">
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0" data-node-id="1:932" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:933" data-name="Capa_1">
                  <div className="absolute inset-[9.42%_1.46%]" data-node-id="1:934" data-name="Group">
                    <div className="absolute inset-[-2.05%_-1.72%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup19} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0" data-node-id="1:952" data-name="Frame">
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full" data-node-id="1:953">
                  <p className="leading-[1.2]">PARTNERSHIPS</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full" data-node-id="1:954">
                  <p className="leading-[1.2]">Stronger together for lasting change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[180px] top-[3614px] w-[1920px]" data-node-id="1:955" data-name="Frame">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[40px] w-[min-content]" data-node-id="1:956">
          <p className="leading-[1.2]">TRUSTED BY GLOBAL BRANDS</p>
        </div>
        <LogoMarquee className="h-[120px] relative shrink-0 w-[1560px]" label="Customer brand logos" logos={brands.logos} />
      </div>
      <div className="-translate-x-1/2 absolute drop-shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-[500px] left-1/2 overflow-clip rounded-[8px] top-[3938px] w-[1560px]" data-node-id="1:958" data-name="Frame">
        <div className="absolute bg-white h-[500px] left-0 top-0 w-[1562px]" data-node-id="1:959" />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[124px] top-1/2 w-[719px]" data-node-id="1:960" data-name="Frame">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:961" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2f2f2f] text-[16px] w-[min-content]" data-node-id="1:962">
              <p className="leading-[1.2]">OUR COMMITMENT</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[40px] w-[min-content] whitespace-pre-wrap" data-node-id="1:963">
              <p className="leading-[1.2] mb-0">{`LET’S BUILD `}</p>
              <p className="leading-[1.2]">A BRIGHTER TOMORROW</p>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:964" />
          </div>
          <Component1 className="bg-[#1d1d1d] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
        </div>
        <div className="absolute h-[500px] left-[664px] top-0 w-[814px]" data-node-id="1:966">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9137} />
        </div>
      </div>
    </div>
  );
}