import axiosInstance from "@/api";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAuthorI } from "./useAuthor";

export interface IGetHistoryUserI {
    id: number;
    novelId: number;
    novelTitle: string;
    novelImage: string;
    novelDescription: string;
    novelState: string
    author: IAuthorI[];
    chapterId: number;
    chapterTitle: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}

export const useGetHistoryUser = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [histories, setHistories] = useState<IGetHistoryUserI[] | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchHistories = async () => {
        if (!user?.id) return; // Kiểm tra xem user có id không

        setLoading(true); // Đặt trạng thái loading trước khi gọi API

        try {
            const response = await axiosInstance.get(`/history/${user.id}`);
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
            await axiosInstance.delete(`/history/remove/${id}`);
            await fetchHistories(); 
        } catch (error) {
            console.error('Error removing history:', error);
            setError('Có lỗi xảy ra khi xóa lịch sử'); 
        }
    };

    return { histories, loading, error, rmHistory, fetchHistories };
};

export const addHistory = async (userId: number, chapterId: number) => {
    try {
        await axiosInstance.post(`/history/add`, {
            userId,
            chapterId,
        });
    } catch (error) {
        console.error('Error adding history:', error);
        throw error;
    }
};
