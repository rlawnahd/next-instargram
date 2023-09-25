import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import AuthContext from '@/context/AuthContext';
import SWRContfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mongstagram',
    description: 'Mongstagram',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={openSans.className}>
            <body className="w-full max-w-screen-xl overflow-auto mx-auto">
                <AuthContext>
                    <header className="sticky top-0 bg-white z-10 border-b">
                        <Navbar />
                    </header>
                    <main className="w-full flex justify-center bg-neutral-50 min-h-full">
                        <SWRContfigContext>{children}</SWRContfigContext>
                    </main>
                </AuthContext>
            </body>
        </html>
    );
}
