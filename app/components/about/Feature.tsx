import Image from "next/image";

interface FeatureProps{
    imageUrl: string;
    title?: string;
    description: string;
}

export const Feature = ({imageUrl, title, description}: FeatureProps) =>{
    return (
        <div className="rounded-sm h-fit">
            <p className="font-bold text-center tracking-wider text-[1.8em] mb-2 text-purple ">{title}</p>
            <Image src={imageUrl} width={500} height={300} className="w-full h-full max-h-[300px] object-cover rounded-md mx-auto" alt="user-session"/>
            <p className="mt-2 font-medium text-pretty text-purple ">{description}</p>
        </div>
    )
}