import { SessionProvider as AuthSession } from "next-auth/react";
import { auth } from "@/auth";

export async function SessionProvider({children}: {children: React.ReactNode}) {
    
    const session = await auth();
    return (
        <AuthSession session={session}>
            {children}
        </AuthSession>
    )
}