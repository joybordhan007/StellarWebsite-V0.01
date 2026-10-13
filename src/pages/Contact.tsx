import { FormEvent, useState } from "react";

const assetPathPrefix = "/assets/1-4581";
const imgArrowSubdirectoryForward = `${assetPathPrefix}/f356f.svg`;
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2 = `${assetPathPrefix}/ec623.png`;
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1 = `${assetPathPrefix}/4d4a6.svg`;
const imgStellarLogo2 = `${assetPathPrefix}/cf89e.svg`;
const imgFacebookLogo = `${assetPathPrefix}/412e8.svg`;
const imgYoutubeLogo = `${assetPathPrefix}/5df0a.svg`;
const imgLinkedinLogo = `${assetPathPrefix}/82b38.svg`;
const imgFrame = `${assetPathPrefix}/adc25.svg`;
const imgFrame1 = `${assetPathPrefix}/06754.svg`;
const imgFrame2 = `${assetPathPrefix}/a2092.svg`;
const imgImage = `${assetPathPrefix}/aa442.png`;
const imgStellarLogo3 = `${assetPathPrefix}/aa512.svg`;
const imgLayer1 = `${assetPathPrefix}/52c2c.svg`;
const imgLayer3 = `${assetPathPrefix}/872b1.svg`;
const imgLayer2 = `${assetPathPrefix}/1ab2f.svg`;
const imgGroup = `${assetPathPrefix}/1f97e.svg`;
const imgGroup1 = `${assetPathPrefix}/f8d87.svg`;
const imgPlus = `${assetPathPrefix}/5c49c.svg`;
const imgMinus = `${assetPathPrefix}/f523a.svg`;

