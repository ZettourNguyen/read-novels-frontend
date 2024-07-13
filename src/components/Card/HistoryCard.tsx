import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export interface HistoryCardProps {
    updatedAt: string;
    title: string;
    chapterIndex: number;
    chapterTotal: number;
    href: string;
  }
  
  const historyList: Array<HistoryCardProps> = [
    {
      updatedAt: '2021-05-01T00:00:00Z',
      title: 'Xích Tâm Tuần Thiên',
      chapterIndex: 2395,
      chapterTotal: 2446,
      href: 'https://translate.google.com'
    },
    {
      updatedAt: '2019-05-01T00:00:00Z',
      title: 'Ta Có Thể Thăng Cấp Chỗ Tránh Nạn',
      chapterIndex: 235,
      chapterTotal: 246,
      href: 'https://translate.google.com'
    },
    {
      updatedAt: '2019-05-01T00:00:00Z',
      title: 'Võng Du Toàn Vũ Trụ : Vô Địch Thiên Phú',
      chapterIndex: 295,
      chapterTotal: 2406,
      href: 'https://translate.google.com'
    },
    {
      updatedAt: '2019-05-01T00:00:00Z',
      title: 'Võng Du: Bắt Đầu Sss Cấp Thiên Phú Vong Hồn Triệu Hoán',
      chapterIndex: 95,
      chapterTotal: 446,
      href: 'https://translate.google.com'
    },
    {
      updatedAt: '2019-05-01T00:00:00Z',
      title: 'Linh Khí Sống Lại: Ta Vũ Hồn Là Thất Đại Ma Vương Thú',
      chapterIndex: 23,
      chapterTotal: 462,
      href: 'https://translate.google.com'
    },
    {
      updatedAt: '2019-05-01T00:00:00Z',
      title: 'Ta Có Thể Thăng Cấp Chỗ Tránh Nạn',
      chapterIndex: 235,
      chapterTotal: 246,
      href: 'https://translate.google.com'
    },
    {
      updatedAt: '2019-05-01T00:00:00Z',
      title: 'Võng Du Toàn Vũ Trụ : Vô Địch Thiên Phú',
      chapterIndex: 295,
      chapterTotal: 2406,
      href: 'https://translate.google.com'
    },
  ];
  

const HistoryCard: React.FC = () => {
  return (
    <div>
      {historyList.slice(0, 5).map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-1 py-2 px-3">
          <div className="hidden md:block xl:col-span-1    md:truncate">
            <span className="text-gray text-xs truncate ">
              {dayjs(item.updatedAt).fromNow()}
            </span>
          </div>
          <div className="col-span-12 xl:col-span-8 sm:col-span-8 md:col-span-7 sm:truncate">
            <a href={item.href} className="text-sm font-semibold hover:text-theme_color line-clamp-1">
              {item.title}
            </a>
          </div>
          <div className="col-span-11 lg:col-span-2 sm:col-span-3 md:col-span-2 md:truncate">
            <span className="text-gray sm:text-xs truncate">
              Đã đọc: {item.chapterIndex}/{item.chapterTotal}
            </span>
          </div>
          <div className="col-span-1 justify-self-end">
            <button className=" outline  outline-1 px-2 text-red disabled:bg-gray-500 rounded">
              <span className="text-xs">x</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
