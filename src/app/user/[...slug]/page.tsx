import { getUserByUsername } from '@/service/user';
import React from 'react';

export async function getGenerateStaticParams({ params }: { params: { slug: string[] } }) {
    const user = await getUserByUsername(params.slug[0]);
    return user;
}
export default async function page({ params }: { params: { slug: string[] } }) {
    return <div>{params.slug}</div>;
}
