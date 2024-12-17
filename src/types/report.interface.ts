import { Novel } from "./novel.interface";
import { User } from "./user.interface";

export type Report = {
    id: number;
    title: string;
    novelId: number;
    commentId: number | null;
    userId: number;
    type: string;
    content: string | null;
    createdAt: Date | null;
}
export interface CreateReport {
    title: string;
    novelId: number;
    commentId?: number | null;
    userId: number;
    content: string;
}
export interface IReportDetail extends Report{
    novel: Novel,
    comment: Comment
    user: User
}
export interface ICreateReport {
    title: string;
    novelId: number;
    commentId?: number | null;
    userId: number;
    content: string;
  }
  