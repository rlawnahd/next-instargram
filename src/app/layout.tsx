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
            <body className="w-full overflow-auto bg-neutral-50">
                <AuthContext>
                    <header className="sticky top-0 bg-white z-10 border-b">
                        <div className="max-w-screen-xl mx-auto">
                            <Navbar />
                        </div>
                    </header>
                    <main className="w-full flex justify-center ">
                        <SWRContfigContext>{children}</SWRContfigContext>
                    </main>
                </AuthContext>
                <div id="portal" />
            </body>
        </html>
    );
}
