import userIcon from '@/assets/imgs/user-128.svg'
import { ICardNovelsI } from '@/hooks/useNovel'
import { Link } from 'react-router-dom'



function NovelCard({ item }: { item: ICardNovelsI }) {



    return (
        <div className='mw-[100%] flex gap-x-[20px] lg:flex-row sm:flex-row lg:w-[47%] sm:w-[100%]'>
            <Link to={`novel/${item.id}`} className='img-preview sm:w-[27%] cursor-pointer w-[20%]'>
                <img src={item.image} alt="" className='w-[100%] object-cover rounded-[4px]' />
            </Link>
            <div className='flex flex-col justify-between flex-1'>
                <div>
                    <Link to={`novel/${item.id}`}>
                        <p className="text-base font-semibold line-clamp-2 hover:text-theme_color">{item.title}</p>
                        <p className="text-sm font-medium text-gray mt-1 
                        md:line-clamp-3 sm:line-clamp-3 line-clamp-1">{item.description}</p>
                    </Link>

                </div>

                <Link to={`category/${item.categoryId}`} className='flex mt-1'>
                    <p className="border border-theme_color-300 rounded-md cursor-pointer 
                    p-1 text-xs font-medium text-dark_gold">{item.categoryName}</p>
                </Link>

                {/* poster */}
                <div className='flex justify-between items-center'>
                    <Link to={`user/${item.posterId}`} className='flex items-center'
                    >
                        <div className='owner w-[20px] h-[20px]'>
                            <img src={userIcon} alt="" className='w-100 rounded-full h-100' />
                        </div>
                        <p className="text-sm ml-2 cur font-semibold hover:text-theme_color">{item.posterName}</p>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default NovelCard