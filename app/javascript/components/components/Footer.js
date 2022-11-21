import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <AppBar
        position="sticky"
        color="primary"
        rel="noopener"
        sx={{
          bgcolor: "#AD8350",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: { xs: "10px", md: "30px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: { xs: ".6rem", sm: ".8rem", md: "1.2rem" },
          }}
        >
          © 2022
        </Typography>
        &nbsp;
        <Typography
          sx={{
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: { xs: ".6rem", sm: ".8rem", md: "1.2rem" },
          }}
        >
          <a
            href="https://www.linkedin.com/in/michyherrera/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Michy Herrera
          </a>
        </Typography>
        &nbsp;
        <Typography
          sx={{
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: { xs: ".6rem", sm: ".8rem", md: "1.2rem" },
          }}
        >
          -
        </Typography>
        &nbsp;
        <Typography
          sx={{
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: { xs: ".6rem", sm: ".8rem", md: "1.2rem" },
          }}
        >
          <a
            href="https://www.linkedin.com/in/davidthomas91/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none", color: "white" }}
          >
            David Thomas
          </a>
        </Typography>
        &nbsp;
        <Typography
          sx={{
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: { xs: ".6rem", sm: ".8rem", md: "1.2rem" },
          }}
        >
          -
        </Typography>
        &nbsp;
        <Typography
          sx={{
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: { xs: ".6rem", sm: ".8rem", md: "1.2rem" },
          }}
        >
          <a
            href="https://www.linkedin.com/in/jeremy-duncan2021/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none", color: "white" }}
          >
            Jeremy Duncan
          </a>
        </Typography>
      </AppBar>
    </div>
  );
};
export default Footer;
