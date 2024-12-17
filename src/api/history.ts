// history.api.ts
import axiosInstance from "@/api";

export const historyApiRequest = {
    getHistoriesApi : async (userId: number) => {
        return await axiosInstance.get(`/history/${userId}`);
    },
    
    removeHistoryApi : async (historyId: number) => {
        return await axiosInstance.delete(`/history/remove/${historyId}`)
    },
    
    postHistoryApi : async (userId: number, chapterId: number) => {
        return await axiosInstance.post(`/history/add`, { userId, chapterId })
    },
}
