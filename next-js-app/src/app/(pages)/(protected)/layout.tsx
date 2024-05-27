import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";

export default async function ProceptedLayout({ children }: Readonly<{children: React.ReactNode}>) {
    const session = await getServerSession();
    if (!session) {
        redirect('/unauthorized');
    }
    return children;
}