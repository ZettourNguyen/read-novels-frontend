import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import actionNotification from "@/components/NotificationState/Toast";
import { INovelsFollowing } from "@/types/follow.interface";
import { followApiRequest } from "@/api/follow";

export function useFollow(novelId: number) {
    const user = useSelector((state: RootState) => state.auth.user);
    const [idFollow, setIsFollow] = useState<number>(0);

    const fetchFollowStatus = async () => {
        try {
            if (user) {
                const response = await followApiRequest.checkFollowStatus(user.id, novelId);
                setIsFollow(response.data);
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
                await followApiRequest.addFollow(user.id, novelId);
                actionNotification("Theo dõi thành công.", "success");
                fetchFollowStatus();
            }
        } catch (error) {
            actionNotification("Theo dõi thất bại, vui lòng thử lại.", "error");
        }
    };

    const unfollow = async (id: number) => {
        try {
            await followApiRequest.deleteFollow(id);
            actionNotification("Bỏ theo dõi thành công.", "success");
            fetchFollowStatus();
        } catch (error) {
            actionNotification("Bỏ theo dõi thất bại, vui lòng thử lại.", "error");
        }
    };

    return { idFollow, refetchFollow: fetchFollowStatus, follow, unfollow };
}

export function useGetFollow() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bookmark, setBookmark] = useState<INovelsFollowing[]>([]);

    const getAll = async () => {
        if (!user) return;

        try {
            const response = await followApiRequest.getAllFollows(user.id);
            setBookmark(response.data);
        } catch (error) {
            actionNotification("Tải thất bại, vui lòng thao tác lại.", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, [user]);

    const removeBookmark = async (bookmarkId: number) => {
        try {
            await followApiRequest.deleteFollow(bookmarkId);
            getAll();
            actionNotification("Đã bỏ đánh dấu", "success");
        } catch (error) {
            actionNotification("Bỏ đánh dấu thất bại", "error");
        }
    };

    return { bookmark, loading, error, refetch: getAll, removeBookmark };
}
