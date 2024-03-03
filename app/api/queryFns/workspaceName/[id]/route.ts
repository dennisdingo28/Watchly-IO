import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  noStore();

  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });
    const workspace = await db.workspace.findUnique({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(workspace);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Error");
  }
}
