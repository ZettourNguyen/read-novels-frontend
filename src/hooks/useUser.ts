import axiosInstance from '@/api';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';

interface avatarUpdate {
    id: string
    avatar: string
}

export const useUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { loadUser } = useAuth()

    const uploadAvatarAPI = async (data: avatarUpdate) => {
        try {

            setLoading(true);
            setError(null);

            const response = await axiosInstance.post('/auth/avatar', data);
            console.log('update avatar successfully:', response.status);
            loadUser()
            setLoading(false);
        } catch (error) {
            setError('Đã xảy ra lỗi khi tạo tiểu thuyết');
            alert(error)
            throw error;
        }
    }

    return { loading, error, uploadAvatarAPI };
};