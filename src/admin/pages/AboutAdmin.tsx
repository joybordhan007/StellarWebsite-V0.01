import type { AboutContent, JourneyMilestone } from "../../content/types";
import { Card, ContentEditorFrame, ImageField, replaceItem, TextField, useContentDoc } from "../ui";

export default function AboutAdmin() {
  const doc = useContentDoc("about");
  const journey = doc.draft?.journey;
  const update = (patch: Partial<AboutContent["journey"]>) => journey && doc.setDraft({ journey: { ...journey, ...patch } });
  const setMilestone = (index: number, patch: Partial<JourneyMilestone>) =>
    journey && update({ milestones: replaceItem(journey.milestones, index, { ...journey.milestones[index], ...patch }) });

  return (
    <ContentEditorFrame
      description="The “Built on values. Driven by people.” section of the About us page. The factory map on that page comes from Factories."
      doc={doc}
      title="About us"
    >
      {journey && (
        <>
          <Card title="Section text">
            <TextField label="Small heading" onChange={(eyebrow) => update({ eyebrow })} value={journey.eyebrow} />
            <TextField hint="Press Enter for a line break." label="Heading" multiline onChange={(heading) => update({ heading })} rows={2} value={journey.heading} />
            <TextField label="Introduction" multiline onChange={(intro) => update({ intro })} rows={3} value={journey.intro} />
          </Card>
          <Card description="Four photos with a year and a short text each, along the timeline." title="Timeline">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {journey.milestones.map((milestone, index) => (
                <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 p-3" key={index}>
                  <ImageField compact label={`Photo ${index + 1}`} onChange={(image) => setMilestone(index, { image })} value={milestone.image} />
                  <TextField label="Year" onChange={(year) => setMilestone(index, { year })} value={milestone.year} />
                  <TextField label="Text" multiline onChange={(text) => setMilestone(index, { text })} rows={3} value={milestone.text} />
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </ContentEditorFrame>
  );
}
