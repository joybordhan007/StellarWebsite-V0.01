import LogoListEditor from "../LogoListEditor";
import { useLiveContent } from "../components";
import { PageHeader, Spinner } from "../ui";

export default function BrandsAdmin() {
  const { data, commit } = useLiveContent("brands");

  return (
    <>
      <PageHeader
        description="Logos in “Trusted by global brands” on the Home page. Changes are saved as soon as you make them."
        title="Brand logos"
      />
      {data ? <LogoListEditor logos={data.logos} onChange={(logos, message) => commit({ ...data, logos }, message)} /> : <Spinner />}
    </>
  );
}
