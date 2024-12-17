
import axiosInstance from "@/api";

export const followApiRequest = {
    checkFollowStatus : async (userId: number, novelId: number) => {
        return await axiosInstance.get(`/follow/check/`, {
            params: { userId, novelId },
        });
    },
    
    addFollow : async (userId: number, novelId: number) => {
        return await axiosInstance.post(`/follow/add`, { userId, novelId });
    },
    
    deleteFollow : async (followId: number) => {
        return await axiosInstance.delete(`/follow/delete/${followId}`);
    },
    
    getAllFollows : async (userId: number) => {
        return await axiosInstance.get(`/follow/all/${userId}`);
    },
    
}