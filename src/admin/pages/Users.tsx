import { FormEvent, useEffect, useState } from "react";
import { useAdmin } from "../AdminContext";
import { type Admin, api, formatDate } from "../api";
import { Button, Card, PageHeader, Spinner, TextField } from "../ui";

function MyAccount() {
  const { admin, setAdmin, handleError, notify } = useAdmin();
  const [name, setName] = useState(admin.name);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function saveName(event: FormEvent) {
    event.preventDefault();
    try {
      const result = await api<{ admin: Admin }>("/auth/profile", { method: "PUT", body: { name } });
      setAdmin(result.admin);
      notify("Name updated.");
    } catch (error) {
      handleError(error);
    }
  }

  async function changePassword(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      await api("/auth/password", { method: "PUT", body: { currentPassword, newPassword } });
      setCurrentPassword("");
      setNewPassword("");
      notify("Password changed.");
    } catch (error) {
      handleError(error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card title="My account">
      <form className="flex flex-wrap items-end gap-3" onSubmit={saveName}>
        <div className="min-w-60 flex-1">
          <TextField label="Your name" onChange={setName} required value={name} />
        </div>
        <Button disabled={!name.trim() || name === admin.name} type="submit">
          Save name
        </Button>
      </form>
      <form className="grid gap-3 border-t border-neutral-100 pt-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end" onSubmit={changePassword}>
        <TextField
          autoComplete="current-password"
          label="Current password"
          onChange={setCurrentPassword}
          required
          type="password"
          value={currentPassword}
        />
        <TextField
          autoComplete="new-password"
          label="New password (8+ characters)"
          onChange={setNewPassword}
          required
          type="password"
          value={newPassword}
        />
        <Button disabled={busy || newPassword.length < 8} type="submit">
          Change password
        </Button>
      </form>
    </Card>
  );
}

export default function Users() {
  const { admin, handleError, notify } = useAdmin();
  const [admins, setAdmins] = useState<Admin[] | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    api<{ admins: Admin[] }>("/admins")
      .then((result) => setAdmins(result.admins))
      .catch(handleError);
  }, [handleError]);

  async function addAdmin(event: FormEvent) {
    event.preventDefault();
    try {
      const result = await api<{ admin: Admin }>("/admins", { method: "POST", body: form });
      setAdmins((current) => [...(current ?? []), result.admin]);
      setForm({ name: "", email: "", password: "" });
      notify(`${result.admin.name} can now log in.`);
    } catch (error) {
      handleError(error);
    }
  }

  async function removeAdmin(target: Admin) {
    if (!window.confirm(`Remove ${target.name}'s access to the dashboard?`)) return;
    try {
      await api(`/admins/${target.id}`, { method: "DELETE" });
      setAdmins((current) => current?.filter((item) => item.id !== target.id) ?? null);
      notify("Admin removed.");
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <>
      <PageHeader description="People who can log in to this dashboard." title="Admin users" />
      <div className="flex flex-col gap-4">
        <MyAccount />
        <Card title="All admins">
          {!admins ? (
            <Spinner />
          ) : (
            <ul className="-my-2 divide-y divide-neutral-100">
              {admins.map((item) => (
                <li className="flex items-center justify-between gap-4 py-3" key={item.id}>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {item.name}
                      {item.id === admin.id && <span className="ml-2 text-xs font-normal text-neutral-400">(you)</span>}
                    </p>
                    <p className="truncate text-xs text-neutral-500">
                      {item.email} · added {formatDate(item.created_at)}
                    </p>
                  </div>
                  {item.id !== admin.id && (
                    <Button onClick={() => removeAdmin(item)} variant="danger">
                      Remove
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Card>
        <Card title="Add an admin">
          <form className="grid gap-3 sm:grid-cols-3" onSubmit={addAdmin}>
            <TextField label="Name" onChange={(name) => setForm({ ...form, name })} required value={form.name} />
            <TextField
              label="Email"
              onChange={(email) => setForm({ ...form, email })}
              required
              type="email"
              value={form.email}
            />
            <TextField
              autoComplete="new-password"
              hint="At least 8 characters. Share it privately."
              label="Password"
              onChange={(password) => setForm({ ...form, password })}
              required
              type="password"
              value={form.password}
            />
            <Button className="self-start sm:col-span-3 sm:justify-self-start" type="submit" variant="primary">
              Add admin
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
