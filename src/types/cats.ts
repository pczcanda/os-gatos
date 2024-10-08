import { MessageResponse } from "./https";

export interface NewCatResponse {
  id: string;
  url: string;
  sub_id?: string;
  width: number;
  height: number;
  original_filename: string;
  pending: 0 | 1;
  approved: 0 | 1;
}
export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type?: string;
  breeds: Array<{}>;
  categories?: string[];
  sub_id?: string;
  created_at: string;
  original_filename: string;
  breed_ids: string[] | null;
}

export type CatsList = Cat[];

export interface FavouriteCat {
  id: string;
  image_id: string;
  sub_id?: string;
  user_id: string;
  created_at: string;
  image: {};
}

export type FavouriteCatsList = FavouriteCat[];

export interface CatVote {
  id: string;
  image_id: string;
  sub_id?: string;
  user_id: string;
  created_at: string;
  image: {};
  value: number;
  country_code: string;
}

export type CatVotesList = CatVote[];

export type FavouriteCatResponse = MessageResponse;
export type VoteCatResponse = MessageResponse;
