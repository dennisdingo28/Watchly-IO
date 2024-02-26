import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const workspaces = await db.workspace.findMany({
      where: {
        userId: user?.id,
      },
    });
    return NextResponse.json(workspaces);
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
