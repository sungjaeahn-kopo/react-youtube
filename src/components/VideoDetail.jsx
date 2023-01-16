import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import Videos from "./Videos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoDetail = () => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState(null);
  // const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `videos?part=snippet&id=${id}&regionCode=KR&maxResults=25&key=${API_KEY}`
    ).then((data) => setVideos(data.items[0]));
  }, [id]);

  if (!videos?.snippet) return <Loader />;

  console.log("videos :::1::: ", videos);
  console.log("videos :::1::: ", videos.snippet);
  console.log("videos :::1::: ", videos.snippet.title);
  // 특정 영상정보 선언
  const {
    snippet: { title, channelId, channelTitle },
  } = videos;

  return (
    <Box>
      <Stack>
        <Box>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack>
            <Link to={`channel/${channelId}`}>
              <Typography>
                {channelTitle}
                <CheckCircleIcon />
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Videos videos={videos} direction="column" />
        </Box>
        {/* <div>${videos}</div> */}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
