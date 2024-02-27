import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    
    const workspaces = await db.workspace.findMany({
      where: {
        userId: "clt3d07wf0003bw0zzildx39x",
      },
    });
    return NextResponse.json(workspaces);
  } catch (error) {
    console.log(error);
    
    return new NextResponse("Internal Error");
  }
}
