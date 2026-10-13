import { useEffect } from "react";
import CountUpValue from "../components/CountUpValue";

const assetPathPrefix = "/assets/1-3076";
const imgRectangle9149 = `${assetPathPrefix}/5886f.png`;
const imgRectangle9150 = `${assetPathPrefix}/2d220.png`;
const imgRectangle9151 = `${assetPathPrefix}/ffe1a.png`;
const imgRectangle9152 = `${assetPathPrefix}/cd5b4.png`;
const imgRectangle9186 = `${assetPathPrefix}/f1d41.png`;
const imgRectangle9163 = `${assetPathPrefix}/aed48.png`;
const imgRectangle9164 = `${assetPathPrefix}/1d6dc.png`;
const imgRectangle9167 = `${assetPathPrefix}/642b2.png`;
const imgRectangle9168 = `${assetPathPrefix}/87a64.png`;
const imgRectangle9169 = `${assetPathPrefix}/7dacd.png`;
const imgRectangle9171 = `${assetPathPrefix}/347b7.png`;
const imgRectangle9172 = `${assetPathPrefix}/92cc5.png`;
const imgRectangle9173 = `${assetPathPrefix}/5494a.png`;
const imgRectangle9174 = `${assetPathPrefix}/74b73.png`;
const imgRectangle9175 = `${assetPathPrefix}/7524c.png`;
const imgRectangle9176 = `${assetPathPrefix}/facd3.png`;
const imgRectangle9177 = `${assetPathPrefix}/b1d3b.png`;
const imgRectangle9178 = `${assetPathPrefix}/dba50.png`;
const imgRectangle9179 = `${assetPathPrefix}/bc7ff.png`;
const imgRectangle9180 = `${assetPathPrefix}/35c52.png`;
const imgRectangle9181 = `${assetPathPrefix}/f6658.png`;
const imgRectangle9182 = `${assetPathPrefix}/14f3d.png`;
const imgRectangle9183 = `${assetPathPrefix}/b2871.png`;
const imgRectangle9184 = `${assetPathPrefix}/ddfaf.png`;
const imgRectangle9185 = `${assetPathPrefix}/a764b.png`;
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
const imgImage = `${assetPathPrefix}/6e33d.png`;
const imgRectangle9113 = `${assetPathPrefix}/234ca.png`;
const imgRectangle9114 = `${assetPathPrefix}/02160.png`;
const imgRectangle9115 = `${assetPathPrefix}/9b97c.png`;
const imgRectangle9214 = `${assetPathPrefix}/0cd2a.png`;
const imgRectangle9215 = `${assetPathPrefix}/daf30.png`;
const imgRectangle9216 = `${assetPathPrefix}/581fc.png`;
const imgRectangle9217 = `${assetPathPrefix}/aac34.png`;
const imgRectangle9116 = `${assetPathPrefix}/33af4.png`;
const imgRectangle9117 = `${assetPathPrefix}/d1997.png`;
const imgRectangle9118 = `${assetPathPrefix}/42cba.png`;
const imgRectangle9119 = `${assetPathPrefix}/b7e87.png`;
const imgRectangle9120 = `${assetPathPrefix}/68447.png`;
const imgRectangle9121 = `${assetPathPrefix}/da086.png`;
const imgRectangle9122 = `${assetPathPrefix}/78e62.png`;
const imgRectangle9123 = `${assetPathPrefix}/b465b.png`;
const imgRectangle9124 = `${assetPathPrefix}/9675b.png`;
const imgRectangle9125 = `${assetPathPrefix}/58673.png`;
const imgRectangle9228 = `${assetPathPrefix}/bac63.png`;
const imgRectangle9229 = `${assetPathPrefix}/1eacf.png`;
const imgRectangle9230 = `${assetPathPrefix}/70d97.png`;
const imgRectangle9231 = `${assetPathPrefix}/fb746.png`;
const imgArrowForwardLong = `${assetPathPrefix}/887e7.svg`;
const imgStellarLogo3 = `${assetPathPrefix}/d3126.svg`;
const imgGroup = `${assetPathPrefix}/185b3.svg`;
const imgLayer1 = `${assetPathPrefix}/2b9d4.svg`;
const imgGroup1 = `${assetPathPrefix}/84333.svg`;
const imgGroup2 = `${assetPathPrefix}/a898e.svg`;
const imgArtboard421 = `${assetPathPrefix}/89e44.svg`;
const imgArrowForwardLong1 = `${assetPathPrefix}/77a61.svg`;
const imgVector = `${assetPathPrefix}/ee01d.svg`;
const imgIcons = `${assetPathPrefix}/80022.svg`;
const imgGroup3 = `${assetPathPrefix}/16af0.svg`;
const imgLayer2 = `${assetPathPrefix}/19f17.svg`;
const imgGroup4 = `${assetPathPrefix}/87172.svg`;
const imgIcons1 = `${assetPathPrefix}/9f8a8.svg`;
const imgIcons2 = `${assetPathPrefix}/a4d0a.svg`;
const imgLayer3 = `${assetPathPrefix}/f860a.svg`;
const imgG1030 = `${assetPathPrefix}/57c8d.svg`;
const imgG1031 = `${assetPathPrefix}/f63a3.svg`;
const imgG1034 = `${assetPathPrefix}/a3315.svg`;
const imgG1038 = `${assetPathPrefix}/4ad95.svg`;
const imgG1042 = `${assetPathPrefix}/da58e.svg`;
const imgG1046 = `${assetPathPrefix}/12524.svg`;
const imgG1050 = `${assetPathPrefix}/a1d15.svg`;
const imgLine = `${assetPathPrefix}/68bdd.svg`;
const imgLayer4 = `${assetPathPrefix}/dba5a.svg`;
const imgGroup5 = `${assetPathPrefix}/4294a.svg`;
const imgGroup6 = `${assetPathPrefix}/88ab7.svg`;
const imgGroup7 = `${assetPathPrefix}/1b8aa.svg`;
const imgGroup8 = `${assetPathPrefix}/812ed.svg`;
const imgIcons3 = `${assetPathPrefix}/82273.svg`;
const imgLayer5 = `${assetPathPrefix}/b4e7f.svg`;
const imgIcons4 = `${assetPathPrefix}/6f036.svg`;
const imgGroup9 = `${assetPathPrefix}/427e2.svg`;
const imgGlyph = `${assetPathPrefix}/5cde5.svg`;
const imgLine1 = `${assetPathPrefix}/542a5.svg`;
const imgLine2 = `${assetPathPrefix}/86436.svg`;
const imgGraphiGrid = `${assetPathPrefix}/93357.svg`;
const imgGroup10 = `${assetPathPrefix}/f0c26.svg`;
const imgGroup11 = `${assetPathPrefix}/4d23c.svg`;
const imgGlyph1 = `${assetPathPrefix}/a8877.svg`;
const imgGraphiGrid1 = `${assetPathPrefix}/58b33.svg`;
const imgLayer6 = `${assetPathPrefix}/97acf.svg`;
const imgGroup12 = `${assetPathPrefix}/8d286.svg`;
const imgWeather = `${assetPathPrefix}/d19a7.svg`;
const imgIcon = `${assetPathPrefix}/0fb0c.svg`;
const imgLine3 = `${assetPathPrefix}/8ac2c.svg`;
const imgLine4 = `${assetPathPrefix}/6c6a5.svg`;
const imgLine5 = `${assetPathPrefix}/a5e10.svg`;
const imgLine6 = `${assetPathPrefix}/362a2.svg`;
const imgLine7 = `${assetPathPrefix}/adeed.svg`;
const imgGraphiGrid2 = `${assetPathPrefix}/4f43a.svg`;
const imgLayer7 = `${assetPathPrefix}/f1fb2.svg`;
const imgX301Parrot = `${assetPathPrefix}/29fb8.svg`;
const imgFrame3 = `${assetPathPrefix}/aacaf.svg`;
const imgGroup13 = `${assetPathPrefix}/77ee2.svg`;
const imgLine8 = `${assetPathPrefix}/30b4c.svg`;
const imgLine9 = `${assetPathPrefix}/c64ae.svg`;
const imgLine10 = `${assetPathPrefix}/a352a.svg`;

