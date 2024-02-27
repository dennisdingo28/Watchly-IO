import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        // const user = await currentUser();
        // if (!user) return new NextResponse("Unauthorized", { status: 401 });

        const users = await db.user.findMany({})

        return NextResponse.json(users, { headers: {
            'Cache-Control': 'no-store', // Disable caching
        },});
    }catch(err){
        console.log(err);
        return new NextResponse("Internal Error");
    }
}