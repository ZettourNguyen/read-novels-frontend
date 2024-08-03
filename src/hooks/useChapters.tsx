import axiosInstance from "@/api";
import { IChapterWithIndexesI } from "@/Page/Chapter";
import { useCallback, useEffect, useState } from "react";
import { useIncrementView } from "./useView";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export interface IAddChaptersI {
    novelId: number,
    novelTitle: string,
    nextIndex: number
}

export interface IChaptersDetailsI {
    id: number;
    title: string;
    novelId: number;
    createdAt: string;
    updatedAt: string;
    index: number;
    isPublish: boolean;
    chapterLength: number;
    views: number
}

export const useAddChapters = (novelId: number) => {
    const [propsChapter, setPropsChapter] = useState<IAddChaptersI>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArrChapterOfNovel = async () => {
            try {
                const response = await axiosInstance.get(`/chapter/publish/${novelId}`);
                setPropsChapter(response.data);
                console.log(response.data.nextIndex)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };
        fetchArrChapterOfNovel();
    }, [novelId]);

    return { propsChapter, loading, error };
};
export interface IArrChaptersDetailsI {
    novelId: number,
    publishedOnly: boolean
}

export const useArrChaptersDetails = (data: IArrChaptersDetailsI) => {
    const [ArrChapters, setArrChapters] = useState<IChaptersDetailsI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchArrChapterOfNovel = useCallback(async () => {
        try {
            setLoading(true);
            let response;
            if (data.publishedOnly) {
                response = await axiosInstance.get(`/chapter/novelRead/${data.novelId}`);
            } else {
                response = await axiosInstance.get(`/chapter/novelAll/${data.novelId}`);
            }
            setArrChapters(response.data);
        } catch (error: any) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [data.novelId, data.publishedOnly]);

    useEffect(() => {
        fetchArrChapterOfNovel();
    }, [fetchArrChapterOfNovel]);

    return { ArrChapters, loading, error };
};

export const useGetChapterContent = (chapterId: number) => {
    const [chapter, setChapters] = useState<IChapterWithIndexesI>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const user = useSelector((state: RootState) => state.auth.user);
    const { incrementView } = useIncrementView();

    const fetchArrChapterOfNovel = async () => {
        try {
            const response = await axiosInstance.get(`/chapter/${chapterId}`);
            setChapters(response.data);
            if (user) {
                await incrementView(chapterId, user.id);
            }
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error.message || 'An error occurred';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchArrChapterOfNovel();
    }, [chapterId]);

    return { chapter, loading, error };
};