import { FC } from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { MobileLinks } from "./MobileLinks";
import { Logo } from "@/components/Logo";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex items-center justify-between">
      <Logo/>

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
