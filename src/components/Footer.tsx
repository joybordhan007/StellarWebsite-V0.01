import { useContent } from "../content/ContentProvider";

const assetPathPrefix = "/assets/1-641";
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1 = `${assetPathPrefix}/4d4a6.svg`;
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2 = `${assetPathPrefix}/ec623.jpg`;
const imgFacebookLogo = `${assetPathPrefix}/412e8.svg`;
const imgFrame = `${assetPathPrefix}/adc25.svg`;
const imgFrame1 = `${assetPathPrefix}/06754.svg`;
const imgFrame2 = `${assetPathPrefix}/a2092.svg`;
const imgLinkedinLogo = `${assetPathPrefix}/82b38.svg`;
const imgStellarLogo2 = `${assetPathPrefix}/cf89e.svg`;
const imgYoutubeLogo = `${assetPathPrefix}/5df0a.svg`;

export default function Footer({ className }: { className?: string }) {
  const site = useContent("site");

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
              <p className="leading-[1.5]">{site.tagline}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="1:36" data-name="Frame">
            <a aria-label="Facebook" className="relative shrink-0 size-[24px]" href={site.social.facebook} rel="noreferrer" target="_blank">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFacebookLogo} />
            </a>
            <a aria-label="YouTube" className="relative shrink-0 size-[24px]" href={site.social.youtube} rel="noreferrer" target="_blank">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgYoutubeLogo} />
            </a>
            <a aria-label="LinkedIn" className="relative shrink-0 size-[24px]" href={site.social.linkedin} rel="noreferrer" target="_blank">
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
                <p className="leading-[1.2]">{site.phone}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[273px]" data-node-id="1:85" data-name="Frame">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:86" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-[245px]" data-node-id="1:89">
                <p className="leading-[1.2]">{site.email}</p>
              </div>
            </div>
            {site.footerAddresses.map((address, index) => (
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" key={index}>
                <div className="relative shrink-0 size-[20px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#191919] text-[16px]">
                  <p className="leading-[1.2]">{address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-t from-[6.131%] from-white h-[174px] left-1/2 to-[79.237%] to-[rgba(255,255,255,0)] top-[419px] w-[1920px]" data-node-id="1:100" />
      <div className="footer-copyright absolute bottom-[20px] left-1/2 -translate-x-1/2 text-center text-[#4a4a4a] text-[13px] whitespace-nowrap"><span>{site.copyright}</span><span className="footer-credit">Website designed and developed by <a href="http://designops.agency" rel="noreferrer" target="_blank">DesignOps</a></span></div>
    </div>
  );
}
