import { User } from "./user.interface";

export type Comment = {
  id: number;
  novelId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  parentId: number | null;
}

export interface ICommentReply extends Comment {
  user: User;
}

export interface ICommentDetail extends Comment {
  user: User;
  replies: ICommentReply[];
}

export interface ICreateComment {
  novelId: number;
  content: string;
  userId: number;
  parentId?: number;
}
export interface IUpdateComment {
  content: string;
  userId: number;
  novelId: number;
}
