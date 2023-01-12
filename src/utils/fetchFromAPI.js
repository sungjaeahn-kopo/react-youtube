import axios from "axios";

// export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  console.log("data ::: ", data);
  return data;
};
