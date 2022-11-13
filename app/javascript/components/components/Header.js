import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  //Console Log Section
  console.log("logged_in:", logged_in);
  console.log("current_user:", current_user);
  console.log("new_user_route:", new_user_route);
  console.log("sign_in_route:", sign_in_route);
  console.log("sign_out_route:", sign_out_route);

  return (
    <Box sx={{ flexGrow: 1, width: "95%", margin: "auto" }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "#AD8350", borderRadius: "8px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div class="header-logo-section">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* Header Image */}
              <img src={"../assets/Risky Biscuit_Headerlogo.png"} />
            </IconButton>
            {logged_in === true && (
              <div class="name-box">
                Hi, {current_user?.first_name} {current_user?.last_name}
              </div>
            )}
          </div>

          <div className="navigation-links">
            {/* IF user is logged in, do NOT display Login and Sign-up Buttons */}
            {logged_in === false && (
              <>
                <Button href="/restaurantindex" color="inherit">
                  See All Restaurants
                </Button>
                <Button href={sign_in_route} color="inherit">
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ color: "black", padding: "12px" }}
                  href={new_user_route}
                  color="inherit"
                >
                  Get Started
                </Button>
              </>
            )}

            {/* IF user is logged in, display Sign-Out Button */}
            {logged_in === true && (
              <>
                <Button href="/" color="inherit">
                  Home
                </Button>
                <Button href="/restaurantindex" color="inherit">
                  See All Restaurants
                </Button>
                <Button href="/protectedrestaurantindex" color="inherit">
                  See My Restaurants
                </Button>
                <Button href="/restaurantnew" color="inherit">
                  Add Restaurant
                </Button>
                <Button href={sign_out_route} color="inherit">
                  Sign Out
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
