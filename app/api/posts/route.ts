import { currentUser } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        const user = await currentUser();
        if (!user) return new NextResponse("Unauthorized", { status: 401 });

        return NextResponse.json([{title:"ding", description:"asfsa"}]);
    }catch(err){
        console.log(err);
        return new NextResponse("Internal Error");
    }
}