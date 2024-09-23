import { ENDPOINTS, HTTPS_HEADERS } from "../constants";
import { NewCatResponse } from "../types/cats";

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
