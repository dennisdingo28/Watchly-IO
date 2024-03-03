import { Flag, User2 } from "lucide-react";
import { OverallCard } from "./OverallCard";
import { WorkspaceCountry } from "@/types";

interface OverallDataProps {
  usersAmount: number;
  workspaceCountries: Array<WorkspaceCountry>;
}

export const OverallData = ({usersAmount, workspaceCountries}: OverallDataProps) => {
  return (
    <>
      <div className="grid grid-cols-2 md:items-center justify-between gap-y-5 xsBig:grid-cols-4 xsBig:gap-10">
        <OverallCard
          icon={<User2 className="text-purple w-5 h-5" />}
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
        <OverallCard
          icon={<User2 className="text-purple w-5 h-5" />}
          amount={2546}
          label="Total Users"
          className="justify-self-start"
        />
        <OverallCard
          icon={<User2 className="text-purple w-5 h-5" />}
          amount={2546}
          label="Total Users"
          className="justify-self-end xsBig:justify-self-auto"
        />
      </div>
    </>
  );
};
