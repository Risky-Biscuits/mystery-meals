import InfoIcon from '@mui/icons-material/Info';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

export const filterRestaurantsByUser = (restaurants, reviews, user_id) => {
  const filteredReviews = reviews.filter(
    (review) => review.user_id === user_id
  );
  const restaurantIds = filteredReviews.map((review) => review.restaurant_id);
  return restaurants.filter((restaurant) =>
    restaurantIds.includes(restaurant.id)
  );
};

const ProtectedRestaurantIndex = ({
  logged_in,
  restaurants,
  reviews,
  current_user,
}) => {
  return (
    <div className="page-container title">
      <h1>My Reviews</h1>
      {logged_in && (
        <>
          <h2>Here are all the restaurants you have reviewed</h2>
          <div className="card-container">
            {filterRestaurantsByUser(restaurants, reviews, current_user.id).map(
              (restaurant, index) => {
                return (
                  <div key={index}>
                    <Card
                      elevation={24}
                      sx={{ width: 325, border: "5px solid #AD8350" }}
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
                      <CardActions sx={{display: "flex", justifyContent: "center"}}>
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
                            <InfoIcon/>&nbsp;DETAILS
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
                           <ReviewsIcon/>&nbsp;REVIEWS
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
