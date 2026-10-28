import AchievementsBar from "../components/AchievementsBar";
import Footer from "../components/Footer";
import LogoMarquee from "../components/LogoMarquee";
import SustainabilityStories from "../components/SustainabilityStories";
import { useContent } from "../content/ContentProvider";

const assetPathPrefix = "/assets/1-3076";
const imgArrowSubdirectoryForward = `${assetPathPrefix}/f356f.svg`;
const imgImage = `${assetPathPrefix}/6e33d.jpg`;
const imgRectangle9116 = `${assetPathPrefix}/33af4.png`;
const imgRectangle9117 = `${assetPathPrefix}/d1997.jpg`;
const imgRectangle9118 = `${assetPathPrefix}/42cba.jpg`;
const imgRectangle9119 = `${assetPathPrefix}/b7e87.jpg`;
const imgRectangle9120 = `${assetPathPrefix}/68447.jpg`;
const imgRectangle9121 = `${assetPathPrefix}/da086.jpg`;
const imgRectangle9122 = `${assetPathPrefix}/78e62.jpg`;
const imgRectangle9123 = `${assetPathPrefix}/b465b.jpg`;
const imgRectangle9124 = `${assetPathPrefix}/9675b.jpg`;
const imgRectangle9125 = `${assetPathPrefix}/58673.jpg`;
const imgArrowForwardLong = `${assetPathPrefix}/887e7.svg`;
const imgStellarLogo3 = `${assetPathPrefix}/d3126.svg`;
const imgGroup = `${assetPathPrefix}/185b3.svg`;
const imgLayer1 = `${assetPathPrefix}/2b9d4.svg`;
const imgGroup1 = `${assetPathPrefix}/84333.svg`;
const imgGroup2 = `${assetPathPrefix}/a898e.svg`;
const imgArtboard421 = `${assetPathPrefix}/89e44.svg`;
const imgArrowForwardLong1 = `${assetPathPrefix}/77a61.svg`;
const imgVector = `${assetPathPrefix}/ee01d.svg`;

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

