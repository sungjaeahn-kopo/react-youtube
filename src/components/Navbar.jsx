import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { logo } from "../utils/constants";
import logo from "../resources/images/logo512.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={50} />
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ ml: 1.5, color: "#fff" }}
        >
          React App
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
