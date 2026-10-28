import { SOCIAL_LABELS } from "../../components/Footer";
import { SOCIAL_PLATFORMS, type SiteContent, type SocialLink, type SocialPlatform } from "../../content/types";
import { nextId, SelectField } from "../components";
import { Button, Card, ContentEditorFrame, ListControls, moveItem, replaceItem, TextField, useContentDoc } from "../ui";

export default function FooterAdmin() {
  const doc = useContentDoc("site");
  const site = doc.draft;
  const update = (patch: Partial<SiteContent>) => site && doc.setDraft({ ...site, ...patch });
  const updateFooter = (patch: Partial<SiteContent["footer"]>) => site && update({ footer: { ...site.footer, ...patch } });
  const setSocial = (socialLinks: SocialLink[]) => update({ socialLinks });

  return (
    <ContentEditorFrame allowReset={false} description="The footer at the bottom of every page." doc={doc} title="Footer">
      {site && (
        <>
          <Card title="About text">
            <TextField label="Description under the logo" multiline onChange={(tagline) => update({ tagline })} rows={3} value={site.tagline} />
          </Card>

          <Card description="Icons under the description. Add, reorder or remove networks." title="Social links">
            {site.socialLinks.map((link, index) => (
              <div className="flex flex-col gap-2 rounded-[6px] border border-neutral-200 p-3 sm:flex-row sm:items-end" key={link.id}>
                <div className="flex items-center gap-3 sm:w-56">
                  <img alt="" className="size-6 shrink-0" src={`/assets/social/${link.platform}.svg`} />
                  <div className="flex-1">
                    <SelectField
                      label="Network"
                      onChange={(event) => setSocial(replaceItem(site.socialLinks, index, { ...link, platform: event.target.value as SocialPlatform }))}
                      value={link.platform}
                    >
                      {SOCIAL_PLATFORMS.map((platform) => (
                        <option key={platform} value={platform}>
                          {SOCIAL_LABELS[platform]}
                        </option>
                      ))}
                    </SelectField>
                  </div>
                </div>
                <div className="flex-1">
                  <TextField label="Link" onChange={(url) => setSocial(replaceItem(site.socialLinks, index, { ...link, url }))} placeholder="https://" type="url" value={link.url} />
                </div>
                <ListControls
                  count={site.socialLinks.length}
                  index={index}
                  onMove={(from, to) => setSocial(moveItem(site.socialLinks, from, to))}
                  onRemove={() => setSocial(site.socialLinks.filter((item) => item.id !== link.id))}
                  removeLabel={`Remove ${SOCIAL_LABELS[link.platform]}`}
                />
              </div>
            ))}
            <Button
              className="self-start"
              onClick={() => setSocial([...site.socialLinks, { id: nextId(site.socialLinks), platform: "instagram", url: "" }])}
              variant="ghost"
            >
              + Add social link
            </Button>
          </Card>

          <Card title="Contact column">
            <TextField label="Column title" onChange={(contactTitle) => updateFooter({ contactTitle })} value={site.footer.contactTitle} />
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Phone" onChange={(phone) => update({ phone })} value={site.phone} />
              <TextField label="Email" onChange={(email) => update({ email })} type="email" value={site.email} />
            </div>
            {site.footerAddresses.map((address, index) => (
              <div className="flex items-end gap-2" key={index}>
                <div className="flex-1">
                  <TextField
                    label={`Address ${index + 1}`}
                    multiline
                    onChange={(value) => update({ footerAddresses: replaceItem(site.footerAddresses, index, value) })}
                    rows={2}
                    value={address}
                  />
                </div>
                <div className="pb-1">
                  <ListControls
                    count={site.footerAddresses.length}
                    index={index}
                    onMove={(from, to) => update({ footerAddresses: moveItem(site.footerAddresses, from, to) })}
                    onRemove={() => update({ footerAddresses: site.footerAddresses.filter((_, i) => i !== index) })}
                  />
                </div>
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
          </Card>
        </>
      )}
    </ContentEditorFrame>
  );
}
