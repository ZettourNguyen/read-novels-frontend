import axiosInstance from "@/api"

export const bookmarkApiRequest = {
    fetchCheckBookmarkAPI: async (userId: number, novelId: number) => {
        return await axiosInstance.get(`/bookmark/check`, {
            params: { userId, novelId }, 
        });
    }
    ,

    addBookmarkAPI: async (userId: number, novelId: number) => {
        return await axiosInstance.post(`/bookmark/add`, { userId, novelId });
    },

    removeBookmarkAPI: async (bookmarkId: number) => {
        return await axiosInstance.delete(`/bookmark/delete/${bookmarkId}`)
    },

    getAllBookmarksAPI: async (userId: number) => {
        return await axiosInstance.get(`/bookmark/all/${userId}`)
    },
}
