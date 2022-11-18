import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

export const filterRestaurantsByUser = (restaurants, reviews, user_id) => {
  const filteredReviews = reviews.filter((review) => review.user_id === user_id);
  const restaurantIds = filteredReviews.map((review) => review.restaurant_id);
  return restaurants.filter((restaurant) => restaurantIds.includes(restaurant.id)
  );
};

const ProtectedRestaurantIndex = ({
  logged_in,
  restaurants,
  reviews,
  current_user,
}) => {
  return (
    <div className="page-container">
      <h1>Protected Restaurant Index</h1>
      {logged_in && (
        <>
          <h1>See All Restaurants</h1>
          <div className="card-container">
            {filterRestaurantsByUser(restaurants, reviews, current_user.id).map(
              (restaurant, index) => {
                return (
                  <div key={index}>
                    <Card
                      elevation={24}
                      sx={{ maxWidth: 300, border: "5px solid #AD8350" }}
                    >
                      <CardMedia
                        component="img"
                        height="340"
                        image={restaurant.image}
                        alt="restaurant"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {restaurant.name}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <NavLink
                          to={`/protectedrestaurantshow/${current_user.id}/${restaurant.id}`}
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
                            DETAILS
                          </Button>
                        </NavLink>
                        <NavLink
                          to={`/restaurantreviewshow/${restaurant.id}`}
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
                            REVIEWS
                          </Button>
                        </NavLink>
                      </CardActions>
                    </Card>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
      {!logged_in && <>YOU MUST BE LOGGED IN TO SEE THIS PAGE</>}
    </div>
  );
};

export default ProtectedRestaurantIndex;
