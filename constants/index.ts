import { Faq, Plan } from "@/types";

export const plans: Array<Plan> = [
  {
    name: "Pro",
    description: "Best for getting started understanding your users",
    benefits: [
      "Analytics",
      "Recorded user sessions",
      "2 Workspaces",
      "Covering incoming updates",
    ],
    price: 5,
    badge: "Most popular",
  },
  {
    name: "Business",
    description: "Best for leveraging your user experience",
    benefits: [
      "Analytics",
      "Recorded user sessions",
      "10 Workspaces",
      "Covering incoming updates",
      "Custom tracking events",
    ],
    price: 18,
    badge: "Best deal",
  },
];

export const faq: Array<Faq> = [
  {
    question: "How can I pay?",
    answer:
      "We offer a seamless and secure payment experience supporiting many of the world credit cards",
  },
  {
    question: "30 days money back guarantee",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days of your subscription, simply reach out to our support team, and we'll process a full refund",
  },
  {
    question: "About plans",
    answer:
      "Our pricing plans, Pro and Business, are designed to cater to your varying needs. The benefits and features included in each plan are clearly outlined on the pricing cards. It's worth noting that these are not fixed, and we constantly strive to enhance the value you receive. We may add more features to both the Pro and Business plans without any additional cost to you, ensuring you always get the best value for your investment. Stay tuned for updates and improvements that align with your business requirements.",
  },
];

//#ROUTES
export const publicRoutes = ["/", "/verification", "/pricing"];
export const allRoutes = ["/", "/verification", "/pricing"];
export const apiPrefix = "/api";
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
