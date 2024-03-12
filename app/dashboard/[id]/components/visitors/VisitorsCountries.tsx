import { ScrollArea } from "@/components/ui/scroll-area";
import { WorkspaceCountry } from "@/types";
import ReactCountryFlag from "react-country-flag";

export const VisitorsCountries = ({
  workspaceCountries,
}: {
  workspaceCountries: Array<WorkspaceCountry>;
}) => {
  return (
    <div className="max-h-[400px] border-r-2 md:border-r-0 border-l-2 md:border-l-0 md:border-b-2 border-purple p-1 md:rounded-br-none h-full">
      <ScrollArea className="h-full">
        {workspaceCountries.map((workspaceCountry) => (
          <div
            key={workspaceCountry.countryCode}
            className="flex items-center gap-2.5 py-2.5"
          >
            <ReactCountryFlag
              className="text-2xl"
              svg
              countryCode={workspaceCountry.countryCode}
            />
            <p className="text-sm">{workspaceCountry.country}</p>
            <span className="text-xs text-darkGray ml-auto">
              {workspaceCountry.visitors}{" "}
              {workspaceCountry.visitors === 1 ? "visitor" : "visitors"}.
            </span>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
