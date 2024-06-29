import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {handlelogin} = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý đăng nhập - có thể gọi API để kiểm tra thông tin đăng nhập
        console.log("Username:", username);
        console.log("Password:", password);
        // Đặt logic xử lý đăng nhập của bạn ở đây
        handlelogin(username,password)

    };

    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center"> 
            <div className=" sm:w-full sm:max-w-sm">
                <div className="mb-4">
                    <a href="http://localhost:5173/">
                        <img
                            className="mx-auto h-20 w-auto"
                            src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png"
                            alt="Workflow"
                        />
                    </a>
                </div>

                <form className="" onSubmit={handleSubmit}>
                    <div className="text-gray_text">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            className='text-base h-10 px-2 w-full mb-4 border border-gray outline-none'
                            placeholder="Tên đăng nhập hoặc email"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            className='text-base h-10 px-2 w-full mb-4 border border-gray outline-none'
                            placeholder="Mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>
                    <div className="bg-sky_blue_light hover:bg-sky_blue_light_500 text-center text-white py-2">
                        <button type="submit" className="w-[100%] h-[100%]">Đăng nhập</button>
                    </div>
                    <div className="mt-3 ">
                        <a href="" className="text-sky_blue hover:underline">Quên mật khẩu?</a>
                    </div>
                    <div className="mt-3 ">
                        <label htmlFor="">Không có tài khoản? </label>
                        <a href="" className="text-sky_blue hover:underline">Đăng ký ngay</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
