import { Cat, FavouriteCat } from "../../types";

export interface CatCardProps {
  cat: Cat;
  favouriteId?: string;
  votesCount?: number;
}
