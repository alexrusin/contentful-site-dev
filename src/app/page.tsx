import { LandingPage } from "@/components/component/landing-page";
import { ILandingPage, ILandingPageFields } from "@/contentful";
import { getEntriesByContentType } from "@/lib/contentful-data";

export default async function Home() {
  const pageEntries = await getEntriesByContentType<ILandingPage>(
    "landingPage",
    "landing-page"
  );
  const landingPage = pageEntries[0];
  return landingPage && <LandingPage landingPage={landingPage} />;
}
