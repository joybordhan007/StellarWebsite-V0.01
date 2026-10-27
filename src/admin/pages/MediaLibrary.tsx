import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAdmin } from "../AdminContext";
import { api, formatBytes, formatDate, type Media, uploadImage } from "../api";
import { Button, PageHeader, Spinner } from "../ui";

export default function MediaLibrary() {
  const { handleError, notify } = useAdmin();
  const [media, setMedia] = useState<Media[] | null>(null);
  const [uploading, setUploading] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api<{ media: Media[] }>("/media")
      .then((result) => setMedia(result.media))
      .catch(handleError);
  }, [handleError]);

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    setUploading(files.length);
    for (const file of files) {
      try {
        const item = await uploadImage(file);
        setMedia((current) => [item, ...(current ?? [])]);
      } catch (error) {
        handleError(error);
      }
      setUploading((count) => count - 1);
    }
  }

  async function copyUrl(item: Media) {
    try {
      await navigator.clipboard.writeText(item.url);
      notify("Image address copied.");
    } catch {
      window.prompt("Copy this address:", item.url);
    }
  }

  async function remove(item: Media) {
    if (!window.confirm(`Delete ${item.original_name}? Pages that use this image will show it as missing.`)) return;
    try {
      await api(`/media/${item.id}`, { method: "DELETE" });
      setMedia((current) => current?.filter((entry) => entry.id !== item.id) ?? null);
      notify("Image deleted.");
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <>
      <PageHeader
        actions={
          <Button disabled={uploading > 0} onClick={() => inputRef.current?.click()} variant="primary">
            {uploading > 0 ? `Uploading ${uploading}…` : "Upload images"}
          </Button>
        }
        description="Images you upload can be used anywhere on the website. JPG, PNG, WebP, GIF, AVIF or SVG, up to 10 MB each."
        title="Media library"
      />
      <input accept="image/*" className="hidden" multiple onChange={handleFiles} ref={inputRef} type="file" />
      {!media ? (
        <Spinner />
      ) : media.length === 0 ? (
        <p className="rounded-[6px] border border-dashed border-neutral-300 bg-white p-10 text-center text-sm text-neutral-500">
          No images uploaded yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {media.map((item) => (
            <figure className="overflow-hidden rounded-[6px] border border-neutral-200 bg-white" key={item.id}>
              <img alt={item.original_name} className="aspect-square w-full bg-neutral-100 object-cover" loading="lazy" src={item.url} />
              <figcaption className="flex flex-col gap-2 p-3">
                <span className="truncate text-sm font-medium" title={item.original_name}>
                  {item.original_name}
                </span>
                <span className="text-xs text-neutral-500">
                  {formatBytes(item.size)} · {formatDate(item.created_at)}
                </span>
                <span className="flex gap-2">
                  <Button className="flex-1 px-2" onClick={() => copyUrl(item)}>
                    Copy URL
                  </Button>
                  <Button className="px-2" onClick={() => remove(item)} variant="danger">
                    Delete
                  </Button>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </>
  );
}
