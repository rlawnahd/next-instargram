/* eslint-disable @next/next/no-img-element */
import React from 'react';
type AvatarSize = 'small' | 'mideum' | 'large';
type Props = {
    image?: string | null;
    size?: AvatarSize;
    highlight?: boolean;
};
export default function Avatar({ image, size = 'large', highlight = false }: Props) {
    return (
        <div className={getContainerStyle(size, highlight)}>
            <img
                className={`bg-white object-cover rounded-full ${getImageSizeStyle(size)}`}
                alt="user profile"
                src={image ?? undefined}
                referrerPolicy="no-referrer"
            />
        </div>
    );
}
function getContainerSize(size: AvatarSize): string {
    switch (size) {
        case 'small':
            return 'w-9 h-9';
        case 'mideum':
            return 'w-11 h-11';
        case 'large':
            return 'w-[68px] h-[68px]';
    }
}
function getContainerStyle(size: AvatarSize, highlight: boolean): string {
    const baseStyle = 'rounded-full flex justify-center items-center';
    const hightlightStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
    const sizeStyle = getContainerSize(size);
    return `${baseStyle} ${hightlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: AvatarSize): string {
    switch (size) {
        case 'small':
            return 'w-[34px] h-[34px] p-[0.05rem]';
        case 'mideum':
            return 'w-[42px] h-[42px] p-[0.05rem]';
        case 'large':
            return 'w-16 h-16  p-[0.1rem]';
    }
}
