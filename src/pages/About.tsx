import Footer from "../components/Footer";
import { useContent } from "../content/ContentProvider";
const assetPathPrefix = "/assets/1-967";
const imgArrowSubdirectoryForward = `${assetPathPrefix}/f356f.svg`;
const imgImage = `${assetPathPrefix}/56147.jpg`;
const imgWorldMapPixelStyleIsolatedWhite1 = `${assetPathPrefix}/bea37.png`;
const imgRectangle9164 = `${assetPathPrefix}/4139f.jpg`;
const imgFrame4 = `${assetPathPrefix}/cdb42.png`;
const imgRectangle9140 = `${assetPathPrefix}/ee359.jpg`;
const imgArrowForwardLong = `${assetPathPrefix}/887e7.svg`;
const imgStellarLogo3 = `${assetPathPrefix}/3b80a.svg`;
const imgArrowForwardLong1 = `${assetPathPrefix}/77a61.svg`;
const imgVector = `${assetPathPrefix}/eab78.svg`;
const imgGroup = `${assetPathPrefix}/e57ab.svg`;
const imgGroup1 = `${assetPathPrefix}/31aea.svg`;
const imgGroup2 = `${assetPathPrefix}/5f395.svg`;
const imgGroup3 = `${assetPathPrefix}/95be4.svg`;
const imgGroup4 = `${assetPathPrefix}/c7810.svg`;
const imgGroup5 = `${assetPathPrefix}/ee557.svg`;
const imgGroup6 = `${assetPathPrefix}/fb5b8.svg`;
const imgGroup7 = `${assetPathPrefix}/c99fc.svg`;
const imgGroup8 = `${assetPathPrefix}/aec6c.svg`;
const imgGroup9 = `${assetPathPrefix}/1956a.svg`;
const imgGroup10 = `${assetPathPrefix}/f6a0e.svg`;
const imgGroup11 = `${assetPathPrefix}/d717c.svg`;
const imgGroup12 = `${assetPathPrefix}/a9d7d.svg`;
const imgGroup13 = `${assetPathPrefix}/0b435.svg`;
const imgGroup14 = `${assetPathPrefix}/b20f2.svg`;
const imgGroup15 = `${assetPathPrefix}/8f9c3.svg`;
const imgGroup16 = `${assetPathPrefix}/c29c3.svg`;
const imgGroup17 = `${assetPathPrefix}/75825.svg`;
const imgGroup18 = `${assetPathPrefix}/4a048.svg`;
const imgGroup19 = `${assetPathPrefix}/750c2.svg`;
const imgGroup20 = `${assetPathPrefix}/d3460.svg`;
const imgGroup21 = `${assetPathPrefix}/2c5b5.svg`;
const imgGroup22 = `${assetPathPrefix}/029cc.svg`;
const imgFrame3 = `${assetPathPrefix}/a6a48.svg`;
const imgFrame5 = `${assetPathPrefix}/2fb4a.svg`;
const imgGroup23 = `${assetPathPrefix}/672ea.svg`;
const imgGroup24 = `${assetPathPrefix}/8ee0f.svg`;
const imgLayer1 = `${assetPathPrefix}/e2d5d.svg`;
const imgGroup25 = `${assetPathPrefix}/09b8c.svg`;

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

// Legend colours per country, in order of first appearance (as in the design).
const COUNTRY_COLORS = ["#dea36a", "#1d1d1d", "#8a8a8a"];
const FACTORY_DOT_COLORS = ["#dea36a", "#4a4a4a", "#8a8a8a"];

