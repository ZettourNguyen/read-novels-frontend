import { INovelSummary } from "./novel.interface";

export type Bookmark = {
    id: number;
    novelId: number;
    createdAt: Date;
    userId: number;
}

export interface IBookmarkSummary extends Bookmark{
    novel: INovelSummary
}