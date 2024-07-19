import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip ";
import actionNotification from "@/components/NotificationState/Toast";
import { IChapterInputI, useCreateNovel } from "@/hooks/useNovel";
import { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import { useAddChapters } from "@/hooks/useChapters";
export default function PublishChapter() {
    const { novelId } = useParams<{ novelId: string }>();
    const novelIdNumber = Number(novelId);
    const { propsChapter } = useAddChapters(novelIdNumber);
    const [isInsert, setIsInsert] = useState(false)
    const titleChapterRef = useRef<HTMLInputElement>(null);
    const indexRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);


    const handleIsInsertChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInsert(event.target.checked);
    };

    const upLoadChapter = async () => {
        const { createChapterAPI, loading, error } = useCreateNovel();
        const title = titleChapterRef.current?.value;; // Cập nhật giá trị state khi có sự thay đổi
        if (!title) {
            alert(`Vui lòng nhập tên CHƯƠNG truyện `);
            return;
        }
        const content = contentRef.current?.value || null
        if (!content) {
            alert(`content IS NULL !!! `); 
            return
        }
        const data: IChapterInputI = {
            title: title,
            content: content,
            novelId: novelIdNumber,
            index: Number(indexRef)
        }
        const chapter = await createChapterAPI(data)
        if (chapter) {
            actionNotification("upLoadChapter completed successfully!", 'success');
        }
        if (loading) return <div><Loading /></div>;
        if (error) {
            actionNotification("upLoadChapter completed successfully!", 'warning');
            return <div>Error: {error}</div>
        };

    }

    return (
        <div className="bg-white h-max w-[100%] mx-auto my-6 shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md">
            <div className="mx-5">
                <div className="h-6"></div>

                <div className="">
                    <div className="font-semibold mb-6">{propsChapter?.novelTitle}</div>
                </div>
                <div>
                    {/* Thông báo */}
                </div>
                <div className="flex gap-3">
                    <div className="flex-1">
                        <div>Số thứ tự chương</div>
                        <div className="border mx-1 mt-2 border-gray flex rounded-md  p-[2px"
                            style={isInsert ? {} : { pointerEvents: 'none', color: "gray" }}>
                            <input type="number"

                                placeholder="Tự động là chương tiếp theo nếu không điền []"
                                className="ml-1 p-2 w-[100%] outline-none"
                                defaultValue={propsChapter?.nextIndex}
                                ref={indexRef}
                            />
                        </div>

                    </div>
                    <div className="flex-1">

                        <div>Tên chương</div>
                        <div className="border mx-1 mt-2 border-gray flex rounded-md p-[2px">
                            <input type="text"
                                placeholder="Tên chương"
                                className="ml-1 p-2 w-[100%] outline-none"
                                ref={titleChapterRef}
                            />
                        </div>
                    </div>

                </div>
                {/* checkbox */}
                <div>
                    <label>
                        <input
                            type="checkbox"
                            className="m-2"
                            checked={isInsert}
                            onChange={handleIsInsertChange}
                        />
                        Chèn chương
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            className="m-2"
                        // checked={isInsert}
                        // onChange={handleIsInsertChange}
                        />
                        Mã hóa nội dung
                    </label>
                </div>
                {/* content chapter */}
                <div className="mt-3">
                    <div>Nội dung chương</div>
                    <div className="">
                        <div className=" bg-white rounded-lg rounded-t-lg ">
                            <textarea className="py-2 px-4 mb-1 w-[100%] focus:ring-0 focus:outline-none rounded-md mt-2 dark:text-white
            border-[1px] border-gray overflow-hidden break-words resize-none text-start h-160"
                                name="comments"
                                id="comments"
                                placeholder=""
                                rows={6}
                                ref={contentRef}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mb-3">
                    <ButtonWithTooltip title="" onClick={() => upLoadChapter()}
                        className="bg-sky_blue_light text-white">Đăng tải</ButtonWithTooltip>
                    <ToastContainer />


                </div>
                <div>Ghi chú: Truyện có thể dán link ảnh, sẽ tự động hiển thị ảnh khi đọc.</div>
                <div className="h-6"></div>

            </div>
        </div>

    );
}
