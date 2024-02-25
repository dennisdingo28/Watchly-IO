//Plan types
export type Plan = {
    name: string;
    description: string;
    benefits: Array<string>;
    price: number;
    badge?: string;
}

//Faq
export type Faq = {
    question: string;
    answer: string;
}