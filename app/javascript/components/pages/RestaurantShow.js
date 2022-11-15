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
    <>
      <h1>Restaurant Details</h1>
      {currentRestaurant && (
        <>
          <h3>{currentRestaurant.name}</h3>
          <img src={currentRestaurant.image} />
          <p>{currentRestaurant.food_type}</p>
          <p>{currentRestaurant.price}</p>
          <p>{currentRestaurant.phone_number}</p>
          <p>{currentRestaurant.website}</p>
          <p>{currentRestaurant.street}</p>
          <p>{currentRestaurant.city}</p>
          <p>{currentRestaurant.state}</p>
          <p>{currentRestaurant.zip}</p>
        </>
      )}
{/* ------------------------------ ⬇️ When Logged In ⬇️ ------------------------------------- */}
      {logged_in && (
      <Button
        variant="contained"
        sx={{
          color: "white",
          padding: "12px",
          bgcolor: "#55AF4D",
        }}
      >
        REVIEW
      </Button>
      )}
{/* ------------------------------ ⬆️ When Logged In ⬆️ ------------------------------------- */}

{/* ------------------------------ ⬇️ When Logged Out ⬇️ ------------------------------------- */}
      {!logged_in && (
        <NavLink to={`..`} style={{ textDecoration: "none"}}>
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
    </>
  );
};

export default RestaurantShow;
