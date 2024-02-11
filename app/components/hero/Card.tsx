import { cn } from "@/lib/utils";
import { FC } from "react";

interface CardProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

export const Card: FC<CardProps> = ({ title, color, icon, description }) => {
  return (
    <div className="p-2.5 bg-lightGray rounded-md flex gap-2.5">
      <div
        className={cn(
          "self-start flex items-center justify-center rounded-full p-2.5 text-white",
          `${color}`
        )}
      >
        {icon}
      </div>
      <div className=" max-w-[250px]">
        <h1 className="text-xl font-medium">{title}</h1>
        <span className="text-darkGray">{description}</span>
      </div>
    </div>
  );
};
