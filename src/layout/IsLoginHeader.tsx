import { GoSearch } from "react-icons/go";
import {
  BiCaretDown,
  BiLogoFacebook,
  BiLogoSpotify,
  BiLogoYoutube,
} from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiFeather, GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import wideLogo from "../assets/imgs/wideLogo.png";
import { Link } from "react-router-dom";

function IsLoginHeader() {
  const categories = {
    categories: [
      "Quan điểm - Tranh luận",
      "Khoa học - Công nghệ",
      "Fitness",
      "Giáo dục",
      "Tâm lý học",
      "Điêu khắc Kiến trúc Mỹ thuật",
      "Lịch sử",
      "Âm nhạc",
      "Ô tô",
      "Xe máy",
      "Fashion",
      "Nhiếp ảnh",
      "The Brands",
      "Sự kiện Spiderum",
      "Thể thao",
      "Phát triển bản thân",
      "Chuyện thầm kín",
      "Thinking Out Loud",
      "Nấu ăn Ẩm thực",
      "Sáng tác",
      "Yêu",
      "WTF",
      "Du lịch",
      "Movie",
      "Sách",
      "Life style",
      "Góc nhìn thời sự",
      "Người trong muôn nghề",
      "Game",
    ],
  };

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
              <div className=" flex items-center justify-center h-[32px] w-[32px] mr-[8px]">
                <BiLogoYoutube size={20} />
              </div>
            </Link>
            <Link to={"/"}>
              <div className=" flex items-center justify-center h-[32px] w-[32px] mr-[8px]">
                <BiLogoSpotify size={20} />
              </div>
            </Link>
            <Link to={"/"}>
              <a className="hidden lg:flex items-center justify-center text-[12px] text-[#92400E] font-sans font-medium bg-[#FFF7ED] rounded-full px-[10px] py-[4px]">
                <img
                  src="https://spiderum.com/assets/icons/shop.svg"
                  alt=""
                  className="mr-[8px]"
                />
                Spider's Shop
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="mr-[20px] w-[40px] h-[40px] flex items-center justify-center text-[#969696] hover:bg-gray_light cursor-pointer">
            <GoSearch size={20} />
          </div>
          <div className="hidden lg:flex mr-[20px] w-[40px] h-[40px] items-center justify-center text-[#969696] hover:bg-gray_light cursor-pointer">
            <HiOutlineMail size={20} />
          </div>
          <div className="mr-[20px] w-[40px] h-[40px] flex items-center justify-center text-[#969696] hover:bg-gray_light cursor-pointer">
            <IoMdNotificationsOutline size={20} />
          </div>

          <Link to={"/viet-bai"}>
            <div className="flex rounded-full px-[24px] border-[0.8px] border-[#c5c5c5] mx-[4px]">
              <div className=" flex items-centerm pr-[8px] text-[#969696] py-[8px]">
                <GiFeather size={20} />
              </div>
              <button className="">Viết bài</button>
            </div>
          </Link>
          <div className="flex cursor-pointer mx-[4px] items-center">
            <div className="rounded-full flex items-center">
              <img
                className="h-[40px] rounded-full"
                src="https://www.gravatar.com/avatar/c25a350a81a2537fe5dd789f17d06565?d=wavatar&f=y"
                alt=""
              />
            </div>
            <div>
              <div className="h-[10px] flex items-center justify-center text-[#646464]  cursor-pointer">
                <BiCaretDown size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAV ITEM TAGS */}
      <div className="hidden lg:flex container h-[56px] items-center justify-between">
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
      </div>
    </div>
  );
}

export default IsLoginHeader;
