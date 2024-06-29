import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// const userName = useSelector((state: RootState) => state.auth.user)

function AccountForm() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [days, setDays] = useState([...Array(31).keys()].map((day) => day + 1));
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  const years = [...Array(50).keys()].map((year) => year + 1970);
  // change style change password form
  const [formStyle, setFormStyle] = useState({
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out",
  });
  const changeHeight = () => {
    setFormStyle((prevStyle) => ({
      ...prevStyle,
      maxHeight: prevStyle.maxHeight === "0" ? "325px" : "0",
      overflow: prevStyle.maxHeight === "0" ? "visible" : "hidden",
    }));
  };

  return (
    <div>
      {/* anh-bia */}
      <div>
        <form
          name=""
          action=""
          className="bg-gray hover:bg-opacity-90 h-40 text-white"
        >
          <label className="h-40 flex flex-col items-center justify-center cursor-pointer" htmlFor="cmr" >
            <BsCamera size={30} />
            <span className="mb-1">Thay doi anh bia</span>
          </label>
          <input
              type="file"
              className="hidden "
              id="cmr"
              accept="image/png, image/gif, image/jpeg"
            />
        </form>
      </div>
      <div className="mx-6">
        {/* avatar  */}
        <div className="mt-10 flex justify-between">
          <form
            action="post"
            name="avatar"
            className="bg-gray hover:bg-opacity-90 h-32 w-32 rounded-full text-white"
          >
            {/* <div className="h-32 flex items-center justify-center cursor-pointer ">
              <BsCamera size={30} />
            </div> */}
            <label
              className="h-32 flex items-center justify-center cursor-pointer "
              htmlFor="cmr"
            >
              <BsCamera size={30} />
            </label>
            <input
              type="file"
              className="hidden "
              id="cmr"
              accept="image/png, image/gif, image/jpeg"
            />
          </form>
          <div className="w-4/6">
            <textarea
              name=""
              id=""
              className="h-32 w-full py-3 px-4 mb-3 border border-gray outline-none text-gray-700 rounded "
            ></textarea>
          </div>
        </div>
        {/* display name, date,... */}
        <div>
          <div className="flex gap-10">
            <div className="flex-1">
              <span>TÊN HIỂN THỊ</span>
              <input
                type="text"
                className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
                value={user ? user.displayName : ""}
              />
            </div>
            <div className="flex-1">
              <span>EMAIL</span>
              <input
                type="text"
                className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
                value={user ? user.email : ""}
              />
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex-1">
              <span>NGÀY SINH</span>
              <div className="flex gap-2 ">
                <select
                  name="day"
                  id="day"
                  className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  name="month"
                  id="month"
                  className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
                >
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  id="year"
                  className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-1">
              <span>GIỚI TÍNH</span>
              <div className="flex gap-14 mt-2">
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="radioGender"
                    className="checked:border-sky_blue_light"
                    id="radioGender1"
                  />
                  <label htmlFor="radioGender1" className="cursor-pointer">
                    Nam
                  </label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="radioGender"
                    className="checked:text-sky_blue_light"
                    id="radioGender2"
                  />
                  <label htmlFor="radioGender2" className="cursor-pointer">
                    Nu
                  </label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="radioGender"
                    className="checked:text-sky_blue_light"
                    id="radioGender3"
                  />
                  <label htmlFor="radioGender3" className="cursor-pointer">
                    Orther
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* change pass */}
        <div className="flex justify-items-center">
          <button
            type="button"
            onClick={changeHeight}
            className="shadow-md rounded-full p-2 w-full bg-white bg-opacity-70 "
          >
            Đổi mật khẩu
          </button>
        </div>
        <form style={formStyle}>
          {/* Rest of your form content... */}
          <div className="mt-4">
            <span>MẬT KHẨU CŨ</span>
            <input
              type="text"
              className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
              required
              placeholder="****************"
            />
          </div>
          <div className="">
            <span>MẬT KHẨU MỚI</span>
            <input
              type="text"
              className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
              required
              placeholder="****************"
            />
          </div>
          <div className="">
            <span>NHẬP LẠI MẬT KHẨU MỚI</span>
            <input
              type="text"
              className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
              required
              placeholder="****************"
            />
          </div>
          <div className="flex justify-items-center mx-4">
            <button
              onClick={changeHeight}
              className="rounded-full p-2 w-full bg-sky_blue_light bg-opacity-70 "
            >
              Xac nhan
            </button>
          </div>
        </form>

        {/* SỐ CHỨNG MINH THƯ ĐỊA CHỈ SỐ ĐIỆN THOẠI */}
        <div className="mt-10">
          <div className="flex gap-10">
            <div className="flex-1">
              <span>SỐ CHỨNG MINH THƯ</span>
              <input
                type="text"
                className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
              />
            </div>
            <div className="flex-1">
              <span>SỐ ĐIỆN THOẠI</span>
              <input
                type="text"
                className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
              />
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex-1">
              <span>ĐỊA CHỈ</span>
              <input
                type="text"
                className="text-base h-10 px-2 w-full mb-4 border border-gray outline-none rounded"
              />
            </div>
          </div>
        </div>

        {/* darkmode,... */}
        <div className="flex justify-between gap-10 mt-2">
          {/* hang 1 */}
          <div className="flex-1 ">
            <div className="flex justify-between mb-2">
              <label htmlFor="">Số lượng người tôi theo dõi</label>
              <div className="">
                <input
                  type="checkbox"
                  className="appearance-none focus:outline-none checked:bg-sky_blue_light h-6 w-10 bg-gray bg-opacity-10 
                rounded-full before:inline-block border-gray border p-0.5
                before:rounded-full before:bg-white 
                before:h-4  before:w-4 before:border before:border-gray
                checked:before:translate-x-full 
                shadow-inner transition-all duration-300 before:ml-0.5"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <label htmlFor="">Số lượng người theo dõi tôi</label>
              <div className="">
                <input
                  type="checkbox"
                  className="appearance-none focus:outline-none checked:bg-sky_blue_light h-6 w-10 bg-gray bg-opacity-10 
                rounded-full before:inline-block border-gray border p-0.5
                before:rounded-full before:bg-white 
                before:h-4  before:w-4 before:border before:border-gray
                checked:before:translate-x-full 
                shadow-inner transition-all duration-300 before:ml-0.5"
                />
              </div>
            </div>
          </div>
          {/* hang 2 */}
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <label htmlFor="">Bình luận đã gửi</label>
              <div className="">
                <input
                  type="checkbox"
                  className="appearance-none focus:outline-none checked:bg-sky_blue_light h-6 w-10 bg-gray bg-opacity-10 
                rounded-full before:inline-block border-gray border p-0.5
                before:rounded-full before:bg-white 
                before:h-4  before:w-4 before:border before:border-gray
                checked:before:translate-x-full 
                shadow-inner transition-all duration-300 before:ml-0.5"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <label htmlFor="">Darkmode</label>
              <div className="">
                <input
                  type="checkbox"
                  className="appearance-none focus:outline-none checked:bg-sky_blue_light h-6 w-10 bg-gray bg-opacity-10 
                rounded-full before:inline-block border-gray border p-0.5
                before:rounded-full before:bg-white 
                before:h-4  before:w-4 before:border before:border-gray
                checked:before:translate-x-full 
                shadow-inner transition-all duration-300 before:ml-0.5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ketnoifb */}
        <div>
          <button
            type="button"
            className="px-4 py-2 h-10 rounded-md mt-10 bg-sky_blue text-white"
          >
            Kết nối facebook
          </button>
        </div>
      </div>
    </div>
  );
}
export default AccountForm