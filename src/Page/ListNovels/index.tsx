import { authApiRequest } from "@/api/auth";
import { tagApiRequest } from "@/api/tag";
import Banner from "@/components/Banner";
import PopularCard from "@/components/Card/Popular";
import MyPagination from "@/components/Pagination";
import { useListNovels } from "@/hooks/useNovel";
import { INovelSummary } from "@/types/novel.interface";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ListNovels() {
    const { type, id } = useParams<{ type: string; id: string }>();
    const [typeName, setTypeName] = useState<string>('');
    const [page, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    if (!type || !id) {
        return <div>Invalid parameters</div>;
    }
    const numericId = Number(id);
    if (isNaN(numericId)) {
        return <div>Invalid ID format</div>; // Kiểm tra nếu id không hợp lệ
    }

    const limit = 20
    const { novelsList, loadingList, errorList } = useListNovels({ type, id: numericId, page, limit});


    useEffect(() => {
        const fetchTypeName = async () => {
            try {
                if (type !== 'poster') {
                    const response = await tagApiRequest.getTagName(type, +id)
                    setTypeName(response.data);
                } else {
                    const response = await authApiRequest.getUserNameById(+id)
                    setTypeName(` được đăng bởi ${response.data}`);
                }
            } catch (error) {
                console.error("Error fetching type name:", error);
            }
        };

        if (type && id) {
            fetchTypeName();
        }
    }, [type, id]);

    if (loadingList) return <div className="my-12">
        <Banner></Banner>

        <div className="md:container mt-3">
            <div className="mt-4">
                <div className="w-[49.4%] h-[30px] bg-[#c9d7e9] rounded animate-pulse"></div>
            </div>
            <div className="flex flex-wrap gap-3 mt-3">
                <div className="w-[49.4%] h-[170px] bg-[#c9d7e9] rounded animate-pulse"></div>
                <div className="w-[49.4%] h-[170px] bg-[#c9d7e9] rounded animate-pulse"></div>
                <div className="w-[49.4%] h-[170px] bg-[#c9d7e9] rounded animate-pulse"></div>
                <div className="w-[49.4%] h-[170px] bg-[#c9d7e9] rounded animate-pulse"></div>
            </div>
        </div>
    </div>;
    if (errorList) return <div className="my-12">
        <Banner></Banner>

        <div className="md:container mt-3">
            <div className="mt-4">
                <div className='w-[30%]'></div>
                <div className='bg-white flex-1'>Có lỗi đã xảy ra, vui lòng thử tải lại trang</div>
                <div className='w-[30%]'></div>
            </div>

        </div>
    </div>;

    return (
        <div>
            <Banner></Banner>
            <div className="md:container">
                <div className="flex justify-between">
                <p className="text-base text-theme_color font-semibold py-4 mx-2 uppercase">TRUYỆN {typeName}</p>
                <p className="text-base text-red py-4 mx-2"> Tổng: {novelsList?.totalRecords} truyện</p>
                
                </div>
                <div className="flex gap-10 flex-wrap mx-2 mb-4">
                    {novelsList?.novels && novelsList.novels.length > 0 ? (
                        novelsList.novels.map((item: INovelSummary) => (
                            <PopularCard item={item} key={item.id} />
                        ))
                    ) : (
                        <div className="text-center text-gray my-5">
                            Không có truyện nào thuộc thể loại này để hiển thị.
                        </div>
                    )}
                </div>
                <MyPagination
                    currentPage={page}
                    totalPages={novelsList?.totalPages || 1}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}