export default function Sustainability() {
  const sustainability = useContent("sustainability");
  const factories = useContent("factories").items.filter((factory) => factory.active);

  return (
    <div className="bg-[#fafafa] relative h-[9963px] w-[1920px]" data-node-id="1:3076" data-name="Sustainability">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:3078" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:3079" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" decoding="async" fetchPriority="high" loading="eager" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:3080" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-1/2 w-[999px]" data-node-id="1:3081" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap" data-node-id="1:3082" data-name="Frame">
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:3083">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`FASHION FOR A BRIGHTER `}</p>
              <p className="leading-[1.2] whitespace-pre">TOMORROW.</p>
            </div>
            <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:3084" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2] mb-0 whitespace-pre">{`Creating long-term value for people, products and the planet through responsible `}</p>
              <p className="leading-[1.2] whitespace-pre">and innovative manufacturing.</p>
            </div>
          </div>
          <a aria-label="Let's Talk" className="hero-talk-cta bg-[#dea36a] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0" data-node-id="1:3085" data-name="Frame" href="/contact">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:3086">
              <span className="hero-talk-label-viewport">
                <span className="hero-talk-label-track">
                  <span>Let's Talk</span>
                  <span aria-hidden="true">Let's Talk</span>
                </span>
              </span>
            </div>
            <div className="hero-talk-icon relative shrink-0 size-[24px]" data-node-id="1:3087" data-name="arrow-forward-long">
              <span className="hero-talk-icon-track" aria-hidden="true">
                <img alt="" src={imgArrowForwardLong} />
                <img alt="" src={imgArrowForwardLong} />
              </span>
            </div>
          </a>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start pl-[48px] pr-[64px] py-[48px] right-0 w-[439px]" data-node-id="1:3088" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:3089" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:3090" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:3091" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PEOPLE</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:3092" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:3093" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PRODUCTS</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:3094" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:3095" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PLANET</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:3096" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:3097" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PARTNERSHIPS</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:3098" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:3099" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:3100" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:3114" data-name="Frame">
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3115" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:3116">
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3117" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:3118">
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3119" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:3120">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3121" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:3122">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3123" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:3124">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <div className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3125" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap" data-node-id="1:3126">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:3127" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:3128">
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-1/2 px-[180px] py-[40px] top-[1264px] w-[1920px]" data-node-id="1:3130" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-[372px]" data-node-id="1:3131" data-name="Frame">
          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] uppercase w-full" data-node-id="1:3132">
            <p className="leading-[1.2]">Our Responsibility Framework</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:3133">
            <p className="leading-[1.2]">A shared commitment across all our facilities, shaping a stronger, fairer and more sustainable future.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[1164px]" data-node-id="1:3134" data-name="Frame">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:3135" data-name="Frame">
            <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col gap-[4px] h-[200px] items-center justify-center min-w-px p-[8px] relative rounded-[4px]" data-node-id="1:3136" data-name="Frame">
              <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3137" data-name="Frame">
                <div className="h-[48px] overflow-clip relative shrink-0 w-[50px]" data-node-id="1:3138" data-name="Frame">
                  <div className="absolute inset-[8.53%_2.13%_8.53%_0.14%]" data-node-id="1:3139" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:3146" data-name="Frame">
                <div className="flex flex-col font-['Saira_SemiCondensed:Medium'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap" data-node-id="1:3147">
                  <p className="leading-[1.2]">PEOPLE</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[18px] text-center w-[min-content]" data-node-id="1:3148">
                  <p className="leading-[1.2]">Safe, inclusive and ethical workplaces.</p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col gap-[4px] h-[200px] items-center justify-center min-w-px p-[8px] relative rounded-[4px]" data-node-id="1:3149" data-name="Frame">
              <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3150" data-name="Frame">
                <div className="relative shrink-0 size-[48px]" data-node-id="1:3151" data-name="Layer_1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:3153" data-name="Frame">
                <div className="flex flex-col font-['Saira_SemiCondensed:Medium'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap" data-node-id="1:3154">
                  <p className="leading-[1.2]">COMMUNITIES</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[18px] text-center w-[min-content]" data-node-id="1:3155">
                  <p className="leading-[1.2]">Education, healthcare and local development.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:3156" data-name="Frame">
            <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col gap-[4px] h-[200px] items-center justify-center min-w-px p-[8px] relative rounded-[4px]" data-node-id="1:3157" data-name="Frame">
              <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3158" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="1:3159" data-name="Layer_1">
                  <div className="absolute contents inset-[0_0.18%_0_0.16%]" data-node-id="1:3160" data-name="Group">
                    <div className="absolute inset-[0_0.18%_0_0.16%]" data-node-id="1:3161" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                  <div className="absolute contents inset-[16.41%_4.79%_7.44%_17.66%]" data-node-id="1:3163" data-name="Group">
                    <div className="absolute inset-[16.41%_4.79%_7.44%_17.66%]" data-node-id="1:3164" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:3166" data-name="Frame">
                <div className="flex flex-col font-['Saira_SemiCondensed:Medium'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap" data-node-id="1:3167">
                  <p className="leading-[1.2]">PLANET</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[18px] text-center w-[min-content]" data-node-id="1:3168">
                  <p className="leading-[1.2]">Lower-impact operations and resource efficiency.</p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col gap-[4px] h-[200px] items-center justify-center min-w-px p-[8px] relative rounded-[4px]" data-node-id="1:3169" data-name="Frame">
              <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3170" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="1:3171" data-name="Frame">
                  <div className="absolute inset-[3.61%_4.52%_3.62%_2.93%]" data-node-id="1:3172" data-name="Artboard421">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtboard421} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:3174" data-name="Frame">
                <div className="flex flex-col font-['Saira_SemiCondensed:Medium'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap" data-node-id="1:3175">
                  <p className="leading-[1.2]">RESPONSIBLE</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[18px] text-center w-[min-content]" data-node-id="1:3176">
                  <p className="leading-[1.2]">Ethical, transparent and compliant operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[178px] py-[80px] top-[1868px] w-[1920px]" data-node-id="1:3177" data-name="Frame">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:3178" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:3179" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] uppercase whitespace-nowrap" data-node-id="1:3180">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`Three Factories, `}</p>
              <p className="leading-[1.2] whitespace-pre">One Commitment</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[546px]" data-node-id="1:3181">
            <p className="leading-[1.2]">Our three manufacturing facilities in Bangladesh and India operate with a shared purpose — responsible growth through people, community and environmental performance.</p>
          </div>
          <a aria-label="View our factories" className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 text-inherit no-underline" data-node-id="1:3182" data-name="Frame" href="/factories">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:3183" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:3184">
                <p className="leading-[1.2]">VIEW OUR FACTORIES</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="1:3185" data-name="arrow-forward-long">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong1} />
              </div>
            </div>
            <div className="h-[3px] relative shrink-0 w-[153px]" data-node-id="1:3186" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </a>
        </div>
        <div className="content-stretch flex gap-[24px] items-stretch overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:3187" data-name="Frame">
          {factories.map((factory) => (
            <a aria-label={`${factory.name} factory profile`} className="factory-profile-card bg-[#f9f7f5] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[504px]" href={`/factories/${factory.slug}#factory-profile`} key={factory.id}>
              <div className="h-[289px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={factory.image} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1d1d1d] w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[20px] w-full">
                    <p className="leading-[1.2]">{factory.name}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full">
                    <p className="leading-[1.2]">{[factory.location, factory.certification].filter(Boolean).join(" | ")}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[8px] items-start relative shrink-0 text-[#4a4a4a] text-[14px] w-full">
                  {factory.sustainabilityHighlights.map((highlight, index) => (
                    <div className="flex flex-col justify-center relative shrink-0 w-full" key={index}>
                      <ul>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[1.2]">{highlight}</span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 px-[178px] py-[40px] top-[3803px] w-[1920px]" data-node-id="1:3225" data-name="Frame">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:3226" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:3227" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] uppercase whitespace-nowrap" data-node-id="1:3228">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`Environmental `}</p>
              <p className="leading-[1.2] whitespace-pre">Performance</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[546px]" data-node-id="1:3229">
            <p className="leading-[1.2]">We are investing in cleaner energy, smarter resource use and circular solutions across our manufacturing facilities.</p>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center opacity-0 relative rounded-[4px] shrink-0" data-node-id="1:3230" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:3231" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:3232">
                <p className="leading-[1.2]">VIEW OUR FACTORIES</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="1:3233" data-name="arrow-forward-long">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong1} />
              </div>
            </div>
            <div className="h-[3px] relative shrink-0 w-[153px]" data-node-id="1:3234" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-stretch overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:3235" data-name="Frame">
          {sustainability.environment.map((card) => (
            <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-start px-[16px] relative rounded-[4px] shrink-0 w-[372px]" key={card.id}>
              <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0">
                  <div className="relative shrink-0 size-[32px]">
                    {card.icon && <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />}
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap">
                  <p className="leading-[1.2]">{card.title}</p>
                </div>
              </div>
              <div className="h-[204px] relative rounded-[4px] shrink-0 w-full">
                {card.image && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={card.image} />}
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic py-[16px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap">
                    <p className="leading-[1.2]">{card.highlight.value}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]">
                    <p className="leading-[1.2]">{card.highlight.label}</p>
                  </div>
                </div>
                {card.detail.value ? (
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap">
                      <p className="leading-[1.2]">{card.detail.value}</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]">
                      <p className="leading-[1.2]">{card.detail.label}</p>
                    </div>
                  </div>
                ) : (
                  card.detail.label && (
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full">
                        <p className="leading-[1.2]">{card.detail.label}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[693px] content-stretch flex flex-col gap-[40px] items-start left-1/2 px-[178px] py-[40px] w-[1920px]" data-node-id="1:3330" data-name="Frame">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:3331" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:3332" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] uppercase whitespace-nowrap" data-node-id="1:3333">
              <p className="leading-[1.2] mb-0 whitespace-pre">{`Our Next `}</p>
              <p className="leading-[1.2] whitespace-pre">Milestones</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center opacity-0 relative rounded-[4px] shrink-0" data-node-id="1:3334" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:3335" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap" data-node-id="1:3336">
                <p className="leading-[1.2]">VIEW OUR FACTORIES</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="1:3337" data-name="arrow-forward-long">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardLong1} />
              </div>
            </div>
            <div className="h-[3px] relative shrink-0 w-[153px]" data-node-id="1:3338" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:3339">
            <p className="leading-[1.2]">BUILDING A MORE RESPONSIBLE TOMORROW.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-stretch overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:3340" data-name="Frame">
          {sustainability.milestones.map((milestone) => (
            <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-[1_0_0] flex-col items-start min-w-px px-[16px] relative rounded-[4px]" key={milestone.id}>
              <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0">
                  <div className="relative shrink-0 size-[32px]">
                    {milestone.icon && <img alt="" className="absolute block inset-0 max-w-none size-full" src={milestone.icon} />}
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative">
                  <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap">
                    <p className="leading-[1.2]">{milestone.title}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]">
                    <p className="leading-[1.2]">{milestone.target}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AchievementsBar page="sustainability" />
      <div className="absolute bg-white content-stretch flex gap-[24px] items-start left-0 px-[180px] py-[80px] top-[2795px] w-[1920px]" data-node-id="1:3524" data-name="Frame">
        <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[372px]" data-node-id="1:3525" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic py-[100px] shrink-0 sticky top-0 w-full" data-node-id="1:3526" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-full" data-node-id="1:3527">
              <p className="leading-[1.2]">{`People & CSR`}</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full" data-node-id="1:3528">
              <p className="leading-[1.2]">OUR PEOPLE ARE AT THE CENTRE OF OUR BUSINESS</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:3529">
              <p className="leading-[1.2]">We are committed to creating safe, respectful and inclusive workplaces where people can grow, contribute and build a better future.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0" data-node-id="1:3530" data-name="Frame">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="1:3531" data-name="Frame">
            <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]" data-node-id="1:3532" data-name="Frame">
              <div className="h-[372px] mb-[-72px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3533">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9116} />
              </div>
              <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3534" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[20px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3535">
                  <p className="leading-[1.2] mb-0">{`Training & `}</p>
                  <p className="leading-[1.2]">Development</p>
                </div>
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]" data-node-id="1:3536" data-name="Frame">
              <div className="h-[372px] mb-[-72px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3537">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px]">
                  <img alt="" className="absolute h-full left-[-38.1%] max-w-none top-0 w-[147.71%]" src={imgRectangle9117} />
                </div>
              </div>
              <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3538" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[20px] uppercase whitespace-nowrap" data-node-id="1:3539">
                  <p className="leading-[1.2] mb-0 whitespace-pre">{`Health & `}</p>
                  <p className="leading-[1.2] whitespace-pre">Safety</p>
                </div>
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]" data-node-id="1:3540" data-name="Frame">
              <div className="h-[372px] mb-[-72px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3541">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9118} />
              </div>
              <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3542" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[20px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3543">
                  <p className="leading-[1.2] mb-0">{`Healthcare `}</p>
                  <p className="leading-[1.2]">Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="1:3544" data-name="Frame">
            <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]" data-node-id="1:3545" data-name="Frame">
              <div className="h-[372px] mb-[-72px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3546">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9119} />
              </div>
              <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3547" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[20px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3548">
                  <p className="leading-[1.2] mb-0">{`Child care `}</p>
                  <p className="leading-[1.2]">Facilities</p>
                </div>
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]" data-node-id="1:3549" data-name="Frame">
              <div className="h-[372px] mb-[-72px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3550">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px]">
                  <img alt="" className="absolute h-full left-[-38.1%] max-w-none top-0 w-[147.71%]" src={imgRectangle9120} />
                </div>
              </div>
              <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3551" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[20px] uppercase whitespace-nowrap" data-node-id="1:3552">
                  <p className="leading-[1.2] mb-0 whitespace-pre">{`Gender `}</p>
                  <p className="leading-[1.2] whitespace-pre">Equality</p>
                </div>
              </div>
            </div>
            <div className="content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]" data-node-id="1:3553" data-name="Frame">
              <div className="h-[372px] mb-[-72px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3554">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9121} />
              </div>
              <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3555" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[20px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3556">
                  <p className="leading-[1.2] mb-0">{`Employee `}</p>
                  <p className="leading-[1.2]">Welfare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[1416px] content-stretch flex gap-[22px] items-center left-1/2 px-[180px] py-[40px] w-[1920px]" data-node-id="1:3557" data-name="Frame">
        <div className="flex flex-row items-center self-stretch" data-node-id="1:3558">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] h-full items-start leading-[0] not-italic relative shrink-0 w-[372px]" data-name="Frame">
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-full" data-node-id="1:3559">
              <p className="leading-[1.2]">Community Impact</p>
            </div>
            <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full whitespace-pre-wrap" data-node-id="1:3560">
              <p className="leading-[1.2] mb-0">{`GROWING `}</p>
              <p className="leading-[1.2]">WITH OUR</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="1:3561">
              <p className="leading-[1.2]">We work in partnership with local communities to support education, healthcare, clean water and long-term social development.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px p-[2px] relative" data-node-id="1:3562" data-name="Frame">
          <div className="content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[279px]" data-node-id="1:3563" data-name="Frame">
            <div className="h-[300px] mb-[-62px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3564">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9122} />
            </div>
            <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3565" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3566">
                <p className="leading-[1.2] mb-0">{`Education `}</p>
                <p className="leading-[1.2]">Support</p>
              </div>
            </div>
          </div>
          <div className="content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[279px]" data-node-id="1:3567" data-name="Frame">
            <div className="h-[300px] mb-[-62px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3568">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9123} />
            </div>
            <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3569" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3570">
                <p className="leading-[1.2] mb-0">{`Healthcare `}</p>
                <p className="leading-[1.2]">Initiatives</p>
              </div>
            </div>
          </div>
          <div className="content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[279px]" data-node-id="1:3571" data-name="Frame">
            <div className="h-[300px] mb-[-62px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3572">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9124} />
            </div>
            <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3573" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3574">
                <p className="leading-[1.2] mb-0">{`Clean Water `}</p>
                <p className="leading-[1.2]">Programmed</p>
              </div>
            </div>
          </div>
          <div className="content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[279px]" data-node-id="1:3575" data-name="Frame">
            <div className="h-[300px] mb-[-62px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-node-id="1:3576">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[4px] size-full" src={imgRectangle9125} />
            </div>
            <div className="backdrop-blur-[3px] bg-[rgba(29,29,29,0.5)] content-stretch flex flex-col items-start p-[12px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-node-id="1:3577" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] uppercase w-full whitespace-pre-wrap" data-node-id="1:3578">
                <p className="leading-[1.2] mb-0">{`Community `}</p>
                <p className="leading-[1.2]">Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[1092px] content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[180px] w-[1920px]" data-node-id="1:3579" data-name="Frame">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap" data-node-id="1:3580">
          <p className="leading-[1.2]">{`CERTIFICATIONS & STANDARDS`}</p>
        </div>
        <LogoMarquee className="h-[120px] relative shrink-0 w-[1560px]" label="Certifications and standards" logos={sustainability.certifications} />
      </div>
      <SustainabilityStories className="absolute left-0 top-[4607px] w-[1920px]" stories={sustainability.stories} />
    </div>
  );
}