import { Workspace, WorkspaceUser } from "@prisma/client";

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

//Workspace
export type WorkspaceWithUsers = Workspace & {workspaceUsers: WorkspaceUser[]};
export type WorkspaceCountry = {
    country: string;
    countryCode: string;
    visitors: number;
}