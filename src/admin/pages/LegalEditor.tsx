import { useState } from "react";
import type { LegalContent } from "../../content/types";
import {
  Button,
  Card,
  ContentEditorFrame,
  ListControls,
  moveItem,
  replaceItem,
  TextField,
  useContentDoc,
} from "../ui";

const PAGES = [
  { key: "privacy-policy", label: "Privacy policy" },
  { key: "terms-of-service", label: "Terms of service" },
] as const;

function LegalPageEditor({ contentKey, label }: { contentKey: (typeof PAGES)[number]["key"]; label: string }) {
  const doc = useContentDoc(contentKey);
  const page = doc.draft;
  const update = (patch: Partial<LegalContent>) => page && doc.setDraft({ ...page, ...patch });

  return (
    <ContentEditorFrame doc={doc} title={label}>
      {page && (
        <>
          <Card>
            <TextField label="Title" onChange={(title) => update({ title })} value={page.title} />
            <TextField
              hint="For example: October 13, 2026"
              label="Last updated"
              onChange={(updated) => update({ updated })}
              value={page.updated}
            />
            <TextField label="Introduction" multiline onChange={(intro) => update({ intro })} rows={3} value={page.intro} />
          </Card>
          {page.sections.map((section, i) => (
            <Card
              actions={
                <ListControls
                  count={page.sections.length}
                  index={i}
                  onMove={(from, to) => update({ sections: moveItem(page.sections, from, to) })}
                  onRemove={() => update({ sections: page.sections.filter((_, j) => j !== i) })}
                  removeLabel="Remove section"
                />
              }
              key={i}
              title={`Section ${i + 1}`}
            >
              <TextField
                label="Heading"
                onChange={(heading) => update({ sections: replaceItem(page.sections, i, { ...section, heading }) })}
                value={section.heading}
              />
              <TextField
                label="Text"
                multiline
                onChange={(content) => update({ sections: replaceItem(page.sections, i, { ...section, content }) })}
                rows={4}
                value={section.content}
              />
            </Card>
          ))}
          <Button
            className="self-start"
            onClick={() => update({ sections: [...page.sections, { heading: "", content: "" }] })}
          >
            + Add section
          </Button>
          <Card>
            <TextField
              hint="Small note at the end of the page. Leave empty to hide it."
              label="Closing note"
              multiline
              onChange={(note) => update({ note })}
              rows={2}
              value={page.note}
            />
          </Card>
        </>
      )}
    </ContentEditorFrame>
  );
}

export default function LegalEditor() {
  const [active, setActive] = useState<(typeof PAGES)[number]>(PAGES[0]);

  return (
    <>
      <div className="mb-4 flex gap-2" role="tablist">
        {PAGES.map((page) => (
          <Button
            aria-selected={page.key === active.key}
            className={page.key === active.key ? "!border-[#1d1d1d] !bg-[#1d1d1d] !text-white" : ""}
            key={page.key}
            onClick={() => setActive(page)}
            role="tab"
          >
            {page.label}
          </Button>
        ))}
      </div>
      <LegalPageEditor contentKey={active.key} key={active.key} label={active.label} />
    </>
  );
}
