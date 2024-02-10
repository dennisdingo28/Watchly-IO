import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center">
        Empowering Your Digital Success
      </h1>
      <p className="mt-5 text-center text-lightGray">
        We blend creativity and strategy to craft digital solutions that
        inspire, engage and drive success for your bussiness.
      </p>
    </div>
  );
};

export default Hero;
