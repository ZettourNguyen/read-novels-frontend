import React, { useState } from "react";
import { BiSearchAlt, BiSolidBookAdd, BiSolidPencil } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "@/store/store";
import { useNovelsByPoster } from "@/hooks/useNovel";
import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip ";

export default function Published() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [selectedOption, setSelectedOption] = useState('');
    
    const userId = user?.id.toString() || '0';
    const { novels, loading, error } = useNovelsByPoster(userId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="bg-white h-max w-[100%] mx-auto my-6 shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md">
            <div className="mx-5">
                <div className="h-6"></div>
                <div>
                    <div className="flex justify-between">
                        <div className="border border-gray flex rounded-md items-center p-[2px]">
                            <BiSearchAlt size={25} color="#969696" className="ml-2" />
                            <input type="text" placeholder="Tìm kiếm" className="p-2 outline-none" />
                        </div>

                        <div className="flex">
                            <div className="border border-gray flex rounded-md items-center mr-4">
                                <select value={selectedOption} onChange={handleChange}
                                    className="p-2 outline-none rounded-md">
                                    <option value="option1">Còn tiếp</option>
                                    <option value="option2">Hoàn thành</option>
                                    <option value="option3">Tạm dừng</option>
                                </select>
                            </div>
                            <div className="border border-gray flex rounded-md items-center">
                                <p className="px-3">{selectedOption}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <table className="min-w-full bg-white border border-gray">
                            <thead>
                                <tr className="bg-gray_light rounded-md">
                                    <th className="border-y border-gray px-4 py-2 text-center">ID</th>
                                    <th className="border-y border-gray px-4 py-2 text-center">Truyện</th>
                                    <th className="border-y border-gray px-4 py-2 text-center">Số chương</th>
                                    <th className="border-y border-gray px-4 py-2 text-center">Thời gian đăng</th>
                                    <th className="border-y border-gray px-4 py-2 text-center">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {novels.map(novel => (
                                    <tr className="hover:bg-gray_hover" key={novel.id}>
                                        <td className="border-y border-gray px-4 py-2 text-center">{novel.id}</td>
                                        <td className="border-y border-gray px-4 py-2 text-center">{novel.title}</td>
                                        <td className="border-y border-gray px-4 py-2 text-center">{novel.chapters}</td>
                                        <td className="border-y border-gray px-4 py-2 text-center">{novel.createdAt}</td>
                                        <td className="border-y border-gray px-4 py-2 text-center">
                                            <Link to={`add-chapter/${novel.id}`}>
                                                <ButtonWithTooltip
                                                    className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                                    title="Thêm chương"
                                                >
                                                    <BiSolidBookAdd />
                                                </ButtonWithTooltip>
                                            </Link>
                                            <Link to={`list-chapters/${novel.id}`}>
                                                <ButtonWithTooltip
                                                    className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                                    title="Danh sách chương"
                                                >
                                                    <FaList />
                                                </ButtonWithTooltip>
                                            </Link>
                                            <ButtonWithTooltip
                                                className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                                title="Sửa truyện"
                                            >
                                                <BiSolidPencil />
                                            </ButtonWithTooltip>
                                            <ButtonWithTooltip
                                                className="bg-[#ED9A96] hover:bg-red text-white font-bold py-2 px-2 mr-2 rounded"
                                                title="Xóa truyện"
                                            >
                                                <MdDelete />
                                            </ButtonWithTooltip>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="h-6"></div>
            </div>
        </div>
    );
}
