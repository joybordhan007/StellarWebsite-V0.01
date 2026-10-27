import { useEffect, useState } from "react";
import { useContent } from "../content/ContentProvider";
import Footer from "../components/Footer";

const assetPathPrefix = "/assets/1-4402";
const imgArrowSubdirectoryForward = `${assetPathPrefix}/f356f.svg`;
const imgImage = `${assetPathPrefix}/730ef.jpg`;
const imgArrowForwardLong = `${assetPathPrefix}/887e7.svg`;
const imgStellarLogo3 = `${assetPathPrefix}/aa512.svg`;

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

type ProductsProps = {
  onHeightChange?: (height: number) => void;
};

export default function Products({ onHeightChange }: ProductsProps) {
  const catalog = useContent("catalog");
  const activeProducts = catalog.products.filter((product) => product.active);
  // Categories without any visible product would be empty tabs, so they are left out.
  const categories = catalog.categories.filter((category) =>
    activeProducts.some((product) => product.categoryId === category.id),
  );
  const [selectedId, setSelectedId] = useState(categories[0]?.id);
  const selectedCategory = categories.find((category) => category.id === selectedId) ?? categories[0];
  const items = activeProducts.filter((product) => product.categoryId === selectedCategory?.id);
  const rows = Math.max(1, Math.ceil(items.length / 4));
  const pageHeight = Math.max(
    3895,
    1070 + 38 + 32 + 46 + 40 + rows * 476 + (rows - 1) * 24 + 100 + 593,
  );

  useEffect(() => {
    onHeightChange?.(pageHeight);
  }, [onHeightChange, pageHeight]);

  return (
    <div className="bg-[#fafafa] relative h-[3895px] w-[1920px]" style={{ height: `${pageHeight}px` }} data-node-id="1:4402" data-name="Products">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:4404" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:4405" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" decoding="async" fetchPriority="high" loading="eager" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:4406" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-1/2 w-[999px]" data-node-id="1:4407" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap" data-node-id="1:4408" data-name="Frame">
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:4409">
              <p className="leading-[1.2]">FASHION WITHOUT LIMITS</p>
            </div>
            <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:4410" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2] mb-0 whitespace-pre">{`A versatile product portfolio across menswear, womenswear and kidswear `}</p>
              <p className="leading-[1.2] whitespace-pre">designed and manufactured in our world-class facilities in Bangladesh and India.</p>
            </div>
          </div>
          <a aria-label="Let's Talk" className="hero-talk-cta bg-[#dea36a] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0" data-node-id="1:4411" data-name="Frame" href="/contact">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:4412">
              <span className="hero-talk-label-viewport">
                <span className="hero-talk-label-track">
                  <span>Let's Talk</span>
                  <span aria-hidden="true">Let's Talk</span>
                </span>
              </span>
            </div>
            <div className="hero-talk-icon relative shrink-0 size-[24px]" data-node-id="1:4413" data-name="arrow-forward-long">
              <span className="hero-talk-icon-track" aria-hidden="true">
                <img alt="" src={imgArrowForwardLong} />
                <img alt="" src={imgArrowForwardLong} />
              </span>
            </div>
          </a>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start pl-[48px] pr-[64px] py-[48px] right-0 w-[439px]" data-node-id="1:4414" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:4415" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4416" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4417" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PEOPLE</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4418" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4419" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PRODUCTS</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4420" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4421" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PLANET</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4422" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4423" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PARTNERSHIPS</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:4424" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:4425" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:4426" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:4440" data-name="Frame">
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4441" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4442">
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4443" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4444">
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4445" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4446">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4447" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4448">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4449" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4450">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4451" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4452">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <div className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4453" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap" data-node-id="1:4454">
              <p className="leading-[1.2]">Products</p>
            </div>
          </div>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 top-[1070px] w-[1560px]" data-node-id="1:4456" data-name="Frame">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="1:4457" data-name="Frame">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[32px] uppercase w-full" data-node-id="1:4458">
            <p className="leading-[1.2]">Product Mix</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" role="tablist" aria-label="Product categories" data-node-id="1:4459">
            {categories.map((category) => {
              const isSelected = selectedCategory?.id === category.id;

              return (
                <button
                  aria-controls="product-grid"
                  aria-selected={isSelected}
                  className={`border border-solid content-stretch cursor-pointer flex flex-[1_0_0] gap-[12px] h-[46px] items-center justify-center min-w-px relative rounded-[4px] ${isSelected ? "border-[#1d1d1d] bg-[#1d1d1d] text-[#f6f6f6]" : "border-[rgba(0,0,0,0.2)] bg-[rgba(29,29,29,0.05)] text-[#1d1d1d]"}`}
                  id={`product-tab-${category.id}`}
                  key={category.id}
                  onClick={() => setSelectedId(category.id)}
                  role="tab"
                  type="button"
                >
                  <img
                    alt=""
                    className="relative shrink-0 size-[32px]"
                    src={category.icon}
                    style={{ filter: isSelected ? "brightness(0) invert(1)" : "brightness(0)" }}
                  />
                  <span className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[1.2] not-italic relative shrink-0 text-[18px] text-center uppercase whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          aria-labelledby={selectedCategory ? `product-tab-${selectedCategory.id}` : undefined}
          className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-[1560px]"
          id="product-grid"
          role="tabpanel"
        >
          {items.map((item) => (
            <article
              className="bg-white content-stretch drop-shadow-[0px_2px_1px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[6px] shrink-0 w-[372px]"
              key={item.id}
            >
              <div className="h-[420px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                <img
                  alt={item.name}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[6px] rounded-tr-[6px] size-full"
                  loading="lazy"
                  src={item.image}
                />
              </div>
              <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full">
                <h3 className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[1.2] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] uppercase w-full">
                  {item.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}