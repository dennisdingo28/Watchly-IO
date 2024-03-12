import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WorkspaceSystemOperation } from "@/types";

export const VisitorsSystems = ({
  allWorkspaceSystemOperations,
}: {
  allWorkspaceSystemOperations: Array<WorkspaceSystemOperation>;
}) => {
  return (
    <div className="max-h-[400px] border-l-2 md:border-b-2 border-r-2 md:border-r-0 border-purple p-1 md:rounded-bl-none h-full">
      {allWorkspaceSystemOperations.length > 0 ? (
        <ScrollArea className="h-full">
          {allWorkspaceSystemOperations.map((systemOperation) => (
            <div
              key={systemOperation.systemOperation}
              className="flex items-center gap-2.5 py-2.5"
            >
              <Image
                src={`/${systemOperation.systemOperation.toLocaleLowerCase()}.svg`}
                width={25}
                height={25}
                alt="browser-icon"
              />
              <span className="text-xs text-darkGray ml-auto">
                {systemOperation.users}{" "}
                {systemOperation.users === 1 ? "user" : "users"}.
              </span>
            </div>
          ))}
        </ScrollArea>
      ) : (
        <p className="text-darkPurple text-xs text-center">
          No user have visited your app, yet
        </p>
      )}
    </div>
  );
};
