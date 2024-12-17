export interface ILoaddingListProps { //list/category:categoryId
    type: string // type
    id: number // id
    page?: number,
    limit?: number
}

export interface IBanner {
    id: string;
    title: string;
    banner: string;
}