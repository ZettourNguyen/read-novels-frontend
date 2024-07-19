
import { Link } from 'react-router-dom'
import { BsStar } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { BsFlag } from "react-icons/bs";
import { useNovelDetails } from '@/hooks/useNovel';
import EscapedNewLineToLineBreakTag from '../Another/escapedNewLineToLineBreakTag';
import { defaultImage } from '@/Page/uploader/newNovel';

export interface NoverDetailsCardProps {
    novelId: number;
}

export default function NoverDetailsCard({ novelId }: NoverDetailsCardProps) {
    const { novelDetails, loading, error } = useNovelDetails(novelId)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const imageCover = novelDetails?.image || defaultImage

    return (
        <div>
            <div className='flex'>
                <div>
                    <img className='w-44 object-cover rounded-[4px]'
                        src={imageCover} alt="novel title" />
                    <Link to={"/"}>
                        <div className='flex justify-center items-center cursor-pointer gap-2 my-4'>
                            <BsFlag className='text-gray' size={25} />
                            <span className='text-gray'>Báo cáo</span>
                        </div>
                    </Link>
                </div>
                <div className='flex-col mt-1 gap-6 ml-4'>
                    <div className='font-semibold text-lg'>{novelDetails?.title}</div>
                    <Link to={`/author/${novelDetails?.authorId}`}>
                        <div className='text-gray'>{novelDetails?.authorName}</div>
                    </Link>
                    <div className='flex mt-3 gap-6 '>
                        <Link to={`${novelDetails?.chapter0}`}>
                            <div className='flex  border rounded-md border-gold bg-gold text-white py-1 px-2'>
                                <FaBookOpen className='self-center mr-2' />
                                Đọc truyện
                            </div>
                        </Link>

                        <div className='flex  border rounded-md border-gray_text  py-1 px-2'>
                            <BsBookmark className='self-center mr-2' />
                            Đánh dấu
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
                            <div className=' text-center font-bold'>{novelDetails?.countChaptersPublishedInLast7Days}</div>
                            <div>Chương/tuần</div>
                        </div>
                        <div className='border-gray border-r-[1px] px-4'>
                            <div className='text-center font-bold'>{novelDetails?.views}</div>
                            <div>Lượt đọc</div>
                        </div>
                        <div className='border-gray border-r-[1px] px-4'>
                            <div className=' text-center font-bold'>{novelDetails?.numberOfNominations}</div>
                            <div>Đề cử</div>
                        </div>
                        <div className=' px-4'>
                            <div className=' text-center font-bold'>{novelDetails?.numberSavedBookmark}</div>
                            <div>Cất giữ</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <a href={`list/${novelDetails?.state}`}>
                        <div className='mt-6 border rounded-md 
                        border-gold text-gold text-sm p-1 mr-4'>{novelDetails?.state}</div>
                        </a>

                        <a href={`list/${novelDetails?.categoryId}`}>
                        <div className='mt-6 border rounded-md 
                        border-red text-red text-sm p-1 mr-4'>{novelDetails?.categoryName}</div>
                        </a>
                        {novelDetails?.tags.map(tag => (
                            <a href ={`list/${tag.id}`}>
                                <div key={tag.id} className='mt-6 border rounded-md border-[#047857] text-[#047857] text-sm p-1 mr-4'>
                                {tag.name}
                            </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#E4DECE] text-sm px-4 py-1'>
                GIỚI THIỆU
            </div>
            <div className='border-x-[2px] border-x-gray_light p-3 '>
            <EscapedNewLineToLineBreakTag string={novelDetails?.description|| ''} />
            </div>


        </div>
    )
}