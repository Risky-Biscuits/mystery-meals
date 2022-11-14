import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

const Footer = () => {
  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        color="primary"
        sx={{ bgcolor: "#AD8350", top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
        <p style={{ textAlign: "center" }}>
          © 2022.{" "}
          <a
            href="https://www.linkedin.com/in/michyherrera/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Michy Herrera
          </a>{" "}
          -{" "}
          <a
            href="https://www.linkedin.com/in/davidthomas91/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            David Thomas
          </a>{" "}
          -{" "}
          <a
            href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADZI_A4BaXbzgDTyTrKXLnpAk6RjEhfaTKc&keywords=jeremy%20duncan&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b5c267e6-63c0-4af2-9895-3b6c6a6fd65c&sid=yuU"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Jeremy Duncan
          </a>
        </p>
      </AppBar>
    </React.Fragment>
  );
};
export default Footer;
