import { GoSearch } from "react-icons/go";
import {
  BiLogoFacebook,
} from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import wideLogo from "../assets/imgs/wideLogo.png";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa"; 
import { useEffect, useRef, useState } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import axiosInstance from "@/api";
function IsLoginHeader() {
  const user = useSelector((state: RootState) => state.auth.user);
  const avatarUrl = user && user.avatar ? user.avatar : "https://staticvn.sangtacvietcdn.xyz/img/useravatar/default.png";


  const [menuNavigate2, setMenuNavigate2] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Sử dụng useRef để tham chiếu đến phần tử menu

  const toggleOverlay = () => {
    setMenuNavigate2(!menuNavigate2);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuNavigate2(false);
    }
  };
  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      await axiosInstance.post('/auth/logout', accessToken);
      localStorage.clear()
      window.location.reload()
    } catch (error: any) {

    } finally {

    }

  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      className="pt-[10px]"
      style={{
        boxShadow: "rgb(0 0 0 / 8%) 0px 3px 8px",
      }}
    >
      <div className="container h-[48px] flex items-center justify-between">
        <div className="flex items-center">
          <Link to={"/"}>
            <div className="h-[48px] w-[110px] flex items-center justify-between">
              <img src={wideLogo} alt="" className="object-cover h-[25px]" />
            </div>
          </Link>
          <div className="flex items-center border-l-[0.1px] text-[#606266] ml-[16px] pl-[8px] border-gray_light">
            <Link to={"/"}>
              <div className=" flex items-center justify-center h-[32px] w-[32px] mr-[8px]">
                <BiLogoFacebook size={20} />
              </div>
            </Link>

            <Link to={"/"}>
              <div className="hidden lg:flex items-center justify-center text-[12px] text-[#92400E] font-sans font-medium bg-[#FFF7ED] rounded-full px-[10px] py-[4px]">
                <div className="mr-2"><FaBookOpen /></div>
                Kho truyện chữ
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="mr-[20px] w-[40px] h-[40px] flex items-center justify-center text-[#969696] hover:bg-gray_light cursor-pointer">
            <GoSearch size={20} />
          </div>
          {/* <div className="hidden lg:flex mr-[20px] w-[40px] h-[40px] items-center justify-center text-[#969696] hover:bg-gray_light cursor-pointer">
            <HiOutlineMail size={20} />
          </div> */}
          <div className="mr-[20px] w-[40px] h-[40px] flex items-center justify-center text-[#969696] hover:bg-gray_light cursor-pointer">
            <IoMdNotificationsOutline size={20} />
          </div>

          {/* <Link to={"/viet-bai"}>
            <div className="flex rounded-full px-[24px] border-[0.8px] border-[#c5c5c5] mx-[4px]">
              <div className=" flex items-centerm pr-[8px] text-[#969696] py-[8px]">
                <GiFeather size={20} />
              </div>
              <button className="">Viết bài</button>
            </div>
          </Link> */}
          <div className="flex cursor-pointer mr-[16px] items-center" onClick={toggleOverlay}>
            <div className="rounded-full flex items-center relative" ref={menuRef}>
              <img
                className="h-[40px] rounded-full"
                src={avatarUrl}
                alt=""
              />
              {menuNavigate2 && (
                <div className="absolute top-[44px] left-[-125px] right-0 bg-white text-gray_text p-2"
                  style={{ boxShadow: '0px 0px 20px 5px #61e4fc' }}>
                  <ul>
                    <div className="py-3 cursor-text text-center border-b border-gray">{user?.username}</div>
                    <Link to={"/user/setup"}>
                      <li className="py-3 px-1 hover:bg-[#efefef]">
                        Thông tin cá nhân
                      </li>
                    </Link>

                    <Link to={"/user/setup"}>
                      <li className="py-3 px-1 hover:bg-[#efefef]">Cài đặt</li>
                    </Link>
                    <Link to={"/uploader"}>
                      <li className="py-3 px-1 border-gray border-t hover:bg-[#efefef]">
                        Đăng truyện</li>
                    </Link>
                    <li className="py-3 px-1  hover:bg-[#efefef]">
                      <a href="">Truyện đánh dấu</a>
                    </li>
                    <li className="py-3 px-1 hover:bg-[#efefef]">
                      <a href="">Truyện theo dõi</a>
                    </li>
                    <li className="py-3 px-1 hover:bg-[#efefef]">
                      <a href="">Truyện đã xem</a>
                    </li>
                    <li className="py-3 px-1 hover:bg-[#efefef]">
                      <a href="">Truyện đã đăng</a>
                    </li>

                    <li onClick={handleLogout}
                      className="py-3 px-1 border-gray border-t hover:bg-[#efefef] text-red">
                      Đăng xuất</li>

                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* NAV ITEM TAGS */}
      {/* <div className="hidden lg:flex container h-[56px] items-center justify-between">
        <ul className="flex items-center space-x-[90px] font-normal uppercase text-[12.8px] font-sans text-[#161616]">
          <li className="cursor-pointer hover:text-sky_blue_light">Quan điểm - Tranh luận</li>
          <li className="cursor-pointer hover:text-sky_blue_light">Khoa học - Công nghệ</li>
          <li className="cursor-pointer hover:text-sky_blue_light">Giáo dục</li>
          <li className="cursor-pointer hover:text-sky_blue_light">Thể thao</li>
          <li className="cursor-pointer hover:text-sky_blue_light">Sự kiện Spiderum</li>
        </ul>
        <div className="flex items-center justify-end text-[#969696]">
          <button>
            <GiHamburgerMenu size={18} />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default IsLoginHeader;
