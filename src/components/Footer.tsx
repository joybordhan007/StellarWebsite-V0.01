import { useContent } from "../content/ContentProvider";
import type { SocialPlatform } from "../content/types";

export const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  x: "X (Twitter)",
  tiktok: "TikTok",
  pinterest: "Pinterest",
  whatsapp: "WhatsApp",
  website: "Website",
};

const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1 = "/assets/common/stellar-wordmark.svg";
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2 = "/assets/common/footer-fabric-texture.jpg";
const imgFrame = "/assets/common/phone-icon.svg";
const imgFrame1 = "/assets/common/email-icon.svg";
const imgFrame2 = "/assets/common/location-icon.svg";
const imgStellarLogo2 = "/assets/common/stellar-logo.svg";

export default function Footer({ className }: { className?: string }) {
  const site = useContent("site");
  const footer = site.footer;

  return (
    <div className={className || "bg-white h-[593px] overflow-clip relative shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]"} data-node-id="1:7" data-name="Footer">
      <div className="absolute contents left-[180px] top-[427px]" data-mobile="hide" data-node-id="1:8" data-name="Mask group">
        <div className="absolute h-[397.046px] left-[-153px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333px_117.511px] mask-size-[1560px_162.213px] top-[309.49px] w-[2226px]" data-node-id="1:17" style={{ maskImage: `url("${imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1}")` }} data-name="black-fabric-draped-elegant-folds-abstract-texture-design-backgrounds 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 top-[71px] w-[1560px]" data-mobile="wrap" data-node-id="1:18" data-name="Frame">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[454px]" data-mobile="full" data-node-id="1:19" data-name="Frame">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:20" data-name="Frame">
            <div className="h-[80px] relative shrink-0 w-[175px]" data-node-id="1:21" data-name="Stellar_Logo 2">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStellarLogo2} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#191919] text-[18px] w-[min-content]" data-node-id="1:35">
              <p className="leading-[1.5]">{site.tagline}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="1:36" data-name="Frame">
            {site.socialLinks.map((link) => (
              <a
                aria-label={SOCIAL_LABELS[link.platform]}
                className="relative shrink-0 size-[24px]"
                href={link.url}
                key={link.id}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`/assets/social/${link.platform}.svg`} />
              </a>
            ))}
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[200px]" data-node-id="1:58" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:59" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap" data-node-id="1:60">
              <p className="leading-[1.2]">{footer.quickLinksTitle}</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap" data-node-id="1:61" data-name="Frame">
            {footer.quickLinks.map((link, index) => (
              <a className="footer-link flex flex-col justify-center relative shrink-0" href={link.href} key={index}>
                <p className="leading-[1.2]">{link.label}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[266px]" data-node-id="1:68" data-name="Frame">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:69" data-name="Frame">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap" data-node-id="1:70">
              <p className="leading-[1.2]">{footer.supportTitle}</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap" data-node-id="1:71" data-name="Frame">
            {footer.supportLinks.map((link, index) => (
              <a className="footer-link flex flex-col justify-center relative shrink-0" href={link.href} key={index}>
                <p className="leading-[1.2]">{link.label}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[350px]" data-mobile="full" data-node-id="1:78" data-name="Frame">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap" data-node-id="1:79">
            <p className="leading-[1.2]">{footer.contactTitle}</p>
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
      <div className="footer-copyright absolute bottom-[20px] left-1/2 -translate-x-1/2 text-center text-[#4a4a4a] text-[13px] whitespace-nowrap"><span>{site.copyright}</span><span className="footer-credit">{footer.creditText}{" "}<a href={footer.creditUrl} rel="noreferrer" target="_blank">{footer.creditLinkLabel}</a></span></div>
    </div>
  );
}
