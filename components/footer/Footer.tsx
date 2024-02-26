import { Container } from "@/components/Container";
import { FotLink } from "./FotLink";
import { Mail, Phone } from "lucide-react";
import { FaTiktok, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-darkPurple shadow-[0px_0px_10px_rgb(81,74,165)]">
      <Container className="p-2.5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-around mt-5 h-full">
          <div className="flex flex-col gap-5">
            <h1 className="text-sm text-lightGray font-medium uppercase">
              Watchly.IO
            </h1>
            <div className="space-y-2.5">
              <FotLink label="About" where="/" />
              <FotLink label="Services" where="/" />
              <FotLink label="Contact" where="/" />
              <FotLink label="Pricing" where="/" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0 flex flex-col gap-5">
            <h1 className="text-sm text-lightGray font-medium uppercase">
              Contact
            </h1>
            <p className="flex items-center gap-2 text-lightGray">
              <Phone />
              <Link href="tel:0771616096" className="text-lightGray">
                0771616096
              </Link>
            </p>

            <p className="flex items-center gap-2.5 text-lightGray">
              <Mail />
              <Link
                href="mailto:moldovanalexismihai06@gmail.com"
                className="text-lightGray"
              >
                moldovanalexismihai06@gmail.com
              </Link>
            </p>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="flex flex-col gap-5 mb-auto">
              <h1 className="text-sm text-lightGray font-medium uppercase">
                Social Media
              </h1>
              <div className="flex items-center gap-5 text-lightGray">
                <Link href="/">
                  <FaTiktok className="hover:text-darkGray transition-colors" />
                </Link>
                <Link href="/">
                  <FaInstagram className="hover:text-darkGray transition-colors" />
                </Link>
                <Link href="/">
                  <FaTwitter className="hover:text-darkGray transition-colors" />
                </Link>
                <Link href="/">
                  <FaFacebook className="hover:text-darkGray transition-colors" />
                </Link>
              </div>
            </div>

            <p className="text-sm text-lightGray mt-10">
              © Copyright. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Logo className="text-[2em]" theme="white" />
        </div>
      </Container>
    </footer>
  );
};
