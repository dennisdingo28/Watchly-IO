import { FC } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import MobileLinks from "./MobileLinks";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex items-center justify-between">
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

      <Link
        href="/login"
        className="hidden sm:flex text-sm font-medium border-b-2 border-white hover:border-black transition-colors"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
