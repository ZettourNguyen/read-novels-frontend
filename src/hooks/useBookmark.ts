import axiosInstance from "@/api";
import actionNotification from "@/components/NotificationState/Toast";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IGetHistoryUserI } from "./useHistory";
import { IAuthorI } from "./useAuthor";

export function useBookmark(novelId: number) {
    const user = useSelector((state: RootState) => state.auth.user)
    const [idBookmark, setIdBookmark] = useState<number>(0)

    const fetchCheckBookmark = async () => {
        try {
            if (user) {
                const response = await axiosInstance.get(`/bookmark/check/`, {
                    params: {
                        userId: user.id, novelId
                    }
                });
                setIdBookmark(response.data);
            }
        } catch (error: any) {
            console.log(error?.message)
        }
    };

    useEffect(() => {
        fetchCheckBookmark()
    }, [novelId, user]);

    const addBookmark = async () => {
        try {
            if (user) {
                const response = await axiosInstance.post(`/bookmark/add`, {
                    userId: user.id, novelId
                });
                console.log(response.data)
                actionNotification('Cất giữ thành công.', 'success')
                fetchCheckBookmark(); // Refresh bookmark state
            }
        } catch (error) {
            actionNotification('Cất giữ thất bại, vui lòng cất giữ lại.', 'error')
        }
    }

    const rmBookmark = async (id: number) => {
        try {
            if (user) {
                const response = await axiosInstance.delete(`/bookmark/delete/${id}`);
                console.log(response.data)
                actionNotification('Hủy cất giữ thành công.', 'success')
                fetchCheckBookmark(); // Refresh bookmark state
            }
        } catch (error) {
            actionNotification('Hủy cất giữ thất bại, vui lòng thao tác lại.', 'error')
        }
    }



    return { idBookmark, refetch: fetchCheckBookmark, addBookmark, rmBookmark }
}

interface NovelBookmark {
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
    bookmarkId: number
}

export default function useGetBookmark() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bookmark, setBookmark] = useState<NovelBookmark[]>([]);

    const getAll = async () => {
        if (!user) return;

        try {
            const response = await axiosInstance.get(`/bookmark/all/${user.id}`);
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
            const response = await axiosInstance.delete(`/bookmark/delete/${bookmarkId}`);
            actionNotification("Đã bỏ cất giữ", "success")
        } catch (error) {
            actionNotification("Bỏ cất giữ thất bại", "error")
        }
    }

    return { bookmark, loading, error, refetch: getAll, removeBookmark };
}