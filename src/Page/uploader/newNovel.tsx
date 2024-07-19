import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip ";
import { useEffect, useRef, useState } from "react";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbInfoCircleFilled } from "react-icons/tb";
import { AiOutlineClose } from 'react-icons/ai';
import { useCategoryList } from "@/hooks/userCategoryList";
import { TagProps, useTagList } from "@/hooks/userTagList";
import { TbPencilQuestion } from "react-icons/tb";
import { INovelInputI } from "../Novel/Novel.interface";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useCreateNovel } from "@/hooks/useNovel";
import actionNotification from "@/components/NotificationState/Toast";

export const defaultImage = 'https://static.sangtacvietcdn.xyz/img/bookcover256.jpg'

export default function NewNovel() {
    const [selectedTag, setSelectedTag] = useState<TagProps[]>([]);
    const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const novelNameRef = useRef<HTMLInputElement>(null);
    const authorNameRef = useRef<HTMLInputElement>(null);
    const introductionRef = useRef<HTMLTextAreaElement>(null);
    const { categories } = useCategoryList();
    const { tags } = useTagList();
    const user = useSelector((state: RootState) => state.auth.user)
    const { createNovelAPI, loading, error } = useCreateNovel();
    useEffect(() => {
        if (selectedTag.length > 5) {
            setIsFormVisible(false);
        }
    }, [selectedTag]);

    const handleAddTag = () => {
        setIsFormVisible(true);
    };
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryId = parseInt(event.target.value);
        setCategoryId(selectedCategoryId); // Cập nhật state với id của danh mục được chọn
    };
    const handleSelectTag = (tag: TagProps) => {
        setSelectedTag((prevSelectedTag) =>
            prevSelectedTag.find((selected) => selected.id === tag.id)
                ? prevSelectedTag
                : [...prevSelectedTag, tag]
        );
    };
    const selectedTagIds = selectedTag.map((tag) => tag.id);
    const handleOk = () => {
        setIsFormVisible(false);
    };
    const handleRemoveTag = (id: number) => {
        setSelectedTag((prevSelectedTag) =>
            prevSelectedTag.filter((tag) => tag.id !== id)
        );
    };

    const handleCheckButtonClick = () => {
        // alert(`Tên truyện đã nhập: ${novelNameRef.current?.value}`);
    };


    const handleNextButtonClick = async () => {
        const novelName = novelNameRef.current?.value;; // Cập nhật giá trị state khi có sự thay đổi
        if (!novelName) {
            actionNotification("Bạn chưa nhập Tên truyện", 'warning')
            return;
        }
        const authorName = authorNameRef.current?.value || null
        if (categoryId == null) {
            actionNotification("Bạn chưa nhập Thể loại", 'warning')
            return
        }
        const idString = user?.id.toString() || '0'; // Ép kiểu sang chuỗi và xử lý giá trị null
        const posterId: number = parseInt(idString);
        const novelInput: INovelInputI = {
            data: {
                title: `${novelNameRef.current?.value}`,
                image: defaultImage,
                banner: null,
                state: "ongoing",
                description: `${introductionRef.current?.value}`,
                posterId: posterId,
                categoryId: categoryId
            },
            authorNameInInput: authorName,
            tagsId: selectedTagIds
        };
        await createNovelAPI(novelInput) 
        actionNotification("Tiểu thuyết đã được tạo thành công!", 'success')
    };


    return (
        <div className="">
            {/* content */}

            <div className="flex gap-5">
                {/* Form them novel */}
                <div className="flex-1 bg-white h-max w-max p-6
                shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md">
                    <div className="flex mx-1 bg-[#FF6A30] text-white p-2 rounded-md gap-2">
                        <TbInfoCircleFilled size={25} />
                        <span>Sau khi nhập tên truyện, nên kiểm tra tên truyện xem để có chưa, tránh mất thời gian</span>
                    </div>
                    <div className="mb-5">
                        <div className="my-1 mx-1">Tên truyện</div>
                        <div className="flex mx-1">
                            <div className="border border-gray flex rounded-md p-[2px] flex-1 mr-2">
                                <input type="text" placeholder="Tên truyện"
                                    className="ml-1 p-2 w-[100%] outline-none"
                                    ref={novelNameRef}
                                    required />
                            </div>
                            <ButtonWithTooltip className="bg-sky_blue_light_500 hover:bg-sky_blue_light
                                     text-white font-bold py-2 px-2 mr-2 rounded"
                                onClick={handleCheckButtonClick}
                                title="Kiểm tra tên truyện">
                                <TbPencilQuestion />
                            </ButtonWithTooltip>
                        </div>

                    </div>

                    <div className="mb-5">
                        <div className="my-1 mx-1">Tác giả/Bút danh</div>
                        <div className="border mx-1 border-gray flex rounded-md p-[2px]  ">
                            <input type="text"
                                placeholder="Để trống nếu bạn là tác giả và lấy username của bạn làm tên tác giả"
                                className="ml-1 p-2 w-[100%] outline-none"
                                ref={authorNameRef}
                            />
                        </div>
                    </div>
                    <div className="mb-5 mx-1">
                        <div className="my-1">Thể loại chính</div>
                        <div className="border border-gray flex rounded-md p-[2px]  ">
                            <select onChange={handleCategoryChange}
                                className="ml-1 w-full outline-none p-2 max-h-40 overflow-y-auto">
                                {categories.map((category) => (
                                    <option className="" key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-5 mx-1">
                        {selectedTag.length > 5 &&
                            <div className="flex bg-[#FF6A30] text-white p-2 rounded-md gap-2">
                                <TbInfoCircleFilled size={25} />
                                <span>Một truyện chỉ có 5 tag</span>
                            </div>}
                        <div className="my-1">Tag</div>
                        <div className="flex">
                            <div className="flex-1 border flex-wrap border-gray flex rounded-md p-[2px] mr-2 max-h-28 min-h-[50px] overflow-y-auto">
                                {selectedTag.slice(0, 5).map((tag) => (
                                    <div className="flex items-center rounded-3xl bg-gray_light border mx-[5px] my-1 p-2" key={tag.id}>
                                        {tag.name}
                                        <button
                                            className="ml-2 text-red-500"
                                            onClick={() => handleRemoveTag(tag.id)}
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-2 mr-2 rounded"
                                onClick={handleAddTag}
                            >
                                <BiSolidBookAdd />
                            </button>
                        </div>


                        {isFormVisible && (
                            <div className="mt-4 p-4 border rounded-md">
                                <h3 className="mb-2">Chọn Tag</h3>
                                <div className="max-h-40 overflow-y-auto">
                                    {tags.map((tags) => (
                                        <div
                                            className="cursor-pointer rounded-sm bg-gray_light border mx-2 p-2 my-1 flex justify-between items-center"
                                            key={tags.id}
                                            onClick={() => handleSelectTag(tags)}
                                        >
                                            {tags.name}
                                            {selectedTag.find((tag) => tag.id === tags.id) && (
                                                <AiOutlineClose className="text-red-500 ml-2" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="mt-4 bg-sky_blue_light_500 hover:bg-sky_blue_light text-white font-bold py-2 px-4 rounded"
                                    onClick={handleOk}
                                >
                                    OK
                                </button>
                            </div>
                        )}
                    </div>
                    <div className=" bg-white rounded-lg rounded-t-lg mx-1">
                        <div>Giới thiệu</div>
                        <textarea className="py-2 px-3 mb-4 w-[100%] focus:ring-0 focus:outline-none rounded-md mt-1 dark:text-white
            border-[1px] border-gray overflow-hidden break-words resize-none text-start h-160"
                            name="comments"
                            id="comments"
                            placeholder=""
                            ref={introductionRef}
                            rows={6}></textarea>
                    </div>
                    <div className="flex justify-end"> {/* Sử dụng flexbox và justify-end để đưa nút bên cùng phải */}
                        <ButtonWithTooltip className="bg-[#FF6A30] hover:bg-red 
                         text-white font-bold py-2 px-2 mr-2 rounded"
                            onClick={handleNextButtonClick}
                            title="">
                            Tiếp theo
                        </ButtonWithTooltip>
                    </div>

                </div>

                {/* Điều Khoản Dịch Vụ */}
                <div className="flex-1 bg-white max-w-[600px] p-6 shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md overflow-y-auto max-h-[600px]">
                    <h2 className="text-xl font-bold mb-4">Điều Khoản Dịch Vụ</h2>
                    <p>Khi tham gia sử dụng dịch vụ cung cấp bởi <span className="font-bold"> Kho Truyện Chữ</span>, bạn phải đồng ý và tuân thủ các quy định sau:</p>

                    <h3 className="text-lg font-semibold mt-4">Quy định này áp dụng cho mọi đối tượng tham gia hoạt động tại website, không kể là khách, thành viên, tác giả, dịch giả, biên tập viên, quản trị viên, admin hay bất cứ thành viên nào khác.</h3>

                    <h3 className="text-lg font-semibold mt-4">Quy định này gồm 2 bên:</h3>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li><span className="font-bold"> Kho Truyện Chữ</span> cung cấp dịch vụ trên internet.</li>
                        <li>Khách hàng gọi tắt là KH, sử dụng dịch vụ của <span className="font-bold"> Kho Truyện Chữ</span> trên internet.</li>
                    </ol>

                    <h3 className="text-lg font-semibold mt-4">Nội dung:</h3>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li>Không được có những từ ngữ gay gắt, đả kích, xúc phạm, bêu xấu cá nhân và tổ chức trên <span className="font-bold"> Kho Truyện Chữ</span>.</li>
                        <li>Không phát tán và truyền bá thông tin bất hợp pháp, lừa gạt, bôi nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm, đe dọa, lăng mạ, thù hận, kích động… hoặc trái với chuẩn mực đạo đức chung của xã hội.</li>
                        <li>Không được gửi hoặc truyền bất kỳ thông tin hoặc phần mềm nào có chứa bất kỳ loại virus, trojan, bọ hay các thành phần nguy hại nào đến sự an toàn của hệ thống dịch vụ.</li>
                        <li>Không được dẫn link hoặc nhắc đến website khác.</li>
                        <li>Không spam tin nhắn, bình luận, bài viết hay bất cứ hình thức nào tại <span className="font-bold"> Kho Truyện Chữ</span>.</li>
                        <li>Đánh giá và bình luận phải sử dụng tiếng việt có dấu.</li>
                        <li>Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa.</li>
                        <li>Đánh giá khen/chê truyện một cách chung chung không mang lại giá trị cho người đọc sẽ bị xóa.</li>
                        <li>Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa.</li>
                        <li>Không để avatar tục tĩu, vi phạm pháp luật hoặc ảnh hưởng đến người khác.</li>
                        <li>Không tận dụng các bugs (lỗi) của chương trình nhằm phá hoại sự ổn định của <span className="font-bold"> Kho Truyện Chữ</span>.</li>
                        <li>Sẽ khóa vĩnh viễn các tài khoản copy truyện thu phí ra ngoài mà không được sự cho phép bằng văn bản của <span className="font-bold"> Kho Truyện Chữ</span>.</li>
                        <li>Quy định về mức phạt đối với thành viên vi phạm nội quy là do ban quản trị website tự đề ra.</li>
                        <li>Thành viên vi phạm sẽ bị khóa nick mà không cần báo trước.</li>
                        <li>Nhân viên quản lý có quyền xóa nội dung gây hại cho website mà không cần báo trước.</li>
                        <li>Nội dung các quy định trên có thể thay đổi mà không cần báo trước.</li>
                    </ol>

                    <h3 className="text-lg font-semibold mt-4">Quy định khi đăng truyện:</h3>
                    <ol className="list-decimal list-inside mt-2">
                        <li>Không được phép đăng các truyện liên quan tới chính trị, tôn giáo, tình dục, sắc hiệp, dâm hiệp, nói xấu Việt Nam.</li>
                        <li>Chỉ được đăng các truyện do bạn tự sáng tác hoặc bạn có quyền sử dụng.</li>
                        <li>Nội dung giới thiệu truyện và nội dung chương truyện trình bày phải phân đoạn rõ ràng, nếu viết thành 1 khối dày đặc chữ sẽ bị xóa.</li>
                        <li>Không được quảng cáo các trang web, nền tảng, dịch vụ khác dưới mọi hình thức.</li>
                        <li>Không được đưa thông tin donate/ủng hộ của các trang web, nền tảng, dịch vụ khác dưới mọi hình thức.</li>
                        <li>Ảnh bìa truyện không có các hình ảnh khiêu dâm, kích dục, kích động, thù hằn, ám chỉ đến tôn giáo, chính trị, các hoạt động bị cấm bởi pháp luật.</li>
                        <li>Tất cả truyện bạn đăng lên <span className="font-bold"> Kho Truyện Chữ</span> có bản quyền thuộc về cá nhân của bạn, <span className="font-bold"> Kho Truyện Chữ</span> không có quyền lợi hay nghĩa vụ đăng ký bản quyền hộ bạn. Khi đăng truyện lên hệ thống bạn cho phép <span className="font-bold"> Kho Truyện Chữ</span> và các website thuộc hệ thống quyền khai thác quảng cáo và quyền thu hộ trả phí (mở khóa) các chương truyện trên các truyện bạn đã đăng.</li>
                    </ol>

                    <p className="my-4">Cập nhật lần cuối ngày 05/01/2024</p>

                    <div className="pt-5 border-t border-gray ">
                        <input type="checkbox" id="checkbox-25" className="mr-3" />

                        <label htmlFor="checkbox-25" className="v-label v-label--clickable cursor-pointer">
                            Tôi đồng ý với các Điều Khoản Dịch Vụ khi đăng truyện
                        </label>

                    </div>

                </div>

            </div>

            {/* content */}
            <div className="h-6"></div>

        </div>
    )
}