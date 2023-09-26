'use client';
import React, { FormEvent, useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import { ProfileUser } from '@/model/user';
import UserCard from './UserCard';
import useDebounce from '@/hooks/debounce';

export default function UserSearch() {
    const [keyword, setKeyword] = useState('김주몽');
    const debouncedKeyword = useDebounce(keyword, 500);
    const { data: users, isLoading, error } = useSWR<ProfileUser[]>(`/api/search/${debouncedKeyword}`);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('submit');
    };
    return (
        <section className="w-full max-w-2xl my-4 flex flex-col items-center">
            <form className="w-full mb-4" onSubmit={onSubmit}>
                <input
                    className="w-full text-xl p-3 outline-none border border-gray-400"
                    type="text"
                    autoFocus
                    placeholder="Search for a username or name"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </form>
            {error && <p>무언가가 잘못 되었음 ㅠ</p>}
            {isLoading && <GridSpinner />}
            {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
            <ul className="w-full p-4 ">
                {users &&
                    users.map((user) => (
                        <li key={user.username}>
                            <UserCard user={user} />
                        </li>
                    ))}
            </ul>
        </section>
    );
}
