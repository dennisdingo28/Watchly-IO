import { Container } from "@/components/Container";
import { InfoText } from "@/components/InfoText";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/auth";
import { WorkspaceFeed } from "./components/WorkspaceFeed";
import { OpenModal } from "@/components/modals/OpenModal";
import { db } from "@/lib/db";

export const runtime = "edge";

const DashboardPage = async () => {
  const user = await currentUser();

  const userWorkspaces = await db.workspace.findMany({
    where: {
      userId: user?.id,
    },
  });

  
  return (
    <Container>
      <div className="pt-5">
        <Navbar />
      </div>
      <div className="mt-10 flex items-center justify-between">
        <h1 className="text-5xl font-semibold">
          My Workspace <InfoText>.</InfoText>
        </h1>
        <OpenModal type="createWorkspace">
          <Button className="rounded-full">Create Project</Button>
        </OpenModal>
      </div>
      <Separator className="mt-5" />

      <div className="mt-10">
        <WorkspaceFeed initialWorkspaces={userWorkspaces}/>
      </div>
    </Container>
  );
};

export default DashboardPage;
