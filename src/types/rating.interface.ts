import { User } from "./user.interface";

export type Rating = {
    id: number;
    novelId: number;
    rating: number;
    content: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}


export interface INovelRatings extends Rating{
    user: User
    rating_vote : number
    type_vote: string | null
}

export interface IRatingCreate {
    novelId: number;
    userId: number;
    content?: string;
    rating: number;
  }
  export interface IRatingVote {
    ratingId: number;
    userId: number;
    interactionType: string;
  }
    