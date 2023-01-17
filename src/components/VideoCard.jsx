import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video: { id, snippet } }) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={id?.videoId ? `/video/${id.videoId}` : `/video/${id}`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || ""}
        alt={snippet?.channelTitle}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
      <Link to={id?.videoId ? `/video/${id.videoId}` : `/video/${id}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || ""}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""}>
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || ""}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
