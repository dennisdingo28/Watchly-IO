import { InfoText } from "@/components/InfoText";
import { SendIcon } from "lucide-react";
import { WaitingForm } from "./WaitingForm";

export const WaitingList = () => {
  return (
    <div className="mt-20 relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-56 rotate-[30deg] bg-gradient-to-tr from-purple to-darkPurple opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
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
        Enroll now to get notified and receive a special feature on release day
        !
      </p>
      <WaitingForm />
    </div>
  );
};
