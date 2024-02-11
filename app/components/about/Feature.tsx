import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureProps{
    imageUrl: string;
    title?: string;
    description: string;
}

export const Feature = ({imageUrl, title, description}: FeatureProps) =>{
    return (
        <div>
            <Image src={imageUrl} width={500} height={300} className="w-full h-full max-h-[300px] object-cover rounded-md mx-auto" alt="user-session"/>
            <div>
                <p className="text-lightGray">{description}</p>
            </div>
        </div>
    )
}