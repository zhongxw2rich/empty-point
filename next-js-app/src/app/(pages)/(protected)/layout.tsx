import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(routers)/api/auth/[...nextauth]/route";

export default async function ProceptedLayout({ children }: Readonly<{children: React.ReactNode}>) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/unauthorized');
    }
    return children;
}