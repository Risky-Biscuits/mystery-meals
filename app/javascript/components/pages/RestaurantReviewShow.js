import Button from "@mui/material/Button";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const RestaurantReviewShow = ({ reviews, restaurants }) => {
  // ============= === === === useParams Section === === === =====================
  // ID Params comes from path ==>  "/restaurantreviewshow/${restaurant.id}" which
  // gets called when the Details Button is pressed in RestaurantIndex Page.

  // useParams is imported from react-router-dom to allow the ID to be utilized
  // Pulls restaurant ID from params based on current restaurant selected
  const { id } = useParams();

  // This filters through all the reviews and pulls the reviews that have the
  // matching restaurant ID.
  const currentReviews = reviews?.filter(
    (review) => review.restaurant_id === parseInt(id) && review.rating !== null
  );

  // ======= === === === Review Calculation Section === === === ================
  // This section calculates the average review score from reviews of all users
  
  //REVIEW variables to be used in rating calculations
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

  // ========== === === === Page Render Begins === === === =====================
  return (
    <div className="page-container">
      <div className="row">
        <div className="column">
          <div className="column-1">
            {/* If there is a restaurant available...Render this section */}
            {currentRestaurant && (
              <>
                <div className="imageContainer">
                  <img
                    src={currentRestaurant.image}
                    className="restaurantPicture"
                  />
                </div>
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
            {/* Render Section for Reviews === === === ======================*/}
            {currentRestaurant && (
              <>
                <div className="averageRestaurantReview">
                  {/* If there is a HIGH average rating... Render this */}
                  {averageReviewRating >= 4 && (
                    <>
                      <h2>You've Got Good Taste! This Is A Good Restaurant!</h2>
                      <img src={require("../assets/new_good.png")} />
                    </>
                  )}
                  {/* If there is a MEDIAN average rating... Render this */}
                  {averageReviewRating >= 3 && averageReviewRating < 4 && (
                    <>
                      <h2>
                        You've Got Meh Taste... This Is An Okay Restaurant.
                      </h2>
                      <img src={require("../assets/new_mid.png")} />
                    </>
                  )}
                  {/* If there is a LOW average rating... Render this */}
                  {averageReviewRating < 3 && (
                    <>
                      <h2>
                        You've Got Horrible Taste... This Is A Bad Restaurant.
                      </h2>
                      <img src={require("../assets/new_bad.png")} />
                    </>
                  )}
                  {/* If there no reviews... Render this */}
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

                {/* === === === REVIEWS AND STAR RATING SECTION === === ===  */}
                {/* If there are REVIEWS, display the reviews section */}
                {averageReviewRating > 0 && (
                  <div className="restaurantTable">
                    {/* Maps through every review of current restaurant */}
                    {currentReviews.map((item) => (
                      <div key={item.id} className="commentRow ">
                        <div className="comment">
                          {/* Show's name of User who left Review */}
                          <div>{item.user.first_name}</div>
                          {/* Displays User's Review */}
                          <div className="commentHolder">{item.review}</div>
                        </div>

                        <div className="review">
                          {/* === === === STAR CREATION SECTION === === ===  */}
                          {/* Creates Stars based of review score */}
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
