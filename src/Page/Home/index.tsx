import Banner from '@/components/Banner'
import PopularCard, { PopularCardProps } from '@/components/Card/Popular'

import NewFeed from '@/components/Home/NewFeed'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import HistoryCard from '@/components/Card/HistoryCard'

const popularList: Array<PopularCardProps> = [
    {
        image_preview: 'https://static.cdnno.com/poster/max-cap-ngoan-nhan/300.jpg?1696093232',
        title: 'Max Cấp Ngoan Nhân',
        brief: ' 【 xuyên qua thành Nữ Đế bên người nhân vật phản diện về sau, ta quyết định đi đến quyền lực đỉnh phong 】 Ăn cơm nhà nước Triệu Đô ... ',
        categories: 'Tiên Hiệp',
        username: "No name"
    },
    {
        image_preview: 'https://static.cdnno.com/poster/tai-sinh-con-duong-cuong-dai/300.jpg?1713525762',
        title: 'Game Online: Người Chơi Trọng Sinh',
        brief: ' Trần Trường, một người chơi không thể bình thường hơn bị g·iết bởi kẻ khác mạnh hơn, chỉ là, hắn sau đó tái sinh trở về quá khứ, bước trên ... ',
        categories: 'Light Novel',
        username: "No name"

    },
    {
        image_preview: 'https://static.cdnno.com/poster/toan-dan-tro-choi-tu-zombie-tan-the-bat-dau-treo-may/300.jpg?1628597594',
        title: 'Toàn Dân Trò Chơi: Từ Zombie Tận Thế Bắt Đầu Treo Máy',
        brief: '✨ Vinh danh minh chủ ✨ Cửu Điệp ✨ Thế giới song song, Phương Hằng xuyên qua tại một cái vừa mới t·ự s·át quỷ xui xẻo trên thân. Hả? Cái gì? Thế giới này tất cả nhân loại đều bị ép gia nhập trò chơi? Kinh! Không chơi đùa liền sẽ bị xóa bỏ? Khá lắm, cái này t·ự s·át quỷ xui xẻo lại là trước game thủ chuyên nghiệp? Hắn lại có cấp bậc cao nhất cấp S kĩ năng thiên phú - Zombie phân thân? Cấp S thiên phú thế mà còn thăng cấp! Ta Zombie phân thân có thể treo máy? 【 tại ngươi offline trong khoảng thời gian này, ngươi Zombie phân thân bầy chế tác hoàn thành chất gỗ đốn củi búa *720; ngươi thu hoạch được cơ sở chế tác điểm kinh nghiệm: 1921 】. 【 tại ngươi offline trong khoảng thời gian này, ngươi Zombie phân thân bầy chặt cây 27821 cái cây; ngươi thu hoạch được vật liệu gỗ *128973, ngươi thu hoạch được kỹ năng - cơ sở chặt cây điểm kinh nghiệm: 2171921 】. Làm các người chơi còn tại Zombie tận thế bên trong gian nan cầu sinh thời điểm, Phương Hằng Zombie phân thân nhóm đã bắt đầu chuyển không toàn bộ rừng rậm. Phương Hằng: Cái trò chơi này có chút ý tứ. p/s: Phương nhổ lông, triết lý cuộc sống, lột sạch, nhổ sạch, quét sạch :))',
        categories: 'Võng Du',
        username: "No name"

    },
    {
        image_preview: 'https://static.cdnno.com/poster/max-cap-ngoan-nhan/300.jpg?1696093232',
        title: 'Ngộ Tính Nghịch Thiên: Ta Tại Chư Thiên Sáng Pháp Truyền Đạo',
        brief: 'I’m OK - You’re OK, một tựa sách dành cho những ai luôn thấy bản thân Không-Ổn. Đặc biệt, với những ai đã trải qua...',
        categories: 'LIFE STYLE',
        username: "No name"

    },
    {
        image_preview: 'https://static.cdnno.com/poster/tai-sinh-con-duong-cuong-dai/300.jpg?1713525762',
        title: 'Game Online: Người Chơi Trọng Sinh',
        brief: ' Trần Trường, một người chơi không thể bình thường hơn bị g·iết bởi kẻ khác mạnh hơn, chỉ là, hắn sau đó tái sinh trở về quá khứ, bước trên ... ',
        categories: 'Light Novel',
        username: "No name"

    },
    {
        image_preview: 'https://static.cdnno.com/poster/toan-dan-tro-choi-tu-zombie-tan-the-bat-dau-treo-may/300.jpg?1628597594',
        title: 'Toàn Dân Trò Chơi: Từ Zombie Tận Thế Bắt Đầu Treo Máy',
        brief: '✨ Vinh danh minh chủ ✨ Cửu Điệp ✨ Thế giới song song, Phương Hằng xuyên qua tại một cái vừa mới t·ự s·át quỷ xui xẻo trên thân. Hả? Cái gì? Thế giới này tất cả nhân loại đều bị ép gia nhập trò chơi? Kinh! Không chơi đùa liền sẽ bị xóa bỏ? Khá lắm, cái này t·ự s·át quỷ xui xẻo lại là trước game thủ chuyên nghiệp? Hắn lại có cấp bậc cao nhất cấp S kĩ năng thiên phú - Zombie phân thân? Cấp S thiên phú thế mà còn thăng cấp! Ta Zombie phân thân có thể treo máy? 【 tại ngươi offline trong khoảng thời gian này, ngươi Zombie phân thân bầy chế tác hoàn thành chất gỗ đốn củi búa *720; ngươi thu hoạch được cơ sở chế tác điểm kinh nghiệm: 1921 】. 【 tại ngươi offline trong khoảng thời gian này, ngươi Zombie phân thân bầy chặt cây 27821 cái cây; ngươi thu hoạch được vật liệu gỗ *128973, ngươi thu hoạch được kỹ năng - cơ sở chặt cây điểm kinh nghiệm: 2171921 】. Làm các người chơi còn tại Zombie tận thế bên trong gian nan cầu sinh thời điểm, Phương Hằng Zombie phân thân nhóm đã bắt đầu chuyển không toàn bộ rừng rậm. Phương Hằng: Cái trò chơi này có chút ý tứ. p/s: Phương nhổ lông, triết lý cuộc sống, lột sạch, nhổ sạch, quét sạch :))',
        categories: 'Võng Du',
        username: "No name"

    }
]
function HomePage() {
    const auth = useSelector((state: RootState) => state.auth)


    return (
        <div className='bg-[ #FCFCFA]'>
            {/* {auth.isLogin ? <div /> : <Banner />} */}
            <Banner/>
            <div className='md:container'>
                <p className="text-base text-theme_color font-semibold py-4 mx-2">TRUYỆN VỪA ĐỌC</p>
                <HistoryCard />
                <div>
                    <p className="text-base text-theme_color font-semibold py-4 mx-2">BTV ĐỀ CỬ</p>
                    <div>
                        <div className="flex gap-10 flex-wrap mx-2">
                            {popularList.map((item: PopularCardProps, index: number) => (
                                <PopularCard item={item} key={index.toString()} />
                            ))}
                        </div>
                    </div>
                </div>


            </div>
            <div className='my-10'>
                <Banner />
            </div>
            <div className='md:container mx-2'>
                <div className='flex py-4'>
                    <p className="text-base font-semibold text-theme_color border-r-[1px] border-r-solid border-r-[#e1e1e1] pe-2">
                        TRUYỆN NGẪU NHIÊN
                    </p>
                    {/* <p className="text-base text-gray_text ml-2 cursor-pointer">Xem TOP 10 bài viết</p> */}
                </div>
                <div>
                    {/* <div className="flex justify-between flex-wrap">
                            {
                                [0, 1, 2, 3].map(item => (
                                    <Popular2 key={item.toString()} />
                                ))
                            }
                        </div> */}

                    <div className='my-2'>
                        <div className="flex gap-10 flex-wrap">
                            {popularList.map((item: PopularCardProps, index: number) => (
                                <PopularCard item={item} key={index.toString()} />
                            ))}
                        </div>
                    </div>
                </div>
                <NewFeed />
            </div>
        </div>
    )
}

export default HomePage