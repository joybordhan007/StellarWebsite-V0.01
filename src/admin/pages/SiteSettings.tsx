import type { SiteContent } from "../../content/types";
import { Card, ContentEditorFrame, replaceItem, TextField, useContentDoc } from "../ui";

export default function SiteSettings() {
  const doc = useContentDoc("site");
  const site = doc.draft;
  const update = (patch: Partial<SiteContent>) => site && doc.setDraft({ ...site, ...patch });

  return (
    <ContentEditorFrame
      description="Company name, contact form inbox and the main menu. The footer has its own page."
      allowReset={false}
      doc={doc}
      title="Site settings"
    >
      {site && (
        <>
          <Card title="Company">
            <TextField
              hint="Shown on the legal pages."
              label="Company name"
              onChange={(companyName) => update({ companyName })}
              value={site.companyName}
            />
          </Card>

          <Card title="Contact form">
            <TextField
              hint="Every contact form message is saved under Messages and also emailed to this address. A new address needs a one-time activation: FormSubmit emails an “Activate Form” link after the first message."
              label="Send contact form emails to"
              onChange={(contactFormEmail) => update({ contactFormEmail })}
              type="email"
              value={site.contactFormEmail}
            />
          </Card>

          <Card description="Labels of the main menu at the top of the website." title="Main menu">
            <div className="grid gap-4 sm:grid-cols-2">
              {site.navigation.map((item, i) => (
                <TextField
                  hint={`Links to ${item.href}`}
                  key={item.href}
                  label={`Menu item ${i + 1}`}
                  onChange={(label) => update({ navigation: replaceItem(site.navigation, i, { ...item, label }) })}
                  value={item.label}
                />
              ))}
            </div>
          </Card>
        </>
      )}
    </ContentEditorFrame>
  );
}
