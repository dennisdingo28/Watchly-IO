import { NavLink } from "./NavLink";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileLinks } from "./MobileLinks";
import OpenLoginModal from "../modals/openModals/OpenLoginModal";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <div className="hidden sm:flex items-center gap-5">
        <NavLink label="About" where="/" />
        <NavLink label="Services" where="/" />
        <NavLink label="Contact" where="/" />
        <NavLink label="Pricing" where="/" />
      </div>

      <div className="sm:hidden">
        <MobileLinks />
      </div>

      <OpenLoginModal>
        <p className="hidden sm:flex text-sm font-medium border-b-2 border-white hover:border-black transition-colors">
          Login
        </p>
      </OpenLoginModal>
    </nav>
  );
};
