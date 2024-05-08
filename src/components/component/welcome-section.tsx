import { IWelcomeSection, IWelcomeSectionFields } from "@/contentful";
import CallToActionButton from "./call-to-action-button";

export default function WelcomeSection({
  welcomeSection,
}: {
  welcomeSection: IWelcomeSection;
}) {
  const welcomeSectionFields = welcomeSection.fields as IWelcomeSectionFields;
  const callToActionButton = welcomeSectionFields.callToAction;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hidden md:block order-1">
          <iframe
            src={welcomeSectionFields.videoEmbedUrl}
            allowFullScreen={true}
            className="w-full h-80 lg:h-full"
          ></iframe>
        </div>
        <div className="order-2 space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{welcomeSectionFields.title}</h2>
            <p className="text-gray-700 dark:text-gray-400">
              {welcomeSectionFields.introduction}
            </p>
          </div>
          {callToActionButton && (
            <CallToActionButton callToActionButton={callToActionButton} />
          )}
        </div>
      </div>
    </section>
  );
}
