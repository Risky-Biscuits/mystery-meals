import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import React from "react";

const RestaurantIndex = ({
  restaurants,
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>

{/* ------------------------------When Logged In------------------------------------- */}    

      {logged_in && (
        <div className="page-container">
          <h1>See All Restaurants</h1>
          <div className="card-container">
            {restaurants.map((restaurant, index) => {
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
                        to={`/restaurantshow/${restaurant.id}`}
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
                          Details
                        </Button>
                      </NavLink>
                      <Button
                        variant="contained"
                        sx={{
                          color: "white",
                          padding: "12px",
                          bgcolor: "#55AF4D",
                        }}
                      >
                        Review
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      )}

{/* ------------------------------When Logged Out------------------------------------- */}

      {!logged_in && (
        <div className="page-container">
          <h1>See All Restaurants</h1>
          <div className="card-container">
            {restaurants.map((restaurant, index) => {
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
                        to={`/restaurantshow/${restaurant.id}`}
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
                          Details
                        </Button>
                      </NavLink>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantIndex;
