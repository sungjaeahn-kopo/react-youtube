import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  console.log("data ::: ", data);
  console.log("data.items ::: ", data.items);
  console.log("data.snippet ::: ", data.items[0].snippet);
  return data;
};
