import { useState, useEffect } from 'react';
import axiosInstance from '@/api';


export interface IAuthorI {
    id: number,
    firstname: string,
    lastname: string,
    nickname: string,
    novelCount: number
}

export const useCategoryAuthorInNovel = (novelId: number) => {
    const [authorInNovel, setAuthorInNovel] = useState<IAuthorI>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAuthor = async () => {
        try {
            const response = await axiosInstance.get(`/author/novel/${novelId}`);
            setAuthorInNovel(response.data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAuthor();
    }, []);

    return { authorInNovel, loading, error, refetch: fetchAuthor};
};

export const useAuthor = () => {
    const [authors, setAuthors] = useState<IAuthorI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAuthors = async () => {
        try {
            const response = await axiosInstance.get(`author`);
            setAuthors(response.data);
            console.log(response.data)
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAuthors();
    }, []);

    return { authors, loading, error, refetch: fetchAuthors};
};

