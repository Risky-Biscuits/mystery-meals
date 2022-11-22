import Button from "@mui/material/Button";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const RestaurantReviewShow = ({ reviews, restaurants }) => {
  const { id } = useParams();
  const currentReviews = reviews?.filter(
    (review) => review.restaurant_id === parseInt(id) && review.rating !== null
  );

  //using currentReviews, make a variable called averageReviewRating
  let averageReviewRating = 0;
  let totalReviewRating = 0;
  let lengthOfReviews = currentReviews.length;

  for (let i = 0; i < currentReviews.length; i++) {
    totalReviewRating += currentReviews[i].rating;
  }
  averageReviewRating = totalReviewRating / lengthOfReviews;

  const currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  return (
    <div className="page-container">
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
          <p id="averageRestaurantReview">
            {averageReviewRating >= 4 && (
              <img src={require("../assets/new_good.png")} />
            )}
            {averageReviewRating === 3 && averageReviewRating < 4 && (
              <img src={require("../assets/new_mid.png")} />
            )}
            {averageReviewRating < 3 && (
              <img src={require("../assets/new_bad.png")} />
            )}
          </p>
          <table>
            <thead>
              <tr>
                <th>Review</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {currentReviews.map((item) => (
                <tr key={item.id}>
                  <td>{item.review}</td>
                  <td>
                    <div className="star-rating">
                      {[...Array(item.rating)].map((star, index) => {
                        index += 1;
                        return <span className="star">&#9733;</span>;
                      })}
                      {[...Array(5-item.rating)].map((star, index) => {
                        index += 1;
                        return <span className="star">&#9734;</span>;
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <NavLink
        to={`/restaurantreviewnew/${id}`}
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
    </div>
  );
};

export default RestaurantReviewShow;



