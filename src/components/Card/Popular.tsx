import React from 'react'
import { FaRegEye } from 'react-icons/fa'
export interface PopularCardProps {
    categories: string,
    title: string
    brief: string,
    image_preview: string,
    avatar: string
}

function PopularCard({ item }: { item: PopularCardProps }) {
    return (
        <div className='mw-[100%] flex gap-x-[20px] lg:flex-row sm:flex-col lg:w-[47%] sm:w-[100%]'>
            <div className='img-preview w-[35%]'>
                <img src={item.image_preview} alt="" className='w-[100%] object-cover rounded-[4px]' />
            </div>
            <div className='flex flex-col justify-between flex-1'>
                <div>
                    <p className="text-xs font-light text-gray_text">{item.categories}</p>
                    <div className='mt-[10px]'>
                        <p className="text-base font-semibold text-gray_text">{item.title}</p>
                        <p className="text-xs font-light text-gray_text mt-1">{item.brief}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='owner w-[25px] h-[25px]'>
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

export default PopularCard