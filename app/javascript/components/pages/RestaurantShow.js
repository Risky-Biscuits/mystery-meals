import Phone from "@mui/icons-material/Phone";
import Restaurant from "@mui/icons-material/Restaurant";
import Savings from "@mui/icons-material/Savings";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import React from "react";
import { NavLink, useParams } from "react-router-dom";

const RestaurantShow = ({ restaurants, logged_in }) => {
  const { id } = useParams();
  const currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  return (
    <div className="page-container">
      <h1>Restaurant Details</h1>
      {currentRestaurant && (
        <Card
          elevation={24}
          sx={{ width:{xs: "350px", md: "650" }, border: "5px solid #AD8350", mb: "1rem" }}
        >
          <CardMedia
            component="img"
            height="400px"
            image={currentRestaurant.image}
            alt="restaurant"
          />
          <div className="show-card-container">
            <CardContent>
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  <Restaurant /> {currentRestaurant.name}
                </Typography>
                <div className="show-card-container">
                  <div className="show-card-info">
                    <Typography
                      sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      {currentRestaurant.food_type}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.2rem" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      <Savings sx={{ verticalAlign: "bottom" }} />{" "}
                      {currentRestaurant.price}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.2rem" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      <Phone sx={{ verticalAlign: "bottom" }} />{" "}
                      {currentRestaurant.phone_number}
                    </Typography>

                    <div className="card-address-container">
                      <Typography
                        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        Address:
                      </Typography>

                      <Typography
                        sx={{ fontSize: "1.2rem" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        {currentRestaurant.street}
                      </Typography>
                      <div className="horizontal-flex-container">
                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {currentRestaurant.city},
                        </Typography>
                        &nbsp;
                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {currentRestaurant.state}
                        </Typography>
                        &nbsp;
                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {currentRestaurant.zip}
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      sx={{ fontSize: "1.2rem" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      <a href={`${currentRestaurant.website}`} target="_blank">
                        Visit Their Website{" "}
                      </a>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </CardContent>
          </div>
        </Card>
      )}
      {/* ------------------------------ ⬇️ When Logged Out ⬇️ ------------------------------------- */}
      {!logged_in && (
        <NavLink to={`..`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#55AF4D",
            }}
          >
            HOME
          </Button>
        </NavLink>
      )}
      {/* ------------------------------ ⬆️ When Logged In ⬆️ ------------------------------------- */}

      <NavLink to={`/restaurantindex`} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            color: "white",
            padding: "12px",
            bgcolor: "#55AF4D",
          }}
        >
          BACK TO ALL RESTAURANTS
        </Button>
      </NavLink>
    </div>
  );
};

export default RestaurantShow;
