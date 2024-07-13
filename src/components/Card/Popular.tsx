import userIcon from '@/assets/imgs/user-128.svg'
import { FaRegEye } from 'react-icons/fa'
export interface PopularCardProps {
    categories: string,
    title: string
    brief: string,
    image_preview: string,
    username: string
}


function PopularCard({ item }: { item: PopularCardProps }) {
    return (
        <div className='mw-[100%] flex gap-x-[20px] lg:flex-row sm:flex-row lg:w-[47%] sm:w-[100%]'>
            <a className='img-preview sm:w-[27%] cursor-pointer w-[20%]'
                href='https://translate.google.com/' >
                <img src={item.image_preview} alt="" className='w-[100%] object-cover rounded-[4px]' />
            </a>
            <div className='flex flex-col justify-between flex-1'>
                <div>
                    <a className='' href='https://translate.google.com/'>
                        <p className="text-base font-semibold line-clamp-2 hover:text-theme_color">{item.title}</p>
                        <p className="text-sm font-medium text-gray mt-1 md:line-clamp-3 sm:line-clamp-3 line-clamp-1">{item.brief}</p>
                    </a>

                </div>

                <a className='flex mt-1'>
                    <p className="border border-theme_color-300 rounded-md cursor-pointer p-1 text-xs font-medium text-dark_gold">{item.categories}</p>
                </a>

                <div className='flex justify-between items-center'>
                    <a className='flex items-center'
                        href='https://translate.google.com/'>
                        <div className='owner w-[20px] h-[20px]'>
                            <img src={userIcon} alt="" className='w-100 rounded-full h-100' />
                        </div>
                        <p className="text-sm ml-2 cur font-semibold hover:text-theme_color">{item.username}</p>
                    </a>
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