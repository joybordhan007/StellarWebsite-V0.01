import { useEffect, useRef, useState } from "react";
import AchievementsBar from "../components/AchievementsBar";
import Footer from "../components/Footer";
import { useContent } from "../content/ContentProvider";

const imgArrowSubdirectoryForward = "/assets/common/arrow-subdirectory-forward.svg";
const imgImage = "/assets/capabilities/hero.jpg";
const imgRectangle9121 = "/assets/common/brighter-tomorrow-illustration.png";
const imgArrowForwardLong = "/assets/common/arrow-forward-white.svg";
const imgStellarLogo3 = "/assets/common/stellar-logo-white.svg";

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

// Height of the capabilities section with the original 8 cards (two rows).
const INTEGRATED_SECTION_BASE_HEIGHT = 975;
const PAGE_BASE_HEIGHT = 4600;
// Rows per Versatility column; shorter lists get invisible rows to keep the columns even.
const VERSATILITY_ROWS = 5;

export default function OurCapabilities({ onHeightChange }: { onHeightChange?: (height: number) => void }) {
  const { items, versatility } = useContent("capabilities");
  const capabilities = items.filter((item) => item.active);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  // More or fewer card rows than the design moves everything below the section.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const measure = () => setShift(section.offsetHeight - INTEGRATED_SECTION_BASE_HEIGHT);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    onHeightChange?.(PAGE_BASE_HEIGHT + shift);
  }, [onHeightChange, shift]);

  const below = { marginTop: shift };

  return (
    <div className="bg-[#fafafa] relative w-[1920px]" data-node-id="1:1333" data-name="our capabilities" style={{ height: PAGE_BASE_HEIGHT + shift }}>
      <Footer className="-translate-x-1/2 absolute bg-white bottom-[0.2px] h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:1335" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:1336" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" decoding="async" fetchPriority="high" loading="eager" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:1337" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-[305px] w-[999px]" data-node-id="1:1338" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap" data-node-id="1:1339" data-name="Frame">
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:1340">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`SCALE. EXPERTISE. `}</p>
              <p className="leading-[1.2] whitespace-pre">A BRIGHTER TOMORROW.</p>
            </div>
            <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:1341" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2] mb-0 whitespace-pre">{`From design to delivery, our integrated capabilities enable us to `}</p>
              <p className="leading-[1.2] whitespace-pre">create high-quality, sustainable apparel for global brands.</p>
            </div>
          </div>
          <div className="partner-with-us-cta bg-[#dea36a] content-stretch cursor-pointer flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0" data-node-id="1:1342" data-name="Frame">
            <div className="partner-cta-label [word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:1343">
              <span className="partner-cta-label-track">
                <span>Partner With Us</span>
                <span aria-hidden="true">Partner With Us</span>
              </span>
            </div>
            <div className="partner-cta-icon relative shrink-0 size-[24px]" data-node-id="1:1344" data-name="arrow-forward-long">
              <span className="partner-cta-icon-track" aria-hidden="true">
                <img alt="" src={imgArrowForwardLong} />
                <img alt="" src={imgArrowForwardLong} />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start pl-[48px] pr-[180px] py-[48px] right-0" data-node-id="1:1345" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:1346" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:1347" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:1348" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PEOPLE</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:1349" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:1350" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PRODUCTS</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:1351" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:1352" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PLANET</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:1353" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:1354" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">A BRIGHTER TOMORROW</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:1355" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:1356" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:1357" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:1371" data-name="Frame">
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1372" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1373">
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1374" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1375">
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <div className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1376" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap" data-node-id="1:1377">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1378" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1379">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1380" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1381">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1382" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1383">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1384" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1385">
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <AchievementsBar page="capabilities" />
      <div id="integrated-capabilities" ref={sectionRef} className="capabilities-integrated-section -translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[180px] py-[40px] top-[1284px] w-[1920px]" data-node-id="1:1490" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1491" data-name="Frame">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="1:1492" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:1493">
              <p className="leading-[1.2]">OUR CAPABILITIES</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap" data-node-id="1:1494">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`INTEGRATED FOR A `}</p>
              <p className="leading-[1.2] whitespace-pre">STRONGER TOMORROW.</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-[853px]" data-node-id="1:1495">
            <p className="leading-[1.2]">We bring together people, technology and responsible practices to deliver end-to-end apparel solutions — with quality, speed and sustainability at the core.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-[24px] gap-y-[40px] items-start relative shrink-0 w-full" data-node-id="1:1496" data-name="Frame">
          {capabilities.map((capability) => (
            <div className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center min-w-px relative rounded-[8px] self-stretch" key={capability.id}>
              <div className="h-[250px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={capability.image} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic p-[12px] relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase w-full">
                  <p className="leading-[1.2]">{capability.name}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full">
                  <p className="leading-[1.2]">{capability.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[56px] items-center left-1/2 px-[180px] py-[80px] top-[2341px] w-[1920px]" data-node-id="1:1539" style={below} data-name="Versatility">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-center justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]">
              <p className="leading-[1.2]">{versatility.eyebrow}</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px]">
              <p className="leading-[1.2]">{versatility.heading}</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] text-center">
            {versatility.intro.split("\n").map((line, index, lines) => (
              <p className={`leading-[1.2] whitespace-pre${index < lines.length - 1 ? " mb-0" : ""}`} key={index}>
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-mobile="stack">
          {versatility.columns.map((column, columnIndex) => (
            <div className="bg-white content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px p-[12px] relative rounded-[8px]" key={columnIndex}>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="h-[292.8px] mb-[-57px] relative rounded-[4px] shrink-0 w-full">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
                    {column.imageBackground && <div className="absolute inset-0 rounded-[4px]" style={{ background: column.imageBackground }} />}
                    <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={column.image} />
                  </div>
                </div>
                <div className="[word-break:break-word] bg-gradient-to-t content-stretch flex flex-col from-[0.349%] from-black gap-[2px] items-start leading-[0] not-italic px-[10px] py-[8px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 to-[99.65%] to-[rgba(0,0,0,0)] w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[18px] text-white uppercase w-full">
                    <p className="leading-[1.2]">{column.title}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[14px] w-full">
                    <p className="leading-[1.2]">{column.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                {Array.from({ length: VERSATILITY_ROWS }, (_, rowIndex) => {
                  const item = column.items[rowIndex];
                  return (
                    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[4px] shrink-0 w-full" data-mobile={item ? undefined : "hide"} key={rowIndex}>
                      {/* Empty rows keep every column the same height, as in the design. */}
                      <div className={`relative rounded-[4px] shrink-0 size-[44px] ${item ? "" : "opacity-0"}`}>
                        {item?.thumb && (
                          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
                            {item.thumbBackground && <div className="absolute inset-0 rounded-[4px]" style={{ background: item.thumbBackground }} />}
                            <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={item.thumb} />
                          </div>
                        )}
                      </div>
                      <div className={`[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d] ${item ? "" : "opacity-0"}`}>
                        <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[14px] uppercase w-full">
                          <p className="leading-[1.2]">{item?.name ?? "\u00a0"}</p>
                        </div>
                        {(item ? item.note : "\u00a0") && (
                          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[12px] w-full">
                            <p className="leading-[1.2]">{item ? item.note : "\u00a0"}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-translate-x-1/2 absolute drop-shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-[500px] left-1/2 overflow-clip rounded-[8px] top-[3406.8px] w-[1560px]" data-node-id="1:1692" style={below} data-name="Frame">
        <div className="absolute bg-white h-[500px] left-0 top-0 w-[1562px]" data-node-id="1:1693" />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[124px] top-1/2 w-[719px]" data-node-id="1:1694" data-name="Frame">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:1695" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2f2f2f] text-[16px] w-[min-content]" data-node-id="1:1696">
              <p className="leading-[1.2]">OUR COMMITMENT</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[40px] w-[min-content] whitespace-pre-wrap" data-node-id="1:1697">
              <p className="leading-[1.2] mb-0">{`LET’S BUILD `}</p>
              <p className="leading-[1.2]">A BRIGHTER TOMORROW</p>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:1698" />
          </div>
          <Component1 className="bg-[#1d1d1d] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
        </div>
        <div className="absolute h-[500px] left-[664px] top-0 w-[814px]" data-node-id="1:1700">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9121} />
        </div>
      </div>
    </div>
  );
}