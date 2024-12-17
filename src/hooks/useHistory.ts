import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IHistoriesDetail } from "@/types/history.interface";
import { historyApiRequest } from "@/api/history";
 
export const useGetHistoryUser = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [histories, setHistories] = useState<IHistoriesDetail[] | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchHistories = async () => {
        if (!user?.id) return; 

        setLoading(true); 

        try {
            const response = await historyApiRequest.getHistoriesApi(user.id);
            setHistories(response.data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistories();
    }, [user?.id]);

    const rmHistory = async (id: number) => {
        try {
            await historyApiRequest.removeHistoryApi(id);
            await fetchHistories(); 
        } catch (error) {
            console.error("Error removing history:", error);
            setError("Có lỗi xảy ra khi xóa lịch sử"); 
        }
    };

    return { histories, loading, error, rmHistory, fetchHistories };
};
export const postHistory = async (userId: number, chapterId: number) => {
    try {
        await historyApiRequest.postHistoryApi(userId, chapterId);
    } catch (error) {
        console.error("Error adding history:", error);
        throw error;
    }
}