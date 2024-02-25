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

export const faq: Array<Faq> = [
    {
        question:"How can I pay?",
        answer:"We offer a seamless and secure payment experience through Stripe, a trusted and widely-used payment gateway"
    },
];

//#ROUTES
export const publicRoutes = ["/", "/verification", "/pricing"];
export const apiAuthPrefix = "/api/auth"
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";