import NewPost from '@/components/NewPost';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
    title: 'New Post',
    description: 'Create a new post',
};

export default async function NewPostPage() {
    const session = await getServerSession();
    if (!session?.user) {
        redirect('/auth/signin');
    }
    return <NewPost user={session.user} />;
}
