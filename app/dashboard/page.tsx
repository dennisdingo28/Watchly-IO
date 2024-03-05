import { Container } from "@/components/Container";
import { InfoText } from "@/components/InfoText";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/auth";
import { WorkspaceFeed } from "./components/WorkspaceFeed";
import { OpenModal } from "@/components/modals/OpenModal";
import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

const DashboardPage = async () => {
  noStore();

  const user = await currentUser();

  const userWorkspaces = await db.workspace.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="grainy min-h-screen relative">
      <div
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute inset-y-0 min-h-screen inset-x-0 transform-gpu overflow-hidden blur-3xl -top-24"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-56 rotate-[30deg] bg-gradient-to-tr from-lightGray to-purple opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <Container>
        <div className="pt-5">
          <Navbar />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-5xl font-semibold">
            My Workspaces <InfoText>.</InfoText>
          </h1>
          <OpenModal
            type="createWorkspace"
            data={{
              user: {
                image: user?.image!,
                email: user?.email!,
                name: user?.name!,
              },
            }}
          >
            <Button className="rounded-full mt-5 sm:mt-0">New workspace</Button>
          </OpenModal>
        </div>
        <Separator className="mt-5" />

        <div className="my-10">
          <WorkspaceFeed
            userImage={user?.image!}
            userName={user?.name!}
            userEmail={user?.email!}
            initialWorkspaces={userWorkspaces}
          />
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage;
