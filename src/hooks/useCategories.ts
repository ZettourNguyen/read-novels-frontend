import { useState, useEffect } from 'react';
import axiosInstance from '@/api';
import { categoryApiReuqest } from '@/api/category';

export interface CategoryProps {
    id: number
    name: string
    description: string
}

export const useCategories = () => {
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const fetchCategories = async () => {
        try {
            const response = await categoryApiReuqest.getCategories()
            setCategories(response.data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, loading, error, refetch: fetchCategories };
};

export const useNovelCategories = (categoryId: number) => {
    const [NovelCategories, setNovelCategories] = useState<CategoryProps>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryApiReuqest.getNovelCategories(categoryId)
                setNovelCategories(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (categoryId !== 0) {
            fetchCategories();
        }
    }, []);

    return { NovelCategories, loading, error };
};

