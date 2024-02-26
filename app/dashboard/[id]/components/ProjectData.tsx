import { Logo } from "@/components/Logo";
import { UserAvatar } from "@/components/UserAvatar";
import { currentUser } from "@/lib/auth";
import { OverallData } from "./overall/OverallData";
import { Container } from "@/components/Container";
import { ProjectManager } from "./project/ProjectManager";
import { InfoText } from "@/components/InfoText";
import { VisitorsChart } from "./VisitorsChart";
import { VisitorsCountries } from "./VisitorsCountries";
import { VisitedRoutes } from "./VisitedRoutes";

export const ProjectData = async () => {
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
          <ProjectManager />
        </div>
      </section>
      <section className="mt-10">
        <VisitorsChart />
      </section>
      <section className="mt-10 flex items-center justify-end">
        <div className="flex-1">
          <VisitorsChart />
        </div>

        <div className="flex-1">
          <h3 className="text-purple font-bold text-2xl text-center">
            Visitors informations
          </h3>
          <div className="flex">
            <div className="flex-1">
                <div className="bg-purple rounded-tl-sm p-2">
                    <p className="text-white text-center">All Routes</p>
                </div>
                <VisitedRoutes />
            </div>
            <div>
                <div className="bg-purple rounded-tr-sm p-2">
                    <p className="text-white text-center">All Countries</p>
                </div>
                <VisitorsCountries />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
