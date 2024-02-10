"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ReactQueryProps {
    children: React.ReactNode;
}

export const ReactQuery = ({children}: ReactQueryProps) =>{
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}