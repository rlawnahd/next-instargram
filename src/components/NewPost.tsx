import { AuthUser } from '@/model/user';
import React from 'react';
import PostUserAvatar from './PostUserAvatar';
type Props = {
    user: AuthUser;
};
export default function NewPost({ user: { image, username } }: Props) {
    return (
        <section>
            <PostUserAvatar username={username} image={image ?? ''} />
        </section>
    );
}
