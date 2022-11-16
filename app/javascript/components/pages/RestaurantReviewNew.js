import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const RestaurantReviewNew = ({ current_user, restaurants, createReview }) => {
  const { id } = useParams();
  const currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  const [newReview, setNewReview] = useState({
    review: "",
    rating: "",
    user_id: current_user.id,
    restaurant_id: id,
  });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      newReview.review === "" ||
      newReview.rating === "" ||
      newReview.user_id === "" ||
      newReview.restaurant_id === ""
    )
      return;
    else {
      createReview(newReview);
      navigate("/restaurantindex");
    }
  };

  const navigate = useNavigate();

  console.log("CURRENT RESTAURANT", currentRestaurant);
  console.log("CURRENT USER", current_user);
  console.log("ID => ", id);
  console.log("CURRENT RESTAURANT => ", currentRestaurant);
  console.log("RESTAURANTS => ", restaurants);
  console.log("NEW REVIEW => ", newReview);

  return (
    <div className="page-container">
      <h1>Restaurant Review New</h1>
      <Grid
        className="fieldContainer"
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          width: "650px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add A Review
        </Typography>
        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              required
              id="review"
              name="review"
              label="Review"
              multiline
              rows={4}
              type="text"
            />
          </Grid>
        </Grid>

        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Grid item xs={6}>
            <FormControl
              sx={{
                width: "240px",
                borderRadius: "5px",
                bgcolor: "white",
                height: "65px",
              }}
            >
              <InputLabel required>Rating</InputLabel>
              <Select
                labelId="ratingLabel"
                id="rating"
                value={newReview.rating}
                label="Rating"
                name="rating"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: "15px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#55AF4D",
            }}
            onClick={handleSubmit}
          >
            Add Review
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#55AF4D",
            }}
            href="/restaurantindex"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantReviewNew;
