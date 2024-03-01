import { db } from "@/lib/db";
import { InitSocket } from "./components/InitSocket";
import { WorkspaceData } from "./components/workspace/WorkspaceData";
import { redirect } from "next/navigation";

const DashboardProjectPage = async ({params}:{params:{id: string}}) => {
  const workspace = await db.workspace.findUnique({
    where:{
      id: params.id,
    },
  });

  if(!workspace) redirect("/dashboard");

  return (
    <>
    <WorkspaceData/>
    <InitSocket roomId={workspace.roomId}/>
    </>
  )
};

export default DashboardProjectPage;
