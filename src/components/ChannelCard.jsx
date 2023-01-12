import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box sx={{ width: { xs: "356px", md: "320px" } }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || ""}
          alt={channelDetail?.snippet?.title}
        />
        <Typography variant="h6">{channelDetail?.snippet?.title} </Typography>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
