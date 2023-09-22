'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import ColorButton from './ui/ColorButton';
import { signIn, signOut, useSession } from 'next-auth/react';
import Avatar from './ui/Avatar';

const menu = [
    {
        href: '/',
        icon: <HomeIcon />,
        clickedIcon: <HomeFillIcon />,
    },
    {
        href: '/new',
        icon: <NewIcon />,
        clickedIcon: <NewFillIcon />,
    },
    {
        href: '/search',
        icon: <SearchIcon />,
        clickedIcon: <SearchFillIcon />,
    },
];

export default function Navbar() {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const user = session?.user;
    return (
        <div className="flex justify-between items-center px-6">
            <Link href="/">
                <h1 className="text-3xl font-bold">Mongstagram</h1>
            </Link>
            <nav>
                <ul className="flex gap-4 items-center p-4">
                    {menu.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>{pathname === item.href ? item.clickedIcon : item.icon}</Link>
                        </li>
                    ))}
                    {user && (
                        <li>
                            <Link href={`/user/${user.username}`}>
                                <Avatar image={user.image} />
                            </Link>
                        </li>
                    )}
                    {
                        <li>
                            {session ? (
                                <ColorButton text="Sign Out" onClick={() => signOut()} />
                            ) : (
                                <ColorButton text="Sign In" onClick={() => signIn()} />
                            )}
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
}
