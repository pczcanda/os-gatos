import { ENDPOINTS, HTTPS_HEADERS } from "../constants";
import { CatsList, FavouriteCatsList, NewCatResponse } from "../types/cats";

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
