import { Author } from "./author.interface";
import { Category } from "./category.interface";
import { Tag } from "./tag.interface";
import { User } from "./user.interface";

export type  Novel = {
    id: number;
    title: string;
    image: string;
    banner: string | null;
    state: string;
    description: string;
    posterId: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoryId: number;
}

export interface INovelSummary extends Novel{
    poster: User
    authors: Author[];
    category: Category;
    tags: Tag[];
    totalViews: number;
}
export interface INovelDetailSummary {
    chapter0: number | undefined; 
    countChaptersPublishedInLast7Days: number;
    numberOfNominations: number;
    numberSavedBookmark: number;
}
export interface IPaginatedNovel {
    novels: INovelSummary[];
    totalRecords: number;
    totalPages: number;
}

export interface IArrChaptersDetails {
    novelId: number,
    publishedOnly: boolean
}

export interface ICreateNovel {
    title: string;
    image: string;
    banner: string | null;
    state: 'ongoing' | 'completed' | 'paused' | 'deleted' | 'unpublished' | 'pending';
    description: string;
    posterId: number;
    categoryId: number;
    authorNameInInput: string | null;
    tagsId: number[];
}

export interface IUpdateNovel {
    id: number;              
    posterId: number;        
    title?: string;          
    image?: string;          
    banner?: string;         
    state?: string;          
    description?: string;    
    tagsId?: number[];       
    categoryId?: number;     
}

