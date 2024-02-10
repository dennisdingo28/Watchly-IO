import { FC } from "react";
import { Container } from "../Container";
import Image from "next/image";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import MobileLinks from "./MobileLinks";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <Container>
      <nav className="flex items-center justify-between py-5">
        <Image src="/next.svg" alt="logo" width={80} height={80} />

        <div className="hidden sm:flex items-center gap-5">
          <NavLink label="About" />
          <NavLink label="Services" />
          <NavLink label="Contact" />
          <NavLink label="Pricing" />
        </div>

        <div className="sm:hidden">
          <MobileLinks />
        </div>

        <Button variant="link" className="hidden sm:flex">
          Login
        </Button>
      </nav>
    </Container>
  );
};

export default Navbar;
