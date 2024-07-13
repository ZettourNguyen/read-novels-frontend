import { useState, useEffect } from 'react';
import axiosInstance from '@/api';

export interface CategoryProps {
    id: number
    name: string
    description:string
}

export const useCategoryList = () => {
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axiosInstance.get('/category');
                setCategories(response.data);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, loading, error };
};

