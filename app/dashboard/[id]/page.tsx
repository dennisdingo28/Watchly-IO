import { db } from "@/lib/db";
import { InitSocket } from "./components/InitSocket";
import { WorkspaceData } from "./components/workspace/WorkspaceData";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { currentUser } from "@/lib/auth";
import { WorkspaceCountry, WorkspaceSystemOperation } from "@/types";

const DashboardProjectPage = async ({ params }: { params: { id: string } }) => {
  noStore();
  const user = await currentUser();

  const workspace = await db.workspace.findUnique({
    where: {
      id: params.id,
      userId: user?.id,
    },
    include: {
      workspaceUsers: true,
    },
  });

  if (!workspace) redirect("/dashboard");

  const workspaceRoutes = await db.route.findMany({
    where: {
      workspaceId: workspace.id,
    },
  });

  //countries informations
  const allWorkspaceCountries: Array<WorkspaceCountry> = [];

  for (const workspaceUser of workspace.workspaceUsers) {
    const existingCountry = allWorkspaceCountries.find(
      (cn) => cn.country === workspaceUser.country
    );

    if (!existingCountry) {
      allWorkspaceCountries.push({
        country: workspaceUser.country,
        countryCode: workspaceUser.countryCode,
        visitors: 1,
      });
    } else {
      allWorkspaceCountries.push({
        ...existingCountry,
        visitors: existingCountry.visitors + 1,
      });
    }
  }

  //system operation informations
  //countries informations
  const allWorkspaceSystemOperations: Array<WorkspaceSystemOperation> = [];

  for (const workspaceUser of workspace.workspaceUsers) {
    const existingSystemOperation = allWorkspaceSystemOperations.find(
      (sy) => sy.systemOperation === workspaceUser.platform
    );

    if (!existingSystemOperation) {
      allWorkspaceSystemOperations.push({
        systemOperation: workspaceUser.platform,
        users: 1,
      });
    } else {
      allWorkspaceSystemOperations.push({
        ...existingSystemOperation,
        users: existingSystemOperation.users + 1,
      });
    }
  }

  return (
    <>
      <WorkspaceData
        workspace={workspace}
        workspaceRoutes={workspaceRoutes}
        workspaceCountries={allWorkspaceCountries}
        allWorkspaceSystemOperations={allWorkspaceSystemOperations}
      />
      <InitSocket roomId={workspace.roomId} />
    </>
  );
};

export default DashboardProjectPage;
