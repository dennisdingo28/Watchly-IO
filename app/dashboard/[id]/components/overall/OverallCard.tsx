import { HTMLAttributes } from "react";

interface OverallCardType extends HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    amount: number;
    label: string;
}

export const OverallCard = ({icon, amount, label, className}: OverallCardType) =>{
    return (
        <div className={className}>
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="rounded-full bg-purple/20 p-4">
                    {icon}
                </div>
                <div>
                    <p className="font-bold text-center md:text-start">{String(amount)}</p>
                    <p className="text-darkGray md:text-start text-center">{label}</p>
                </div>
            </div>
        </div>
    )
}