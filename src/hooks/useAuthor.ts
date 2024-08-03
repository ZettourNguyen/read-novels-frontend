import { useState, useEffect } from 'react';
import axiosInstance from '@/api';


export interface IAuthorI{
    id: number,
    firstname: string,
    lastname: string,
    nickname: string
}

export const useCategoryAuthorInNovel = (novelId: number) => {
    const [authorInNovel, setAuthorInNovel] = useState<IAuthorI>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await axiosInstance.get(`/author/novel/${novelId}`);
                setAuthorInNovel(response.data);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthor();
    }, []);

    return { authorInNovel, loading, error };
};

