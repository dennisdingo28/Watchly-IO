import { ScrollArea } from "@/components/ui/scroll-area";
import { Browser } from "@/types";
import Image from "next/image";
import React from "react";

export const VisitorsBrowsers = ({
  allBrowsers,
}: {
  allBrowsers: Array<Browser>;
}) => {
  console.log(allBrowsers[0].browser);
  return (
    <div className="max-h-[400px] border-r-2 border-l-2 border-b-2 border-purple p-1 rounded-bl-sm md:rounded-bl-none rounded-br-sm h-full">
      <ScrollArea className="h-full">
        {allBrowsers.map((browserIdt) => (
          <div
            key={browserIdt.browser}
            className="flex items-center gap-2.5 py-2.5"
          >
            <Image
              src={`/${browserIdt.browser}.svg`}
              width={25}
              height={25}
              alt="browser-icon"
            />
            <span className="text-xs text-darkGray ml-auto">
              {browserIdt.users} {browserIdt.users === 1 ? "user" : "users"}.
            </span>{" "}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
