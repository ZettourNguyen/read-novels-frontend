import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip ";
import { useState } from "react";
import { BiSearchAlt, BiSolidPencil } from "react-icons/bi";
import { BiSolidBookAdd } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function Published() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
    };
    const stories = [
        { id: 1, title: '二千年... 若しくは... 二万年後の君へ・・・', timestamp: '2024-07-12', chapters: 10 },
        { id: 2, title: 'Truyện B', timestamp: '2024-07-11', chapters: 15 },
        { id: 3, title: 'Truyện C', timestamp: '2024-07-10', chapters: 20 },
    ];

    return (
        <div className="mx-5 ">
            <div className="h-6"></div>
            <div className="flex justify-between">
                <div className="border border-gray flex rounded-md items-center p-[2px]">
                    <BiSearchAlt size={25} color="#969696" className="ml-2" />
                    <input type="text" placeholder="Tìm kiếm" className="p-2 outline-none" />
                </div>

                <div className="flex">
                    <div className="border border-gray flex rounded-md items-center mr-4">
                        <select value={selectedOption} onChange={handleChange}
                            className="p-2 outline-none rounded-md ">
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
                <table className="min-w-full bg-white border border-gray  ">
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
                        {stories.map(story => (
                            <tr className="hover:bg-gray_hover" key={story.id}>
                                <td className="border-y  border-gray px-4 py-2 text-center">{story.id}</td>
                                <td className="border-y  border-gray px-4 py-2 text-center">{story.title}</td>
                                <td className="border-y  border-gray px-4 py-2 text-center">{story.chapters}</td>
                                <td className="border-y  border-gray px-4 py-2 text-center">{story.timestamp}</td>
                                <td className="border-y  border-gray px-4 py-2 text-center">
                                    {/* Các chức năng như nút xem chi tiết, sửa, xóa... */}
                                    <ButtonWithTooltip className="bg-sky_blue_light_500 hover:bg-sky_blue_light
                                     text-white font-bold py-2 px-2 mr-2 rounded" title="Thêm chương mới">
                                        <BiSolidBookAdd />
                                    </ButtonWithTooltip>
                                    <ButtonWithTooltip className="bg-sky_blue_light_500 hover:bg-sky_blue_light
                                     text-white font-bold py-2 px-2 mr-2 rounded" title="Sửa truyện">
                                        <BiSolidPencil />
                                    </ButtonWithTooltip>
                                    <ButtonWithTooltip className="bg-[#ED9A96] hover:bg-red
                                     text-white font-bold py-2 px-2 mr-2 rounded" title="Xóa truyện">
                                        <MdDelete />
                                    </ButtonWithTooltip>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="h-6"></div>

            
        </div>
    )
}