export const VisitedRoutes = () => {
  return (
    <div className="border-l-2 border-b-2 border-r-2 border-purple p-1 rounded-bl-sm h-full">
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
    </div>
  );
};
