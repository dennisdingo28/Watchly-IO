import { db } from "@/lib/db";
import { Online } from "./components/Online";
import { ProjectData } from "./components/ProjectData";
import { InitSocket } from "./components/InitSocket";

const DashboardProjectPage = async () =>{
    const targetWorkspace = await db.workspace.findUnique({
        where:{
            apiKey:"watchlyIO-ea17d0ce3e714003bf3d48f144291c86",
        },
        include:{
            WorkspaceUser: true,
        },
    });


    return (
        <>
        <InitSocket apiKey={"watchlyIO-ea17d0ce3e714003bf3d48f144291c86"}/>
        <ProjectData/>
        <Online allUsers={targetWorkspace!.WorkspaceUser}/>
        </>
    )
}

export default DashboardProjectPage;