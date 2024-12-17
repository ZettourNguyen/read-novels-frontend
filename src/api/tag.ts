import axiosInstance from ".";

export const tagApiRequest = {
    getTags : async () =>{
        return await axiosInstance.get('/tags');
    },
    getTagsNovel : async (novelId : number) =>{
        return await axiosInstance.get(`/tags/novel/${novelId}`);
    },
    getTagName: async (type: string, id: number) => {
        return axiosInstance.get(`/${type}/name/${id}`);
    }
}