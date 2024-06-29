import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProfileForm from "./profileForm";
import AccountForm from "./accountForm";
import SeriesForm from "./seriesForm";
import BlackListForm from "./blackListForm";
// const userName = useSelector((state: RootState) => state.auth.user)


function UserSetup() {
  // handleSeting
  
  const [activeForm, setActiveForm] = useState<string | null>("taiKhoan");

  const handleSetting = (formName: string) => {
    setActiveForm(formName);
  };

  return (
    <div className="m-10 flex justify-center">
      <div className="w-[45vw] relative">
        {/* setting option */}
        <ul className="fixed top-40 transform translate-x-[-160%]">
          <li
            onClick={() => handleSetting("taiKhoan")}
            className={`hover:text-sky_blue_light px-5 py-2   ${
              activeForm === "taiKhoan"
                ? "text-gray font-bold border-l-4  border-sky_blue_light pl-2"
                : "text-gray-500"
            }`}
          >
            Tài khoản
          </li>
          <li
            onClick={() => handleSetting("tieuSu")}
            className={`hover:text-sky_blue_light px-5 py-2   ${
              activeForm === "tieuSu"
                ? "text-gray font-bold border-l-4  border-sky_blue_light pl-2"
                : "text-gray-500"
            }`}
          >
            Tiểu sử
          </li>
          <li
            onClick={() => handleSetting("Series")}
            className={`hover:text-sky_blue_light px-5 py-2   ${
              activeForm === "Series"
                ? "text-gray font-bold border-l-4  border-sky_blue_light pl-2"
                : "text-gray-500"
            }`}
          >
            Series
          </li>
          <li
            onClick={() => handleSetting("daChan")}
            className={`hover:text-sky_blue_light px-5 py-2   ${
              activeForm === "daChan"
                ? "text-gray font-bold border-l-4  border-sky_blue_light pl-2"
                : "text-gray-500"
            }`}
          >
            Đã chặn
          </li>
        </ul>

        {/* form setting account */}
        <form action="">
          {activeForm === "taiKhoan" && <AccountForm />}
          {activeForm === "tieuSu" && <ProfileForm />}
          {activeForm === "Series" && <SeriesForm />}
          {activeForm === "daChan" && <BlackListForm />}
        </form>
      </div>
    </div>
  );
}

export default UserSetup;
