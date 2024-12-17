// notification.api.ts
import axiosInstance from "@/api";
import { Notification } from "@/types/notification.interface";

// Lấy thông báo của người dùng
export const notificationApiRequest = {
   fetchNotificationsApi : async (userId: number) => {
      return await axiosInstance.get(`/notification/${userId}`);
   },
   
   // Thay đổi trạng thái đã xem thông báo
   changeStateIsSeenApi : async (userId: number) => {
      return await axiosInstance.post(`/notification/${userId}`);
   },
   
   // Thêm thông báo mới
   addNotificationApi : async (data: Notification) => {
      return await axiosInstance.post(`/notification`, data);
   },
   
   // Gửi thông báo bởi admin
   addNotificationByAdminApi : async (senderId: number, data: Notification) => {
      return await axiosInstance.post(`/notification/admin/${senderId}`, data);
   },
   
}