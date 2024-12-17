import axiosInstance from ".";

export const categoryApiReuqest = {
    getCategories: async() =>{
        return await axiosInstance.get('/category');
    } ,
    getNovelCategories: async(categoryId: number) =>{
        return await axiosInstance.get(`/category/novel/${categoryId}`);
    } ,
}