export type Tag = {
    id: number;
    name: string;
}

export interface ICreateTag {
    userId: number;
    name: string;
}

export interface IUpdateTag {
    userId: number;  
    name: string;
}

export interface INovelTag {
    novelId: number;
    tagId: number;
}

export interface IDeleteNovelTag {
    novelId: number;
    tagId: number;
}
