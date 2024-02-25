//Plan types
export type Plan = {
    name: string;
    description: string;
    benefits: Array<string>;
    oldPrice: number;
    newPrice: number;
    badge?: string;
}