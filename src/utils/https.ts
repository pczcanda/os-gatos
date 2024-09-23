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

  if (!response.ok) {
    throw new Error("failed to upload new cat picture through the API");
  }
  const data: NewCatResponse = await response.json();

  return data;
};

export const fetchAllCats = async () => {
  const response = await fetch(ENDPOINTS.ALL_CATS, {
    headers: {
      ...HTTPS_HEADERS,
    },
  });

  if (!response.ok) {
    throw new Error("failed to get all cats...");
  }
  const data: CatsList = await response.json();

  return data;
};

export const fetchAllFavouriteCats = async () => {
  const response = await fetch(ENDPOINTS.FAVOURITE_CATS, {
    headers: {
      ...HTTPS_HEADERS,
    },
  });

  if (!response.ok) {
    throw new Error("failed to get favourite cats...");
  }
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

  if (!response.ok) {
    throw new Error(`failed to favourite cat with id ${catImageId}`);
  }
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

  if (!response.ok) {
    throw new Error("failed to unfavourite cat");
  }
  const data: FavouriteCatResponse = await response.json();

  return data;
};

export const fetchAllCatVotes = async () => {
  const response = await fetch(ENDPOINTS.VOTE_CATS, {
    headers: {
      ...HTTPS_HEADERS,
    },
  });

  if (!response.ok) {
    throw new Error("failed to get cat votes...");
  }
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

export const voteCatDown = async (voteCatId: string) => {
  const response = await fetch(ENDPOINTS.VOTE_CAT(voteCatId), {
    method: "DELETE",
    headers: {
      ...HTTPS_HEADERS,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to vote cat down");
  }
  const data: VoteCatResponse = await response.json();

  return data;
};
