import { WorkspaceWithUsers } from "@/types";
import { WorkspaceApiKey } from "./WorkspaceApiKey";
import { WorkspaceName } from "./WorkspaceName";

export const WorkspaceManager = ({workspace}:{workspace: WorkspaceWithUsers}) => {
  return (
    <div className="cursor-pointer bg-lightGray px-5 py-2.5 rounded-md hover:bg-transparent hover:shadow-[0px_0px_3px_rgb(119,109,242)] transition-colors">
      <div className="flex items-center gap-5">
        <WorkspaceName workspace={workspace}/>
        <div className="w-[10px] h-[10px] rounded-full bg-green-500 animate-pulse" />
      </div>
      <div>
        <div className="flex items-center gap-5">
          <p className="text-sm text-darkGray">Plan: Business</p>
          <p className="text-sm text-darkGray">Name: Boss</p>
        </div>
        <WorkspaceApiKey apiKey={workspace.apiKey} />
      </div>
    </div>
  );
};
