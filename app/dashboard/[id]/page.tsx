import { db } from "@/lib/db";
import { InitSocket } from "./components/InitSocket";
import { WorkspaceData } from "./components/workspace/WorkspaceData";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

const DashboardProjectPage = async ({ params }: { params: { id: string } }) => {
  noStore();

  const workspace = await db.workspace.findUnique({
    where: {
      id: params.id,
    },
    include: {
      workspaceUsers: true,
    },
  });

  if (!workspace) redirect("/dashboard");

  return (
    <>
      <WorkspaceData workspace={workspace} />
      <InitSocket roomId={workspace.roomId} />
    </>
  );
};

export default DashboardProjectPage;
