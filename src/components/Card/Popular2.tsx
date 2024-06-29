import React from 'react'
import { BsBookmark } from 'react-icons/bs'

interface Props {
    className?: string
}

const post = {
    image_preview: 'https://images.spiderum.com/sp-thumbnails/f0628740338511eebb663dbe38264265.jpg',
    title: 'Nhiếp Ảnh - Vì Cuộc Sống Đẹp Hơn Bạn Nghĩ',
    avatar: 'https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg'
}

function Popular2({ className }: Props) {
    return (
        <div className={`${className} sm:w-full md:w-[32%] lg:w-[24%]`}>
            <img src={post.image_preview} alt="" className='w-full object-cover h-fit rounded-[4px]' />
            <div className="flex justify-between items-center py-4">
                <p className='text-gray_text text-xs'>8 phút đọc</p>
                <BsBookmark className="text-gray cursor-pointer"/>
            </div>
            <p className="text-lg font-semibold">
                {post.title}
            </p>
            <div className='flex items-center py-4'>
                <div className='flex items-center'>
                    <div className='owner w-[30px] h-[30px]'>
                        <img src={post.avatar} alt="" className='w-100 rounded-full h-100' />
                    </div>
                    <p className="text-sm ml-2 font-semibold">Limitless</p>
                </div>
                <div className='flex items-center ml-2 relative top-[1px]'>
                    <span className='text-gray_text text-xs'>5 Th8</span>
                </div>
            </div>
        </div>
    )
}

export default Popular2