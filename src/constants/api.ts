export const API = "https://api.thecatapi.com/v1";

export const ENDPOINTS = {
  UPLOAD: `${API}/images/upload`,
  ALL_CATS: `${API}/images/?limit=100`,
  FAVOURITE_CATS: `${API}/favourites`,
  FAVOURITE_CAT: (favCatId: string) => `${API}/favourites/${favCatId}`,
  VOTE_CATS: `${API}/votes`,
  VOTE_CAT: (voteCatId: string) => `${API}/votes/${voteCatId}`,
};
