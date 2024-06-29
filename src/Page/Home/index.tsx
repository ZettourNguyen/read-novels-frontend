import Banner from '@/components/Banner'
import PopularCard, { PopularCardProps } from '@/components/Card/Popular'
import React from 'react'
import Banner2 from '@/assets/imgs/banner-2.png'
import Popular2 from '@/components/Card/Popular2'
import NewFeed from '@/components/Home/NewFeed'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const popularList: Array<PopularCardProps> = [
    {
        image_preview: 'https://images.spiderum.com/sp-thumbnails/f0628740338511eebb663dbe38264265.jpg',
        title: 'Nhiếp Ảnh - Vì Cuộc Sống Đẹp Hơn Bạn Nghĩ',
        brief: 'Mình học chụp ảnh từ năm 23 tuổi. Khi đó không phải vì mình',
        categories: 'QUAN ĐIỂM - TRANH LUẬN',
        avatar: 'https://images.spiderum.com/sp-xs-avatar/ea52570010d411eeaa1b1fd1b5ecd0d3.png'
    },
    {
        image_preview: 'https://images.spiderum.com/sp-thumbnails/ad9ae4e0336f11ee8d41e3678c0b7dd6.png',
        title: '[Tập hiểu sâu]: Vì sao Bạn luôn KHÔNG ỔN?',
        brief: 'I’m OK - You’re OK, một tựa sách dành cho những ai luôn thấy bản thân Không-Ổn. Đặc biệt, với những ai đã trải qua...',
        categories: 'QUAN ĐIỂM - TRANH LUẬN',
        avatar: 'https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg'
    },
    {
        image_preview: 'https://images.spiderum.com/sp-thumbnails/93990d9033c111ee87a15707adbe74e2.jpg',
        title: '[1W1C] Bạn tôi làm Kế toán',
        brief: 'Lời mở đầu ...',
        categories: 'NGƯỜI TRONG MUÔN NGHỀ',
        avatar: 'https://images.spiderum.com/sp-xs-avatar/77fed73025bd11ed9d7ad9f089e43586.png'
    },
    {
        image_preview: 'https://images.spiderum.com/sp-thumbnails/c2f86c30334311ee9573f74454a84ba9.png',
        title: 'Cửa hàng không tiện lợi',
        brief: 'I’m OK - You’re OK, một tựa sách dành cho những ai luôn thấy bản thân Không-Ổn. Đặc biệt, với những ai đã trải qua...',
        categories: 'LIFE STYLE',
        avatar: 'https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg'
    }
]
function HomePage() {
  const auth = useSelector((state: RootState) => state.auth)


    return (
        <div>
            {auth.isLogin ? <div /> : <Banner />}
            <div className="container">
                <div>
                    <p className="text-base font-semibold py-4">PHỔ BIẾN TRÊN SPIDERUM</p>
                    <div>
                        <div className="flex gap-10 flex-wrap">
                            {popularList.map((item : PopularCardProps, index : number) =>(
                                <PopularCard item={item} key={index.toString()}/>
                            ))}
                        </div>
                    </div>
                    <div className='py-10'>
                        <img 
                            src={Banner2} 
                            alt="" 
                            className='w-100 h-fit object-cover'
                        />
                    </div>
                    <div>
                        <div className='flex py-4'>
                            <p className="text-base font-semibold  border-r-[1px] border-r-solid border-r-[#e1e1e1] pe-2">
                                NỔI BẬT TRONG THÁNG
                            </p>
                            <p className="text-base text-gray_text ml-2 cursor-pointer">Xem TOP 10 bài viết</p>
                        </div>

                        <div className="flex justify-between flex-wrap">
                            {
                                [0,1,2,3].map(item => (
                                    <Popular2 key={item.toString()} />
                                ))
                            }
                        </div>
                    </div>
                    <NewFeed />
                </div>
            </div>
        </div>
    )
}

export default HomePage