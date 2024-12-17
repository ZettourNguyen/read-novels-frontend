// chapter.api.ts
import axiosInstance from "@/api";
import { IArrChaptersDetails } from "@/types/novel.interface";

export const chapterApiRequest = {
    getChapters : async (data: IArrChaptersDetails) => {
        const endpoint = data.publishedOnly 
        ? `/chapter/novelRead/${data.novelId}` 
        : `/chapter/novelAll/${data.novelId}`;
        return await axiosInstance.get(endpoint);
    },
    
    getChapterContent : async (chapterId: number) => {
        return await axiosInstance.get(`/chapter/${chapterId}`);
    },
    
    getPublishedChapters : async (novelId: number) => {
        return await axiosInstance.get(`/chapter/publish/${novelId}`);
    }
    
}