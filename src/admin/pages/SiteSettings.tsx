import type { SiteContent } from "../../content/types";
import { Button, Card, ContentEditorFrame, ControlIcon, replaceItem, TextField, useContentDoc } from "../ui";

export default function SiteSettings() {
  const doc = useContentDoc("site");
  const site = doc.draft;
  const update = (patch: Partial<SiteContent>) => site && doc.setDraft({ ...site, ...patch });

  return (
    <ContentEditorFrame
      description="Company details, footer, social links, contact form inbox and the main menu."
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
            <TextField
              label="Footer description"
              multiline
              onChange={(tagline) => update({ tagline })}
              rows={3}
              value={site.tagline}
            />
            <TextField label="Copyright line" onChange={(copyright) => update({ copyright })} value={site.copyright} />
          </Card>

          <Card description="Shown in the footer on every page." title="Contact details">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Phone" onChange={(phone) => update({ phone })} value={site.phone} />
              <TextField label="Email" onChange={(email) => update({ email })} type="email" value={site.email} />
            </div>
            <div className="flex flex-col gap-2">
              {site.footerAddresses.map((address, i) => (
                <div className="flex items-end gap-2" key={i}>
                  <div className="flex-1">
                    <TextField
                      label={`Footer address ${i + 1}`}
                      multiline
                      onChange={(value) => update({ footerAddresses: replaceItem(site.footerAddresses, i, value) })}
                      rows={2}
                      value={address}
                    />
                  </div>
                  <Button
                    aria-label={`Remove address ${i + 1}`}
                    onClick={() => update({ footerAddresses: site.footerAddresses.filter((_, j) => j !== i) })}
                    variant="ghost"
                  >
                    <ControlIcon name="remove" />
                  </Button>
                </div>
              ))}
              <Button
                className="self-start"
                disabled={site.footerAddresses.length >= 3}
                onClick={() => update({ footerAddresses: [...site.footerAddresses, ""] })}
                variant="ghost"
              >
                + Add address
              </Button>
              <p className="text-xs text-neutral-500">The footer has room for up to 3 addresses.</p>
            </div>
          </Card>

          <Card title="Social links">
            {(["facebook", "youtube", "linkedin"] as const).map((network) => (
              <TextField
                key={network}
                label={{ facebook: "Facebook", youtube: "YouTube", linkedin: "LinkedIn" }[network]}
                onChange={(value) => update({ social: { ...site.social, [network]: value } })}
                placeholder="https://"
                type="url"
                value={site.social[network]}
              />
            ))}
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
