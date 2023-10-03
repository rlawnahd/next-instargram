import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserByUsername, getUserForProfile } from '@/service/user';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { cache } from 'react';

// 이해가 안되는 부분..
// export async function getGenerateStaticParams({ params }: { params: { slug: string[] } }) {
//     const user = await getUserByUsername(params.slug[0]);
//     return user;
// }

type Props = {
    params: {
        username: string;
    };
};
const getUser = cache(async (username: string) => getUserForProfile(username));
export default async function UserPage({ params: { username } }: Props) {
    //사용자의 프로필 이미지와 정보
    //3개의 탭(posts,likes,bookmarks)
    const user = await getUser(username);

    if (!user) {
        notFound();
    }

    return (
        <section className="w-full">
            <UserProfile user={user} />
            <UserPosts user={user} />
        </section>
    );
}

export async function generateMetadata({ params: { username } }: Props): Promise<Metadata> {
    const user = await getUser(username);
    return {
        title: `${user?.name} (@${user?.username}) | Mongstagram`,
        description: `${user?.name}'s all posts on Mongstagram`,
    };
}
