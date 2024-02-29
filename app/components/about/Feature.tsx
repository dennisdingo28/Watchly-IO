import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureProps {
  imageUrl: string;
  title?: string;
  description: string;
}

export const Feature = ({ imageUrl, title, description }: FeatureProps) => {
  return (
    <div className="rounded-sm">
      <p className="font-bold text-center tracking-wider text-[1.8em] text-purple sm:mb-2.5">
        {title}
      </p>
      <Image
        src={imageUrl}
        width={8000}
        height={8000}
        className="border-2 w-full h-full max-h-[500px] max-w-[800px] object-cover rounded-md mx-auto"
        alt="user-session"
      />
      <p className="mt-2.5 text-[1em] text-darkGray">{description}</p>
    </div>
  );
};
