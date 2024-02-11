import Image from "next/image";

interface FeatureProps{
    imageUrl: string;
    title?: string;
    description: string;
}

export const Feature = ({imageUrl, title, description}: FeatureProps) =>{
    return (
        <div className="bg-purple px-6 py-4 rounded-sm h-fit">
            <p className="font-bold text-center text-white tracking-wider text-[1.8em] mb-2">{title}</p>
            <Image src={imageUrl} width={500} height={300} className="w-full h-full max-h-[300px] object-cover rounded-md mx-auto" alt="user-session"/>
            <div>
                <p className="text-lightGray font-medium">{description}</p>
            </div>
        </div>
    )
}