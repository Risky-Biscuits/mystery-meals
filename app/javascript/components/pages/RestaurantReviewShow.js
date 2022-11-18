import React from "react";
import Button from "@mui/material/Button";
import { NavLink, useParams } from "react-router-dom";

const RestaurantReviewShow = ({ reviews, restaurants }) => {
  const { id } = useParams();
  const currentReview = reviews?.find((review) => review.id === +id);

  const currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  return (
    <>
      <h1>Restaurant Review Show</h1>
      {currentRestaurant && (
        <>
          <img src={currentRestaurant.image} />
          <p>{currentRestaurant.name}</p>
          <p>{currentRestaurant.food_type}</p>
          <p>{currentRestaurant.price}</p>
          <p>{currentRestaurant.phone_number}</p>
          <p>{currentRestaurant.website}</p>
          <p>{currentRestaurant.street}</p>
          <p>{currentRestaurant.city}</p>
          <p>{currentRestaurant.state}</p>
          <p>{currentRestaurant.zip}</p>
          <br></br>
          <p>"{currentReview.review}"</p>
          {currentReview.rating >= 4 && (
            <img src={require("../assets/new_good.png")} />
          )}
          {currentReview.rating === 3 && (
            <img src={require("../assets/new_mid.png")} />
          )}
          {currentReview.rating < 3 && (
            <img src={require("../assets/new_bad.png")} />
          )}
          <p>Rating: {currentReview.rating}</p>
        </>
      )}
      <NavLink
        to={`/restaurantreviewnew/:id`}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            padding: "12px",
            bgcolor: "#55AF4D",
          }}
        >
          ADD REVIEW
        </Button>
      </NavLink>
    </>
  );
};

export default RestaurantReviewShow;
