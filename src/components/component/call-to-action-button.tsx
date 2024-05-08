import { ICallToActionButton, ICallToActionButtonFields } from "@/contentful";
import { Button } from "../ui/button";

export default function CallToActionButton({
  callToActionButton,
}: {
  callToActionButton: ICallToActionButton;
}) {
  const callToActionButtonFields =
    callToActionButton.fields as ICallToActionButtonFields;
  return (
    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {callToActionButtonFields.callToActionText}
    </Button>
  );
}
