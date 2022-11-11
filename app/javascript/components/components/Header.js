import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Risky Biscuit
          </Typography>

          {/* IF user is logged in, do NOT display Login and Sign-up Buttons */}
          {logged_in === false && (
            <>
              <Button href={sign_in_route} color="inherit">
                Login
              </Button>
              <Button href={new_user_route} color="inherit">
                Sign Up!
              </Button>
            </>
          )}

          {/* IF user is logged in, display Sign-Out Button */}
          {logged_in === true && (
            <Button href={sign_out_route} color="inherit">
              Sign Out{" "}
            </Button>
          )}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
