import { Logo } from "@/components/Logo";
import { UserAvatar } from "@/components/UserAvatar";
import { currentUser } from "@/lib/auth";
import { OverallData } from "../overall/OverallData";
import { Container } from "@/components/Container";
import { WorkspaceManager } from "./WorkspaceManager";
import { InfoText } from "@/components/InfoText";
import { VisitorsChart } from "../visitors/VisitorsChart";
import { VisitorsCountries } from "../visitors/VisitorsCountries";
import { VisitedRoutes } from "../visitors/VisitedRoutes";
import { VisitorsBrowsers } from "../visitors/VisitorsBrowsers";
import { VisitorsSystems } from "../visitors/VisitorsSystems";
import {
  Browser,
  WorkspaceCountry,
  WorkspaceSystemOperation,
  WorkspaceWithUsers,
} from "@/types";
import { Route } from "@prisma/client";
import { LiveUsers } from "../live-users/LiveUsers";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { VisitedRoutesChart } from "../visitors/VisitedRoutesChart";
import Docs from "../docs/Docs";

interface WorkspaceDataProps {
  workspace: WorkspaceWithUsers;
  workspaceRoutes: Array<Route>;
  workspaceCountries: Array<WorkspaceCountry>;
  allWorkspaceSystemOperations: Array<WorkspaceSystemOperation>;
  allBrowsers: Array<Browser>;
}

export const WorkspaceData = async ({
  workspace,
  workspaceRoutes,
  workspaceCountries,
  allWorkspaceSystemOperations,
  allBrowsers,
}: WorkspaceDataProps) => {
  const user = await currentUser();

  return (
    <div className="grainy">
      <Container>
        <header className="flex items-center justify-between pt-5">
          <Logo theme="dark" />
          <Link href="/dashboard" className="flex items-center gap-5">
            <div className="flex items-center border-b-2 border-black text-sm">
              <ChevronLeft className="w-[16px] h-[16px]" />
              <p>Dashboard</p>
            </div>
            <UserAvatar userImage={user?.image!} showDropDownMenu />
          </Link>
        </header>
        <section className="mt-10">
          <p className="text-4xl font-semibold md:hidden text-center mb-5">
            <InfoText>Quick overview</InfoText>
          </p>
          <div className="flex flex-col-reverse justify-between xl:flex-row gap-5">
            <OverallData
              workspace={workspace}
              usersAmount={workspace.workspaceUsers.length}
              workspaceCountries={workspaceCountries}
            />
            <WorkspaceManager workspace={workspace} />
          </div>
        </section>
        <section className="mt-5">
          <Docs/>
        </section>
        <section className="mt-10">
          <VisitorsChart visitors={workspace.workspaceUsers} />
        </section>

      <section className="mt-10">
        <h3 className="text-purple font-bold text-2xl text-center mb-2.5">
          Live users
        </h3>
        <div className=" bg-purple rounded-md p-5">
            <LiveUsers workspace={workspace} />
        </div>
      </section>

        <section className="mt-10">
          <h3 className="text-purple font-bold text-2xl text-center mb-2.5">
            Visitors informations
          </h3>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="bg-purple rounded-tl-sm rounded-tr-sm md:rounded-tr-none p-2.5">
                <p className="text-white text-center">All Routes</p>
              </div>
              <VisitedRoutes workspaceRoutes={workspaceRoutes} />
            </div>
            <div className="flex-1">
              <div className="bg-purple p-2.5">
                <p className="text-white text-center">All Countries</p>
              </div>
              <VisitorsCountries workspaceCountries={workspaceCountries} />
            </div>
            <div className="flex-1">
              <div className="bg-purple p-2.5">
                <p className="text-white text-center">Operating Systems</p>
              </div>
              <VisitorsSystems
                allWorkspaceSystemOperations={allWorkspaceSystemOperations}
              />
            </div>
            <div className="flex-1">
              <div className="bg-purple md:rounded-tr-sm p-2.5">
                <p className="text-white text-center">Browsers</p>
              </div>
              <VisitorsBrowsers allBrowsers={allBrowsers} />
            </div>
          </div>
        </section>

        <section className="mt-24 sm:mt-28">
          <VisitedRoutesChart visitedRoutes={workspaceRoutes} />
        </section>
      </Container>
    </div>
  );
};
