import { currentUser } from "@/lib/auth";
import { LeftSide } from "./components/LeftSide";

const DashboardPage = async () => {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="">
      
    </div>
  );
};

export default DashboardPage;
