import { NavLink } from "./NavLink";
import { Logo } from "@/components/Logo";
import { MobileLinks } from "./MobileLinks";
import { OpenModal } from "../modals/OpenModal";
import { currentUser } from "@/lib/auth";
import { UserAvatar } from "../UserAvatar";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="flex items-center justify-between">
      <Logo theme="dark" />

      <div className="hidden sm:flex items-center gap-5">
        <NavLink label="About" where="/about" />
        <NavLink label="Services" where="/services" />
        <NavLink label="Contact" where="/contact" />
        <NavLink label="Pricing" where="/pricing" />
      </div>

      <div className="sm:hidden ml-auto">
        <MobileLinks
          isLoggedIn={!!user?.id}
          userImage={user?.image!}
          userName={user?.name!}
          userEmail={user?.email!}
        />
      </div>

      {user ? (
        <div className="hidden sm:block">
          <UserAvatar showDropDownMenu={true} userImage={user?.image!} />
        </div>
      ) : (
        <OpenModal type="login">
          <p className="cursor-pointer hidden sm:flex text-sm font-medium border-b-2 border-white hover:border-black transition-colors">
            Login
          </p>
        </OpenModal>
      )}
    </nav>
  );
};
