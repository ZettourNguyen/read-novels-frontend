import { IUpdateUser } from "@/types/user.interface";
import axiosInstance from ".";


export const viewApiRequest = {
    postView : async (chapterId: number, userId: number) =>{
        return await axiosInstance.post(`/view/increment/${chapterId}`, null, {
            params: { userId }
        });
    },
    getNovelViews : async (novelId : number) =>{
        return await axiosInstance.get(`/view/total/${novelId}`);
    },
}