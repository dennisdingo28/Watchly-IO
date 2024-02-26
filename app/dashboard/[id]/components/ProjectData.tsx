import { Logo } from "@/components/Logo";
import { UserAvatar } from "@/components/UserAvatar";
import { currentUser } from "@/lib/auth";
import { OverallData } from "./overall/OverallData";
import { Container } from "@/components/Container";
import { ProjectManager } from "./project/ProjectManager";
import { InfoText } from "@/components/InfoText";

export const ProjectData = async () => {
  const user = await currentUser();

  return (
    <Container>
      <header className="flex items-center justify-between pt-5">
        <Logo theme="dark" />
        <UserAvatar userImage={user?.image!} showDropDownMenu />
      </header>
      <section className="mt-10">
        <p className="text-4xl font-semibold md:hidden sm:text-center mb-5">
          <InfoText>Quick overview</InfoText>
        </p>
        <div className="flex flex-col-reverse xl:flex-row gap-5">
            <OverallData />
            <ProjectManager />
        </div>
       
      </section>
    </Container>
  );
};
