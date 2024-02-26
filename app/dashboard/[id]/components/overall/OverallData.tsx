import { Flag, User2 } from "lucide-react";
import { OverallCard } from "./OverallCard";

const TotalUsersIcon = () => {
  return (
    <div className="rounded-full bg-purple/20 p-4">
      <User2 className="text-purple w-5 h-5" />
    </div>
  );
};
const TotalCountriesIcon = () => {
  return (
    <div className="rounded-full bg-purple/20 p-4">
      <Flag className="text-purple w-5 h-5" />
    </div>
  );
};

export const OverallData = () => {
  return (
    <>
       
      <div className="grid grid-cols-2 md:items-center justify-between xsBig:grid-cols-4">
        <OverallCard
          icon={<TotalUsersIcon />}
          amount={2546}
          label="Total Users"
          className="justify-self-start"
        />
        <OverallCard
          icon={<TotalCountriesIcon />}
          amount={115}
          label="Countries"
          className="justify-self-end xsBig:justify-self-auto"

        />
        <OverallCard
          icon={<TotalUsersIcon />}
          amount={2546}
          label="Total Users"
          className="justify-self-start"

        />
        <OverallCard
          icon={<TotalUsersIcon />}
          amount={2546}
          label="Total Users"
          className="justify-self-end xsBig:justify-self-auto"

        />
      </div>
    </>
  );
};
