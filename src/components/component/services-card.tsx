import {
  IImageWrapperFields,
  IServicesCard,
  IServicesCardFields,
} from "@/contentful";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";

export default function ServicesCard({
  servicesCard,
}: {
  servicesCard: IServicesCard;
}) {
  const servicesCardFields = servicesCard.fields as IServicesCardFields;
  const imageWrapperFields = servicesCardFields.image
    .fields as IImageWrapperFields;
  const imageUrl = `https:${imageWrapperFields.image.fields.file?.url}`;

  return (
    <Card
      className="col-span-1 h-48 md:h-auto"
      style={{
        background: `url(${imageUrl}) no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, .6)",
          padding: "10px 5%",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CardTitle className="text-xl">{servicesCardFields.title}</CardTitle>
      </div>
    </Card>
  );
}
