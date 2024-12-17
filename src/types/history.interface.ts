import { Author } from "./author.interface";
import { Chapter } from "./chapter.interface";
import { Novel } from "./novel.interface";

export  type History = {
    chapterId: number;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    userId: number;
}

export interface IHistoriesDetail extends History{
    chapter: Chapter
    novel: Novel
    authors: Author[]
}
