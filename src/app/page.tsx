import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { User } from '@/model/user';

export default async function HomePage() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) {
        redirect('/auth/signin');
    }
    return (
        <section>
            <FollowingBar />
            <PostList />
            <SideBar user={user as User} />
        </section>
    );
}
