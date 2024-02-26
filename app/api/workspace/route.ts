import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { WorkspaceValidator } from "@/validators/workspace";
import { NextRequest, NextResponse } from "next/server";

// export async function PATCH(
//   req: NextRequest,
//   { searchParams }: { searchParams: { apiKey: string } }
// ) {
//   try {
//     const data = await req.json();

//     const apiKey = searchParams.apiKey;
//     if (!apiKey || apiKey.trim() === "")
//       throw new Error("No workspace api key was provided. Please provide one.");

//     //update workspace
//   } catch (err) {
//     console.log(err);
//   }
// }

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
      },
    });

    return NextResponse.json(workspace);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
