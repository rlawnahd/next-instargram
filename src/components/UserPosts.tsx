'use client';

type Props = {
    user: ProfileUser;
};

import { ProfileUser } from '@/model/user';
import React, { useState } from 'react';
import useSWR from 'swr';
import PostIcon from './ui/icons/PostIcon';
import BookMarkIcon from './ui/icons/BookMarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import PostGrid from './PostGrid';
const tabs = [
    {
        type: 'posts',
        icon: <PostIcon />,
    },
    {
        type: 'saved',
        icon: <BookMarkIcon className="w-3 h-3" />,
    },
    {
        type: 'liked',
        icon: <HeartIcon className="w-3 h-3" />,
    },
];
export default function UserPosts({ user: { username } }: Props) {
    const [query, setQuery] = useState(tabs[0].type);
    return (
        <section>
            <ul className="flex justify-center uppercase">
                {tabs.map(({ type, icon }) => (
                    <li
                        className={`flex items-center mx-12 p-4 cursor-pointer border-black ${
                            type === query && 'font-bold border-t'
                        }`}
                        key={type}
                        onClick={() => setQuery(type)}
                    >
                        <button className="scale-150 md:scale-100">{icon}</button>
                        <span className="hidden md:inline">{type}</span>
                    </li>
                ))}
            </ul>
            <PostGrid username={username} query={query} />
        </section>
    );
}
