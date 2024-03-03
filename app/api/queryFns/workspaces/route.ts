import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { currentUser } from "@/lib/auth";

export async function GET(req: Request) {
  noStore();

  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });
    const workspaces = await db.workspace.findMany({
      where: {
        userId: user?.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(workspaces);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Error");
  }
}
