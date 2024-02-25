import { currentUser } from "@/lib/auth"

const DashboardPage = async () => {
    const user = await currentUser();
    console.log(user);
    
  return (
    <div>
      {user?.name}
    </div>
  )
}

export default DashboardPage
