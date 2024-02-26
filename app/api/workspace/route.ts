import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, {searchParams}:{searchParams:{apiKey: string}}) {
    try{
        const data = await req.json();

        const apiKey = searchParams.apiKey;
        if(!apiKey || apiKey.trim()==="") throw new Error("No workspace api key was provided. Please provide one.");

        //update workspace
    }catch(err){
        console.log(err);
    }
}