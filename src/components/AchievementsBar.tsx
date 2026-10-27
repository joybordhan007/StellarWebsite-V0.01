import { Fragment } from "react";
import { useContent } from "../content/ContentProvider";
import type { Achievement, AchievementPage } from "../content/types";
import CountUpValue from "./CountUpValue";

function Lines({ text }: { text: string }) {
  return text.split("\n").map((line, index) => (
    <p className="leading-[1.2]" key={index}>
      {line}
    </p>
  ));
}

function AchievementItem({ achievement }: { achievement: Achievement }) {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative">
        <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0">
          <img alt="" className="block shrink-0 size-[48px] object-contain" src={achievement.icon} />
        </div>
        {achievement.value === null ? (
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] max-w-[250px] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] uppercase">
            <Lines text={achievement.label} />
          </div>
        ) : (
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] max-w-[250px] not-italic relative shrink-0 text-center">
            <div className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px] whitespace-nowrap">
              <p className="leading-[1.2]">
                <CountUpValue prefix={achievement.prefix} suffix={achievement.suffix} value={achievement.value} />
              </p>
            </div>
            <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] uppercase">
              <Lines text={achievement.label} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** The stats bar under the hero on Home, Capabilities and Sustainability. */
export default function AchievementsBar({ page }: { page: AchievementPage }) {
  const { items, pages } = useContent("achievements");
  const shown = (pages[page] ?? [])
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is Achievement => Boolean(item));

  if (shown.length === 0) return null;

  return (
    <div className="-translate-x-1/2 absolute bg-[#f9f7f5] content-stretch flex items-center justify-between left-1/2 px-[180px] py-[40px] top-[920px] w-[1920px]" data-name="Achievements">
      {shown.map((achievement, index) => (
        <Fragment key={achievement.id}>
          {index > 0 && <div className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px" />}
          <AchievementItem achievement={achievement} />
        </Fragment>
      ))}
    </div>
  );
}
