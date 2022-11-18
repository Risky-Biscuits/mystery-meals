import React from "react";
import { NavLink, useParams } from "react-router-dom";

const RestaurantReviewShow = ({ reviews, restaurants }) => {
  const { id } = useParams();
  const currentReviews = reviews?.filter(
    (review) => review.restaurant_id === parseInt(id) && review.rating !== null
  );

  //using currentReviews, make a variable called averageReviewRating
  let averageReviewRating = 0
  let totalReviewRating = 0
  let lengthOfReviews = currentReviews.length

  for(let i=0; i<currentReviews.length; i++) {
    totalReviewRating+=currentReviews[i].rating
  }
  averageReviewRating = totalReviewRating/lengthOfReviews
  
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
          <p id="averageRestaurantReview">
            {averageReviewRating >= 4 && (
              <img src={require("../assets/new_good.png")} />
            )}
            {averageReviewRating === 3 && (
              <img src={require("../assets/new_mid.png")} />
            )}
            {averageReviewRating< 3 && <img src={require("../assets/new_bad.png")} />}
          </p>
          <table>
            <thead>
              <tr>
                <th>Review</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {/* add stars */}
              {currentReviews.map((item) => (
                <tr key={item.id}>
                  <td>{item.review}</td>
                  <td>
                    {item.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default RestaurantReviewShow;
