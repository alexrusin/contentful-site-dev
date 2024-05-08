import {
  ILandingPage,
  ILandingPageFields,
  IServicesSection,
  IWelcomeSection,
} from "@/contentful";
import WelcomeSection from "./welcome-section";
import ServicesSection from "./services-section";

function pageSectionsMapper(
  sections: (IWelcomeSection | IServicesSection)[] | undefined
) {
  if (!sections) {
    return [];
  }

  return sections
    .map((section) => {
      switch (section.sys.contentType.sys.id) {
        case "welcomeSection":
          return (
            <WelcomeSection
              key={section.sys.id}
              welcomeSection={section as IWelcomeSection}
            />
          );
        case "servicesSection":
          return (
            <ServicesSection
              key={section.sys.id}
              servicesSection={section as IServicesSection}
            />
          );
        default:
          return null;
      }
    })
    .filter((item) => Boolean(item));
}

export function LandingPage({ landingPage }: { landingPage: ILandingPage }) {
  const landingPageFields = landingPage.fields as ILandingPageFields;

  const sections = pageSectionsMapper(landingPageFields.sections);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <main>{sections}</main>
    </div>
  );
}
