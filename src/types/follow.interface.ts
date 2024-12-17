import { INovelSummary } from "./novel.interface";

export type Follow = {
    id: number;
    novelId: number;
    userId: number;
    createdAt: Date;
}
export interface INovelsFollowing extends Follow{
    novel: INovelSummary
}