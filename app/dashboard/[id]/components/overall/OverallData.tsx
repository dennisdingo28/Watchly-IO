import { Flag, Users2 } from "lucide-react";
import { OverallCard } from "./OverallCard";
import { WorkspaceCountry, WorkspaceWithUsers } from "@/types";
import { ActiveUsersCard } from "./ActiveUsersCard";

interface OverallDataProps {
  workspace: WorkspaceWithUsers;
  usersAmount: number;
  workspaceCountries: Array<WorkspaceCountry>;
}

export const OverallData = ({usersAmount, workspace, workspaceCountries}: OverallDataProps) => {
  return (
    <>
      <div className="grid grid-cols-2 md:items-center justify-between gap-y-5 xsBig:grid-cols-4 xsBig:gap-10">
        <OverallCard
          icon={<Users2 className="text-purple w-5 h-5" />}
          amount={usersAmount}
          label="Total Users"
          className="justify-self-start"
        />
        <OverallCard
          icon={<Flag className="text-purple w-5 h-5" />}
          amount={workspaceCountries.length}
          label="Countries"
          className="justify-self-end xsBig:justify-self-auto"
        />
        <ActiveUsersCard workspace={workspace} />
      </div>
    </>
  );
};
