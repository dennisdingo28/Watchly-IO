import { FC } from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { MobileLinks } from "./MobileLinks";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image src="/next.svg" alt="logo" width={80} height={80} />
      </Link>

      <div className="hidden sm:flex items-center gap-5">
        <NavLink label="About" where="/" />
        <NavLink label="Services" where="/" />
        <NavLink label="Contact" where="/" />
        <NavLink label="Pricing" where="/" />
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
