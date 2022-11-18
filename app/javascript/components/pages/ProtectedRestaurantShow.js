import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { style } from "@mui/system";
import React from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";

const ProtectedRestaurantShow = ({
  restaurants,
  logged_in,
  reviews,
  current_user,
  deleteRestaurant,
}) => {
  const { user_id, id } = useParams();
  const currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  const handleDelete = () => {
    deleteRestaurant( id )
  }
  return (
    <>
      <h1>Restaurant Details</h1>
      {current_user.id === parseInt(user_id) && currentRestaurant &&(
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
          <NavLink
            to={`../protectedrestaurantindex`}
            style={{ textDecoration: "none" }}
          >
            <Button
              onClick={handleDelete}
              variant="contained"
              sx={{
                color: "white",
                padding: "12px",
                bgcolor: "#55AF4D",
              }}
            >
              DELETE
            </Button>
          </NavLink>
        </>
      )}
    </>
  );
};

export default ProtectedRestaurantShow;
