import Toggle from "@/components/Toggle";
import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


function ProfileForm() {
  return (
    <div>
      <form action="" className="h-[100vh]">
        <div className="">
          <div className="mb-14">
            <span>CÔNG VIỆC HIỆN TẠI</span>
            <button type="button" className="w-full p-4 flex justify-center items-center rounded-[4px] border-dashed border-[#e1e1e1] border-[2px] py-[15px] ">
              <span className="">Them Cong Viec</span>
            </button>
          </div>
          <div className="mb-14">
            <span>CÔNG VIỆC HIỆN TẠI</span>
            <button type="button" className="w-full p-4 flex justify-center items-center rounded-[4px] border-dashed border-[#e1e1e1] border-[2px] py-[15px] ">
              <span className="">Them Cong Viec</span>
            </button>
          </div>
          <div className="mb-14">
            <span>CÔNG VIỆC HIỆN TẠI</span>
            <button type="button" className="w-full p-4 flex justify-center items-center rounded-[4px] border-dashed border-[#e1e1e1] border-[2px] py-[15px] ">
              <span className="">Them Cong Viec</span>
            </button>
          </div>
          <div className="mb-14">
            <span>CÔNG VIỆC HIỆN TẠI</span>
            <button type="button" className="w-full p-4 flex justify-center items-center rounded-[4px] border-dashed border-[#e1e1e1] border-[2px] py-[15px] ">
              <span className="">Them Cong Viec</span>
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-sky_blue_light text-[#fff] px-[24px] py-[8px] rounded-[20px]">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
