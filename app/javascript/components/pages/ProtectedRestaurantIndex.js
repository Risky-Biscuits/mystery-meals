import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

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
            {reviews
              .filter((review) => review.user_id === current_user.id)
              .map((review) => {
                return restaurants
                  .filter(
                    (restaurant) => restaurant.id === review.restaurant_id
                  )
                  .map((restaurant, index) => {
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
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {restaurant.name}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Details</Button>
                            <Button size="small">Reviews</Button>
                          </CardActions>
                        </Card>
                      </div>
                    );
                  });
              })}
          </div>
        </>
      )}
      {!logged_in && <>YOU MUST BE LOGGED IN TO SEE THIS PAGE</>}
    </div>
  );
};

export default ProtectedRestaurantIndex;
