import LogoListEditor from "../LogoListEditor";
import { useLiveContent } from "../components";
import { PageHeader, Spinner } from "../ui";

export default function SustainabilityAdmin() {
  const { data, commit } = useLiveContent("sustainability");

  return (
    <>
      <PageHeader
        description="Logos in “Certifications & standards” on the Sustainability page. Each factory has its own certification logos under Factories. Changes are saved as soon as you make them."
        title="Sustainability certifications"
      />
      {data ? (
        <LogoListEditor logos={data.certifications} onChange={(certifications, message) => commit({ ...data, certifications }, message)} />
      ) : (
        <Spinner />
      )}
    </>
  );
}
