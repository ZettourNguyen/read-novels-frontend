import axiosInstance from '@/api';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { IUpdateUser, User } from '@/types/user.interface';
import { userApiRequest } from '@/api/user';

export const useUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { loadUser } = useAuth()

    const uploadAvatarAPI = async (data: IUpdateUser) => {
        try {
            setLoading(true);
            setError(null);
            const response = await userApiRequest.patchUser(data)
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

export const useUsers = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        if (user) {
            try {
                const response = await userApiRequest.getUsers(user.id)
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
    return { users, loading, error, refreshUsers: fetchUsers};
};
