import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  console.log("videos ::: ", videos);
  return (
    <Stack>
      {videos &&
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id && <VideoCard video={item} />}
            {/* <img src={item.snippet.thumbnails.high["url"]} alt="" />
            {item.snippet.localized["title"]}
            {item.snippet.localized["description"]} */}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
