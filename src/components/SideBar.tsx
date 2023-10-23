'use client';
import React from 'react';
import Avatar from './ui/Avatar';
import { AuthUser } from '@/model/user';
import useBearStore from '@/utils/store';

type Props = {
    user: AuthUser;
};
export default function SideBar({ user: { name, username, image } }: Props) {
    const { bears, upBear, bearReset } = useBearStore((state) => ({
        bears: state.bears,
        upBear: state.increase,
        bearReset: state.bearReset,
    }));
    return (
        <>
            <div className="flex items-center">
                {image && <Avatar image={image} />}
                <div className="ml-4">
                    <p className="font-bold">{username}</p>
                    <p className="text-lg text-neutral-500 leading-4">{name}</p>
                </div>
            </div>
            <p className="text-sm text-neutral-500 mt-8">
                About , Help , Press , API , Jobs , Privacy , Terms , Locations , Top Accounts , Hashtags , Language
            </p>
            <p className="font-bold text-sm mt-8 text-neutral-500">@CopyRight MONGSTAGRAM from METAL</p>
            <div className="card">
                <center>
                    <h2>count is {bears}</h2>
                </center>
                <center>
                    <button
                        type="button"
                        onClick={() => {
                            upBear(100);
                        }}
                    >
                        증가
                    </button>
                    <button
                        onClick={() => {
                            bearReset();
                        }}
                    >
                        리셋
                    </button>
                </center>
            </div>
        </>
    );
}
