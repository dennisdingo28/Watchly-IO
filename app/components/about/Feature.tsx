import Image from "next/image";

interface FeatureProps{
    imageUrl: string;
    title?: string;
    description: string;
}

export const Feature = ({imageUrl, title, description}: FeatureProps) =>{
    return (
        <div className="bg-purple p-6 rounded-sm">
            <Image src={imageUrl} width={500} height={300} className="w-full h-full max-h-[300px] object-cover rounded-md mx-auto" alt="user-session"/>
            <div>
                <p className="text-lightGray font-medium">{description}</p>
            </div>
        </div>
    )
}