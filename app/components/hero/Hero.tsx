import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center">
        Empowering Your <span className="text-purple">Digital</span> Success
      </h1>
      <p className="mt-5 text-center mx-auto text-darkGray max-w-md">
        We blend creativity and strategy to craft digital solutions that
        inspire, engage and drive success for your bussiness.
      </p>

      <div className="flex items-center justify-center gap-5 mt-5">
        <Button>Get Free Consultation</Button>
        <Link
          href="/services"
          className="hidden sm:flex text-sm font-medium border-b-2 border-black"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default Hero;
