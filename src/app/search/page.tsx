import UserSearch from '@/components/UserSearch';
import { Metadata } from 'next';
import React from 'react';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'User Search',
    description: 'Search for users',
};

export default function SearchPage() {
    return <UserSearch />;
}
