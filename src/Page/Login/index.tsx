import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import Logo from "@/assets/imgs/logoKTC.png"


function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [isRegistering, setIsRegistering] = useState<boolean>(false); 
    const { handlelogin } = useAuth()

    const handleRegisterClick = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === rePassword) {
            console.log("start init handleRegisterClick")
            console.log("Email:", email);
            console.log("Password:", password);
        }



    };

    const handleLoginClick = () => {
        // Xử lý sự kiện khi click vào nút Đăng nhập
        console.log("Đăng nhập");

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("rePassword:", rePassword);

        handlelogin(email, password)


    };


    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <div className=" sm:w-full sm:max-w-sm">
                <div className="mb-4">
                    <a href="http://localhost:5173/">
                        <img
                            className="mx-auto h-30 w-40"
                            src={Logo}
                            alt="Workflow"
                        />
                    </a>
                </div>

                <form className="" onSubmit={handleRegisterClick}>
                    <div className="text-gray_text">
                        <input
                            type="text"
                            id="username"
                            value={email}
                            className='text-base h-10 px-2 w-full mb-4 border border-gray outline-none'
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
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
                        <input
                            type="password"
                            id="rePassword"
                            value={rePassword}
                            className='text-base h-10 px-2 w-full mb-4 border border-gray outline-none'
                            placeholder="Mật khẩu"
                            onChange={(e) => setRePassword(e.target.value)}
                            required={isRegistering}
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button type="submit" className="bg-gray_border
                         hover:bg-sky_blue_light text-center hover:text-white 
                         py-2 w-full"
                         onClick={() => setIsRegistering(true)}>
                            Đăng ký
                        </button>
                        <button type="button" className="bg-sky_blue_light hover:bg-sky_blue_light_500 text-center
                         text-white py-2 w-full"
                         onClick={handleLoginClick}
                            >
                            Đăng nhập
                        </button>

                    </div>

                    <div className="mt-3 ">
                        <a href="" className="text-sky_blue hover:underline">Quên mật khẩu?</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default LoginForm;
