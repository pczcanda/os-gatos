export const API_KEY = `live_ZIfWpCYrAAdXobhNXtim5zvgoYexRHP8ytMRpCyiLyriUpsyfzo0EaUFt2zORfCc`;

export const API = "https://api.thecatapi.com/v1";

export const ENDPOINTS = {
  UPLOAD: `${API}/images/upload`,
  ALL_CATS: `${API}/images/?limit=100`,
  FAVOURITE_CATS: `${API}/favourites`,
  FAVOURITE_CAT: (catId: string) => `${API}/favourites/${catId}`,
};
