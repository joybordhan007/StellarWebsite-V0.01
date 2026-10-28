import type { ReactNode } from "react";
import type { Versatility, VersatilityColumn, VersatilityItem } from "../../content/types";
import { Button, Card, ContentEditorFrame, ImageField, ListControls, moveItem, replaceItem, TextField, useContentDoc } from "../ui";

// Each column on the website has room for five rows.
const MAX_ITEMS = 5;

export default function VersatilityEditor({ tabs }: { tabs: ReactNode }) {
  const doc = useContentDoc("capabilities");
  const versatility = doc.draft?.versatility;

  const update = (patch: Partial<Versatility>) => doc.draft && versatility && doc.setDraft({ ...doc.draft, versatility: { ...versatility, ...patch } });
  const setColumn = (index: number, patch: Partial<VersatilityColumn>) =>
    versatility && update({ columns: replaceItem(versatility.columns, index, { ...versatility.columns[index], ...patch }) });
  const setItems = (index: number, items: VersatilityItem[]) => setColumn(index, { items });

  return (
    <ContentEditorFrame
      allowReset={false}
      description={
        <>
          {tabs}
          <span className="mt-3 block">The “Versatility across categories” section of the Our capabilities page.</span>
        </>
      }
      doc={doc}
      title="Our capabilities"
    >
      {versatility && (
        <>
          <Card title="Section text">
            <TextField label="Small heading" onChange={(eyebrow) => update({ eyebrow })} value={versatility.eyebrow} />
            <TextField label="Heading" onChange={(heading) => update({ heading })} value={versatility.heading} />
            <TextField hint="Press Enter for a line break." label="Introduction" multiline onChange={(intro) => update({ intro })} rows={2} value={versatility.intro} />
          </Card>
          {versatility.columns.map((column, columnIndex) => (
            <Card
              actions={
                <ListControls
                  count={versatility.columns.length}
                  index={columnIndex}
                  onMove={(from, to) => update({ columns: moveItem(versatility.columns, from, to) })}
                  onRemove={() => update({ columns: versatility.columns.filter((_, i) => i !== columnIndex) })}
                  removeLabel="Remove column"
                />
              }
              key={columnIndex}
              title={`Column ${columnIndex + 1}: ${column.title || "Untitled"}`}
            >
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <ImageField compact label="Photo" onChange={(image) => setColumn(columnIndex, { image })} value={column.image} />
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField label="Title" onChange={(title) => setColumn(columnIndex, { title })} value={column.title} />
                    <TextField label="Tagline" onChange={(tagline) => setColumn(columnIndex, { tagline })} value={column.tagline} />
                  </div>
                  <span className="text-sm font-medium text-neutral-700">
                    Items ({column.items.length}/{MAX_ITEMS})
                  </span>
                  {column.items.map((item, itemIndex) => (
                    <div className="flex flex-col gap-3 rounded-[6px] border border-neutral-200 p-3" key={itemIndex}>
                      <ImageField
                        label="Thumbnail"
                        onChange={(thumb) => setItems(columnIndex, replaceItem(column.items, itemIndex, { ...item, thumb }))}
                        value={item.thumb}
                      />
                      <div className="flex items-end gap-2">
                        <div className="grid flex-1 gap-3 sm:grid-cols-2">
                          <TextField label="Name" onChange={(name) => setItems(columnIndex, replaceItem(column.items, itemIndex, { ...item, name }))} value={item.name} />
                          <TextField
                            hint="Optional"
                            label="Note"
                            onChange={(note) => setItems(columnIndex, replaceItem(column.items, itemIndex, { ...item, note }))}
                            value={item.note}
                          />
                        </div>
                        <div className="pb-6">
                          <ListControls
                            count={column.items.length}
                            index={itemIndex}
                            onMove={(from, to) => setItems(columnIndex, moveItem(column.items, from, to))}
                            onRemove={() => setItems(columnIndex, column.items.filter((_, i) => i !== itemIndex))}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    className="self-start"
                    disabled={column.items.length >= MAX_ITEMS}
                    onClick={() => setItems(columnIndex, [...column.items, { thumb: "", thumbBackground: "", name: "", note: "" }])}
                    variant="ghost"
                  >
                    + Add item
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          <Button
            className="self-start"
            disabled={versatility.columns.length >= 6}
            onClick={() => update({ columns: [...versatility.columns, { image: "", imageBackground: "", title: "", tagline: "", items: [] }] })}
          >
            + Add column
          </Button>
        </>
      )}
    </ContentEditorFrame>
  );
}
