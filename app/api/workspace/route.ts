import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { generateApiKey } from "@/lib/generateApiKey";
import { WorkspaceValidator } from "@/validators/workspace";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
) {
  try {
   
    const data = await req.json();
    
    if(!data.path) return new NextResponse("A path was expected. No path was provided.", {status:401});
    
    
    const {searchParams} = new URL(req.url);
    const apiKey = searchParams.get("apiKey");

    if (!apiKey || apiKey.trim() === "")
      throw new Error("No workspace api key was provided. Please provide one.");


    const targetWorkspace = await db.workspace.findUnique({
      where:{
        apiKey,
      },
      include:{
        routes: true,
      },
    });
    
    if(!targetWorkspace) return new NextResponse("Api key is not valid.");

    if(targetWorkspace.routes.find(route=>route.pathname===data.path)){
      //update existing route
      
      await db.route.update({
        where:{
          pathname_workspaceId:{
            pathname: data.path,
            workspaceId: targetWorkspace.id,
          },
        },
        data:{
          visited: {
            increment: 1,
          },
        },
      });

    }else{
      //create new route
      await db.route.create({
        data:{
          pathname: data.path,
          workspaceId: targetWorkspace.id,
        },
      });
    }

    //update workspace
    return new NextResponse("OK");

  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const data = await req.json();

    const { name } = WorkspaceValidator.parse(data);

    const workspace = await db.workspace.create({
      data: {
        name,
        userId: user.id,
        apiKey: generateApiKey(),
      },
    });

    
    return NextResponse.json(workspace);
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
 
    console.log("got ehre");
    
    
    return NextResponse.json("getted");
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}