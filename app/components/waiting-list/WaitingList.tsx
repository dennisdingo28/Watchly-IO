import { InfoText } from "@/components/InfoText";
import { SendIcon } from "lucide-react";
import { WaitingForm } from "./WaitingForm";

export const WaitingList = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col sm:flex-row sm:gap-3 items-center font-bold">
          <InfoText asParagraph className="text-[2.6em] animate-bounce">
            Join
          </InfoText>
          <p className="text-[2em] text-center">
            our <InfoText>waiting</InfoText> list
          </p>
        </div>
        <SendIcon className="w-7 h-7 text-purple hidden sm:block" />
      </div>
      <div className="mt-2 w-[80px] h-[4px] bg-purple mx-auto rounded-sm" />
      <p className="text-[.9em] text-darkGray text-center my-3 font-medium">
        Enroll now and get a special feature on release day!
      </p>
      <WaitingForm />
    </div>
  );
};
