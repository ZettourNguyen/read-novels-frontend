import axiosInstance from "@/api";
export const authApiRequest = {
    loginApi : async (email: string, password: string) => {
        return axiosInstance.post('/auth/login', { email, password });
    },
    
    // Hàm đăng ký
    registerApi : async (email: string, password: string) => {
        return axiosInstance.post('/auth/register', { email, password });
    },
    
    // Hàm lấy thông tin người dùng
    getUser : async () => {
        return axiosInstance.get('/auth/getUser');
    },
    getUserNameById : async (id:number) => {
        return await axiosInstance.get(`/auth/name/${id}`);
    }
}
