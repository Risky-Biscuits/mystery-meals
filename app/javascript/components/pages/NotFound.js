import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <NavLink to={".."} style={{ textDecoration: "none"}}>
      <Button
        variant="contained"
        sx={{ color: "white", padding: "12px", bgcolor: "#55AF4D" }}
      >
        Return Home
      </Button>
      </NavLink>
    </>
  );
};

export default NotFound;
