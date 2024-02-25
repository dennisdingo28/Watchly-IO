import { CheckCircle } from "lucide-react"

export const PlanBenefit = ({benefit}: {benefit: string}) =>{
    return (
        <div className="flex items-center gap-2">
            <CheckCircle className="text-purple w-4 h-4"/>
            <p className="text-sm font-xs">{benefit}</p>
        </div>
    )
}