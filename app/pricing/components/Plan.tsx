import { Plan as PlanType } from "@/types";
import { PlanBenefit } from "./PlanBenefit";
import { Badge } from "@/components/ui/badge";
import { PurchaseButton } from "./PurchaseButton";

export const Plan = ({ plan }: { plan: PlanType }) => {
  return (
    <div className="relative w-full bg-white cursor-pointer rounded-md p-2.5 shadow-[0px_0px_4px_rgb(119,109,242)] hover:shadow-[0px_0px_10px_rgb(119,109,242)] hover:scale-105 transition-transform">
      {plan.badge ? (
        <Badge className="absolute top-1 right-1 bg-darkPurple">
          {plan.badge}
        </Badge>
      ) : null}
      <p className="font-semibold text-3xl">{plan.name}</p>
      <p className="text-sm text-darkGray">{plan.description}</p>

      <div className="mt-5 space-y-2.5">
        {plan.benefits.map((benefit, idx) => (
          <PlanBenefit key={idx} benefit={benefit} />
        ))}
      </div>

      <div className="my-5">
        <p className="flex items-center gap-1">
          {" "}
          <span className="font-bold text-3xl">${plan.price}</span>{" "}
          <span className="text-sm"> /month</span>
        </p>
      </div>
      <div className="flex justify-center mt-auto">
        <PurchaseButton />
      </div>
    </div>
  );
};
