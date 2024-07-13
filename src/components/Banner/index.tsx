import React from 'react'


interface Item {
    name: string;
    href: string;
    src: string;
}

const list: Item[] = [
    {
        name: 'Lãnh Chúa Thời Đại: Ta Phần Thưởng X100 Lần Tăng Phúc',
        href: 'https://metruyencv.com/truyen/lanh-chua-thoi-dai-ta-phan-thuong-x100-lan-tang-phuc',
        src: 'https://static.cdnno.com/storage/topbox/dfa26ce246e4d1a1c6a23ff7549f2598.webp'
    },
    {
        name: 'Dân Tục: Trẻ Sơ Sinh Bắt Đầu, Mẫu Thân Cởi Ra Mặt Nạ',
        href: 'https://metruyencv.com/truyen/moi-ngay-deu-muon-cung-ta-mat-na-quy-mau-than-noi-ngu-ngon',
        src: 'https://static.cdnno.com/storage/topbox/07211fcd8eead576ba16142aecf0f9a2.webp'
    },
    {
        name: 'Ta Bán Hủ Tiếu Tại Dị Giới',
        href: 'https://vtruyen.com/truyen/di-ban-hu-tieu-tai-di-gioi',
        src: 'https://static.cdnno.com/storage/topbox/08e1c8f41a9e48d4dacd979eea4fdaaa.webp '
    },
];


function Banner() {
    const randomItem = list[Math.floor(Math.random() * list.length)];

    return (
        <div className='h-[515px]s bg-cover flex items-center'>
            <div className="md:container mx-auto flex-1">
                <a href={randomItem.href}>
                <img src={randomItem.src} alt={randomItem.name} />
                </a>
            </div>
        </div>
    )
}

export default Banner