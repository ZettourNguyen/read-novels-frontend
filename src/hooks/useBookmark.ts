import { bookmarkApiRequest } from "@/api/bookmark";
import actionNotification from "@/components/NotificationState/Toast";
import { RootState } from "@/store/store";
import { IBookmarkSummary } from "@/types/bookmark.interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useBookmark(novelId: number) {
    const user = useSelector((state: RootState) => state.auth.user)
    const [idBookmark, setIdBookmark] = useState<number>(0)

    const fetchCheckBookmark = async () => {
        try {
            if (user) {
                const response = await bookmarkApiRequest.fetchCheckBookmarkAPI(user.id, novelId);
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
                await bookmarkApiRequest.addBookmarkAPI(user.id, novelId);
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
                await bookmarkApiRequest.removeBookmarkAPI(id);
                actionNotification('Hủy cất giữ thành công.', 'success')
                fetchCheckBookmark(); // Refresh bookmark state
            }
        } catch (error) {
            actionNotification('Hủy cất giữ thất bại, vui lòng thao tác lại.', 'error')
        }
    }



    return { idBookmark, refetch: fetchCheckBookmark, addBookmark, rmBookmark }
}

export default function useGetBookmark() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bookmark, setBookmark] = useState<IBookmarkSummary[]>([]);

    const getAll = async () => {
        if (!user) return;

        try {
            const response = await bookmarkApiRequest.getAllBookmarksAPI(user.id);
            console.log(response.data)
            setBookmark(response.data);
        } catch (error) {
            actionNotification('Tải thất bại, vui lòng thao tác lại.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, [user]); // Chỉ gọi getAll khi user thay đổi

    const removeBookmark = async (bookmarkId: number) => {
        try {
            await bookmarkApiRequest.removeBookmarkAPI(bookmarkId);
            actionNotification("Đã bỏ cất giữ.", "success");
            getAll();

        } catch (error) {
            actionNotification("Bỏ cất giữ thất bại", "error")
        }
    }

    return { bookmark, loading, error, refetch: getAll, removeBookmark };
}