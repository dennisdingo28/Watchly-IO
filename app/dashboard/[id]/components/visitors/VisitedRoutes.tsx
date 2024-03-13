import { ScrollArea } from "@/components/ui/scroll-area";
import { Route } from "@prisma/client";

export const VisitedRoutes = ({
  workspaceRoutes,
}: {
  workspaceRoutes: Array<Route>;
}) => {
  return (
    <div className="max-h-[400px] border-l-2 md:border-b-2 border-r-2 border-purple p-1 md:rounded-bl-sm h-full">
      <ScrollArea className="h-full">
        {workspaceRoutes.map((wr, idx) => (
          <div key={idx} className="flex gap-1 cursor-pointer py-2.5">
            <p className="font-bold text-sm">{wr.pathname}</p>
            <span className="text-xs text-darkGray ml-auto">
              {wr.visited} {wr.visited === 1 ? "user" : "users"}.
            </span>{" "}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
