import axiosInstance from "@/api";
import { Author, IAuthors } from "@/types/author.interface";

// Lấy thông tin tác giả của một tiểu thuyết
export const authorApiRequest = {
    getAuthorInNovel: (novelId: number) => {
        return axiosInstance.get<Author>(`/author/novel/${novelId}`);
    },

    // Lấy danh sách tất cả tác giả
    getAuthors: () => {
        return axiosInstance.get<IAuthors[]>(`/author`);
    },

}