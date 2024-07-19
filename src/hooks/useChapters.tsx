import axiosInstance from "@/api";
import { useEffect, useState } from "react";

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
    isPublish: boolean; // Thêm trường này nếu có
    length: number; // Thêm trường này nếu có
    views: number; // Thêm trường này nếu có
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

export const useArrChaptersDetails = (novelId: number) => {
    const [ArrChapters, setArrChapters] = useState<IChaptersDetailsI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArrChapterOfNovel = async () => {
            try {
                const response = await axiosInstance.get(`/chapter/novel/${novelId}`);
                setArrChapters(response.data);
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchArrChapterOfNovel();
    }, [novelId]);

    return { ArrChapters, loading, error };
};
