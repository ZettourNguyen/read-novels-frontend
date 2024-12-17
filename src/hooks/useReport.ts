import axiosInstance from "@/api";
import { reportApiRequest } from "@/api/report";
import actionNotification from "@/components/NotificationState/Toast";
import { RootState } from "@/store/store";
import { ICreateReport, IReportDetail } from "@/types/report.interface";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export function useGetReport() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [report, setReport] = useState<IReportDetail[]>([]);

    const getAll = async () => {
        if (!user) return;

        try {
            const response = await reportApiRequest.getReports()
            setReport(response.data);
        } catch (error) {
            actionNotification('Tải thất bại, vui lòng thao tác lại.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, []); // Chỉ gọi getAll khi user thay đổi

    const addReport = async (data: ICreateReport) => {
        try {
            await reportApiRequest.postReport(data)
            actionNotification("Đã báo cáo thành công", "success")
        } catch (error) {
            actionNotification("Báo cáo thất bại", "error")
        }
    }

    const updateReport = async (reportId: number) => {
        try {
            if (user) {
                const response = await reportApiRequest.patchReport(user?.id, reportId)
                actionNotification("Đã chuyển thành Đã xử lý", "success")
            }
        } catch (error) {
            actionNotification("Không thể chuyển trạng thái", "error")
        }
    }

    return { report, loading, error, refetch: getAll, updateReport, addReport };
}