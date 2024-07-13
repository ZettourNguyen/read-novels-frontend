import { FaRegEye } from 'react-icons/fa'
import userIcon from '@/assets/imgs/user-128.svg'

export interface FeedCardProps {
    title: string
    image_preview: string,
    author: string,
    time: string,
    link: string,
    view: number
}

function NewsFeedCard({ item }: { item: FeedCardProps }) {
    return (
        <div className='mw-[100%] flex gap-x-[20px] border-[#f0f1f2] py-3 border-b-2 lg:flex-row w-[100%]   '>
            <div className='img-preview w-[8%]'>
                <a href={item.link}>
                    <img
                        src={item.image_preview}
                        alt=""
                        className='w-[100%] h-[100%] 
                    object-cover rounded-[4px] cursor-pointer
                    border-[1px] border-[#e1e1e1] border-solid'
                    />
                </a>
            </div>
            <div className='flex flex-col flex-1 '>
                <div>

                    <a className='mt-[10px]' href={item.link}>
                        <p className="hover:text-theme_color text-sm font-semibold text-gray_text cursor-pointer">{item.title}</p>
                    </a>
                </div>
                <div className='flex justify-between items-center mr-4'>

                    <div className='flex items-center gap-1 cursor-pointer '>
                        <div className='owner w-[14px] h-[14px]'>
                            <img src={userIcon} alt="" className='w-100 rounded-full h-100' />
                        </div>
        
                        <span className='hover:text-theme_color text-gray_text  text-xs'>{item.author}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegEye className="text-[#909399]" />
                        <span className='text-gray_text text-xs'>{531}{/* item.view */}</span>

                    </div>
                </div>
                <div>
                    <p className='text-xs mt-1 italic'>1 phút trước {/*item.time*/}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsFeedCard