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
import { Recordings } from "../recordings/Recordings";

export const WorkspaceData = async () => {
  const user = await currentUser();

  return (
    <Container>
      <header className="flex items-center justify-between pt-5">
        <Logo theme="dark" />
        <UserAvatar userImage={user?.image!} showDropDownMenu />
      </header>
      <section className="mt-10">
        <p className="text-4xl font-semibold md:hidden text-center mb-5">
          <InfoText>Quick overview</InfoText>
        </p>
        <div className="flex flex-col-reverse justify-between xl:flex-row gap-5">
          <OverallData />
          <WorkspaceManager />
        </div>
      </section>

      <section className="mt-10">
        <VisitorsChart />
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
            <VisitedRoutes />
          </div>
          <div className="flex-1">
            <div className="bg-purple p-2.5">
              <p className="text-white text-center">All Countries</p>
            </div>
            <VisitorsCountries />
          </div>
          <div className="flex-1">
            <div className="bg-purple p-2.5">
              <p className="text-white text-center">Operating Systems</p>
            </div>
            <VisitorsSystems />
          </div>
          <div className="flex-1">
            <div className="bg-purple md:rounded-tr-sm p-2.5">
              <p className="text-white text-center">Browsers</p>
            </div>
            <VisitorsBrowsers />
          </div>
        </div>
      </section>

      <section className="mt-24 sm:mt-28">
        <VisitorsChart />
      </section>

      <section className="my-10">
        <h3 className="text-purple font-bold text-2xl text-center mb-2.5">
          Recordings
        </h3>
        <Recordings
          userImage={user?.image!}
          userName={user?.name!}
          userEmail={user?.email!}
        />
      </section>
    </Container>
  );
};
