import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useAdmin } from "../AdminContext";
import { type Admin, api, formatDate, uploadImage } from "../api";
import { Avatar } from "../components";
import { Button, Card, PageHeader, TextField } from "../ui";

export default function Profile() {
  const { admin, setAdmin, handleError, notify } = useAdmin();
  const [name, setName] = useState(admin.name);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function saveProfile(patch: { name?: string; avatar?: string | null }, message: string) {
    try {
      const result = await api<{ admin: Admin }>("/auth/profile", {
        method: "PUT",
        body: { name: patch.name ?? admin.name, avatar: patch.avatar === undefined ? admin.avatar ?? "" : patch.avatar ?? "" },
      });
      setAdmin(result.admin);
      notify(message);
    } catch (error) {
      handleError(error);
    }
  }

  async function handlePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setUploading(true);
    try {
      const media = await uploadImage(file);
      await saveProfile({ avatar: media.url }, "Profile photo updated.");
    } catch (error) {
      handleError(error);
    } finally {
      setUploading(false);
    }
  }

  async function changePassword(event: FormEvent) {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      handleError(new Error("The new passwords don't match."));
      return;
    }
    setBusy(true);
    try {
      await api("/auth/password", { method: "PUT", body: { currentPassword, newPassword } });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      notify("Password changed.");
    } catch (error) {
      handleError(error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHeader description="Your photo, name and password." title="My profile" />
      <div className="flex flex-col gap-4">
        <Card title="Profile">
          <div className="flex flex-wrap items-center gap-5">
            <Avatar admin={admin} size={96} />
            <div className="flex flex-wrap gap-2">
              <Button disabled={uploading} onClick={() => fileRef.current?.click()} variant="primary">
                {uploading ? "Uploading…" : admin.avatar ? "Change photo" : "Upload photo"}
              </Button>
              {admin.avatar && (
                <Button onClick={() => saveProfile({ avatar: null }, "Profile photo removed.")} variant="ghost">
                  Remove photo
                </Button>
              )}
            </div>
            <input accept="image/*" className="hidden" onChange={handlePhoto} ref={fileRef} type="file" />
          </div>
          <dl className="grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-[6px] bg-neutral-50 px-3 py-2">
              <dt className="text-xs text-neutral-500">Admin ID</dt>
              <dd className="font-medium">#{admin.id}</dd>
            </div>
            <div className="rounded-[6px] bg-neutral-50 px-3 py-2">
              <dt className="text-xs text-neutral-500">Login email</dt>
              <dd className="truncate font-medium">{admin.email}</dd>
            </div>
            <div className="rounded-[6px] bg-neutral-50 px-3 py-2">
              <dt className="text-xs text-neutral-500">Admin since</dt>
              <dd className="font-medium">{formatDate(admin.created_at)}</dd>
            </div>
          </dl>
          <form
            className="flex flex-wrap items-end gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              void saveProfile({ name: name.trim() }, "Name updated.");
            }}
          >
            <div className="min-w-60 flex-1">
              <TextField label="Your name" onChange={setName} required value={name} />
            </div>
            <Button disabled={!name.trim() || name.trim() === admin.name} type="submit">
              Save name
            </Button>
          </form>
        </Card>

        <Card title="Change password">
          <form className="grid gap-3 sm:grid-cols-3 sm:items-end" onSubmit={changePassword}>
            <TextField autoComplete="current-password" label="Current password" onChange={setCurrentPassword} required type="password" value={currentPassword} />
            <TextField autoComplete="new-password" label="New password (8+ characters)" onChange={setNewPassword} required type="password" value={newPassword} />
            <TextField autoComplete="new-password" label="Repeat new password" onChange={setConfirmPassword} required type="password" value={confirmPassword} />
            <Button className="justify-self-start sm:col-span-3" disabled={busy || newPassword.length < 8} type="submit" variant="primary">
              {busy ? "Saving…" : "Change password"}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
