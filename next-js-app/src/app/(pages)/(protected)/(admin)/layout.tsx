import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { find } from '@/serverConponents/EmptyPointUser';

export default async function ProceptedLayout({ children }: Readonly<{children: React.ReactNode}>) {
    const session = await getServerSession();
    const email = session?.user?.email;
    if (typeof email === 'string') {
        const user = await find(email);
        if (user?.role === 'ADMIN') {
            return children;
        }
    }
    redirect('/unauthorized');
}