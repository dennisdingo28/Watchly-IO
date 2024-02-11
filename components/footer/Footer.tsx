import { Container } from "../Container";
import Image from "next/image";
import { FotLink } from "./FotLink";
import { Mail, Phone } from "lucide-react";
import { FaTiktok, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-darkPurple to-purple">
      <Container className="p-2.5">
        <Image src="/next.svg" alt="logo" width={160} height={160} />

        <div className="flex justify-around mt-5 h-full">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-white font-medium">Menu</h1>
            <div className="space-y-2.5">
              <FotLink label="About" where="/" />
              <FotLink label="Services" where="/" />
              <FotLink label="Contact" where="/" />
              <FotLink label="Pricing" where="/" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-white font-medium">Contact</h1>
            <div className="space-y-2.5">
              <p className="flex items-center gap-2.5 text-lightGray">
                <Phone /> Phone
              </p>
              <p className="text-lightGray ml-2.5">0771616096</p>
            </div>
            <div className="space-y-2.5">
              <p className="flex items-center gap-2.5 text-lightGray">
                <Mail /> Email
              </p>
              <p className="text-lightGray ml-2.5">
                moldovanalexismihai06@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5 mb-auto">
              <h1 className="text-xl text-white font-medium">Social Media</h1>
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

            <p className="text-sm text-lightGray">
              ©Lunatics Lab 2023. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
