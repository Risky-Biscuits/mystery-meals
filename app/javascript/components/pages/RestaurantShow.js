import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";


const RestaurantShow = ({ restaurants }) => {
  const { id } = useParams()
  const currentRestaurant = restaurants?.find((restaurant) => restaurant.id === +id)
  return (
    <>
      <h1>Restaurant Details</h1>
      <h3>{currentRestaurant?.name}</h3>
      <img src={currentRestaurant?.image} />
      <p>{currentRestaurant?.food_type}</p>
      <p>{currentRestaurant?.price}</p>
      <p>{currentRestaurant?.phone_number}</p>
      <p>{currentRestaurant?.website}</p>
      <p>{currentRestaurant?.street}</p>
      <p>{currentRestaurant?.city}</p>
      <p>{currentRestaurant?.state}</p>
      <p>{currentRestaurant?.zip}</p>
    </>
  );
};

export default RestaurantShow;