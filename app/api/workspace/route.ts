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

    const {searchParams} = new URL(req.url);
    const apiKey = searchParams.get("apiKey");
    console.log(apiKey);
    
    if (!apiKey || apiKey.trim() === "")
      throw new Error("No workspace api key was provided. Please provide one.");

    //update workspace
    return new NextResponse("OK", {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

  } catch (err) {
    console.log(err);
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
