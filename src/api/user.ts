import { IUpdateUser } from "@/types/user.interface";
import axiosInstance from ".";


export const userApiRequest = {
    patchUser : async (data: IUpdateUser) =>{
        return await axiosInstance.post('/auth/avatar', data);
    },
    getUsers : async (userId : number) =>{
        return await axiosInstance.get(`/auth/list/${userId}`);
    },
}