type CertificationsStandardsProps = {
  className?: string;
  property1?: "View";
};

function CertificationsStandards({ className, property1 = "View" }: CertificationsStandardsProps) {
  return (
    <div className={`${className || "h-[120px] overflow-clip relative w-[1560px]"} certification-logo-marquee certification-logo-marquee--sustainability`} data-node-id="1:506">
      <div className="absolute h-[120px] left-0 rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:507">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9149} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[264px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:508">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9150} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[528px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:509">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9151} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[792px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:510">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9152} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[1056px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:511">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9186} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[1320px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:512">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9163} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[1584px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:513">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9164} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[1848px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:514">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9152} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[2112px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:515">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9150} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[2376px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:516">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9167} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[2640px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:517">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9168} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[2904px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:518">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[6px]">
            <img alt="" className="absolute h-[144.86%] left-[18.04%] max-w-none top-[-22.7%] w-[63.74%]" src={imgRectangle9169} />
          </div>
        </div>
      </div>
      <div className="absolute h-[120px] left-[3168px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:519">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9186} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[3432px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:520">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9171} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[3696px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:521">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[6px]">
            <img alt="" className="absolute h-[159.08%] left-[10.13%] max-w-none top-[-29.34%] w-[79.54%]" src={imgRectangle9172} />
          </div>
        </div>
      </div>
      <div className="absolute h-[120px] left-[3960px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:522">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9173} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[4224px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:523">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9174} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[4488px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:524">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgRectangle9175} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[4752px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:525">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9176} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[5016px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:526">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9177} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[5280px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:527">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgRectangle9178} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[5544px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:528">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9179} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[5808px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:529">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9180} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[6072px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:530">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9181} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[6336px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:531">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9182} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[6600px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:532">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9183} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[6864px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:533">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9184} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[7128px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:534">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9185} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[7392px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:535">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9149} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[7656px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:536">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9150} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[7920px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:537">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9151} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[8184px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:538">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9163} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[8448px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:539">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9164} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[8712px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:540">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9152} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[8976px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:541">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9150} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[9240px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:542">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9167} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[9504px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:543">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9168} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[9768px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:544">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[6px]">
            <img alt="" className="absolute h-[144.86%] left-[18.04%] max-w-none top-[-22.7%] w-[63.74%]" src={imgRectangle9169} />
          </div>
        </div>
      </div>
      <div className="absolute h-[120px] left-[10032px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:545">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9186} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[10296px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:546">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9171} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[10560px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:547">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[6px]">
            <img alt="" className="absolute h-[159.08%] left-[10.13%] max-w-none top-[-29.34%] w-[79.54%]" src={imgRectangle9172} />
          </div>
        </div>
      </div>
      <div className="absolute h-[120px] left-[10824px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:548">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9173} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[11088px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:549">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9174} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[11352px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:550">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgRectangle9175} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[11616px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:551">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9176} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[11880px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:552">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9177} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[12144px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:553">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgRectangle9178} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[12408px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:554">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9179} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[12672px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:555">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9180} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[12936px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:556">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9181} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[13200px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:557">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9182} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[13464px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:558">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9183} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[13728px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:559">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9184} />
        </div>
      </div>
      <div className="absolute h-[120px] left-[13992px] rounded-[6px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] top-0 w-[240px]" data-node-id="1:560">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[6px] size-full" src={imgRectangle9185} />
        </div>
      </div>
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

export default function Sustainability() {
  useEffect(() => {
    const chartTitles = [
      "Where our electricity comes from",
      "Factory emissions, Scope 1 + 2",
      "Water use by purpose, 2025",
      "Where our waste went, 2025",
    ];
    const charts: HTMLElement[] = [];

    const headings = Array.from(document.querySelectorAll("p")).filter((element) =>
      chartTitles.includes(element.textContent?.trim() ?? ""),
    );

    for (const heading of headings) {
      let container = heading.parentElement;

      while (container && !container.querySelector('[data-name="MainChart"]')) {
        container = container.parentElement;
      }

      const chart = container?.querySelector<HTMLElement>('[data-name="MainChart"]');
      if (!chart || charts.includes(chart)) continue;

      chart.classList.add("sustainability-data-chart");
      chart.querySelectorAll<HTMLElement>('[data-name="BarStrip"]').forEach((bar) => {
        bar.classList.add("sustainability-data-chart-bar");
      });
      charts.push(chart);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      charts.forEach((chart) => chart.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    charts.forEach((chart) => observer.observe(chart));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fafafa] relative h-[9963px] w-[1920px]" data-node-id="1:3076" data-name="Sustainability">
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-1/2 overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.06)] w-[1920px]" />
      <div className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="1:3078" data-name="Frame">
        <div className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]" data-node-id="1:3079" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
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
        <div className="content-stretch flex gap-[24px] items-start overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:3187" data-name="Frame">
          <a aria-label="GoodEarth Apparels factory profile" className="factory-profile-card bg-[#f9f7f5] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[504px]" data-node-id="1:3188" data-name="Frame" href="/factories/goodearth#factory-profile">
            <div className="h-[289px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:3189">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle9113} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full" data-node-id="1:3190" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1d1d1d] w-full" data-node-id="1:3191" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[20px] w-full" data-node-id="1:3192">
                  <p className="leading-[1.2]">GoodEarth Apparels</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:3193">
                  <p className="leading-[1.2]">Dhaka, Bangladesh | LEED Zero</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[8px] items-start relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:3194" data-name="Frame">
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3195">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">650 kW installed solar capacity</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3196">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">75% renewable-energy usage</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3197">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">40% water-efficiency improvement</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3198">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Re-NUWASTE textile waste recycling</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3199">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">GreenScan system for traceability</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3200">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Strong employee, health, sanitation and childcare initiatives</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3201">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">In-house doctor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a aria-label="Progress Apparels factory profile" className="factory-profile-card bg-[#f9f7f5] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center relative rounded-[8px] self-stretch shrink-0 w-[504px]" data-node-id="1:3202" data-name="Frame" href="/factories/progress#factory-profile">
            <div className="h-[289px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:3203">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle9114} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full" data-node-id="1:3204" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1d1d1d] w-full" data-node-id="1:3205" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[20px] w-full" data-node-id="1:3206">
                  <p className="leading-[1.2]">Progress Apparels</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:3207">
                  <p className="leading-[1.2]">Dhaka, Bangladesh | LEED Gold</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[8px] items-start relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:3208" data-name="Frame">
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3209">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Sustainable, scalable manufacturing</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3210">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Strong in-house washing and finishing</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3211">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Resource-efficiency programmers</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3212">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Environmentally responsible operations</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3213">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Community engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a aria-label="Knit Gallery factory profile" className="factory-profile-card bg-[#f9f7f5] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center relative rounded-[8px] self-stretch shrink-0 w-[504px]" data-node-id="1:3214" data-name="Frame" href="/factories/knit-gallery#factory-profile">
            <div className="h-[289px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:3215">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src="/assets/1-641/a9ee6.png" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full" data-node-id="1:3216" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1d1d1d] w-full" data-node-id="1:3217" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[20px] w-full" data-node-id="1:3218">
                  <p className="leading-[1.2]">Knit Gallery</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:3219">
                  <p className="leading-[1.2]">Tirupur, India | LEED Platinum</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[8px] items-start relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:3220" data-name="Frame">
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3221">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Responsible knit manufacturing</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3222">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Energy and resource efficiency</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3223">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">People and community initiatives</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="1:3224">
                  <ul>
                    <li className="list-disc ms-[21px]">
                      <span className="leading-[1.2]">Data pending for key environmental metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
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
        <div className="content-stretch flex gap-[24px] items-start overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:3235" data-name="Frame">
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-start px-[16px] relative rounded-[4px] shrink-0 w-[372px]" data-node-id="1:3236" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3237" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3238" data-name="Frame">
                <div className="relative shrink-0 size-[32px]" data-node-id="1:3239" data-name="Icons">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3251">
                <p className="leading-[1.2]">{`Solar & Energy`}</p>
              </div>
            </div>
            <div className="h-[204px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:3252">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle9214} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic py-[16px] relative shrink-0 w-full" data-node-id="1:3253" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:3254" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] uppercase whitespace-nowrap" data-node-id="1:3255">
                  <p className="leading-[1.2]">650 kW</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3256">
                  <p className="leading-[1.2]">Installed solar capacity</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:3257" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] uppercase whitespace-nowrap" data-node-id="1:3258">
                  <p className="leading-[1.2]">75%</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3259">
                  <p className="leading-[1.2]">Renewable energy usage (GoodEarth Apparels)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-start px-[16px] relative rounded-[4px] shrink-0 w-[372px]" data-node-id="1:3260" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3261" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3262" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1:3263" data-name="Capa_1">
                  <div className="absolute inset-[3.32%_-0.02%_3.32%_0]" data-node-id="1:3264" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3270">
                <p className="leading-[1.2]">Water Efficiency</p>
              </div>
            </div>
            <div className="h-[204px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:3271">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle9215} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic py-[16px] relative shrink-0 w-full" data-node-id="1:3272" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:3273" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] uppercase whitespace-nowrap" data-node-id="1:3274">
                  <p className="leading-[1.2]">40%</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3275">
                  <p className="leading-[1.2]">Water reduction</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:3276" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:3277">
                  <p className="leading-[1.2]">2.7 million gallons</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3278">
                  <p className="leading-[1.2]">of wastewater recycled</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-start px-[16px] relative rounded-[4px] shrink-0 w-[372px]" data-node-id="1:3279" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3280" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3281" data-name="Frame">
                <div className="relative shrink-0 size-[32px]" data-node-id="1:3282" data-name="Layer_1">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3301">
                <p className="leading-[1.2]">{`Waste & Circularity`}</p>
              </div>
            </div>
            <div className="h-[204px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:3302">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle9216} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic py-[16px] relative shrink-0 w-full" data-node-id="1:3303" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:3304" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:3305">
                  <p className="leading-[1.2]">Re-NuWASTE</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3306">
                  <p className="leading-[1.2]">Textile waste recycling</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:3307" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:3308">
                  <p className="leading-[1.2]">Ongoing</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3309">
                  <p className="leading-[1.2]">Waste reduction initiatives</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-start px-[16px] relative rounded-[4px] self-stretch shrink-0 w-[372px]" data-node-id="1:3310" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3311" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3312" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1:3313" data-name="_x33_0">
                  <div className="absolute inset-[4.69%]" data-node-id="1:3314" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3322">
                <p className="leading-[1.2]">{`Traceability & Materials`}</p>
              </div>
            </div>
            <div className="h-[204px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:3323">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle9217} />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start py-[16px] relative shrink-0 w-full" data-node-id="1:3324" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:3325" data-name="Frame">
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="1:3326">
                  <p className="leading-[1.2]">GreenScan</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3327">
                  <p className="leading-[1.2]">Traceability system (GoodEarth Apparels)</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:3328" data-name="Frame">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="1:3329">
                  <p className="leading-[1.2]">Certified and lower-impact materials across our supply chain</p>
                </div>
              </div>
            </div>
          </div>
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
        <div className="content-stretch flex gap-[16px] items-start overflow-clip p-[2px] relative shrink-0 w-full" data-node-id="1:3340" data-name="Frame">
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-[1_0_0] flex-col items-start min-w-px px-[16px] relative rounded-[4px]" data-node-id="1:3341" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3342" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3343" data-name="Frame">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:3344">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="1:3345" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative" data-node-id="1:3357" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3358">
                  <p className="leading-[1.2]">Renewable Energy</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3359">
                  <p className="leading-[1.2]">Target: 90 %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-[1_0_0] flex-col items-start min-w-px px-[16px] relative rounded-[4px]" data-node-id="1:3360" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3361" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3362" data-name="Frame">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:3363">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="1:3364" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative" data-node-id="1:3376" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3377">
                  <p className="leading-[1.2]">Water Reduction</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3378">
                  <p className="leading-[1.2]">Target: 90 %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-[1_0_0] flex-col items-start min-w-px px-[16px] relative rounded-[4px]" data-node-id="1:3379" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3380" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3381" data-name="Frame">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:3382">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="1:3383" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons2} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative" data-node-id="1:3395" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3396">
                  <p className="leading-[1.2]">Waste Diversion</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3397">
                  <p className="leading-[1.2]">Target: 90 %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-[1_0_0] flex-col items-start min-w-px px-[16px] relative rounded-[4px]" data-node-id="1:3398" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-[267.2px]" data-node-id="1:3399" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3400" data-name="Frame">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:3401">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="1:3402" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons2} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative" data-node-id="1:3414" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3415">
                  <p className="leading-[1.2]">Women in Leadership</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3416">
                  <p className="leading-[1.2]">Target: 90 %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.08)] flex flex-[1_0_0] flex-col items-start min-w-px px-[16px] relative rounded-[4px]" data-node-id="1:3417" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full" data-node-id="1:3418" data-name="Frame">
              <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3419" data-name="Frame">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:3420">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="1:3421" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative" data-node-id="1:3433" data-name="Frame">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3434">
                  <p className="leading-[1.2]">Community Reach</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]" data-node-id="1:3435">
                  <p className="leading-[1.2]">Target: 90 %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#f9f7f5] content-stretch flex items-center justify-between left-1/2 px-[180px] py-[40px] top-[920px] w-[1920px]" data-node-id="1:3436" data-name="Frame">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3437">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative" data-name="Frame">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3438" data-name="Frame">
              <div className="relative shrink-0 size-[48px]" data-node-id="1:3439" data-name="Layer_3">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer3} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-[250px] whitespace-nowrap" data-node-id="1:3441" data-name="Frame">
              <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]" data-node-id="1:3442">
                <p className="leading-[1.2]">
                  <CountUpValue value={1} suffix=" MW" />
                </p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] text-center uppercase" data-node-id="1:3443">
                <p className="leading-[1.2]">Solar Power Installed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px" data-node-id="1:3444" />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3445">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative" data-name="Frame">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3446" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="1:3447" data-name="svg1014">
                <div className="absolute contents inset-0" data-node-id="1:3448" style={{ containerType: "size" }} data-name="g1020">
                  <div className="absolute contents inset-0" data-node-id="1:3449" style={{ containerType: "size" }} data-name="g1022">
                    <div className="absolute contents inset-0" data-node-id="1:3450" style={{ containerType: "size" }} data-name="Clip path group">
                      <div className="absolute contents inset-[1.95%]" data-node-id="1:3453" style={{ containerType: "size" }} data-name="g1024">
                        <div className="absolute flex inset-[28.32%_64.62%_50.88%_18.42%] items-center justify-center" data-node-id="1:3454" style={{ containerType: "size" }}>
                          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.844px_-13.593px] mask-size-[48px_48px] relative size-full" style={{ maskImage: `url("${imgG1030}")` }} data-name="g1030">
                              <div className="absolute inset-[-9.01%_-11.06%]">
                                <img alt="" className="block max-w-none size-full" src={imgG1031} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-[38.72%_18.42%_46.68%_73.68%] items-center justify-center" data-node-id="1:3456" style={{ containerType: "size" }}>
                          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-35.367px_-18.586px] mask-size-[48px_48px] relative size-full" style={{ maskImage: `url("${imgG1030}")` }} data-name="g1034">
                              <div className="absolute inset-[-12.84%_-23.75%]">
                                <img alt="" className="block max-w-none size-full" src={imgG1034} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-[28.32%_34.91%_50.88%_44.29%] items-center justify-center" data-node-id="1:3458" style={{ containerType: "size" }}>
                          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-21.258px_-13.593px] mask-size-[48px_48px] relative size-full" style={{ maskImage: `url("${imgG1030}")` }} data-name="g1038">
                              <div className="absolute inset-[-9.01%]">
                                <img alt="" className="block max-w-none size-full" src={imgG1038} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-[1.95%_1.95%_21.9%_1.95%] items-center justify-center" data-node-id="1:3460" style={{ containerType: "size" }}>
                          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px_-0.937px] mask-size-[48px_48px] relative size-full" style={{ maskImage: `url("${imgG1030}")` }} data-name="g1042">
                              <div className="absolute inset-[-2.46%_-1.95%]">
                                <img alt="" className="block max-w-none size-full" src={imgG1042} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-[75.6%_69.53%_13.46%_19.53%] items-center justify-center" data-node-id="1:3462" style={{ containerType: "size" }}>
                          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.375px_-36.287px] mask-size-[48px_48px] relative size-full" style={{ maskImage: `url("${imgG1030}")` }} data-name="g1046">
                              <div className="absolute inset-[-17.14%]">
                                <img alt="" className="block max-w-none size-full" src={imgG1046} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-[88.67%_88.67%_1.95%_1.95%] items-center justify-center" data-node-id="1:3464" style={{ containerType: "size" }}>
                          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.938px_-42.563px] mask-size-[48px_48px] relative size-full" style={{ maskImage: `url("${imgG1030}")` }} data-name="g1050">
                              <div className="absolute inset-[-20%]">
                                <img alt="" className="block max-w-none size-full" src={imgG1050} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-[250px]" data-node-id="1:3466" data-name="Frame">
              <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap" data-node-id="1:3467">
                <p className="leading-[1.2]">
                  <CountUpValue value={25000} suffix="+" />
                </p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[18px] text-center uppercase w-[min-content]" data-node-id="1:3468">
                <p className="leading-[1.2]">{`Tonnes $\text{CO2}_2$ Avoided (annually) `}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px" data-node-id="1:3469" />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3470">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative" data-name="Frame">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3471" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="1:3472" data-name="Frame">
                <div className="absolute contents inset-[-0.09%_0_0_0]" data-node-id="1:3473" data-name="18-water cycle">
                  <div className="absolute inset-[-0.09%_0_0_0]" data-node-id="1:3474" data-name="line">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLine} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 w-[250px]" data-node-id="1:3484" data-name="Frame">
              <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap" data-node-id="1:3485">
                <p className="leading-[1.2]">
                  <CountUpValue value={40} suffix="%" />
                </p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[18px] text-center uppercase w-[min-content]" data-node-id="1:3486">
                <p className="leading-[1.2]">Lower Fresh Water Consumption</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px" data-node-id="1:3487" />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3488">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative" data-name="Frame">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3489" data-name="Frame">
              <div className="relative shrink-0 size-[48px]" data-node-id="1:3490" data-name="Layer_1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap" data-node-id="1:3492" data-name="Frame">
              <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]" data-node-id="1:3493">
                <p className="leading-[1.2]">
                  <CountUpValue value={70} suffix="%" />
                </p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] uppercase" data-node-id="1:3494">
                <p className="leading-[1.2]">Waste Recycled</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px" data-node-id="1:3495" />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3496">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative" data-name="Frame">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0" data-node-id="1:3497" data-name="Frame">
              <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="1:3498" data-name="Frame">
                <div className="absolute contents inset-[0.04%_5.47%_0_5.47%]" data-node-id="1:3499" data-name="Layer_x0020_1">
                  <div className="absolute contents inset-[0.04%_5.47%_0_5.47%]" data-node-id="1:3500" data-name="_614439456">
                    <div className="absolute inset-[26.21%_5.47%_27.15%_62.11%]" data-node-id="1:3501" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
                    </div>
                    <div className="absolute inset-[53.26%_33.79%_0_33.79%]" data-node-id="1:3506" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
                    </div>
                    <div className="absolute inset-[26.6%_62.11%_26.56%_5.47%]" data-node-id="1:3511" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
                    </div>
                    <div className="absolute inset-[0.04%_33.79%_53.32%_33.79%]" data-node-id="1:3516" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3521" data-name="Frame">
              <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]" data-node-id="1:3522">
                <p className="leading-[1.2]">
                  <CountUpValue value={10200} suffix="+" />
                </p>
              </div>
              <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] uppercase" data-node-id="1:3523">
                <p className="leading-[1.2]">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <CertificationsStandards className="h-[120px] overflow-clip relative shrink-0 w-[1560px]" />
      </div>
      <div className="absolute h-[864px] left-0 top-[4607px] w-[1920px]" data-node-id="1:3582" data-name="Frame">
        <div className="absolute h-[864px] left-0 top-0 w-[1920px]" data-node-id="1:3583">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9228} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[24px] items-start left-1/2 top-[calc(50%+0.5px)] w-[1560px]" data-node-id="1:3584" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="1:3585" data-name="Frame">
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:3586" data-name="Frame">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:3587" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3588" data-name="Frame">
                  <div className="relative shrink-0 size-[24px]" data-node-id="1:3589" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons3} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3601">
                  <p className="leading-[1.2]">Powered by the sun</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:3602">
                <p className="leading-[1.3]">Since July 2023, the roof of our Gazipur factory has worked as a power plant. In 2025 our solar panels generated 1.07 GWh of clean electricity. That covered 40% of everything the factory used, and we sent the surplus back to the national grid. Since 2022 we have cut the power we buy from the grid by 31% and our generator diesel use by 64%.</p>
              </div>
            </div>
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:3603" data-name="Frame">
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3604" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3605" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:3606" data-name="Layer_1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3608" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3609">
                    <p className="leading-[1.2]">2.76 GWh</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3610">
                    <p className="leading-[1.2]">Clean electricity generated from Jul 2023 to Mar 2026</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3611" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3612" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:3613" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons4} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3622" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3623">
                    <p className="leading-[1.2]">−31%</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3624">
                    <p className="leading-[1.2]">Grid electricity bought: 1,649 MWh (2022) → 1,132 MWh (2025)</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3625" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3626" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:3627" data-name="Capa_1">
                    <div className="absolute inset-[5%_5.01%_5%_5%]" data-node-id="1:3628" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup9} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3640" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3641">
                    <p className="leading-[1.2]">−64%</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3642">
                    <p className="leading-[1.2]">Generator diesel: 71,247 L → 25,461 L</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3643" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3644" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:3645" data-name="glyph">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3648" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3649">
                    <p className="leading-[1.2]">257 MWh</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3650">
                    <p className="leading-[1.2]">Surplus solar sold to the grid (REB) in 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] h-[613px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[878px]" data-node-id="1:3651" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:3652" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:3653" data-name="Frame">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:3654" data-name="Frame">
                  <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3655" data-name="Frame">
                    <div className="relative shrink-0 size-[24px]" data-node-id="1:3656" data-name="Icons">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons3} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3668">
                    <p className="leading-[1.2]">Where our electricity comes from</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3669">{`MWh per year · GEAL `}</p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start justify-center overflow-clip relative shrink-0" data-node-id="1:3670" data-name="Legends">
                <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-node-id="1:3671" data-name="Legend">
                  <div className="bg-[#706ee7] border border-solid border-white relative shrink-0 size-[16px]" data-node-id="1:3672" data-name="SquareFill" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3673">
                    Grid (REB)
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-node-id="1:3674" data-name="Legend">
                  <div className="bg-[#55c4ae] border border-solid border-white relative shrink-0 size-[16px]" data-node-id="1:3675" data-name="SquareFill" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3676">
                    Rooftop solar
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-node-id="1:3677" data-name="Legend">
                  <div className="bg-[#ff928a] border border-solid border-white relative shrink-0 size-[16px]" data-node-id="1:3678" data-name="SquareFill" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3679">
                    Diesel generator
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-node-id="1:3680" data-name="Chart&Axis">
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px relative w-full" data-node-id="1:3681" data-name="MainChart">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal h-full items-end justify-between leading-[1.2] not-italic px-[4px] relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:3682" data-name="yAxisLeft">
                  <p className="relative shrink-0" data-node-id="1:3683">
                    3,000
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3684">
                    2,500
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3685">
                    2,000
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3686">
                    1,500
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3687">
                    1,000
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3688">
                    500
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3689">
                    0
                  </p>
                </div>
                <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:3690" data-name="Graphi&Grid">
                  <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between px-px py-[6px]" data-node-id="1:3691" data-name="xLines">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3692" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3693" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3694" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3695" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3696" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3697" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3698" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine2} />
                      </div>
                    </div>
                  </div>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGraphiGrid} />
                  <div className="absolute content-stretch flex inset-[6px_0_7px_0] items-start" data-node-id="1:3705" data-name="BarArea">
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3706" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3707" data-name="BarBlock">
                        <div className="bg-[#ff928a] h-[25px] opacity-80 relative shrink-0 w-full" data-node-id="1:3708" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[284px] opacity-80 relative shrink-0 w-full" data-node-id="1:3709" data-name="BarStrip" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3710" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3711" data-name="BarBlock">
                        <div className="bg-[#ff928a] h-[15px] opacity-80 relative shrink-0 w-full" data-node-id="1:3712" data-name="BarStrip" />
                        <div className="bg-[#55c4ae] h-[58px] opacity-80 relative shrink-0 w-full" data-node-id="1:3713" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[203px] opacity-80 relative shrink-0 w-full" data-node-id="1:3714" data-name="BarStrip" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3715" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3716" data-name="BarBlock">
                        <div className="bg-[#ff928a] h-[13px] opacity-80 relative shrink-0 w-full" data-node-id="1:3717" data-name="BarStrip" />
                        <div className="bg-[#55c4ae] h-[135px] opacity-80 relative shrink-0 w-full" data-node-id="1:3718" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[173px] opacity-80 relative shrink-0 w-full" data-node-id="1:3719" data-name="BarStrip" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3720" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3721" data-name="BarBlock">
                        <div className="bg-[#ff928a] h-[4.581px] opacity-80 relative shrink-0 w-full" data-node-id="1:3722" data-name="BarStrip" />
                        <div className="bg-[#55c4ae] h-[131px] opacity-80 relative shrink-0 w-full" data-node-id="1:3723" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[186px] opacity-80 relative shrink-0 w-full" data-node-id="1:3724" data-name="BarStrip" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between pb-[8px] pl-[68px] relative shrink-0 w-full" data-node-id="1:3726" data-name="xAxis">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3727" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3728">
                    2022
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3729" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3730">
                    2023
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3731" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3732">
                    2024
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3733" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3734">
                    2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[864px] left-0 top-[5471px] w-[1920px]" data-node-id="1:3735" data-name="Frame">
        <div className="absolute h-[864px] left-0 top-0 w-[1920px]" data-node-id="1:3736">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9229} />
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-start left-[180px] top-[92px] w-[1560px]" data-node-id="1:3737" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="1:3738" data-name="Frame">
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:3739" data-name="Frame">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:3740" data-name="Frame">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0" data-node-id="1:3741" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:3742" data-name="Capa_1">
                    <div className="absolute inset-[5.71%_0]" data-node-id="1:3743" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3746">
                  <p className="leading-[1.2]">Less carbon in every garment</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:3747">
                <p className="leading-[1.3]">{`We measure our carbon footprint every year with an independent inspection body, following the GHG Protocol. Between 2022 and 2025 our factory's emissions fell by 31%. The carbon behind each garment we ship fell by a quarter. Our solar roof now avoids around 714 tonnes of CO₂ a year, about what 155 cars emit.`}</p>
              </div>
            </div>
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:3748" data-name="Frame">
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3749" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3750" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:3751" data-name="Layer_1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3753" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3754">
                    <p className="leading-[1.2]">1,333 t</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3755">
                    <p className="leading-[1.2]">CO₂e in 2025 (Scope 1: 574 t from diesel; Scope 2: 758 t from grid power)</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3756" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3757" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:3758" data-name="Capa_1">
                    <div className="absolute inset-[5%]" data-node-id="1:3759" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3765" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3766">
                    <p className="leading-[1.2]">173 g</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3767">
                    <p className="leading-[1.2]">CO₂e per garment shipped in 2025, down from 230 g in 2022 (−25%)</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3768" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3769" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:3770" data-name="Frame">
                    <div className="absolute inset-[3.84%_3.89%_3.51%_3.52%]" data-node-id="1:3771" data-name="glyph">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph1} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3895" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3896">
                    <p className="leading-[1.2]">714 t</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3897">
                    <p className="leading-[1.2]">CO₂ avoided by solar in 2025, using the same 0.67 t/MWh grid factor as the GHG report</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] h-[613px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[878px]" data-node-id="1:3898" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:3899" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:3900" data-name="Frame">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:3901" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0" data-node-id="1:3902" data-name="Frame">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:3903" data-name="Capa_1">
                      <div className="absolute inset-[5.71%_0]" data-node-id="1:3904" data-name="Group">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3907">
                    <p className="leading-[1.2]">Factory emissions, Scope 1 + 2</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3908">
                  Tonnes CO₂e per year
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start justify-center overflow-clip relative shrink-0" data-node-id="1:3909" data-name="Legends">
                <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-node-id="1:3910" data-name="Legend">
                  <div className="bg-[#706ee7] border border-solid border-white relative shrink-0 size-[16px]" data-node-id="1:3911" data-name="SquareFill" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3912">{`Scope 1 · diesel (boiler + generators) `}</p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-node-id="1:3913" data-name="Legend">
                  <div className="bg-[#55c4ae] border border-solid border-white relative shrink-0 size-[16px]" data-node-id="1:3914" data-name="SquareFill" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:3915">
                    Scope 2 · grid electricity
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-node-id="1:3916" data-name="Chart&Axis">
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px relative w-full" data-node-id="1:3917" data-name="MainChart">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal h-full items-end justify-between leading-[1.2] not-italic px-[4px] relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:3918" data-name="yAxisLeft">
                  <p className="relative shrink-0" data-node-id="1:3919">
                    3,000
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3920">
                    2,500
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3921">
                    2,000
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3922">
                    1,500
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3923">
                    1,000
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3924">
                    500
                  </p>
                  <p className="relative shrink-0" data-node-id="1:3925">
                    0
                  </p>
                </div>
                <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:3926" data-name="Graphi&Grid">
                  <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between px-px py-[6px]" data-node-id="1:3927" data-name="xLines">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3928" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3929" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3930" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3931" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3932" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3933" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="1:3934" data-name="Line">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine2} />
                      </div>
                    </div>
                  </div>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGraphiGrid1} />
                  <div className="absolute content-stretch flex inset-[6px_0_7px_0] items-start" data-node-id="1:3941" data-name="BarArea">
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3942" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3943" data-name="BarBlock">
                        <div className="bg-[#75cebc] h-[164px] opacity-80 relative shrink-0 w-full" data-node-id="1:3944" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[104px] opacity-80 relative shrink-0 w-full" data-node-id="1:3945" data-name="BarStrip" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3946" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3947" data-name="BarBlock">
                        <div className="bg-[#75cebc] h-[115px] opacity-80 relative shrink-0 w-full" data-node-id="1:3948" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[83px] opacity-80 relative shrink-0 w-full" data-node-id="1:3949" data-name="BarStrip" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3950" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3951" data-name="BarBlock">
                        <div className="bg-[#55c4ae] h-[101px] opacity-80 relative shrink-0 w-full" data-node-id="1:3952" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[94px] opacity-80 relative shrink-0 w-full" data-node-id="1:3953" data-name="BarStrip" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:3954" data-name="BarGroup">
                      <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[140.8px]" data-node-id="1:3955" data-name="BarBlock">
                        <div className="bg-[#55c4ae] h-[110px] opacity-80 relative shrink-0 w-full" data-node-id="1:3956" data-name="BarStrip" />
                        <div className="bg-[#706ee7] h-[83px] opacity-80 relative shrink-0 w-full" data-node-id="1:3957" data-name="BarStrip" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between pb-[8px] pl-[68px] relative shrink-0 w-full" data-node-id="1:3959" data-name="xAxis">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3960" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3961">
                    2022
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3962" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3963">
                    2023
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3964" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3965">
                    2024
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:3966" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:3967">
                    2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[864px] left-1/2 top-[6335px] w-[1920px]" data-node-id="1:3968" data-name="Frame">
        <div className="absolute h-[864px] left-0 top-0 w-[1920px]" data-node-id="1:3969">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9230} />
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[24px] items-start left-[180px] top-[calc(50%+0.5px)] w-[1560px]" data-node-id="1:3970" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="1:3971" data-name="Frame">
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:3972" data-name="Frame">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:3973" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3974" data-name="Frame">
                  <div className="relative shrink-0 size-[24px]" data-node-id="1:3975" data-name="Layer_1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer6} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:3983">
                  <p className="leading-[1.2]">Every litre accounted for</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:3984">
                <p className="leading-[1.3]">We are a dry-process garment factory, so most of our water goes to the people who work here: drinking, washing and canteen use. We meter every use, from the boiler to the garden. Total use is 8% lower than in 2022. All domestic wastewater passes through our own sewage treatment plant before discharge, and it is tested by an independent lab.</p>
              </div>
            </div>
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:3985" data-name="Frame">
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3986" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3987" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:3988" data-name="Layer_1">
                    <div className="absolute inset-[8.33%]" data-node-id="1:3989" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup12} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:3992" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:3993">
                    <p className="leading-[1.2]">−8%</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:3994">
                    <p className="leading-[1.2]">Total water: 38,158 m³ (2022) → 35,038 m³ (2025)</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:3995" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:3996" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:3997" data-name="Frame">
                    <div className="absolute inset-[0_11.12%_0_11.13%]" data-node-id="1:3998" data-name="WEATHER">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeather} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:4000" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:4001">
                    <p className="leading-[1.2]">79%</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:4002">
                    <p className="leading-[1.2]">{`Of water is for workers' domestic use, about 25 L per worker per day`}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:4003" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4004" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:4005" data-name="Frame">
                    <div className="absolute contents inset-[0_15.65%_0_15.8%]" data-node-id="1:4006" data-name="Group">
                      <div className="absolute inset-[0_15.65%_0_15.8%]" data-node-id="1:4007" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:4009" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:4010">
                    <p className="leading-[1.2]">4.6 L</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:4011">
                    <p className="leading-[1.2]">Of water per garment shipped (2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[24px] h-[655px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[878px]" data-node-id="1:4012" data-name="Frame">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px relative w-full" data-node-id="1:4013" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:4014" data-name="Frame">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:4015" data-name="Frame">
                  <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4016" data-name="Frame">
                    <div className="relative shrink-0 size-[24px]" data-node-id="1:4017" data-name="Layer_1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer6} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:4025">
                    <p className="leading-[1.2]">Water use by purpose, 2025</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:4026">
                  m³ · 35,038 m³ total
                </p>
              </div>
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px p-[8px] relative rounded-[6px] w-full" data-node-id="1:4027" data-name="BarLineChart">
                <div className="content-stretch flex items-start justify-between pl-[87px] relative shrink-0 w-full" data-node-id="1:4028" data-name="yAxisTop">
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4029" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4030">
                      0
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4031" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4032">
                      3000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4033" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4034">
                      6000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4035" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4036">
                      9000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4037" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4038">
                      12000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4039" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4040">
                      15000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4041" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4042">
                      18000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4043" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4044">
                      21000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4045" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4046">
                      24000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4047" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4048">
                      27000
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-node-id="1:4049" data-name="Scale">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4050">
                      30000
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[8px] relative w-full" data-node-id="1:4051" data-name="MainChart">
                  <div className="content-stretch flex flex-col h-full items-end px-[2px] relative shrink-0" data-node-id="1:4052" data-name="xAxis">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4053" data-name="xLabelBox">
                      <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4054">
                        <p className="leading-[1.2] mb-0 whitespace-pre">{`Domestic `}</p>
                        <p className="leading-[1.2] whitespace-pre">(people)</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4055" data-name="xLabelBox">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4056">
                        Boiler
                      </p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4057" data-name="xLabelBox">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4058">
                        Gardening
                      </p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4059" data-name="xLabelBox">
                      <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4060">
                        <p className="leading-[1.2] mb-0 whitespace-pre">{`Solar panel `}</p>
                        <p className="leading-[1.2] whitespace-pre">cleaning</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4061" data-name="xLabelBox">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4062">
                        Construction
                      </p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4063" data-name="xLabelBox">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4064">
                        Chiller
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-node-id="1:4065" style={{ containerType: "size" }}>
                    <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                      <div className="relative size-full" data-name="Graphi&Grid">
                        <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between pt-px" data-node-id="1:4066" data-name="xLines">
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4067" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4068" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4069" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4070" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4071" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4072" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4073" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4074" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4075" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4076" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine3} />
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="1:4077" data-name="Line">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine4} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex inset-0 items-start justify-between p-px" data-node-id="1:4078" data-name="yLines">
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4079" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4080" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4081" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4082" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4083" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4084" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4085" style={{ containerType: "size" }}>
                            <div className="-rotate-90 flex-none w-[100cqh]">
                              <div className="h-0 relative w-full" data-name="Line">
                                <div className="absolute inset-[-1px_0.14%_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine5} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex inset-[1px_0] items-start" data-node-id="1:4086" data-name="BarArea">
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[9.4px] relative" data-node-id="1:4087" data-name="BarGroup">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4088" data-name="BarBlock">
                              <div className="absolute inset-[7.31%_-0.13px_0_0]" data-node-id="1:4089" data-name="SingleBar">
                                <div className="absolute bg-[#706ee7] inset-[0_0_0.03px_0] opacity-80" data-node-id="1:4090" data-name="BarStrip" />
                              </div>
                              <div className="absolute flex inset-[0.65%_28.73%_92.12%_28.72%] items-center justify-center" data-node-id="1:4091" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="DataLabel">
                                    <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[30.73px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.8px)] translate-x-full whitespace-nowrap" data-node-id="1:4092">
                                      27806
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[9.4px] relative" data-node-id="1:4093" data-name="BarGroup">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4094" data-name="BarBlock">
                              <div className="absolute inset-[91.1%_-0.13px_0_0]" data-node-id="1:4095" data-name="SingleBar">
                                <div className="absolute bg-[#706ee7] inset-[0_0_-0.69px_0] opacity-80" data-node-id="1:4096" data-name="BarStrip" />
                              </div>
                              <div className="absolute flex inset-[84.8%_28.72%_9.84%_28.72%] items-center justify-center" data-node-id="1:4097" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="DataLabel">
                                    <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[22.64px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.8px)] translate-x-full whitespace-nowrap" data-node-id="1:4098">
                                      2671
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[9.4px] relative" data-node-id="1:4099" data-name="BarGroup">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4100" data-name="BarBlock">
                              <div className="absolute inset-[94.06%_-0.13px_0_0]" data-node-id="1:4101" data-name="SingleBar">
                                <div className="absolute bg-[#706ee7] inset-[0_0_-0.78px_0] opacity-80" data-node-id="1:4102" data-name="BarStrip" />
                              </div>
                              <div className="absolute flex inset-[87.77%_28.72%_6.87%_28.72%] items-center justify-center" data-node-id="1:4103" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="DataLabel">
                                    <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[22.64px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.8px)] translate-x-full whitespace-nowrap" data-node-id="1:4104">
                                      1782
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[9.4px] relative" data-node-id="1:4105" data-name="BarGroup">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4106" data-name="BarBlock">
                              <div className="absolute inset-[94.99%_-0.13px_0_0]" data-node-id="1:4107" data-name="SingleBar">
                                <div className="absolute bg-[#706ee7] inset-[0_0_-0.33px_0] opacity-80" data-node-id="1:4108" data-name="BarStrip" />
                              </div>
                              <div className="absolute flex inset-[88.47%_28.72%_5.94%_28.72%] items-center justify-center" data-node-id="1:4109" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="DataLabel">
                                    <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[24.27px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.8px)] translate-x-full whitespace-nowrap" data-node-id="1:4110">
                                      1502
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[9.4px] relative" data-node-id="1:4111" data-name="BarGroup">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4112" data-name="BarBlock">
                              <div className="absolute inset-[97.21%_-0.13px_0_0]" data-node-id="1:4113" data-name="SingleBar">
                                <div className="absolute bg-[#706ee7] inset-[0_0_-0.37px_0] opacity-80" data-node-id="1:4114" data-name="BarStrip" />
                              </div>
                              <div className="absolute flex inset-[91.85%_28.72%_3.73%_28.72%] items-center justify-center" data-node-id="1:4115" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="DataLabel">
                                    <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[19.09px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.8px)] translate-x-full whitespace-nowrap" data-node-id="1:4116">
                                      838
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[9.4px] relative" data-node-id="1:4117" data-name="BarGroup">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4118" data-name="BarBlock">
                              <div className="absolute inset-[98.54%_-0.13px_0_0]" data-node-id="1:4119" data-name="SingleBar">
                                <div className="absolute bg-[#706ee7] inset-[0_0_-0.01px_0] opacity-80" data-node-id="1:4120" data-name="BarStrip" />
                              </div>
                              <div className="absolute flex inset-[92.94%_28.72%_2.4%_28.72%] items-center justify-center" data-node-id="1:4121" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="DataLabel">
                                    <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[19.73px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.8px)] translate-x-full whitespace-nowrap" data-node-id="1:4122">
                                      439
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:4124" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:4125" data-name="Frame">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:4126" data-name="Frame">
                  <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4127" data-name="Frame">
                    <div className="relative shrink-0 size-[24px]" data-node-id="1:4128" data-name="Layer_1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer6} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:4136">
                    <p className="leading-[1.2]">Water use by purpose, 2025</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:4137">
                  m³ · 35,038 m³ total
                </p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[16px] h-[206px] items-start p-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="1:4138" data-name="Chart&Axis">
                <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px relative w-full" data-node-id="1:4139" data-name="MainChart">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal h-full items-end justify-between leading-[1.2] not-italic px-[4px] relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4140" data-name="yAxisLeft">
                    <p className="relative shrink-0" data-node-id="1:4141">
                      40,000
                    </p>
                    <p className="relative shrink-0" data-node-id="1:4142">
                      30,000
                    </p>
                    <p className="relative shrink-0" data-node-id="1:4143">
                      20,000
                    </p>
                    <p className="relative shrink-0" data-node-id="1:4144">
                      10,000
                    </p>
                    <p className="relative shrink-0" data-node-id="1:4145">
                      0
                    </p>
                  </div>
                  <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4146" data-name="Graphi&Grid">
                    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between px-px py-[6px]" data-node-id="1:4147" data-name="xLines">
                      <div className="h-0 relative shrink-0 w-full" data-node-id="1:4148" data-name="Line">
                        <div className="absolute inset-[-1px_0.13%_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLine6} />
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="1:4149" data-name="Line">
                        <div className="absolute inset-[-1px_0.13%_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLine6} />
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="1:4150" data-name="Line">
                        <div className="absolute inset-[-1px_0.13%_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLine6} />
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="1:4151" data-name="Line">
                        <div className="absolute inset-[-1px_0.13%_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLine6} />
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="1:4152" data-name="Line">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLine7} />
                        </div>
                      </div>
                    </div>
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGraphiGrid2} />
                    <div className="absolute content-stretch flex inset-[6px_0_7px_0] items-start" data-node-id="1:4159" data-name="BarArea">
                      <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:4160" data-name="BarGroup">
                        <div className="content-stretch flex flex-col h-full items-center justify-end py-px relative shrink-0 w-[140.8px]" data-node-id="1:4161" data-name="BarBlock">
                          <div className="bg-[#706ee7] h-[126px] opacity-80 relative shrink-0 w-full" data-node-id="1:4162" data-name="BarStrip" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:4163" data-name="BarGroup">
                        <div className="content-stretch flex flex-col h-full items-center justify-end py-px relative shrink-0 w-[140.8px]" data-node-id="1:4164" data-name="BarBlock">
                          <div className="bg-[#706ee7] h-[106px] opacity-80 relative shrink-0 w-full" data-node-id="1:4165" data-name="BarStrip" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:4166" data-name="BarGroup">
                        <div className="content-stretch flex flex-col h-full items-center justify-end py-px relative shrink-0 w-[140.8px]" data-node-id="1:4167" data-name="BarBlock">
                          <div className="bg-[#706ee7] h-[119px] opacity-80 relative shrink-0 w-full" data-node-id="1:4168" data-name="BarStrip" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] h-full items-end min-w-px px-[26.85px] relative" data-node-id="1:4169" data-name="BarGroup">
                        <div className="content-stretch flex flex-col h-full items-center justify-end py-px relative shrink-0 w-[140.8px]" data-node-id="1:4170" data-name="BarBlock">
                          <div className="bg-[#706ee7] h-[118px] opacity-80 relative shrink-0 w-full" data-node-id="1:4171" data-name="BarStrip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between pb-[8px] pl-[68px] relative shrink-0 w-full" data-node-id="1:4173" data-name="xAxis">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:4174" data-name="Frame">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:4175">
                      2022
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:4176" data-name="Frame">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:4177">
                      2023
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:4178" data-name="Frame">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:4179">
                      2024
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="1:4180" data-name="Frame">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap" data-node-id="1:4181">
                      2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[864px] left-1/2 top-[7199px] w-[1920px]" data-node-id="1:4182" data-name="Frame">
        <div className="absolute h-[864px] left-0 top-0 w-[1920px]" data-node-id="1:4183">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9231} />
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-start left-[180px] top-[92px] w-[1560px]" data-node-id="1:4184" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="1:4185" data-name="Frame">
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:4186" data-name="Frame">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:4187" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4188" data-name="Frame">
                  <div className="relative shrink-0 size-[24px]" data-node-id="1:4189" data-name="Layer_1">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer7} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:4206">
                  <p className="leading-[1.2]">Offcuts become new yarn</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]" data-node-id="1:4207">
                <p className="leading-[1.3]">Every cutting table produces offcuts, called jhut. We weigh, sort and hand over every kilogram to licensed partners who turn it back into fibre and yarn. Paper, cartons, plastic and metal follow the same route. In 2025, 99% of our waste by weight was reused or recycled. Hazardous waste, under 100 kg a year, goes only to licensed handlers. Burning or dumping waste on site is banned by policy.</p>
              </div>
            </div>
            <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:4208" data-name="Frame">
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:4209" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4210" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:4211" data-name="_x30_1_Parrot">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgX301Parrot} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:4235" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:4236">
                    <p className="leading-[1.2]">405 t</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:4237">
                    <p className="leading-[1.2]">Of fabric offcuts sent for recycling in 2025</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:4238" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4239" data-name="Frame">
                  <div className="relative shrink-0 size-[20px]" data-node-id="1:4240" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:4246" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:4247">
                    <p className="leading-[1.2]">99.2%</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:4248">
                    <p className="leading-[1.2]">Of 593 t total waste reused or recycled</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="1:4249" data-name="Frame">
                <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4250" data-name="Frame">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="1:4251" data-name="Layer_5">
                    <div className="absolute inset-[4.69%]" data-node-id="1:4252" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="1:4269" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[18px] uppercase" data-node-id="1:4270">
                    <p className="leading-[1.2]">{`<0.1 t`}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px]" data-node-id="1:4271">
                    <p className="leading-[1.2]">Hazardous waste (batteries, ink cartridges, chemical drums, medical)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.06)] flex flex-col gap-[16px] h-[613px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[878px]" data-node-id="1:4272" data-name="Frame">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:4273" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:4274" data-name="Frame">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="1:4275" data-name="Frame">
                  <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-node-id="1:4276" data-name="Frame">
                    <div className="relative shrink-0 size-[24px]" data-node-id="1:4277" data-name="Layer_1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer7} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] uppercase whitespace-nowrap" data-node-id="1:4294">
                    <p className="leading-[1.2]">Where our waste went, 2025</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] whitespace-nowrap" data-node-id="1:4295">
                  Tonnes by stream · all routed to reuse or recycling partners
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px relative w-full" data-node-id="1:4296" data-name="BarLineChart">
              <div className="content-stretch flex items-start justify-between pl-[119px] relative shrink-0 w-full" data-node-id="1:4297" data-name="yAxisTop">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4298" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4299">
                    0
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4300" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4301">
                    50
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4302" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4303">
                    100
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4304" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4305">
                    150
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4306" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4307">
                    200
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4308" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4309">
                    250
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4310" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4311">
                    300
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4312" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4313">
                    350
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4314" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4315">
                    400
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4316" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4317">
                    450
                  </p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-[16px]" data-node-id="1:4318" data-name="Scale">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.2] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4319">
                    500
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px px-[8px] relative w-full" data-node-id="1:4320" data-name="MainChart">
                <div className="content-stretch flex flex-col h-full items-end px-[2px] relative shrink-0" data-node-id="1:4321" data-name="xAxis">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4322" data-name="xLabelBox">
                    <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4323">
                      <p className="leading-[normal] mb-0 whitespace-pre">{`Fabric `}</p>
                      <p className="leading-[normal] whitespace-pre">offcuts (jhut)</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4324" data-name="xLabelBox">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4325">
                      Paper
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4326" data-name="xLabelBox">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4327">
                      Cartons
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4328" data-name="xLabelBox">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4329">{`Iron & tin`}</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4330" data-name="xLabelBox">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4331">
                      Plastic
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4332" data-name="xLabelBox">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4333">
                      Food
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px relative" data-node-id="1:4334" data-name="xLabelBox">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="1:4335">
                      Hazardous
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-node-id="1:4336" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                    <div className="relative size-full" data-name="Graphi&Grid">
                      <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between pt-px" data-node-id="1:4337" data-name="xLines">
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4338" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4339" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4340" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4341" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4342" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4343" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4344" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4345" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4346" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4347" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine8} />
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="1:4348" data-name="Line">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine9} />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex inset-0 items-start justify-between p-px" data-node-id="1:4349" data-name="yLines">
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4350" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4351" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4352" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4353" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4354" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4355" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4356" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="1:4357" style={{ containerType: "size" }}>
                          <div className="-rotate-90 flex-none w-[100cqh]">
                            <div className="h-0 relative w-full" data-name="Line">
                              <div className="absolute inset-[-1px_0.14%_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine10} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex inset-[1px_0] items-start" data-node-id="1:4358" data-name="BarArea">
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4359" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4360" data-name="BarBlock">
                            <div className="absolute inset-[19.06%_-0.26px_0_0]" data-node-id="1:4361" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_0.06px_0] opacity-80" data-node-id="1:4362" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[11.64%_25.18%_81.87%_25.18%] items-center justify-center" data-node-id="1:4363" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[28.39px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4364">
                                    404.7
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4365" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4366" data-name="BarBlock">
                            <div className="absolute inset-[78.94%_-0.26px_0_0]" data-node-id="1:4367" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_0.6px_0] opacity-80" data-node-id="1:4368" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[71.98%_25.18%_21.99%_25.18%] items-center justify-center" data-node-id="1:4369" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[26.07px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4370">
                                    105.3
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4371" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4372" data-name="BarBlock">
                            <div className="absolute inset-[90.22%_-0.26px_0_0]" data-node-id="1:4373" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_-0.32px_0] opacity-80" data-node-id="1:4374" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[84.19%_25.18%_10.71%_25.18%] items-center justify-center" data-node-id="1:4375" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[22.45px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4376">
                                    48.9
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4377" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4378" data-name="BarBlock">
                            <div className="absolute inset-[95.28%_-0.26px_0_0]" data-node-id="1:4379" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_-0.64px_0] opacity-80" data-node-id="1:4380" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[89.48%_25.18%_5.65%_25.18%] items-center justify-center" data-node-id="1:4381" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[20.79px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4382">
                                    23.6
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4383" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4384" data-name="BarBlock">
                            <div className="absolute inset-[98.88%_-0.26px_0_0]" data-node-id="1:4385" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_0.17px_0] opacity-80" data-node-id="1:4386" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[94.47%_25.18%_2.05%_25.18%] items-center justify-center" data-node-id="1:4387" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[14.85px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4388">
                                    5.6
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4389" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4390" data-name="BarBlock">
                            <div className="absolute inset-[99.08%_-0.26px_0_0]" data-node-id="1:4391" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_-0.4px_0] opacity-80" data-node-id="1:4392" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[94.67%_25.18%_1.85%_25.18%] items-center justify-center" data-node-id="1:4393" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[14.85px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4394">
                                    4.6
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[8.057px] relative" data-node-id="1:4395" data-name="BarGroup">
                          <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="1:4396" data-name="BarBlock">
                            <div className="absolute inset-[99.88%_-0.26px_0_0] overflow-clip" data-node-id="1:4397" data-name="SingleBar">
                              <div className="absolute bg-[#706ee7] inset-[0_0_0.33px_0] opacity-80" data-node-id="1:4398" data-name="BarStrip" />
                            </div>
                            <div className="absolute flex inset-[95.94%_25.18%_1.04%_25.18%] items-center justify-center" data-node-id="1:4399" style={{ containerType: "size" }}>
                              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                <div className="relative size-full" data-name="DataLabel">
                                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] not-italic right-[12.54px] text-[10px] text-[rgba(0,0,0,0.7)] top-[calc(50%-5.84px)] translate-x-full whitespace-nowrap" data-node-id="1:4400">
                                    0.1
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}