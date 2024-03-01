import { FcLinux } from "react-icons/fc";
import React from "react";
import Image from "next/image";

export const VisitorsSystems = () => {
  return (
    <div className="border-r-2 border-b-2 border-purple p-1 rounded-br-sm h-full">
      <div className="flex items-center gap-2.5 py-2.5">
        <Image src="/mac.svg" width={25} height={25} alt="browser-icon" />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <Image src="/windows.svg" width={25} height={25} alt="browser-icon" />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <FcLinux className="text-2xl" />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
    </div>
  );
};
