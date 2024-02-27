import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';
import { currentUser } from "@/lib/auth";

export async function GET(req: Request) {
  noStore();

  try {
    
    const workspaces = await db.workspace.findMany({
      where: {
        userId:"clt4pwp150000qt9jyuyo5q20",
      },
    });
    
    return NextResponse.json(workspaces);
  } catch (error) {
    console.log(error);
    
    return new NextResponse("Internal Error");
  }
}