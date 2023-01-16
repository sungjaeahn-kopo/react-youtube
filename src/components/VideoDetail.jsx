import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `videos?part=snippet&id=${id}&regionCode=KR&maxResults=25&key=${API_KEY}`
    ).then((data) => setVideos(data.items));
  });

  return (
    <Box>
      <Stack>
        <div>VideoDetail</div>
        <div>${videos}</div>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
