import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  // === === MenuBar Logic for hamburger menu === ===
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log("anchorElNav", event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // === === HEADER LINKS === ===
  const loggedInPages = [
    <Button href="/" color="inherit">
      <HomeRoundedIcon />
      &nbsp;Home
    </Button>,
    <Button href="/restaurantindex" color="inherit">
      <RestaurantRoundedIcon />
      &nbsp;Restaurants
    </Button>,
    <Button href="/protectedrestaurantindex" color="inherit">
      <ReviewsRoundedIcon />
      &nbsp;My Reviews
    </Button>,
    <Button href="/restaurantnew" color="inherit">
      <AddRoundedIcon />
      &nbsp;Add Restaurant
    </Button>,
    <Button href={sign_out_route} color="inherit">
      <LogoutRoundedIcon />
      &nbsp;Log Out
    </Button>,
  ];

  const loggedOutPages = [
    <Button href="/restaurantindex" color="inherit">
      <RestaurantRoundedIcon />
      &nbsp;Restaurants
    </Button>,
    <Button href={sign_in_route} color="inherit">
      <LoginRoundedIcon />
      &nbsp;Login
    </Button>,
    <Button
      variant="contained"
      sx={{ color: "black" }}
      href={new_user_route}
      color="inherit"
    >
      <GradeRoundedIcon />
      &nbsp;Get Started
    </Button>,
  ];

  return (
    <AppBar
      sx={{ width: "97%", borderRadius: "0px 0px 5px 5px" }}
      elevation={9}
      position="sticky"
    >
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "space-between" },
          bgcolor: "#AD8350",
          borderRadius: "0px 0px 5px 5px",
        }}
      >
        <div className="logo-username-container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img src={require("../assets/Risky Biscuit_Headerlogo.png")} />
          </IconButton>
          {logged_in && (
            <div className="name-box">
              Hi, {current_user?.first_name} {current_user?.last_name}
            </div>
          )}
        </div>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "center",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: "header.textLight" }}
          >
            <MenuIcon />
          </IconButton>
          {logged_in && (
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {loggedInPages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          )}

          {!logged_in && (
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // SOURCE OF ISSUE??
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {loggedOutPages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>
        {logged_in && (
          <Box
            sx={{
              display: { xs: "none", sm: "none", lg: "flex" },
            }}
            className="header-links-container"
          >
            {loggedInPages.map((page, index) => (
              <Grid key={index} sx={{ pr: ".5rem" }}>
                <Button
                  className="headerLink"
                  size="small"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                  }}
                >
                  {page}
                </Button>
              </Grid>
            ))}
          </Box>
        )}
        {!logged_in && (
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {loggedOutPages.map((page, index) => (
              <Grid key={index} sx={{ pr: ".5rem" }}>
                <Button
                  className="headerLink"
                  size="small"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                  }}
                >
                  {page}
                </Button>
              </Grid>
            ))}
          </Box>
        )}

        <Box>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          ></Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
