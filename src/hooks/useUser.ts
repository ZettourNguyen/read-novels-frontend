import axiosInstance from '@/api';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { IRoleI } from './useRole';

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

interface IUserListI {
    id: number;
    username: string;
    email: string;
    birthday: Date;
    gender: number;
    blacklist: boolean;
    confirmed: boolean;
    createdAt: Date;
}

export const useUserList = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const [users, setUsers] = useState<IUserListI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        if (user) {

            try {
                const response = await axiosInstance.get(`/auth/user/${user.id}`);
                setUsers(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

    };
    useEffect(() => {
        fetchUsers();
    }, []);



    return { users, loading, error, refreshUserList: fetchUsers};
};
