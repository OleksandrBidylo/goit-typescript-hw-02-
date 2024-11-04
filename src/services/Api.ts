import axios from "axios";

export interface Photo {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
}

export interface ResponseData {
  results: Photo[];
  total: number;
}

export const fetchPhotos = async (
  page = 1,
  query: string
): Promise<ResponseData> => {
  const { data } = await axios.get<ResponseData>(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=20&client_id=2KB_xAiOY-3PlaK_xrBHHZi-yuwI2rXgjJad37c2aEY`
  );
  return data;
};
