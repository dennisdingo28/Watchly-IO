//Plan types
export type Plan = {
    name: string;
    description: string;
    benefits: Array<string>;
    oldPrice: number;
    newPrice: number;
    badge?: string;
}

//Faq
export type Faq = {
    question: string;
    answer: string;
}