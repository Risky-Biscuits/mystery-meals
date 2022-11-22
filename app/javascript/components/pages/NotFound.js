import Button from "@mui/material/Button";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>Oops! This Page Is Not Found</h1>
        <NavLink to={".."} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#55AF4D",
              fontSize: "1.2rem",
            }}
          >
            Return Home
          </Button>
        </NavLink>
        <img src={require("../assets/not-found.png")} />
      </div>
    </>
  );
};

export default NotFound;
