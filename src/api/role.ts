import { getRoleName } from "@/hooks/useRole";
import axiosInstance from ".";

export const roleApiRequest = {
    getRoles:  async (userId: number) =>{
        return await axiosInstance.get(`/role/all-roles/${userId}`);
    },
    getRoleName: async (roleId: number) =>{
        return await axiosInstance.get(`/role/name/${roleId}`);
    },
    getUserRole: async (userId: number) =>{
        return await axiosInstance.get(`/role/user/${userId}`);
    },
}