import React from 'react';
import Avatar from './ui/Avatar';
import { User } from '@/model/user';

type Props = {
    user: User;
};
export default function SideBar({ user: { name, username, image } }: Props) {
    return (
        <>
            <div>
                {image && <Avatar image={image} />}
                <p>{username}</p>
                <p>{name}</p>
            </div>
            <p>About , Help , Press , API , Jobs , Privacy , Terms , Locations , Top Accounts , Hashtags , Language</p>
            <p>@CopyRight MONGSTAGRAM from METAL</p>
        </>
    );
}
