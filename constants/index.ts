import { Plan } from "@/types";

export const plans: Array<Plan> = [
    {
        name:"Pro",
        description:"Best for getting started understanding your users",
        benefits:["Analytics", "Recorded user sessions"],
        oldPrice:10,
        newPrice:5,
        badge:"Most popular"
    },
    {
        name:"Business",
        description:"Best for leveraging your user experience",
        benefits:["Analytics", "Recorded user sessions", "Custom solutions", "Customer support"],
        oldPrice:30,
        newPrice:18,
        badge:"Best deal"
    },
]