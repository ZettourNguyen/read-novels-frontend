import axiosInstance from "@/api";
import actionNotification from "@/components/NotificationState/Toast";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export interface CreateReport {
    title: string;
    novelId: number;
    commentId?: number | null;
    userId: number;
    content: string;
}

export interface IReportI {
    id: number;
    title: string;
    content: string;
    type: string;
    createdAt: string;
    userId: number;
    username: string;
    novelId: number;
    novelTitle: string;
    commentId?: number | null;
    commentContent: string | null;
}

export function useGetReport() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [report, setReport] = useState<IReportI[]>([]);

    const getAll = async () => {
        if (!user) return;

        try {
            const response = await axiosInstance.get(`/report`);
            setReport(response.data);
            console.log(response.data)
        } catch (error) {
            actionNotification('Tải thất bại, vui lòng thao tác lại.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, []); // Chỉ gọi getAll khi user thay đổi

    const addReport = async (data: CreateReport) => {
        try {
            const response = await axiosInstance.post(`/report`, data);
            actionNotification("Đã báo cáo thành công", "success")
        } catch (error) {
            actionNotification("Báo cáo thất bại", "error")
        }
    }

    const updateReport = async (reportId: number) => {
        try {
            const response = await axiosInstance.patch(`/report`, {
                 userId: user?.id, reportId 
            });
            actionNotification("Đã chuyển thành Đã xử lý", "success")
        } catch (error) {
            actionNotification("Không thể chuyển trạng thái", "error")
        }
    }

    return { report, loading, error, refetch: getAll, updateReport, addReport };
}