export default function AboutUs() {
  const { journey } = useContent("about");
  const factories = useContent("factories").items.filter((factory) => factory.active);
  const countries = [...new Set(factories.map((factory) => factory.country))];
  return (
    <div className="bg-[#fafafa] relative h-[4794px] w-[1920px]" data-node-id="1:967" data-name="about us">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:969" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:970" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" decoding="async" fetchPriority="high" loading="eager" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:971" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-[305px] w-[999px]" data-node-id="1:972" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap" data-node-id="1:973" data-name="Frame">
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:974">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`PEOPLE. PRODUCTS. `}</p>
              <p className="leading-[1.2] whitespace-pre">A BETTER TOMORROW.</p>
            </div>
            <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:975" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2] mb-0 whitespace-pre">We are a global apparel manufacturing group, committed to responsible growth,</p>
              <p className="leading-[1.2] mb-0 whitespace-pre">{`ethical practices and long-term partnerships. Together with our people, `}</p>
              <p className="leading-[1.2] whitespace-pre">{`customers and suppliers, we're building a better, more sustainable supply chain`}</p>
            </div>
          </div>
          <a aria-label="Let's Talk" className="hero-talk-cta bg-[#dea36a] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0" data-node-id="1:976" data-name="Frame" href="/contact">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:977">
              <span className="hero-talk-label-viewport">
                <span className="hero-talk-label-track">
                  <span>Let's Talk</span>
                  <span aria-hidden="true">Let's Talk</span>
                </span>
              </span>
            </div>
            <div className="hero-talk-icon relative shrink-0 size-[24px]" data-node-id="1:978" data-name="arrow-forward-long">
              <span className="hero-talk-icon-track" aria-hidden="true">
                <img alt="" src={imgArrowForwardLong} />
                <img alt="" src={imgArrowForwardLong} />
              </span>
            </div>
          </a>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start p-[48px] right-0 w-[421px]" data-node-id="1:979" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:980" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:981" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:982" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">BETTER</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:983" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:984" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">FASHION</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:985" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:986" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">BRIGHTER</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:987" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:988" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">TOMORROW</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:989" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:990" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:991" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:1005" data-name="Frame">
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1006" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1007">
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <div className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1008" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap" data-node-id="1:1009">
              <p className="leading-[1.2]">about us</p>
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1010" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1011">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1012" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1013">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1014" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1015">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1016" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1017">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:1018" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:1019">
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-0 px-[180px] py-[56px] top-[1070px] w-[1920px]" data-node-id="1:1021" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1022" data-name="Frame">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="1:1023" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:1024">
              <p className="leading-[1.2]">{journey.eyebrow}</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap" data-node-id="1:1025">
              {journey.heading.split("\n").map((line, index, lines) => (
                <p className={`leading-[1.2] whitespace-pre${index < lines.length - 1 ? " mb-0" : ""}`} key={index}>
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-[853px]" data-node-id="1:1026">
            <p className="leading-[1.2]">{journey.intro}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1560px]" data-node-id="1:1027" data-name="Frame">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:1028" data-name="Frame">
            <div className="flex-[1_0_0] h-[256px] min-w-px relative rounded-[4px]" data-node-id="1:1029">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={journey.milestones[0]?.image} />
            </div>
            <div className="flex-[1_0_0] h-[256px] min-w-px relative rounded-[4px]" data-node-id="1:1030">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={journey.milestones[1]?.image} />
            </div>
            <div className="flex-[1_0_0] h-[256px] min-w-px relative rounded-[4px]" data-node-id="1:1031">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={journey.milestones[2]?.image} />
            </div>
            <div className="flex-[1_0_0] h-[256px] min-w-px relative rounded-[4px]" data-node-id="1:1032">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={journey.milestones[3]?.image} />
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1033" data-name="Frame">
            <div className="absolute bg-[#f5e2d1] content-stretch flex gap-[161px] items-start left-0 pl-[100px] rounded-[999px] top-[7px] w-[1560px]" data-node-id="1:1034" data-name="Frame">
              <div className="bg-[#dea36a] h-[4px] relative rounded-[999px] shrink-0 w-[243px]" data-node-id="1:1035" />
              <div className="bg-[#dea36a] h-[4px] relative rounded-[999px] shrink-0 w-[243px]" data-node-id="1:1036" />
              <div className="bg-[#dea36a] h-[4px] relative rounded-[999px] shrink-0 w-[243px]" data-node-id="1:1037" />
              <div className="bg-[#dea36a] h-[4px] relative rounded-[999px] shrink-0 w-[243px]" data-node-id="1:1038" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative self-stretch" data-node-id="1:1039" data-name="Frame">
              <div className="content-stretch flex items-center px-[40px] relative shrink-0 w-full" data-node-id="1:1040" data-name="Frame">
                <div className="bg-[#dea36a] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="1:1041" />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic px-[20px] relative shrink-0 w-full" data-node-id="1:1042" data-name="Frame">
                <div className="flex flex-col font-['Inria_Serif:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="1:1043">
                  <p className="leading-[1.2]">{journey.milestones[0]?.year}</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:1044">
                  <p className="leading-[1.2]">{journey.milestones[0]?.text}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative self-stretch" data-node-id="1:1045" data-name="Frame">
              <div className="content-stretch flex items-center px-[40px] relative shrink-0 w-full" data-node-id="1:1046" data-name="Frame">
                <div className="bg-[#dea36a] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="1:1047" />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-h-px not-italic px-[20px] relative w-full" data-node-id="1:1048" data-name="Frame">
                <div className="flex flex-col font-['Inria_Serif:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="1:1049">
                  <p className="leading-[1.2]">{journey.milestones[1]?.year}</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:1050">
                  <p className="leading-[1.2]">{journey.milestones[1]?.text}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative self-stretch" data-node-id="1:1051" data-name="Frame">
              <div className="content-stretch flex items-center px-[40px] relative shrink-0 w-full" data-node-id="1:1052" data-name="Frame">
                <div className="bg-[#dea36a] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="1:1053" />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic px-[20px] relative shrink-0 w-full" data-node-id="1:1054" data-name="Frame">
                <div className="flex flex-col font-['Inria_Serif:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="1:1055">
                  <p className="leading-[1.2]">{journey.milestones[2]?.year}</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:1056">
                  <p className="leading-[1.2]">{journey.milestones[2]?.text}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative self-stretch" data-node-id="1:1057" data-name="Frame">
              <div className="content-stretch flex items-center px-[40px] relative shrink-0 w-full" data-node-id="1:1058" data-name="Frame">
                <div className="bg-[#dea36a] relative rounded-[999px] shrink-0 size-[16px]" data-node-id="1:1059" />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic px-[20px] relative shrink-0 w-full" data-node-id="1:1060" data-name="Frame">
                <div className="flex flex-col font-['Inria_Serif:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="1:1061">
                  <p className="leading-[1.2]">{journey.milestones[3]?.year}</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:1062">
                  <p className="leading-[1.2]">{journey.milestones[3]?.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-0 px-[180px] py-[40px] top-[1884px] w-[1920px]" data-node-id="1:1063" data-name="Frame">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[372px]" data-node-id="1:1064" data-name="Frame">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:1065">
            <p className="leading-[1.2]">OUR PRESENCE</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[40px] w-[min-content]" data-node-id="1:1066">
            <p className="leading-[1.2]">STRATEGIC FACTORY LOCATIONS.</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:1067">
            <p className="leading-[1.2]">Three manufacturing facilities across Bangladesh and India, strategically positioned to serve global markets with speed, flexibility and scale.</p>
          </div>
          <a aria-label="Our factories" className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 text-inherit no-underline" data-node-id="1:1068" data-name="Frame" href="/factories">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:1069" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:1070">
                <p className="leading-[1.2]">OUR FACTORIES</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="1:1071" data-name="arrow-forward-long">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong1} />
                </div>
            </div>
            <div className="h-[2px] relative shrink-0 w-[76px]" data-node-id="1:1072" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          </a>
        </div>
        <div className="content-stretch flex gap-[80px] items-center relative shrink-0" data-node-id="1:1073" data-name="Frame">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:1074" data-name="Group">
            <div className="col-1 h-[440px] ml-0 mt-0 relative row-1 w-[636px]" data-node-id="1:1075" data-name="world-map-pixel-style-isolated-white 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWorldMapPixelStyleIsolatedWhite1} />
            </div>
            <div className="hidden" data-node-id="1:1076" data-name="Group">
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[42px] place-items-start relative row-1" data-node-id="1:1077" data-name="Group">
                <div className="col-1 ml-[101px] mt-0 overflow-clip relative row-1 size-[24px]" data-node-id="1:1078" data-name="Capa_1">
                  <div className="absolute contents inset-[0_13.87%_0_13.85%]" data-node-id="1:1079" data-name="Group">
                    <div className="absolute inset-[0_13.87%_0_13.85%]" data-node-id="1:1080" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                </div>
                <div className="col-1 ml-0 mt-[80px] overflow-clip relative row-1 size-[24px]" data-node-id="1:1082" data-name="Capa_1">
                  <div className="absolute contents inset-[0_13.87%_0_13.85%]" data-node-id="1:1083" data-name="Group">
                    <div className="absolute inset-[0_13.87%_0_13.85%]" data-node-id="1:1084" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[71px] mt-0 place-items-start relative row-1" data-node-id="1:1086" data-name="Group">
                <div className="col-1 ml-[17px] mt-[14px] overflow-clip relative row-1 size-[24px]" data-node-id="1:1087" data-name="Capa_1">
                  <div className="absolute contents inset-[0_13.87%_0_13.85%]" data-node-id="1:1088" data-name="Group">
                    <div className="absolute inset-[0_13.87%_0_13.85%]" data-node-id="1:1089" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
                <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-node-id="1:1091" data-name="Capa_1">
                  <div className="absolute contents inset-[0_13.87%_0_13.85%]" data-node-id="1:1092" data-name="Group">
                    <div className="absolute inset-[0_13.87%_0_13.85%]" data-node-id="1:1093" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {factories.map((factory) => (
              <a
                aria-label={`${factory.name} factory location`}
                className={`factory-world-map-marker${countries.indexOf(factory.country) % 2 === 1 ? " factory-world-map-marker--alt" : ""}`}
                href={`/factories/${factory.slug}#factory-profile`}
                key={factory.id}
                style={{ left: `${factory.mapPosition.x}%`, top: `${factory.mapPosition.y}%` }}
              />
            ))}
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[448px]" data-node-id="1:1095" data-name="Frame">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1096">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start justify-center min-w-px relative" data-name="Frame">
                {countries.map((country, index) => (
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" key={country}>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      <div className="relative rounded-[999px] shrink-0 size-[12px]" style={{ background: COUNTRY_COLORS[index % COUNTRY_COLORS.length] }} />
                      <div className="[word-break:break-word] flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap">
                        <p className="leading-[1.2]">{country}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                      {factories
                        .filter((factory) => factory.country === country)
                        .map((factory) => (
                          <div className="content-stretch flex gap-[17px] items-center relative shrink-0" key={factory.id}>
                            <div className="relative rounded-[999px] shrink-0 size-[8px]" style={{ background: FACTORY_DOT_COLORS[index % FACTORY_DOT_COLORS.length] }} />
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">
                              <p className="leading-[1.2]">{factory.name}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch" data-node-id="1:1116">
              <div className="bg-[rgba(0,0,0,0.1)] h-full relative rounded-[999px] shrink-0 w-[2px]" />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1117">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:1118" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]" data-node-id="1:1119">
                    <p className="leading-[1.2]">{factories.length}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:1120">
                    <p className="leading-[1.2]">Facilities</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:1121" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]" data-node-id="1:1122">
                    <p className="leading-[1.2]">{countries.length}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:1123">
                    <p className="leading-[1.2]">Countries</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:1124" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]" data-node-id="1:1125">
                    <p className="leading-[1.2]">26M+</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:1126">
                    <p className="leading-[1.2]">Pieces Capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-0 px-[180px] py-[40px] top-[2404px] w-[1920px]" data-node-id="1:1127" data-name="Frame">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1128">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start justify-center leading-[0] min-w-px not-italic relative" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:1129">
              <p className="leading-[1.2]">OUR VALUES</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full" data-node-id="1:1130">
              <p className="leading-[1.2]">THE PRINCIPLES THAT GUIDE US.</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:1131">
              <p className="leading-[1.2]">Our values shape how we work, make decisions and build partnerships. They are the foundation of a stronger, more sustainable future</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="1:1132" data-name="Frame">
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:1133" data-name="Frame">
            <div className="bg-[rgba(29,29,29,0.1)] content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1134" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1:1135" data-name="Layer_1">
                <div className="absolute inset-[1.47%_1.5%_1.47%_1.53%]" data-node-id="1:1136" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d]" data-node-id="1:1140" data-name="Frame">
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:1141">
                <p className="leading-[1.2]">INTEGRITY</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[14px] w-full" data-node-id="1:1142">
                <p className="leading-[1.2]">We do what is right</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:1143" data-name="Frame">
            <div className="bg-[rgba(29,29,29,0.1)] content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1144" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1:1145" data-name="Layer_1">
                <div className="absolute inset-[10.42%_6.94%_6.25%_4.16%]" data-node-id="1:1146" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d]" data-node-id="1:1150" data-name="Frame">
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:1151">
                <p className="leading-[1.2]">PEOPLE FIRST</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[14px] w-full" data-node-id="1:1152">
                <p className="leading-[1.2]">We value and empower our people</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:1153" data-name="Frame">
            <div className="bg-[rgba(29,29,29,0.1)] content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1154" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1:1155" data-name="Capa_1">
                <div className="absolute contents inset-[0_40%_80%_40%]" data-node-id="1:1156" data-name="Group">
                  <div className="absolute inset-[0_40%_80%_40%]" data-node-id="1:1157" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
                  </div>
                </div>
                <div className="absolute contents inset-[21.67%_35%_55%_35%]" data-node-id="1:1159" data-name="Group">
                  <div className="absolute inset-[21.67%_35%_55%_35%]" data-node-id="1:1160" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
                  </div>
                </div>
                <div className="absolute bottom-1/4 contents left-3/4 right-[5%] top-[55%]" data-node-id="1:1162" data-name="Group">
                  <div className="absolute bottom-1/4 left-3/4 right-[5%] top-[55%]" data-node-id="1:1163" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
                  </div>
                </div>
                <div className="absolute contents inset-[76.67%_0_0_70%]" data-node-id="1:1165" data-name="Group">
                  <div className="absolute inset-[76.67%_0_0_70%]" data-node-id="1:1166" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
                  </div>
                </div>
                <div className="absolute bottom-1/4 contents left-[5%] right-3/4 top-[55%]" data-node-id="1:1168" data-name="Group">
                  <div className="absolute bottom-1/4 left-[5%] right-3/4 top-[55%]" data-node-id="1:1169" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
                  </div>
                </div>
                <div className="absolute contents inset-[76.67%_70%_0_0]" data-node-id="1:1171" data-name="Group">
                  <div className="absolute inset-[76.67%_70%_0_0]" data-node-id="1:1172" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
                  </div>
                </div>
                <div className="absolute contents inset-[81.67%_33.33%_6.66%_33.34%]" data-node-id="1:1174" data-name="Group">
                  <div className="absolute inset-[81.67%_33.33%_6.66%_33.34%]" data-node-id="1:1175" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup9} />
                  </div>
                </div>
                <div className="absolute contents inset-[13.04%_5%_48.33%_63.33%]" data-node-id="1:1177" data-name="Group">
                  <div className="absolute inset-[13.04%_5%_48.33%_63.33%]" data-node-id="1:1178" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
                  </div>
                </div>
                <div className="absolute contents inset-[10.03%_63.34%_48.33%_10%]" data-node-id="1:1180" data-name="Group">
                  <div className="absolute inset-[10.03%_63.34%_48.33%_10%]" data-node-id="1:1181" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d]" data-node-id="1:1183" data-name="Frame">
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:1184">
                <p className="leading-[1.2]">COLLABORATION</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[14px] w-full" data-node-id="1:1185">
                <p className="leading-[1.2]">We grow together</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:1186" data-name="Frame">
            <div className="bg-[rgba(29,29,29,0.1)] content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1187" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1:1188" data-name="Capa_1">
                <div className="absolute contents inset-[18.65%_28.65%_38.65%_28.65%]" data-node-id="1:1189" data-name="Group">
                  <div className="absolute inset-[18.65%_28.65%_38.65%_28.65%]" data-node-id="1:1190" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup12} />
                  </div>
                </div>
                <div className="absolute contents inset-[32.15%_42.15%_52.15%_42.15%]" data-node-id="1:1192" data-name="Group">
                  <div className="absolute inset-[32.15%_42.15%_52.15%_42.15%]" data-node-id="1:1193" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
                  </div>
                </div>
                <div className="absolute contents inset-[38.54%_82.21%_58.53%_10%]" data-node-id="1:1195" data-name="Group">
                  <div className="absolute inset-[38.54%_82.21%_58.53%_10%]" data-node-id="1:1196" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup14} />
                  </div>
                </div>
                <div className="absolute contents inset-[38.54%_10%_58.53%_82.21%]" data-node-id="1:1198" data-name="Group">
                  <div className="absolute inset-[38.54%_10%_58.53%_82.21%]" data-node-id="1:1199" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup15} />
                  </div>
                </div>
                <div className="absolute contents inset-[62.35%_72.34%_31.29%_21.29%]" data-node-id="1:1201" data-name="Group">
                  <div className="absolute inset-[62.35%_72.34%_31.29%_21.29%]" data-node-id="1:1202" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup16} />
                  </div>
                </div>
                <div className="absolute contents inset-[11.29%_21.28%_82.35%_72.35%]" data-node-id="1:1204" data-name="Group">
                  <div className="absolute inset-[11.29%_21.28%_82.35%_72.35%]" data-node-id="1:1205" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup17} />
                  </div>
                </div>
                <div className="absolute contents inset-[0_48.54%_92.21%_48.54%]" data-node-id="1:1207" data-name="Group">
                  <div className="absolute inset-[0_48.54%_92.21%_48.54%]" data-node-id="1:1208" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup18} />
                  </div>
                </div>
                <div className="absolute contents inset-[62.35%_21.28%_31.29%_72.35%]" data-node-id="1:1210" data-name="Group">
                  <div className="absolute inset-[62.35%_21.28%_31.29%_72.35%]" data-node-id="1:1211" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup19} />
                  </div>
                </div>
                <div className="absolute contents inset-[11.29%_72.34%_82.35%_21.29%]" data-node-id="1:1213" data-name="Group">
                  <div className="absolute inset-[11.29%_72.34%_82.35%_21.29%]" data-node-id="1:1214" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup20} />
                  </div>
                </div>
                <div className="absolute contents inset-[10.65%_20.77%_61.95%_51.95%]" data-node-id="1:1216" data-name="Group">
                  <div className="absolute inset-[10.65%_20.77%_61.95%_51.95%]" data-node-id="1:1217" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup21} />
                  </div>
                </div>
                <div className="absolute contents inset-[10.66%_20.8%_0_20.57%]" data-node-id="1:1219" data-name="Group">
                  <div className="absolute inset-[10.66%_20.8%_0_20.57%]" data-node-id="1:1220" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup22} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d]" data-node-id="1:1222" data-name="Frame">
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:1223">
                <p className="leading-[1.2]">INNOVATION</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[14px] w-full" data-node-id="1:1224">
                <p className="leading-[1.2]">We find better ways</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:1225" data-name="Frame">
            <div className="bg-[rgba(29,29,29,0.1)] content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1226" data-name="Frame">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1227" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#1d1d1d]" data-node-id="1:1229" data-name="Frame">
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:1230">
                <p className="leading-[1.2]">SUSTAINABILITY</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[14px] w-full" data-node-id="1:1231">
                <p className="leading-[1.2]">We care for tomorrow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[350px] min-w-px relative rounded-[6px]" data-node-id="1:1232">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgRectangle9164} />
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[24px] items-center left-[180px] top-[2954px]" data-node-id="1:1233" data-name="Frame">
        <div className="content-stretch flex flex-col h-[570px] items-start justify-center pb-[200px] pl-[53px] pr-[441px] pt-[136px] relative rounded-[8px] shrink-0 w-[768px]" data-node-id="1:1234" data-name="Frame">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#948f7b] inset-0 rounded-[8px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[8px]">
              <img alt="" className="absolute h-[117.73%] left-[2.34%] max-w-none top-[-8.86%] w-[131.09%]" src={imgFrame4} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="1:1235" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap" data-node-id="1:1236">
              <p className="leading-[1.3] mb-0 whitespace-pre">{`APPAREL `}</p>
              <p className="leading-[1.3] mb-0 whitespace-pre">{`THAT CREATES `}</p>
              <p className="leading-[1.3] mb-0 whitespace-pre">{`A BRIGHTER `}</p>
              <p className="leading-[1.3] whitespace-pre">TOMORROW.</p>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:1237" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[768px]" data-node-id="1:1238" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1239" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:1240">
              <p className="leading-[1.2]">OUR PURPOSE</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap" data-node-id="1:1241">
              <p className="leading-[1.2]">MAKING FASHION A FORCE FOR GOOD.</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:1242">
              <p className="leading-[1.2]">We believe the apparel industry can create long-term value through responsible manufacturing, innovation and people-first practices. Our purpose is to deliver better products, stronger communities and a healthier planet — today and for future generations.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:1243" data-name="Frame">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1244">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1245" data-name="Frame">
                  <div className="relative shrink-0 size-[40px]" data-node-id="1:1246" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1248" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1249">
                    <p className="leading-[1.2]">SUSTAINABLE GROWTH</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase w-[min-content]" data-node-id="1:1250">
                    <p className="leading-[1.2]">Building resilience for the future</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1251">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1252" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="1:1253" data-name="Layer_1">
                    <div className="absolute inset-[10.42%_6.93%_6.25%_4.17%]" data-node-id="1:1254" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup23} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1258" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1259">
                    <p className="leading-[1.2]">ETHICAL PRACTICES</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase w-[min-content]" data-node-id="1:1260">
                    <p className="leading-[1.2]">{`Doing what's right across our value chain`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1261">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1262" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="1:1263" data-name="Frame">
                    <div className="absolute contents inset-[5.41%_5.39%]" data-node-id="1:1264" data-name="_x30_4_Pie_Chart">
                      <div className="absolute inset-[5.41%_5.39%]" data-node-id="1:1265" data-name="Group">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup24} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1269" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1270">
                    <p className="leading-[1.2]">OPERATIONAL EXCELLENCE</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase w-[min-content]" data-node-id="1:1271">
                    <p className="leading-[1.2]">Delivering quality, consistency and speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[24px] items-center left-0 px-[180px] top-[3644px] w-[1920px]" data-node-id="1:1272" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-[504px]" data-node-id="1:1273" data-name="Frame">
          <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:1274">
            <p className="leading-[1.2]">WHO WE ARE</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-[501px]" data-node-id="1:1275">
            <p className="leading-[1.2]">A STRONGER TOMORROW, TOGETHER.</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:1276">
            <p className="leading-[1.2]">Stellar Manufacturing is a multinational apparel manufacturing group with a presence in Bangladesh and India. We combine scale, expertise and innovation to deliver high-quality garments across menswear, womenswear and kidswear for global markets.</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:1277">
            <p className="leading-[1.2]">Our integrated capabilities, skilled workforce and commitment to sustainability make us a trusted partner to leading global brands.</p>
          </div>
        </div>
        <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col gap-[24px] items-end min-w-px relative" data-node-id="1:1278" data-name="Frame">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:1279" data-name="Frame">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1280">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1281" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="1:1282" data-name="Layer_1">
                    <div className="absolute inset-[10.42%_6.93%_6.25%_4.17%]" data-node-id="1:1283" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup23} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1287" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1288">
                    <p className="leading-[1.2]">OUR PEOPLE</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase w-[min-content]" data-node-id="1:1289">
                    <p className="leading-[1.2]">Safe, fair and empowered communities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1290">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1291" data-name="Frame">
                  <div className="relative shrink-0 size-[40px]" data-node-id="1:1292" data-name="Layer_1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1297" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1298">
                    <p className="leading-[1.2]">OUR PRODUCTS</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase w-[min-content]" data-node-id="1:1299">
                    <p className="leading-[1.2]">Quality, innovation and speed to market</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1300">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1301" data-name="Frame">
                  <div className="relative shrink-0 size-[40px]" data-node-id="1:1302" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1304" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1305">
                    <p className="leading-[1.2]">OUR PLANET</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase w-[min-content]" data-node-id="1:1306">
                    <p className="leading-[1.2]">Responsible manufacturing and resource efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:1307">
              <div className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-center min-w-px p-[16px] relative rounded-[6px]" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[999px] shrink-0" data-node-id="1:1308" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="1:1309" data-name="Capa_1">
                    <div className="absolute inset-[9.41%_1.46%_9.42%_1.46%]" data-node-id="1:1310" data-name="Group">
                      <div className="absolute inset-[-1.85%_-1.55%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup25} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-node-id="1:1328" data-name="Frame">
                  <div className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:1329">
                    <p className="leading-[1.2]">OUR PARTNERSHIPS</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-[min-content]" data-node-id="1:1330">
                    <p className="leading-[1.2]">Long-term relationships across the supply chain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f9f7f5] content-stretch flex flex-col items-start p-[16px] relative rounded-[6px] shrink-0 w-full" data-node-id="1:1331" data-name="Frame">
            <div className="h-[216px] relative shrink-0 w-full" data-node-id="1:1332">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9140} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}