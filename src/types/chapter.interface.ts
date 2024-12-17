
export type Chapter = {
    id: number;
    title: string;
    content: string;
    novelId: number;
    createdAt: Date;
    updatedAt: Date;
    index: number;
    isPublish: boolean;
    chapterLength: number;
}
export interface IChapterReader {
    chapter: Chapter 
    novelTitle: string;       
    preIndex: number;         
    nextIndex: number;        
}
export interface IChapterAndView{
    id: number;
    title: string;
    content: string;
    novelId: number;
    createdAt: Date;
    updatedAt: Date;
    index: number;
    isPublish: boolean;
    chapterLength: number;
    views: number;
}
export interface IAddChapters {
    novelId: number,
    novelTitle: string,
    nextIndex: number
}
export interface IChapterCreate{
    title: string;
    content: string;
    novelId: number;
    index: number;
    isPublish: boolean;
    chapterLength: number;
}
