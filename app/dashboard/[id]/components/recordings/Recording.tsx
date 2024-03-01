import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Recording = () => {
  return (
    <div>
      <div className="flex gap-2.5">
        <Image
          src="/about1.jpg"
          width={100}
          height={100}
          alt="video-thumbnail"
          className="border-2 object-cover max-w-[60px] max-h-[50px]"
        />
        <div className="flex flex-col">
          <p className="text-sm">Recording 1</p>
          <div className="flex items-center gap-2.5 text-darkGray">
            <PlayCircle className="w-[16px] h-[16px]" />
            <span className="text-sm">12:05 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};
