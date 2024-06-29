import Toggle from "@/components/Toggle";
import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

// const userName = useSelector((state: RootState) => state.auth.user)


function SeriesForm() {
  return (
    <div>
      <div className="h-[100vh]">
        <div>
          <label className="uppercase text-sm font-bold mb-2" htmlFor="">
            Danh sách Series
          </label>
          <div className="flex justify-center border-2 font-sans border-[#e2e8f0] px-[5px] py-[10px] mb-[5px] text-[13px] text-[#AAAAAA]">
            Bạn chưa tạo Series nào
          </div>
          {/* ------------- */}
          <div id="showForm" className="flex justify-center rounded-lg border-2 font-bold border-[#e2e8f0] text-[#4A5568] p-[16px] mb-[8px] border-dashed cursor-pointer">
            <span>Thêm Series mới</span>
          </div>
          {/* -------------- */}
          <div id="seriesForm" className="p-[32px] shadow-md">
            <span className="pb-[20px] font-bold text-[#4A5568] flex justify-center">Thêm Series mới</span>
            <form action="" className="mb-[16px] ">
              <div className="w-full" >
                <label htmlFor="" className="text-[12px] text-[#4A5568] mb-[8px] uppercase font-bold"> Tên hiển thị</label>
                <input type="text" placeholder="Be creative..." className="w-full bg-[#EDF2F7] mb-[12px] px-[16px] py-[12px]  " />
              </div>

              <div>
                <label htmlFor="" className="text-[12px] text-[#4A5568] mb-[8px] uppercase font-bold"> Tóm tắt</label>
                <textarea
                  name=""
                  id=""
                  placeholder="Tóm tắt ngắn gọn ..."
                  className="w-full bg-[#EDF2F7] mb-[12px] px-[16px] py-[12px]"
                ></textarea>
              </div>
            </form>
            <div className="mt-[16px] mb-[8px] text-[12px] text-[#4A5568] font-bold">
              Chọn bài viết của Series (ấn vào tiêu đề bài viết để chọn/bỏ chọn)
            </div>
            <ul>
              <div className="text-[13px] mt-[5px] mb-[16px] p-[5px] text-[#161616] border-[0.5px] border-[#E2E8F0]">Bạn đang không có bài viết nào.</div>
            </ul>
            <div className="flex flex-row-reverse ">
              <button className="flex justify-center items-center h-10 bg-sky_blue text-white rounded-full px-[24px] ml-[12px] font-[16px] ">
                <span>Tạo</span>
              </button>
              <button id="cancelBtn" type="button" className="flex justify-center items-center h-10 rounded-full px-[24px] font-[16px]" >
                <span>Huỷ</span>
              </button>
            </div>
          </div>

        </div>

        <div className="p-[20px] w-full flex flex-row-reverse">
          <button className="bg-sky_blue px-[24px] focus:outline-none flex items-center justify-center rounded-full h-[40px] ">
            <span className="text-[#ffffff]">Hoàn tất</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default SeriesForm;
