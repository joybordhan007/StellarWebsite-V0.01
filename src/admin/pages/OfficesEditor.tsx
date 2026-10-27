import type { Office } from "../../content/types";
import {
  Button,
  Card,
  ContentEditorFrame,
  ControlIcon,
  ListControls,
  moveItem,
  replaceItem,
  TextField,
  useContentDoc,
} from "../ui";

export default function OfficesEditor() {
  const doc = useContentDoc("offices");
  const offices = doc.draft?.offices ?? [];
  const setOffices = (next: Office[]) => doc.setDraft({ offices: next });
  const update = (index: number, patch: Partial<Office>) =>
    setOffices(replaceItem(offices, index, { ...offices[index], ...patch }));

  function addOffice() {
    setOffices([
      ...offices,
      {
        id: `office-${Date.now()}`,
        name: "New office",
        addresses: [""],
        phone: "",
        email: "",
        website: "",
        hours: "",
      },
    ]);
  }

  return (
    <ContentEditorFrame
      description="Offices listed on the Contact page. Each address can be shown on the map."
      doc={doc}
      title="Offices"
    >
      {offices.map((office, index) => (
        <Card
          actions={
            <ListControls
              count={offices.length}
              index={index}
              onMove={(from, to) => setOffices(moveItem(offices, from, to))}
              onRemove={() => {
                if (window.confirm(`Remove ${office.name}?`)) setOffices(offices.filter((_, i) => i !== index));
              }}
              removeLabel="Remove office"
            />
          }
          key={office.id}
          title={office.name || "Untitled office"}
        >
          <TextField label="Office name" onChange={(name) => update(index, { name })} value={office.name} />
          <div className="flex flex-col gap-2">
            {office.addresses.map((address, i) => (
              <div className="flex items-end gap-2" key={i}>
                <div className="flex-1">
                  <TextField
                    label={office.addresses.length > 1 ? `Address ${i + 1}` : "Address"}
                    multiline
                    onChange={(value) => update(index, { addresses: replaceItem(office.addresses, i, value) })}
                    rows={2}
                    value={address}
                  />
                </div>
                {office.addresses.length > 1 && (
                  <Button
                    aria-label={`Remove address ${i + 1}`}
                    onClick={() => update(index, { addresses: office.addresses.filter((_, j) => j !== i) })}
                    variant="ghost"
                  >
                    <ControlIcon name="remove" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              className="self-start"
              onClick={() => update(index, { addresses: [...office.addresses, ""] })}
              variant="ghost"
            >
              + Add another address
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Phone" onChange={(phone) => update(index, { phone })} value={office.phone} />
            <TextField label="Email" onChange={(email) => update(index, { email })} type="email" value={office.email} />
            <TextField
              hint="Without https://, e.g. www.stellar-mfg.com"
              label="Website"
              onChange={(website) => update(index, { website: website.replace(/^https?:\/\//, "") })}
              value={office.website}
            />
            <TextField label="Opening hours" onChange={(hours) => update(index, { hours })} value={office.hours} />
          </div>
        </Card>
      ))}
      <Button className="self-start" onClick={addOffice}>
        + Add office
      </Button>
    </ContentEditorFrame>
  );
}
