import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Notification } from "@/types/notification.interface";
import actionNotification from "@/components/NotificationState/Toast";
import { notificationApiRequest } from "@/api/notification";


export default function useNotification() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const fetchNotifications = async () => {
        if (!user) return;
        try {
            const request = await notificationApiRequest.fetchNotificationsApi(user.id);
            setNotifications(request.data);
        } catch (error: any) {
            console.log(error.message);
            actionNotification("Không thể lấy thông báo.", "error");
        }
    };

    const changeStateIsSeen = async () => {
        if (!user) return;
        try {
            await notificationApiRequest.changeStateIsSeenApi(user.id);
        } catch (error) {
            actionNotification("Xem thông báo thất bại.", "error");
        }
    };

    const addNotification = async (data: Notification) => {
        try {
            await notificationApiRequest.addNotificationApi(data);
            actionNotification("Thêm thông báo thành công.", "success");
            fetchNotifications();
        } catch (error) {
            actionNotification("Thêm thông báo thất bại.", "error");
        }
    };

    const addNotificationByAdmin = async (senderId: number, data: Notification) => {
        try {
            await notificationApiRequest.addNotificationByAdminApi(senderId, data);
            actionNotification("Thông báo đã được gửi đến tất cả người dùng.", "success");
        } catch (error) {
            actionNotification("Gửi thông báo thất bại.", "error");
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, [user]);

    return { notifications, fetchNotifications, changeStateIsSeen, addNotification, addNotificationByAdmin };
}
