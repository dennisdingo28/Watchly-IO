import Image from "next/image";
import React from "react";

export const VisitorsBrowser = () => {
  return (
    <div className="border-r-2 border-b-2 border-purple p-1 rounded-br-sm h-full">
      <div className="flex items-center gap-2.5 py-2.5">
        <Image src="/chrome.svg" width={25} height={25} alt="browser-icon" />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <Image
          src="/microsoft-edge.svg"
          width={25}
          height={25}
          alt="browser-icon"
        />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <Image src="/safari.svg" width={25} height={25} alt="browser-icon" />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
    </div>
  );
};
