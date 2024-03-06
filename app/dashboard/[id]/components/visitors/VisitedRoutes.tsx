import { ScrollArea } from "@/components/ui/scroll-area"

export const VisitedRoutes = () => {
  return (
    <div className="max-h-[400px] border-l-2 md:border-b-2 border-r-2 border-purple p-1 md:rounded-bl-sm h-full">
      <ScrollArea className="h-full">
      <div className="flex gap-1 cursor-pointer py-2.5">
        <p className="font-bold text-sm">/pricing</p>
        <span className="text-xs text-darkGray self-end">56</span>
      </div>
      <div className="flex gap-1 cursor-pointer py-2.5">
        <p className="font-bold text-sm">/</p>
        <span className="text-xs text-darkGray self-end">72</span>
      </div>
      <div className="flex gap-1 cursor-pointer py-2.5">
        <p className="font-bold text-sm">/dashboard</p>
        <span className="text-xs text-darkGray self-end">14</span>
      </div>
      </ScrollArea>
    </div>
  );
};
