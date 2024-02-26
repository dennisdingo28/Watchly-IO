import { currentUser } from "@/lib/auth"

const DashboardPage = async () => {
    const user = await currentUser();
  return (
    <div>
      {user?.name}
    </div>
  )
}

export default DashboardPage
