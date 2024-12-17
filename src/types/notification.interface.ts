export type Notification = {
    id: number;
    title: string;
    type: string;
    content: string;
    createdAt: Date;
    userId: number;
}

export interface ICreateNotification {
    title: string
    type: string // 'success', 'error', 'info'
    content: string
    userId: number
}
export interface ICreateNotificationByAdmin{
    title: string
    type: string // 'success', 'error', 'info'
    content: string
}
export interface ICreateManyNotification {
    title: string
    type: string
    content: string
    userIds: number[]
}
