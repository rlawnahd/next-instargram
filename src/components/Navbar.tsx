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
    const pathname = usePathname();
    return (
        <div className="flex justify-between items-center px-6">
            <Link href="/">
                <h1 className="text-3xl font-bold">Instantgram</h1>
            </Link>
            <nav>
                <ul className="flex gap-4 items-center p-4">
                    {menu.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>{pathname === item.href ? item.clickedIcon : item.icon}</Link>
                        </li>
                    ))}
                    <ColorButton text="Sign in" onClick={() => {}} />
                </ul>
            </nav>
        </div>
    );
}
