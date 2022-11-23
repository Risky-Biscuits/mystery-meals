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
      <div className="row">
        <div className="column">
          <div className="column-1">
            {currentRestaurant && (
              <>
                {/* <div className="flex-container"> */}
                <div className="imageContainer">
                  <img
                    src={currentRestaurant.image}
                    className="restaurantPicture"
                  />
                </div>
                {/* </div> */}
                <div className="restaurant-info-container">
                  <p className="restaurantInfo">{currentRestaurant.name}</p>
                  <p className="restaurantInfo">
                    {currentRestaurant.food_type}
                  </p>
                  <p className="restaurantInfo">{currentRestaurant.price}</p>
                  <p className="restaurantInfo">
                    {currentRestaurant.phone_number}
                  </p>
                  <p className="restaurantInfo">{currentRestaurant.website}</p>
                  <p className="restaurantInfo">{currentRestaurant.street}</p>
                  <p className="restaurantInfo">{currentRestaurant.city}</p>
                  <p className="restaurantInfo">{currentRestaurant.state}</p>
                  <p className="restaurantInfo">{currentRestaurant.zip}</p>
                  <br></br>
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
              </>
            )}
          </div>
        </div>
        <div className="column">
          <div className="column-2">
            {currentRestaurant && (
              <>
                <div className="averageRestaurantReview">
                  {averageReviewRating >= 4 && (
                    <>
                      <h2>You've Got Good Taste! This Is A Good Restaurant!</h2>
                      <img src={require("../assets/new_good.png")} />
                    </>
                  )}
                  {averageReviewRating >= 3 && averageReviewRating < 4 && (
                    <>
                      <h2>
                        You've Got Meh Taste... This Is An Okay Restaurant.
                      </h2>
                      <img src={require("../assets/new_mid.png")} />
                    </>
                  )}
                  {averageReviewRating < 3 && (
                    <>
                      <h2>
                        You've Got Horrible Taste... This Is A Bad Restaurant.
                      </h2>
                      <img src={require("../assets/new_bad.png")} />
                    </>
                  )}
                  {!averageReviewRating && (
                    <>
                      <h2>This Restaurant Has Not Been Given A Review Yet!</h2>
                      <br />
                      <br />
                      <br />
                      <img src={require("../assets/bad.png")} />
                    </>
                  )}
                </div>
                {averageReviewRating > 0 && (
                  <div className="restaurantTable">
                    {currentReviews.map((item) => (
                      <div key={item.id} className="commentRow ">
                        <div className="comment">
                          <div>{item.user.first_name}</div>
                          <div className="commentHolder">{item.review}</div>
                        </div>
                        <div className="review">
                          <div className="star-rating">
                            {[...Array(item.rating)].map((star, index) => {
                              index += 1;
                              return <span className="star">&#9733;</span>;
                            })}
                            {[...Array(5 - item.rating)].map((star, index) => {
                              index += 1;
                              return <span className="star">&#9734;</span>;
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviewShow;
