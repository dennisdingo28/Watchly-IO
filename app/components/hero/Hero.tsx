import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-t from-[#d9d7fe] to-white">
      <Container>
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
        <Image
          src="/hero.jpg"
          width={1000}
          height={1000}
          alt="hero"
          className="rounded-md mt-5 mx-auto"
        />
      </Container>
    </div>
  );
};