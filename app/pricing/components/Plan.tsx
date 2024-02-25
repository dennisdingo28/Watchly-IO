import { Plan as PlanType } from "@/types"
import { PlanBenefit } from "./PlanBenefit"
import { Badge } from "@/components/ui/badge"

export const Plan = ({plan}:{plan: PlanType}) =>{
    return (
        <div className="relative w-full bg-white cursor-pointer rounded-md p-2 shadow-[0px_0px_4px_rgb(119,109,242)]">
            {plan.badge ? <Badge className="absolute top-1 right-1 bg-darkPurple">{plan.badge}</Badge> : null}
            <p className="font-semibold text-2xl">{plan.name}</p>
            <p className="text-sm text-darkGray">{plan.description}</p>

            <div className="mt-4 space-y-2">
                {plan.benefits.map((benefit, idx)=>(
                    <PlanBenefit key={idx} benefit={benefit}/>
                ))}
            </div>

            <div className="mt-5">
                <p className="flex items-center gap-1"> <span className="font-bold text-3xl">${plan.newPrice}</span> <span className="text-sm"> /month</span></p>
            </div>
        </div>
    )
}