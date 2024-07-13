export interface INovelI{
    id: number
    title: string
    image: string
    banner: string | null
    state: string
    description: string
    posterId: number
    createdAt: string
    updatedAt: string
    categoryId: number
}

export interface INovelInputI {
    data: {
        title: string;
        image: string;
        banner: string | null
        state: string;
        description: string;
        posterId: number;
        categoryId: number;
    };
    authorNameInInput: string | null;
    tagsId: number[];
}
