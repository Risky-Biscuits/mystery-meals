import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { style } from "@mui/system";
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

      <Card elevation={24} sx={{ width: 500, border: "5px solid #AD8350", mb: "1rem" }}>
        <CardMedia
          component="img"
          height="500px"
          image={currentRestaurant?.image}
          alt="restaurant"
        />
        <CardContent>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              {currentRestaurant?.name}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              {currentRestaurant?.food_type}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              Price-Range: {currentRestaurant?.price}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              Phone: {currentRestaurant?.phone_number}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              Address: {currentRestaurant?.street}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              City: {currentRestaurant?.city}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              State: {currentRestaurant?.state}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              Zip Code: {currentRestaurant?.zip}
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem" }}
              gutterBottom
              variant="h7"
              component="div"
            >
              <a href={`${currentRestaurant?.website}`}>Visit Their Website </a>
            </Typography>
          </CardContent>
        </CardContent>
        <CardActions></CardActions>
      </Card>

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
