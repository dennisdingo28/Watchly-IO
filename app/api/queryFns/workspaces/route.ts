import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {

    const workspaces = await db.workspace.findMany({
      where: {
        userId:"clt4occp80000yy4n00gw01cq",
      },
    });
    
    return NextResponse.json(workspaces);
  } catch (error) {
    console.log(error);
    
    return new NextResponse("Internal Error");
  }
}