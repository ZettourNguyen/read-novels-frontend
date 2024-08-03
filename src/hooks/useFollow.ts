import axiosInstance from "@/api";
import actionNotification from "@/components/NotificationState/Toast";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAuthorI } from "./useAuthor";

export function useFollow(novelId: number) {
    const user = useSelector((state: RootState) => state.auth.user);
    const [idFollow, setIsFollow] = useState<number>(0);
    
    const fetchFollowStatus = async () => {
        try {
            if (user) {
                const response = await axiosInstance.get(`/follow/check/`, {
                    params: {
                        userId: user.id,
                        novelId
                    }
                });
                setIsFollow(response.data); // Assuming 1 means followed
            }
        } catch (error: any) {
            console.log(error?.message);
        }
    };

    useEffect(() => {
        fetchFollowStatus();
    }, [novelId, user]);

    const follow = async () => {
        try {
            if (user) {
                const response = await axiosInstance.post(`/follow/add`, {
                    userId: user.id,
                    novelId
                });
                console.log(response.data);
                actionNotification('Theo dõi thành công.', 'success');
                fetchFollowStatus(); // Refresh follow status
            }
        } catch (error) {
            actionNotification('Theo dõi thất bại, vui lòng thử lại.', 'error');
        }
    };

    const unfollow = async (id: number) => {
        try {
            if (user) {
                const response = await axiosInstance.delete(`/follow/delete/${id}`)
                console.log(response.data);
                actionNotification('Bỏ theo dõi thành công.', 'success');
                fetchFollowStatus(); // Refresh follow status
            }
        } catch (error) {
            actionNotification('Bỏ theo dõi thất bại, vui lòng thử lại.', 'error');
        }
    };

    return { idFollow, refetchFollow: fetchFollowStatus, follow, unfollow };
}

interface NovelFollow {
    id: string;
    title: string;
    image: string;
    banner: string;
    state: string;
    description: string;
    updatedAt: string;
    categoryId: string;
    categoryName: string;
    posterId: string;
    posterName: string;
    posterAvatar: string;
    author: IAuthorI[];
    followId: number
}

export function useGetFollow() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bookmark, setBookmark] = useState<NovelFollow[]>([]);

    const getAll = async () => {
        if (!user) return;

        try {
            const response = await axiosInstance.get(`/follow/all/${user.id}`);
            setBookmark(response.data);
            console.log(response.data)
        } catch (error) {
            actionNotification('Tải thất bại, vui lòng thao tác lại.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, [bookmark]); // Chỉ gọi getAll khi user thay đổi

    const removeBookmark = async (bookmarkId: number) => {
        try {
            const response = await axiosInstance.delete(`/follow/delete/${bookmarkId}`);
            actionNotification("Đã bỏ đánh dấu", "success")
        } catch (error) {
            actionNotification("Bỏ đánh dấu thất bại", "error")
        }
    }

    return { bookmark, loading, error, refetch: getAll, removeBookmark };
}