import React, { useCallback, useState } from "react";
import { BiSearchAlt, BiSolidBookAdd, BiSolidPencil } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { MdDelete, MdRestore, MdRocketLaunch } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "@/store/store";
import { useNovelsByPoster } from "@/hooks/useNovel";
import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip ";
import axiosInstance from "@/api";
import { convertTo24Hour, timeAgo } from "@/store/Time";
import { TbDeviceIpadCancel } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import actionNotification from "@/components/NotificationState/Toast";
import axios from "axios";
export default function Published() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const userId = user?.id.toString() || '0';
    const { novels, loading, error, refetch } = useNovelsByPoster(userId);
    const numberChapterPublishNovel = 2

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const stateMap: { [key: string]: string } = {
        ongoing: "Còn tiếp",
        completed: "Hoàn thành",
        paused: "Tạm dừng",
        deleted: "Đã xóa",
        unpublished: "Chưa xuất bản",
        pending: "Đang chờ duyệt"
    };
    const handleChangeState = async (novelId: number, state: string) => {
        try {
            const response = await axiosInstance.put(`/novel/state/${novelId}`, { state });
            actionNotification("Đã xử lý thành công", "success")
            refetch();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Đã xảy ra lỗi không xác định.';
                actionNotification(`${errorMessage}`, "error");
            } else {
                actionNotification(`Xử lý thất bại!!!`, "error");
            }
        }
    };
    // Lọc danh sách truyện theo state đã chọn và tìm kiếm
    const filteredNovels = novels
        .filter(novel => {
            if (selectedOption === '') {
                // Khi selectedOption trống, loại trừ các tiểu thuyết có trạng thái 'deleted'
                return novel.state !== 'deleted' && novel.title.toLowerCase().includes(searchTerm.toLowerCase());
            } else {
                // Khi selectedOption không trống, kiểm tra trạng thái của tiểu thuyết
                return (novel.state === selectedOption || (selectedOption === 'deleted' && novel.state === 'deleted'))
                    && novel.title.toLowerCase().includes(searchTerm.toLowerCase());
            }
        });

    return (
        <div className="bg-white h-max w-[100%]  mx-auto my-6 shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md">
            <div className="mx-5">
                <div className="h-6"></div>
                <div>
                <ToastContainer></ToastContainer>

                    <div className="flex justify-between flex-wrap">
                        
                        <div className="flex flex-wrap-reverse my-2">
                            
                            <div className="border border-gray flex rounded-md items-center p-[2px]">
                                <BiSearchAlt size={25} color="#969696" className="" />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    className="p-2 outline-none"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            {selectedOption === 'deleted' && (
                                <div className="flex mx-1 text-[#FF6A30] truncate p-1 rounded-md gap-1 items-end">
                                    <FiInfo size={25} />
                                    <span>Truyện đã xóa sẽ bị xóa vĩnh viễn sau 30 ngày</span>
                                </div>
                            ) || (
                                    <div className="flex mx-1 text-[#FF6A30] truncate p-1 rounded-md gap-1 items-end">
                                        <FiInfo size={25} />
                                        <span>Truyện có từ 10 chương trở lên mới có thể xuất bản</span>
                                    </div>
                                )}
                        </div>
                        
                        <div className="flex">
                            <div className="border border-gray flex rounded-md items-center mr-4">
                                <select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    className="p-2 outline-none rounded-md"
                                >
                                    <option value="">Tất cả</option>
                                    <option value="unpublished">Chưa xuất bản</option>
                                    <option value="pending">Chờ phê duyệt</option>
                                    <option value="ongoing">Còn tiếp</option>
                                    <option value="completed">Hoàn thành</option>
                                    <option value="paused">Tạm dừng</option>
                                    <option value="deleted">Đã xóa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4  overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray overflow-x-scroll">
                            <thead>
                                <tr className="bg-gray_light rounded-md">
                                    <th className="border-y border-gray px-3 py-2 text-center">STT</th>
                                    <th className="border-y border-gray px-3 py-2 max-w-[450px] text-center truncate">Truyện</th>
                                    <th className="border-y border-gray px-3 py-2 text-center">Số chương</th>
                                    {selectedOption === "deleted" ?
                                        <th className="border-y border-gray px-3 py-2 text-center">Thời gian xóa</th>
                                        : <th className="border-y border-gray px-3 py-2 text-center">Thời gian đăng</th>
                                    }
                                    <th className="border-y border-gray px-3 py-2 text-center">Trạng thái</th>
                                    <th className="border-y border-gray px-3 py-2 text-center">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredNovels.map((novel, index) => (
                                    <tr className="hover:bg-gray_hover border-y border-gray" key={novel.id}>
                                        <td className="px-3 py-2 text-center">{index + 1}</td>
                                        <td className="px-3 py-2 max-w-[450px] text-center truncate">{novel.title}</td>
                                        <td className="px-3 py-2 text-center">{novel.chapters}</td>
                                        <td className="px-3 py-2 text-center">
                                            {novel.state === 'deleted'
                                                ? timeAgo(novel.updatedAt.toString())
                                                : convertTo24Hour(novel.createdAt)}</td>
                                        <td className="px-3 py-2 text-center">{stateMap[novel.state] || 'Không xác định'}</td>
                                        <td className="px-3 py-2 max-w-[225px] flex flex-wrap text-center">



                                            {novel.chapters >= numberChapterPublishNovel && novel.state === 'unpublished' && (
                                                <ButtonWithTooltip
                                                    className="bg-[#e7bd6f] hover:bg-[#FFA500] text-white font-bold py-2 mr-2 px-2 rounded"
                                                    title="Xin duyệt"
                                                    onClick={() => handleChangeState(novel.id, 'pending')}
                                                >
                                                    <MdRocketLaunch />
                                                </ButtonWithTooltip>
                                            )}
                                            {novel.state === 'pending' && (
                                                <ButtonWithTooltip
                                                    className="bg-[#e7bd6f] hover:bg-[#FFA500] text-white font-bold py-2 mr-2 px-2 rounded"
                                                    title="Hủy xin duyệt"
                                                    onClick={() => handleChangeState(novel.id, 'unpublished')}
                                                >
                                                    <TbDeviceIpadCancel />
                                                </ButtonWithTooltip>
                                            )}

                                            {novel.state === 'deleted' ?
                                                (
                                                    <ButtonWithTooltip
                                                        className="bg-[#89e88c] hover:bg-[#6fff74] text-white font-bold py-2 px-2 mr-0  rounded"
                                                        title="Khôi phục"
                                                        onClick={() => handleChangeState(novel.id, 'unpublished')} //
                                                    >
                                                        <MdRestore />
                                                    </ButtonWithTooltip>
                                                ) :
                                                (
                                                    <div>
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
                                                        <Link to={`edit-novel/${novel.id}`}>
                                                            <ButtonWithTooltip
                                                                className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                                                title="Sửa truyện"
                                                            >
                                                                <BiSolidPencil />
                                                            </ButtonWithTooltip>
                                                        </Link>
                                                        <ButtonWithTooltip
                                                            className="bg-[#ED9A96] hover:bg-red text-white font-bold py-2 px-2 mr-0 rounded"
                                                            title="Xóa truyện"
                                                            onClick={() => handleChangeState(novel.id, "deleted")} // Đảm bảo đây là một hàm
                                                        >
                                                            <MdDelete />
                                                        </ButtonWithTooltip>
                                                    </div>
                                                )}
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
