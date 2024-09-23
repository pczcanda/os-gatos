import { ENDPOINTS, HTTPS_HEADERS } from "../constants";
import {
  CatsList,
  CatVotesList,
  FavouriteCatResponse,
  FavouriteCatsList,
  NewCatResponse,
  VoteCatResponse,
} from "../types/cats";

export const uploadNewCat = async (catImage: FormData) => {
  const response = await fetch(ENDPOINTS.UPLOAD, {
    method: "POST",
    headers: {
      ...HTTPS_HEADERS,
    },
    body: catImage,
  });

  const data: NewCatResponse = await response.json();

  return data;
};

export const fetchAllCats = async () => {
  const response = await fetch(ENDPOINTS.ALL_CATS, {
    headers: {
      ...HTTPS_HEADERS,
    },
  });

  const data: CatsList = await response.json();

  return data;
};

export const fetchAllFavouriteCats = async () => {
  const response = await fetch(ENDPOINTS.FAVOURITE_CATS, {
    headers: {
      ...HTTPS_HEADERS,
    },
  });

  const data: FavouriteCatsList = await response.json();

  return data;
};

export const favouriteACat = async (catImageId: string) => {
  const response = await fetch(ENDPOINTS.FAVOURITE_CATS, {
    method: "POST",
    headers: {
      ...HTTPS_HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: catImageId,
    }),
  });

  const data: FavouriteCatResponse = await response.json();

  return data;
};

export const unfavouriteACat = async (favCatId: string) => {
  const response = await fetch(ENDPOINTS.FAVOURITE_CAT(favCatId), {
    method: "DELETE",
    headers: {
      ...HTTPS_HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      favourite_id: favCatId,
    }),
  });

  const data: FavouriteCatResponse = await response.json();

  return data;
};

export const fetchAllCatVotes = async () => {
  const response = await fetch(ENDPOINTS.VOTE_CATS, {
    headers: {
      ...HTTPS_HEADERS,
    },
  });

  const data: CatVotesList = await response.json();

  return data;
};

export const voteCatUp = async (catImageId: string) => {
  const response = await fetch(ENDPOINTS.VOTE_CATS, {
    method: "POST",
    headers: {
      ...HTTPS_HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: catImageId,
      value: 1,
    }),
  });

  if (!response.ok) {
    throw new Error(`failed to vote up cat with id ${catImageId}`);
  }
  const data: VoteCatResponse = await response.json();

  return data;
};

export const voteCatDown = async (catImageId: string) => {
  const response = await fetch(ENDPOINTS.VOTE_CATS, {
    method: "POST",
    headers: {
      ...HTTPS_HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: catImageId,
      value: -1,
    }),
  });

  const data: VoteCatResponse = await response.json();

  return data;
};