const offices = [
  {
    id: "head-office-bangladesh",
    name: "Head Office Bangladesh",
    addresses: ["House-441, Road-07, Baridhara DOHS, Dhaka-1206"],
    phone: "+880 2 1234 5678",
    email: "info@stellar-mfg.com",
    website: "www.stellar-mfg.com",
    hours: "Fri, 9:00 AM – 6:00 PM (BST)",
  },
  {
    id: "india-office",
    name: "India Office",
    addresses: [
      "PDS Tower, 5th Floor, Plot No. 222, Udyog Vihar Phase -1, Industrial Complex Dundahera, Gurgaon – 122016, Haryana, India",
      "Unit No. 1031 & 1032, Solitaire Corporate Park, Andheri Ghatkopar Link Road, Andheri (East), Mumbai – 400093, Maharashtra, India.",
    ],
    phone: "+880 2 1234 5678",
    email: "info@stellar-mfg.com",
    website: "www.stellar-mfg.com",
    hours: "Fri, 9:00 AM – 6:00 PM (BST)",
  },
  {
    id: "goodearth-apparels",
    name: "GoodEarth Apparels Bangladesh",
    addresses: ["Tepirbari, Telihati, Sreepur, Gazipur, Bangladesh. PO: Gazipur-1740."],
    phone: "+88 09601 121 600",
    email: "info@stellar-mfg.com",
    website: "www.goodearthapparels.com",
    hours: "Fri, 9:00 AM – 6:00 PM (BST)",
  },
  {
    id: "progress-apparels",
    name: "Progress Apparels Bangladesh",
    addresses: ["MS-SFB # 1 & 2, Adamjee EPZ, Narayanganj, Dhaka."],
    phone: "+880 2 1234 5678",
    email: "info@stellar-mfg.com",
    website: "www.progress-mfg.com",
    hours: "Fri, 9:00 AM – 6:00 PM (BST)",
  },
  {
    id: "knit-gallery",
    name: "Knit Gallery India",
    addresses: [
      "SF No. 217/1, 217/2A, 217/2B, 217/2C & 218/1A, Door No. 3-353, Dharapuram Road, Gudimangalam Nal Road Tirupur, Tamil Nadu, 642201, India",
    ],
    phone: "+880 2 1234 5678",
    email: "info@stellar-mfg.com",
    website: "www.stellar-mfg.com",
    hours: "Fri, 9:00 AM – 6:00 PM (BST)",
  },
] as const;

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

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[593px] overflow-clip relative shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]"} data-node-id="1:7" data-name="Footer">
      <div className="absolute contents left-[180px] top-[427px]" data-node-id="1:8" data-name="Mask group">
        <div className="absolute h-[397.046px] left-[-153px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333px_117.511px] mask-size-[1560px_162.213px] top-[309.49px] w-[2226px]" data-node-id="1:17" style={{ maskImage: `url("${imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1}")` }} data-name="black-fabric-draped-elegant-folds-abstract-texture-design-backgrounds 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 top-[71px] w-[1560px]" data-node-id="1:18" data-name="Frame">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[454px]" data-node-id="1:19" data-name="Frame">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:20" data-name="Frame">
            <div className="h-[80px] relative shrink-0 w-[175px]" data-node-id="1:21" data-name="Stellar_Logo 2">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo2} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#191919] text-[18px] w-[min-content]" data-node-id="1:35">
              <p className="leading-[1.5]">We are a sustainable clothing and garment manufacturer, driven by responsible practices, empowered people and a healthier planet.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="1:36" data-name="Frame">
            <a aria-label="Facebook" className="relative shrink-0 size-[24px]" href="https://www.facebook.com/goodearthapparels" rel="noreferrer" target="_blank">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFacebookLogo} />
            </a>
            <a aria-label="YouTube" className="relative shrink-0 size-[24px]" href="https://www.youtube.com/@GoodEarthApparelsLimited" rel="noreferrer" target="_blank">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgYoutubeLogo} />
            </a>
            <a aria-label="LinkedIn" className="relative shrink-0 size-[24px]" href="https://www.linkedin.com/company/goodearthapparels/posts/?feedView=all" rel="noreferrer" target="_blank">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedinLogo} />
            </a>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[200px]" data-node-id="1:58" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:59" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap" data-node-id="1:60">
              <p className="leading-[1.2]">Quick Links</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap" data-node-id="1:61" data-name="Frame">
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/"><p className="leading-[1.2]">Home</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/about"><p className="leading-[1.2]">About Us</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/capabilities"><p className="leading-[1.2]">Our Capabilities</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/design-path"><p className="leading-[1.2]">Design path</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/factories"><p className="leading-[1.2]">Our Factories</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/sustainability"><p className="leading-[1.2]">Sustainability</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/products"><p className="leading-[1.2]">Products</p></a>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[266px]" data-node-id="1:68" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:69" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap" data-node-id="1:70">
              <p className="leading-[1.2]">Support</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap" data-node-id="1:71" data-name="Frame">
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/contact"><p className="leading-[1.2]">Contact Us</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/privacy-policy"><p className="leading-[1.2]">Privacy Policy</p></a>
            <a className="footer-link flex flex-col justify-center relative shrink-0" href="/terms-of-service"><p className="leading-[1.2]">Terms of Service</p></a>
            <div className="flex flex-col justify-center opacity-0 relative shrink-0" data-node-id="1:75">
              <p className="leading-[1.2]">Our Factories</p>
            </div>
            <div className="flex flex-col justify-center opacity-0 relative shrink-0" data-node-id="1:76">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
            <div className="flex flex-col justify-center opacity-0 relative shrink-0" data-node-id="1:77">
              <p className="leading-[1.2]">Products</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[350px]" data-node-id="1:78" data-name="Frame">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap" data-node-id="1:79">
            <p className="leading-[1.2]">Contact Info</p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:80" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[273px]" data-node-id="1:81" data-name="Frame">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:82" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-[245px]" data-node-id="1:84">
                <p className="leading-[1.2]">+880 1704-166654</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[273px]" data-node-id="1:85" data-name="Frame">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:86" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-[245px]" data-node-id="1:89">
                <p className="leading-[1.2]">info@stellar-mfg.com</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:90" data-name="Frame">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:91" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#191919] text-[16px]" data-node-id="1:94">
                <p className="leading-[1.2]">Bangladesh Office: House-441, Road-07, Baridhara DOHS Dhaka-1206</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:95" data-name="Frame">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:96" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#191919] text-[16px]" data-node-id="1:99">
                <p className="leading-[1.2]">India Office: PDS Tower, 5th Floor, Plot No. 222, Udyog Vihar Phase -1, Industrial Complex Dundahera, Gurgaon &ndash; 122016, Haryana, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-t from-[6.131%] from-white h-[174px] left-1/2 to-[79.237%] to-[rgba(255,255,255,0)] top-[419px] w-[1920px]" data-node-id="1:100" />
      <div className="footer-copyright absolute bottom-[20px] left-1/2 -translate-x-1/2 text-center text-[#4a4a4a] text-[13px] whitespace-nowrap"><span>Copyright &copy; 2026 STELLAR MANUFACTURING LTD.</span><span className="footer-credit">Website designed and developed by <a href="http://designops.agency" rel="noreferrer" target="_blank">DesignOps</a></span></div>
    </div>
  );
}

