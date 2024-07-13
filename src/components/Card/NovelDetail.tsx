import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { BsStar } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { BsFlag } from "react-icons/bs";


export default function NoverDetailsCard() {
    return (
        <div>
            <div className='flex'>
                <div>
                    <img className='w-44 object-cover rounded-[4px]'
                        src="https://static.cdnno.com/poster/ta-la-tien-1/300.jpg?1719887930" alt="novel title" />
                    <Link to={"/"}>
                        <div className='flex justify-center items-center cursor-pointer gap-2 my-4'>
                            <BsFlag className='text-gray' size={25} />
                            <span className='text-gray'>Báo cáo</span>
                        </div>
                    </Link>
                </div>
                <div className='flex-col mt-1 gap-6 ml-4'>
                    <div className='font-semibold text-lg'>Thiên Mệnh Phản Phái: Ta, Cự Tuyệt Từ Hôn!</div>
                    <div className='text-gray'>Vạn Vô Nhất Nhất</div>
                    <div className='flex mt-3 gap-6 '>
                        <div className='flex  border rounded-md border-gold bg-gold text-white py-1 px-2'>
                            <FaBookOpen className='self-center mr-2' />
                            Đọc truyện
                        </div>
                        <div className='flex  border rounded-md border-gray_text  py-1 px-2'>
                            <BsBookmark className='self-center mr-2' />
                            Đánh dấu
                        </div>
                        <div className='flex  border rounded-md border-gray_text  py-1 px-2'>
                            <BsListUl className='self-center mr-2' />
                            Mục lục
                        </div>
                        <div className='flex  border rounded-md border-gray_text  py-1 px-2'>
                            <BsStar className='self-center mr-2' />
                            Đánh giá
                        </div>
                        <div className='flex  border rounded-md border-gray_text  py-1 px-2'>
                            <BsChatSquareText className='self-center mr-2' />
                            Thảo luận
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='border-gray border-r-[1px] pr-4'>
                            <div className=' text-center font-bold'>{6}</div>
                            <div>Chương/tuần</div>
                        </div>
                        <div className='border-gray border-r-[1px] px-4'>
                            <div className='text-center font-bold'>{1455169}</div>
                            <div>Lượt đọc</div>
                        </div>
                        <div className='border-gray border-r-[1px] px-4'>
                            <div className=' text-center font-bold'>{6}</div>
                            <div>Đề cử</div>
                        </div>
                        <div className=' px-4'>
                            <div className=' text-center font-bold'>{6}</div>
                            <div>Cất giữ</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mt-6 border rounded-md border-gold text-gold text-sm p-1 mr-4'>State</div>
                        <div className='mt-6 border rounded-md border-red text-red text-sm p-1 mr-4'>Category</div>

                        <div className='mt-6 border rounded-md border-[#047857] text-[#047857] text-sm p-1 mr-4'>Tiên hiệp</div>
                        <div className='mt-6 border rounded-md border-[#047857] text-[#047857] text-sm p-1 mr-4'>Huyễn tưởng</div>
                        <div className='mt-6 border rounded-md border-[#047857] text-[#047857] text-sm p-1 mr-4'>Vô địch</div>
                        <div className='mt-6 border rounded-md border-[#047857] text-[#047857] text-sm p-1 mr-4'>AnotherTag</div>
                    </div>
                </div>
            </div>
            <div className='bg-[#E4DECE] text-sm px-4 py-1'>
                GIỚI THIỆU
            </div>
            <div className='border-x-[2px] border-x-gray_light p-3 '>
            Nơi này có cầm radio dự báo thời tiết Vân Thần, 
            có tay cầm điện côn Quỷ Thần. Có cõng súng phun lửa Hỏa Thần, 
            cầm súng ngắn xem như Chưởng Tâm Lôi đạo môn chân nhân, 
            có trông coi đập lớn Trường Giang Long Vương.
            </div>
            
            
        </div>
    )
}