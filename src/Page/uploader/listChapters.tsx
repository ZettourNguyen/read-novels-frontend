import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useAddChapters, useArrChaptersDetails } from "@/hooks/useChapters";
import { FaEye, FaWindowClose } from "react-icons/fa";
import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip ";
import { Link, useParams } from "react-router-dom";

export default function ListChaptersInNovel() {
    const { novelId } = useParams<{ novelId: string }>();
    const novelIdNumber = Number(novelId);
    const { propsChapter } = useAddChapters(novelIdNumber);

    const { ArrChapters, loading, error } = useArrChaptersDetails(novelIdNumber);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div>
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-lg">{propsChapter?.novelTitle}</div>
                    <Link to={`add-chapter/${propsChapter?.novelId}`}>
                        <ButtonWithTooltip
                            className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-6 rounded"
                            title="Thêm chương mới"
                        >
                            Thêm chương mới
                        </ButtonWithTooltip>
                    </Link>

                </div>
                <div className="mt-4">
                    <table className="min-w-full bg-white border border-gray">
                        <thead>
                            <tr className="bg-gray_light rounded-md">
                                <th className="border-y border-gray px-4 py-2 text-center">Số thứ tự</th>
                                <th className="border-y border-gray px-4 py-2 text-center">Tên chương</th>
                                <th className="border-y border-gray px-4 py-2 text-center">Xuất bản</th>
                                <th className="border-y border-gray px-4 py-2 text-center">Độ dài</th>
                                <th className="border-y border-gray px-4 py-2 text-center">Lượt đọc</th>
                                <th className="border-y border-gray px-4 py-2 text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ArrChapters.map(chapter => (
                                <tr className="hover:bg-gray_hover" key={chapter.id}>
                                    <td className="border-y border-gray px-4 py-2 text-center">{chapter.index}</td>
                                    <td className="border-y border-gray px-4 py-2 text-center">{chapter.title}</td>
                                    <td className="border-y border-gray px-4 py-2 text-center">{`chapter.isPublish`}</td>
                                    <td className="border-y border-gray px-4 py-2 text-center">{`chapter.length`}</td>
                                    <td className="border-y border-gray px-4 py-2 text-center">{`chapter.views`}</td>
                                    <td className="border-y border-gray px-4 py-2 text-center">
                                        <ButtonWithTooltip
                                            className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                            title="Xem trước"
                                        >
                                            <a href={`/list/${chapter.id}`} className="flex items-center">
                                                <FaEye />
                                            </a>
                                        </ButtonWithTooltip>
                                        <ButtonWithTooltip
                                            className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                            title="Sửa chương"
                                        >
                                            <BiSolidPencil />
                                        </ButtonWithTooltip>
                                        <ButtonWithTooltip
                                            className="bg-[#ED9A96] hover:bg-red text-white font-bold py-2 px-2 mr-2 rounded"
                                            title="Xóa chương"
                                        >
                                            <MdDelete />
                                        </ButtonWithTooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="font-semibold text-lg">{propsChapter?.novelTitle}</div>

                    <Link to={`add-chapter/${propsChapter?.novelId}`}>
                        <ButtonWithTooltip
                            className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-6 rounded"
                            title="Thêm chương mới"
                        >
                            Thêm chương mới
                        </ButtonWithTooltip>
                    </Link>
                </div>
            </div>
        </div>
    );
}