export default function LetsTalk() {
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [activeOffice, setActiveOffice] = useState(offices[0].id);
  const [activeMapAddress, setActiveMapAddress] = useState(offices[0].addresses[0]);

  async function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionState === "sending") return;

    setSubmissionState("sending");
    setSubmissionMessage("");

    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    const email = fields.email;

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@stellar-mfg.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...fields,
          fullName: `${fields.firstName ?? ""} ${fields.lastName ?? ""}`.trim(),
          _subject: "New website contact form message",
          _replyto: typeof email === "string" ? email : "",
        }),
      });

      const result: unknown = await response.json();
      const resultIsObject = typeof result === "object" && result !== null;
      const isSuccessful =
        resultIsObject &&
        "success" in result &&
        (result.success === true || result.success === "true");

      if (!response.ok || !isSuccessful) {
        const serviceMessage =
          resultIsObject && "message" in result && typeof result.message === "string"
            ? result.message
            : "";
        throw new Error(serviceMessage || "We couldn't send your message. Please try again.");
      }

      setSubmissionState("sent");
      setSubmissionMessage(
        "Your message was accepted. If this is the first submission, check info@stellar-mfg.com for FormSubmit's activation email and confirm it to enable delivery.",
      );
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again.",
      );
    }
  }

  return (
    <div className="bg-[#fafafa] relative h-[2963px] w-[1920px]" data-node-id="1:4581" data-name="LET’S TALK">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-[calc(50%+1px)] overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:4583" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:4584" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:4585" style={{ backgroundImage: "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)" }} data-name="Linear" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[179px] text-[#f6f6f6] top-1/2 w-[999px] whitespace-nowrap" data-node-id="1:4586" data-name="Frame">
          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]" data-node-id="1:4587">
            <p className="leading-[1.2] mb-0 whitespace-pre">{`LET’S BUILD WHAT’S NEXT `}</p>
            <p className="leading-[1.2] whitespace-pre">TOGETHER</p>
          </div>
          <div className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]" data-node-id="1:4588" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.2] mb-0 whitespace-pre">{`We’re here to answer your questions, explore new opportunities and `}</p>
            <p className="leading-[1.2] whitespace-pre">partner for a more sustainable future.</p>
          </div>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start pl-[48px] pr-[64px] py-[48px] right-0 w-[439px]" data-node-id="1:4589" data-name="Frame">
          <div className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full" data-node-id="1:4590" data-name="Frame">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4591" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4592" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PEOPLE</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4593" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4594" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PRODUCTS</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4595" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4596" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PLANET</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:4597" data-name="Frame">
              <div className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap" data-node-id="1:4598" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">PARTNERSHIPS</p>
              </div>
            </div>
            <div className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]" data-node-id="1:4599" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]" data-node-id="1:4600" data-name="Frame">
        <div className="h-[60px] relative shrink-0 w-[131px]" data-node-id="1:4601" data-name="Stellar_Logo 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo3} />
        </div>
        <div className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0" data-node-id="1:4615" data-name="Frame">
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4616" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4617">
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4618" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4619">
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4620" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4621">
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4622" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4623">
              <p className="leading-[1.2]">DESIGN PATH</p>
            </div>
          </a>
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4624" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4625">
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4626" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4627">
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0" data-node-id="1:4628" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap" data-node-id="1:4629">
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div className="absolute content-stretch flex gap-[24px] items-start left-[179px] top-[920px] w-[1560px]" data-node-id="1:4631" data-name="Frame">
        <div className="content-stretch flex flex-col items-start py-[80px] shrink-0 sticky top-0 w-[636px]" data-node-id="1:4632" data-name="Frame">
          <div className="bg-white content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[24px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:4633" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2f2f2f] text-[16px] w-full" data-node-id="1:4634">
              <p className="leading-[1.2]">CONTACT INFORMATION</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:4635" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-[218px]" data-node-id="1:4636" data-name="Frame">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1:4637" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:4638" data-name="Frame">
                    <div className="absolute contents inset-[10%_5%]" data-node-id="1:4639" data-name="Layer 2">
                      <div className="absolute inset-[10%_5%]" data-node-id="1:4640" data-name="Layer 1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[18px] whitespace-nowrap" data-node-id="1:4642">
                    <p className="leading-[1.2]">info@stellar-mfg.com</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:4643" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:4644" data-name="Layer_3">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer3} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[18px] whitespace-nowrap" data-node-id="1:4646">
                    <p className="leading-[1.2]">+880 2 1234 5678</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:4647" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:4648" data-name="Layer_1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[18px] whitespace-nowrap" data-node-id="1:4650">
                    <p className="leading-[1.2]">www.stellar-mfg.com</p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] bg-[rgba(222,163,106,0.1)] border border-[rgba(222,163,106,0.4)] border-solid content-stretch flex font-['Inter:Medium'] font-medium gap-[8px] items-start leading-[0] not-italic p-[16px] relative rounded-[8px] shrink-0 text-[#dea36a] text-[16px] w-full" data-node-id="1:4651" data-name="Frame">
                <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap" data-node-id="1:4652">
                  <p className="leading-[1.2]">Note:</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" data-node-id="1:4653">
                  <p className="leading-[1.2]">We typically respond within 1–2 business days. Mon – Fri, 9:00 AM – 6:00 PM (BST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start py-[80px] relative shrink-0 w-[901px]" data-node-id="1:4654" data-name="Frame">
          <div className="contact-page-form-card bg-white content-stretch flex flex-col gap-[24px] items-center overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-node-id="1:4655" data-name="Frame">
            <form className="contact-page-form" onSubmit={submitContactForm}>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:4656" data-name="Frame">
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:4657" data-name="Frame">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:4658" data-name="Frame">
                  <label className="contact-field-label" htmlFor="contact-first-name">First Name <span>*</span></label>
                  <input className="contact-page-input" id="contact-first-name" name="firstName" placeholder="Jane" required />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:4662" data-name="Frame">
                  <label className="contact-field-label" htmlFor="contact-last-name">Last Name <span>*</span></label>
                  <input className="contact-page-input" id="contact-last-name" name="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:4666" data-name="Frame">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:4667" data-name="Frame">
                  <label className="contact-field-label" htmlFor="contact-email">Business Email <span>*</span></label>
                  <input className="contact-page-input" id="contact-email" name="email" placeholder="jane@example.com" type="email" required />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:4671" data-name="Frame">
                  <label className="contact-field-label" htmlFor="contact-phone">Phone Number <span>*</span></label>
                  <input className="contact-page-input" id="contact-phone" name="phone" placeholder="(555) 555-1234" type="tel" required />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:4675" data-name="Frame">
                <label className="contact-field-label" htmlFor="contact-message">Message</label>
                <textarea className="contact-page-input contact-page-textarea" id="contact-message" name="message" placeholder="Tell us about your project..." />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:4679" data-name="Frame">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:4680" data-name="Frame">
                  <input className="contact-page-checkbox" id="contact-privacy" type="checkbox" required />
                  <label className="contact-privacy-label" htmlFor="contact-privacy">
                    I have read and accept the <a href="/privacy-policy">Privacy Policy.</a><span>*</span>
                  </label>
                </div>
              </div>
            </div>
            {submissionMessage && (
              <p
                aria-live="polite"
                className={`contact-form-status contact-form-status-${submissionState}`}
                role={submissionState === "error" ? "alert" : "status"}
              >
                {submissionMessage}
              </p>
            )}
            <button
              className="contact-page-submit"
              disabled={submissionState === "sending"}
              type="submit"
            >
              {submissionState === "sending"
                ? "SENDING..."
                : submissionState === "sent"
                  ? "MESSAGE SENT"
                  : submissionState === "error"
                    ? "TRY AGAIN"
                    : "SEND MESSAGE"}
            </button>
            </form>
          </div>
        </div>
      </div>
      <section
        aria-label="Office information"
        className="contact-offices-section absolute left-[180px] top-[1595px]"
      >
        <div className="contact-office-list">
          {offices.map((office) => {
            const isOpen = activeOffice === office.id;

            return (
              <article className="contact-office-card" key={office.id}>
                <h2 className="contact-office-heading">
                  <button
                    aria-controls={`${office.id}-details`}
                    aria-expanded={isOpen}
                    className="contact-office-toggle"
                    onClick={() => {
                      setActiveOffice(office.id);
                      setActiveMapAddress(office.addresses[0]);
                    }}
                    type="button"
                  >
                    <span>{office.name}</span>
                    <img alt="" src={isOpen ? imgMinus : imgPlus} />
                  </button>
                </h2>
                {isOpen && (
                  <div className="contact-office-details" id={`${office.id}-details`}>
                    {office.addresses.map((address) => (
                      <div className="contact-office-detail" key={address}>
                        <img alt="" src={imgGroup} />
                        {office.addresses.length > 1 ? (
                          <button
                            aria-label={`Show map for ${address}`}
                            aria-pressed={activeMapAddress === address}
                            className="contact-office-address"
                            onClick={() => setActiveMapAddress(address)}
                            type="button"
                          >
                            {address}
                          </button>
                        ) : (
                          <span>{address}</span>
                        )}
                      </div>
                    ))}
                    <div className="contact-office-detail">
                      <img alt="" src={imgLayer3} />
                      <a href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}>{office.phone}</a>
                    </div>
                    <div className="contact-office-detail">
                      <img alt="" src={imgLayer1} />
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </div>
                    <div className="contact-office-detail">
                      <img alt="" src={imgLayer2} />
                      <a href={`https://${office.website}`} rel="noreferrer" target="_blank">
                        {office.website}
                      </a>
                    </div>
                    <div className="contact-office-detail">
                      <img alt="" src={imgGroup1} />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <div className="contact-office-map">
          {offices.map((office) =>
            activeOffice === office.id ? (
              <iframe
                key={activeMapAddress}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapAddress)}&z=14&output=embed`}
                title={`Map showing ${office.name}`}
              />
            ) : null,
          )}
        </div>
      </section>
    </div>
  );
}