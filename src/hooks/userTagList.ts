import { useState, useEffect } from 'react';
import axiosInstance from '@/api';

export interface TagProps {
    id: number
    name: string
}

export const useTagList = () => {
    const [tags, setTags] = useState<TagProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchtags = async () => {
            try {
                const response = await axiosInstance.get('/tags');
                setTags(response.data);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchtags();
    }, []);

    return { tags, loading, error };
};

