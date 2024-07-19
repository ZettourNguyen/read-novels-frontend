import axiosInstance from '@/api';

import { INovelInputI } from '@/Page/Novel/Novel.interface';
import { useEffect, useState } from 'react';

export interface IChapterInputI {
    title: string,
    content: string,
    novelId: number,
    index: number
}
export interface ICardNovelsI {
    id: number,
    title: string,
    image: string,
    banner: string,
    state: string,
    description: string,
    categoryId: number,
    categoryName: string
    posterId: string,
    posterName: string,
    posterAvatar: string,
}

export interface ITagI {
    id: number;
    name: string;
}

export interface INovelDetailsI {
    id: number;
    title: string;
    image: string;
    state: string;
    description: string;
    categoryId: number;
    categoryName: string;
    authorId: number;
    authorName: string;
    posterId: number;
    posterName: string;
    posterAvatar: string;
    createdAt: string;
    updatedAt: string;
    chapter0: number;
    countChaptersPublishedInLast7Days: number;
    views: number;
    numberOfNominations: number;
    numberSavedBookmark: number;
    tags: ITagI[];
}

export const useCreateNovel = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const createNovelAPI = async (novelData: INovelInputI) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axiosInstance.post('/novel', novelData);
            console.log('Novel created successfully:', response.status);

            setLoading(false);
        } catch (error) {
            console.error('Error creating novel:', error);
            setError('Đã xảy ra lỗi khi tạo tiểu thuyết');
            alert(error)
            setLoading(false);
            throw error;
        }
    };

    const createChapterAPI = async (data: IChapterInputI) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axiosInstance.post('/chapter', data);
            console.log('Novel created successfully:', response.data);
            setLoading(false);
            return response.data
        } catch (error) {
            console.error('Error creating novel:', error);
            setError('Đã xảy ra lỗi khi tạo tiểu thuyết');
            alert(error)
            setLoading(false);
            throw error;
        }
    }
    return { createNovelAPI, createChapterAPI, loading, error };
};

export interface NovelPublishedProps {
    id: number;
    title: string;
    createdAt: string;
    chapters: number;
}

export const useNovelsByPoster = (posterId: any) => {
    const [novels, setNovels] = useState<NovelPublishedProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!posterId) return;

        const fetchMyPublishedNovels = async () => {
            try {
                const response = await axiosInstance.get(`/novel/me/${posterId}`);
                setNovels(response.data);
                console.log(novels)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMyPublishedNovels();
    }, [posterId]);

    return { novels, loading, error };
};

export const useRandomNovels = () => {
    const [randomNovels, setRandomNovels] = useState<ICardNovelsI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchMyPublishedNovels = async () => {
            try {
                const response = await axiosInstance.get(`/novel/random/6`);
                setRandomNovels(response.data);
                console.log(randomNovels)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMyPublishedNovels();
    }, []);

    return { randomNovels, loading, error };
};

export const useNovelDetails = (novelId : number) => {
    const [novelDetails, setNovelDetails] = useState<INovelDetailsI>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchMyPublishedNovels = async () => {
            try {
                const response = await axiosInstance.get(`/novel/${novelId}`);
                setNovelDetails(response.data);
                console.log(novelDetails)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMyPublishedNovels();
    }, []);

    return { novelDetails, loading, error };
};