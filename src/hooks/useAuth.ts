import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { loadUserFail, loadUserSuccess, login } from "@/store/auth/auth.slice";
import history from "@/router/history";
import actionNotification from "@/components/NotificationState/Toast";
import { authApiRequest } from "@/api/auth";
import axios from "axios";

const useAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {}, []);

    const handlelogin = async (email: string, password: string) => {
        try {
            const response = await authApiRequest.loginApi(email, password);
            const data = response.data;
            const accessToken = data.accessToken;

            localStorage.setItem('accessToken', accessToken);
            loadUser();
            dispatch(login());
            history.push('/');
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.data || 'Đã xảy ra lỗi không xác định.';
                actionNotification(`${errorMessage}`, "error");
            } else {
                actionNotification(`Đăng nhập thất bại.`, "error");
            }
            dispatch(loadUserFail());
        }
    };

    const handleRegister = async (email: string, password: string) => {
        try {
            const response = await authApiRequest.registerApi(email, password);
            if (response.data) {
                handlelogin(email, password);
            }
        } catch (error: any) {
            actionNotification(error?.response?.data?.message, 'error');
        }
    };

    const loadUser = async () => {
        try {
            const res = await authApiRequest.getUser();
            if (res.data) {
                dispatch(loadUserSuccess(res.data));
            }
        } catch (error) {
            dispatch(loadUserFail());
        }
    };

    return {
        handlelogin,
        handleRegister,
        loadUser,
    };
};

export default useAuth;
