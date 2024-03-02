import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { WorkspaceValidator } from "@/validators/workspace";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const existingWorkspace = await db.workspace.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!existingWorkspace)
      return new NextResponse("Workspace doesn't exist", { status: 400 });

    const deletedWorkspace = await db.workspace.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(deletedWorkspace);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const data = await req.json();

    const {name} = WorkspaceValidator.parse(data);

    const existingWorkspace = await db.workspace.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!existingWorkspace)
      return new NextResponse("Workspace doesn't exist", { status: 400 });

    const updatedWorkspace = await db.workspace.update({
      where: {
        id: params.id,
      },
      data:{
        name,
      },
    });

    return NextResponse.json(updatedWorkspace);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

