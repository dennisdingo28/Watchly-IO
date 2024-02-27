import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(req: Request) {
  noStore();

  try {

    const workspaces = await db.workspace.findMany({
      where: {
        userId:"clt4p03gq0000mrrs1kwhhrqu",
      },
    });
    
    return NextResponse.json(workspaces);
  } catch (error) {
    console.log(error);
    
    return new NextResponse("Internal Error");
  }
}