import axiosInstance from '@/api';
import { ILoaddingListProps } from '@/types/another.interface';
import { IChapterCreate } from '@/types/chapter.interface';
import { ICreateNovel, IUpdateNovel } from '@/types/novel.interface';

const novelApiRequest = {
    getAllNovels: async () => {
        return await axiosInstance.get('/novel/');
    },

    createChapter: async (data: IChapterCreate) => {
        return await axiosInstance.post('/chapter', data);
    },

    createNovel: async (novelData: ICreateNovel) => {
        return await axiosInstance.post('/novel', novelData);
    },

    getLastNovels: async () => {
        return await axiosInstance.get('/novel/getlast');
    },

    getMostFollowedNovels: async () => {
        return await axiosInstance.get('/novel/follow/6');
    },

    getBanner: async () => {
        return await axiosInstance.get('/novel/banner/a');
    },

    getNovelsByPoster: async (posterId: number) => {
        return await axiosInstance.get(`/novel/me/${posterId}`);
    },

    getNovelsList: async ({ type, id, page, limit = 20 }: ILoaddingListProps) => {
        return await axiosInstance.get(`/novel/${type}/${id}`, {
            params: {
                page,
                limit,
            },
        });
    },

    getNovelDetails: async (novelId: number) => {
        return await axiosInstance.get(`/novel/${novelId}`);
    },

    getRandomNovels: async () => {
        return await axiosInstance.get('/novel/random/6');
    },

    searchNovels: async (keyword: string) => {
        return await axiosInstance.get('/novel/search', {
            params: { keyword },
        });
    },

    updateNovel: async (novelData: IUpdateNovel) => {
        const { id, ...updateData } = novelData;
        return await axiosInstance.patch(`/novel/${novelData.id}`, updateData);
    }
};

export default novelApiRequest;
