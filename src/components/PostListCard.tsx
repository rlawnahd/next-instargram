'use client';
import { SimplePost } from '@/model/post';
import React, { useState } from 'react';
import Avatar from './ui/Avatar';
import Image from 'next/image';
import HeartIcon from './ui/icons/HeartIcon';
import BookMarkIcon from './ui/icons/BookMarkIcon';
import { parseDate } from '@/utils/date';
import SmileIcon from './ui/icons/SmileIcon';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';
type Props = {
    post: SimplePost;
    priority?: boolean;
};
export default function PostListCard({ post, priority = false }: Props) {
    const { userImage, username, image, createdAt, likes, text } = post;
    const [openModal, setOpenModal] = useState(false);
    const example = -1;
    console.log(example ?? 0);
    return (
        <article className="rounded-lg shadow-md border border-gray-200">
            <PostUserAvatar image={userImage} username={username} />
            <Image
                className="w-full object-cover aspect-square"
                src={image}
                alt={`photo by ${username}`}
                width={500}
                height={500}
                priority={priority}
                onClick={() => setOpenModal(true)}
            />
            <ActionBar likes={likes} username={username} text={text} createdAt={createdAt} />
            <CommentForm />
            {openModal && (
                <ModalPortal>
                    <PostModal onClose={() => setOpenModal(false)}>
                        <PostDetail post={post} />
                    </PostModal>
                </ModalPortal>
            )}
        </article>
    );
}
