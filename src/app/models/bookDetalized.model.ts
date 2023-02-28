import { Review } from "./review.model";
export interface BookDetalized {
    id?: number;
    title?: string;
    cover?: string;
    content?: string;
    author?: string;
    genre?: string;
    rating?: number;
    reviews?: [Review];
  }