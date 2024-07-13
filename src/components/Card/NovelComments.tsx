

export default function NovelComments() {
    return (
        <div className="mt-5">
            <div className="text-lg flex bg-[#E4DECE]">
                <div className=' hover:bg-[#B78A28] hover:text-white px-4 py-1'>
                    BÌNH LUẬN
                </div>

            </div>
            {/* textarea */}
            <div className="relative">
                <div className=" bg-white rounded-lg rounded-t-lg m-2">
                    <textarea className="py-2 px-4 mb-4 w-[100%] focus:ring-0 focus:outline-none rounded-md mt-2 dark:text-white
            border-[1px] border-gray overflow-hidden break-words resize-none text-start h-160"
                        name="comments"
                        id="comments"
                        placeholder="Nhập bình luận. Cảnh báo: nghiêm cấm vô não chửi bậy, chửi liên quan đến thể loại truyện, mô típ của truyện, bối cảnh của truyện. Nghiêm cấm bình luận chống lại nhà nước, danh nhân lịch sử, người vi phạm sẽ bị khóa tài khoản tùy mức độ."
                        rows={6}></textarea>
                </div>
                <div className="absolute bottom-[30px] right-[10px]" >
                    <button className="bg-gold text-white border-gold border-[1px] rounded-md p-1 px-2"> Gửi </button>
                </div>
            </div>
            {/* comments */}

            

        </div>
    )
}