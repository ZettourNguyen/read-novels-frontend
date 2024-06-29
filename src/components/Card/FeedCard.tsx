import React from 'react'
import { FaRegEye } from 'react-icons/fa'
export interface FeedCardProps {
    categories: string,
    title: string
    brief: string,
    image_preview: string,
    avatar: string
}

function NewsFeedCard({ item }: { item: FeedCardProps }) {
    return (
        <div className='mw-[100%] flex gap-x-[20px] lg:flex-row w-[100%] mb-10 xs:flex-col'>
            <div className='img-preview xs:w-full lg:w-[35%] h-[100%]'>
                <img 
                    src={item.image_preview} 
                    alt="" 
                    className='w-[100%] h-[100%] 
                    object-cover rounded-[4px] cursor-pointer
                    border-[1px] border-[#e1e1e1] border-solid' 
                />
            </div>
            <div className='flex flex-col justify-between flex-1'>
                <div>
                    <p 
                        className="text-xs font-normal text-gray_text cursor-pointer hover:font-semibold">
                            {item.categories}
                        </p>
                    <div className='mt-[10px]'>
                        <p className="text-lg font-semibold text-gray_text cursor-pointer">{item.title}</p>
                        <p className="text-sm font-normal text-gray_text mt-1">{item.brief}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center'>
                        <div className='owner w-[40px] h-[40px]'>
                            <img src={item.avatar} alt="" className='w-100 rounded-full h-100' />
                        </div>
                        <p className="text-sm ml-2 font-semibold">Limitless</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegEye className="text-[#909399]" />
                        <span className='text-gray_text text-xs'>531</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeedCard