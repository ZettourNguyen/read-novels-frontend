import axiosInstance from "@/api";
import actionNotification from "@/components/NotificationState/Toast";
import { INotificationI } from "@/layout/IsLoginHeader";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useNotification() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [notifications, setNotifications] = useState<INotificationI[]>([]); // Thay `any` bằng kiểu dữ liệu phù hợp

    // Hàm để lấy tất cả thông báo của người dùng
    const fetchNotifications = async () => {
        try {
            if (user) {
                const response = await axiosInstance.get(`/notification/${user.id}`);
                setNotifications(response.data);
            }
        } catch (error: any) {
            console.log(error?.message);
            actionNotification('Không thể lấy thông báo.', 'error');
        }
    };

    // Hàm để thêm thông báo
    const changeStateIsSeen = async () => {
        try {
            if (user) {
                const response = await axiosInstance.post(`/notification/${user.id}`);
                console.log(response.data);
            }
        } catch (error) {
            actionNotification('Xem thông báo thất bại.', 'error');
        }
    };
    

    const addNotification = async (data: any) => { // Thay `any` bằng kiểu dữ liệu phù hợp
        try {
            const response = await axiosInstance.post(`/notification`, data);
            console.log(response.data);
            actionNotification('Thêm thông báo thành công.', 'success');
            fetchNotifications(); // Cập nhật danh sách thông báo
        } catch (error) {
            actionNotification('Thêm thông báo thất bại.', 'error');
        }
    };

    // Hàm để thêm thông báo bởi admin cho tất cả người dùng
    const addNotificationByAdmin = async (senderId: number, data: any) => { // Thay `any` bằng kiểu dữ liệu phù hợp
        try {
            const response = await axiosInstance.post(`/notification/admin/${senderId}`, data);
            console.log(response.data);
            actionNotification('Thông báo đã được gửi đến tất cả người dùng.', 'success');
        } catch (error) {
            actionNotification('Gửi thông báo thất bại.', 'error');
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, [user]);

    return { notifications, fetchNotifications, changeStateIsSeen, addNotification, addNotificationByAdmin };
}
