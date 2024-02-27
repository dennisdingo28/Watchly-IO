import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        return NextResponse.json([{title:"ding", description:"asfsa"}]);
    }catch(err){
        console.log(err);
    }
}