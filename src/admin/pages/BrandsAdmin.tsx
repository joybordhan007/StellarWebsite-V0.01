import ImageTable, { logoAdapter } from "../ImageTable";
import { useLiveContent } from "../components";
import { PageHeader, Spinner } from "../ui";

export default function BrandsAdmin() {
  const { data, commit } = useLiveContent("brands");

  return (
    <>
      <PageHeader description="“Trusted by global brands” on the Home page. Changes are saved as soon as you make them." title="Brand logos" />
      {data ? (
        <ImageTable
          adapter={logoAdapter}
          addLabel="Add Logo"
          imageHeader="Logo"
          items={data.logos}
          nameHeader="Logo name"
          onChange={(logos, message) => commit({ ...data, logos }, message)}
          title="Logos"
        />
      ) : (
        <Spinner />
      )}
    </>
  );
}
