import { Faq, Plan } from "@/types";

export const plans: Array<Plan> = [
    {
        name:"Pro",
        description:"Best for getting started understanding your users",
        benefits:["Analytics", "Recorded user sessions", "User suppport", "Mail support"],
        oldPrice:10,
        newPrice:5,
        badge:"Most popular"
    },
    {
        name:"Business",
        description:"Best for leveraging your user experience",
        benefits:["Analytics", "Recorded user sessions", "User suppport", "Custom solutions"],
        oldPrice:30,
        newPrice:18,
        badge:"Best deal"
    },
];

