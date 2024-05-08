import {
  IImageWrapperFields,
  IServicesSection,
  IServicesSectionFields,
} from "@/contentful";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";
import CallToActionButton from "./call-to-action-button";
import ServicesCard from "./services-card";

export default function ServicesSection({
  servicesSection,
}: {
  servicesSection: IServicesSection;
}) {
  const servicesSectionFields =
    servicesSection.fields as IServicesSectionFields;
  const callToActionButton = servicesSectionFields.callToAction;
  const imageWrapperFields = servicesSectionFields.image
    .fields as IImageWrapperFields;
  const bannerUrl = `https:${imageWrapperFields.image.fields.file?.url}`;

  const servicesCards = servicesSectionFields.cards.map((servicesCard) => (
    <ServicesCard key={servicesCard.sys.id} servicesCard={servicesCard} />
  ));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesCards}
        </div>
        <Card className="hidden md:block col-span-1">
          <Image
            alt={imageWrapperFields.altText}
            className="rounded-lg"
            height="300"
            src={bannerUrl}
            priority
            style={{
              objectFit: "cover",
            }}
            width="800"
          />
        </Card>
        {callToActionButton && (
          <CallToActionButton callToActionButton={callToActionButton} />
        )}
      </div>
    </section>
  );
}
