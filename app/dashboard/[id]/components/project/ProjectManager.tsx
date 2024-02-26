import { ProjectApiKey } from "./ProjectApiKey";

export const ProjectManager = () => {
  return (
    <div className="cursor-pointer bg-gray-100 px-4 py-2 rounded-md duration-100 hover:bg-transparent hover:shadow-[0px_0px_3px_rgb(119,109,242)]">
      <div className="flex items-center gap-2">
        <p className="font-bold">Dennis&apos;s Workspace</p>
        <div className="w-[10px] h-[10px] rounded-full bg-green-500 animate-pulse" />
      </div>
      <div>
        <p className="text-sm text-darkGray">Plan: Business</p>
        <ProjectApiKey apiKey="watchly-asfa81251@gasa2"/>
      </div>
    </div>
  );
};
