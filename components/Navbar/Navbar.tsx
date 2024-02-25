import { NavLink } from "./NavLink";
import { Logo } from "@/components/Logo";
import { MobileLinks } from "./MobileLinks";
import { OpenModal } from "../modals/OpenModal";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <div className="hidden sm:flex items-center gap-5">
        <NavLink label="About" where="/about" />
        <NavLink label="Services" where="/services" />
        <NavLink label="Contact" where="/contact" />
        <NavLink label="Pricing" where="/pricing" />
      </div>

      <div className="sm:hidden ml-auto">
        <MobileLinks />
      </div>

      <OpenModal type="login">
        <p className="cursor-pointer hidden sm:flex text-sm font-medium border-b-2 border-white hover:border-black transition-colors">
          Login
        </p>
      </OpenModal>
    </nav>
  );
};
