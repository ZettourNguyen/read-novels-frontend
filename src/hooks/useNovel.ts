import axiosInstance from '@/api';
import { INovelInputI } from '@/Page/Novel/Novel.interface';
import { useState } from 'react';

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

    return { createNovelAPI, loading, error };
};
