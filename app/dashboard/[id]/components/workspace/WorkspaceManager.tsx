import { WorkspaceApiKey } from "./WorkspaceApiKey";

export const WorkspaceManager = () => {
  return (
    <div className="cursor-pointer bg-lightGray px-5 py-2.5 rounded-md hover:bg-transparent hover:shadow-[0px_0px_3px_rgb(119,109,242)] transition-colors">
      <div className="flex items-center gap-2">
        <p className="font-bold">Dennis&apos;s Workspace</p>
        <div className="w-[10px] h-[10px] rounded-full bg-green-500 animate-pulse" />
      </div>
      <div>
        <p className="text-sm text-darkGray">Plan: Business</p>
        <WorkspaceApiKey apiKey="watchly-asfa81251@gasa2" />
      </div>
    </div>
  );
};
