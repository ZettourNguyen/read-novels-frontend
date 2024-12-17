export type Author = {
    id: number;
    firstname: string;
    lastname: string;
    nickname: string;
}
export interface IAuthors extends Author {
    totalNovels : number
}