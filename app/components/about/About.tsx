import { InfoText } from "@/components/InfoText";
import { Features } from "./Features";

export const About = () => {
  return (
    <div className="mt-10">
      <p className="text-darkGray uppercase tracking-wider text-center">
        services
      </p>
      <p className="font-bold text-center text-[2em] tracking-wider">
        What <InfoText>We</InfoText> Provide?
      </p>
      <div className="flex justify-center">
        <p className="text-darkGray text-center max-w-[600px]">
          Our cutting-edge software meticulously records and analyzes user
          sessions from the moment they enter your website until departure.
          Uncover invaluable insights into user engagement, content interaction,
          and overall navigation flow.
        </p>
      </div>
      <Features />
    </div>
  );
};
