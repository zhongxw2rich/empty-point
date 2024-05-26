"use client";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react"


export const NextAuthProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
    return  <SessionProvider><Authentication>{children}</Authentication></SessionProvider>
}

function Authentication({ children }: Readonly<{children: React.ReactNode}>) {
    const { status } = useSession();
    if (status === 'loading' || !status) {
        return <div></div>;
    }
    if (status === 'unauthenticated') {
        if (window.location.pathname !== '/sign-in') {
            if (window.location.pathname !== '/unauthorized') {
                window.location.replace('/sign-in');
                return <div></div>;
            }
        }
    }

    return children;
}