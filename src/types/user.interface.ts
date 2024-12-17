export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    avatar: string;
    birthday: Date | null;
    gender: number;
    blacklist: boolean;
    confirmed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUpdateUser {
    id: number;  
    username?: string;  
    email?: string;  
    avatar?: string;  
    birthday?: Date;  
    gender?: number;  
    blacklist?: boolean;  
    confirmed?: boolean;  
}