import Logo from "@/assets/imgs/wideLogo-Photoroom.png"
import Published from "./published"
import { useState } from "react";
import NewNovel from "./newNovel";
import { Link } from "react-router-dom";


export default function Uploader() {
    const [activeForm, setActiveForm] = useState<string | null>("Published");

    const handleSetting = (formName: string) => {
        setActiveForm(formName);
    };



    return (
        <div className="flex h-full w-full bg-[#F7F6F9]">
            <div className="bg-white w-[260px] min-h-screen px-4 
            shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] 
            z-[1003] flex-col text-[#292929]
            transition transform ease-in-out">asdasd</div>
            <div className="bg-white w-[260px] min-h-screen px-4  fixed
            shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] 
            z-[1003] flex-col text-[#292929]
            transition transform ease-in-out">

                <Link to={"/"}>
                    <div className="text-4xl py-5">
                        <img src={Logo} alt="" className="flex " />
                    </div>
                </Link>
                <div
                    className={`py-2 my-1 hover:bg-sky_blue_light hover:text-white rounded-md px-2
                ${activeForm === "Published"
                            ? " font-bold bg-sky_blue_light pl-2 text-white"
                            : "text-gray_text"}`}
                    onClick={() => handleSetting("Published")}
                >Truyện Đã đăng</div>

                <div className={`py-2 my-1 hover:bg-sky_blue_light hover:text-white rounded-md px-2
                ${activeForm === "NewNovel" ? " font-bold bg-sky_blue_light pl-2 text-white"
                        : "text-gray_text"}
                `}
                    onClick={() => handleSetting("NewNovel")}
                >Thêm mới</div>

                <div className={`py-2 my-1 hover:bg-sky_blue_light hover:text-white rounded-md px-2
                ${activeForm === "Statistic" ? " font-bold bg-sky_blue_light pl-2 text-white"
                        : "text-gray_text"}
                `}
                    onClick={() => handleSetting("Statistic")}
                >Thống kê</div>

                <div className={`py-2 my-1 hover:bg-sky_blue_light hover:text-white rounded-md px-2
                ${activeForm === "ReportHandle" ? " font-bold bg-sky_blue_light pl-2 text-white"
                        : "text-gray_text"}
                `}
                    onClick={() => handleSetting("ReportHandle")}
                >Xử lý báo cáo</div>

                <div className={`py-2 my-1 hover:bg-sky_blue_light hover:text-white rounded-md px-2
                ${activeForm === "ThingsToKnow" ? " font-bold bg-sky_blue_light pl-2 text-white"
                        : "text-gray_text"}
                `}
                    onClick={() => handleSetting("ThingsToKnow")}
                >Kiến thức cơ bản</div>

            </div>
            <div className="flex-1 h-full w-full">
                <div className="bg-white h-[60px] w-[94%] mx-auto my-4
                shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md">

                </div>

                {activeForm === "Published" &&
                    <div className="bg-white h-max w-[94%] mx-auto my-6
                shadow-[0_2px_8px_rgba(47,43,61,0.2),0_0_transparent,0_0_transparent] rounded-md">
                        <Published />
                    </div>
                }

                <div className="h-max w-[94%] mx-auto my-6">

                    {activeForm === "NewNovel" && <NewNovel />}
                    {activeForm === "Statistic" && <Published />}
                    {activeForm === "ReportHandle" && <Published />}
                    {activeForm === "ThingsToKnow" && <Published />}
                </div>

            </div>
        </div>
    )
}