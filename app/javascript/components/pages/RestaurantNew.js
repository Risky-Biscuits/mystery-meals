import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantNew = ({ createRestaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    food_type: "",
    image: "",
    price: "",
    phone_number: "",
    website: "",
    zip: 0,
    city: "",
    street: "",
    state: "",
  });

  console.log(newRestaurant);
  const handleChange = (e) => {
    // if (e.target.name === "zip") {
    //   console.log(e);
    //   setNewRestaurant({ ...newRestaurant, [e.target.name]: parseInt(e.target.value) });
    // } else {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };
  // };

  const handleSubmit = () => {
    if (
      newRestaurant.name === "" ||
      newRestaurant.food_type === "" ||
      newRestaurant.image === "" ||
      newRestaurant.price === "" ||
      newRestaurant.phone_number === "" ||
      newRestaurant.website === "" ||
      newRestaurant.zip === "" ||
      newRestaurant.city === "" ||
      newRestaurant.street === "" ||
      newRestaurant.state === ""
    )
      return;
    else {
      createRestaurant(newRestaurant);
      navigate("/restaurantindex");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Restaurant New</h1>
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
          Add Your Restaurant
        </Typography>
        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              required
              id="name"
              name="name"
              label="Name of Restaurant"
              size="medium"
              type="text"
              // value={userInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              required
              id="phone"
              name="phone_number"
              label="Phone Number"
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
              <InputLabel required>Price</InputLabel>
              <Select
                labelId="priceLabel"
                id="price"
                value={newRestaurant.price}
                label="Price"
                name="price"
                onChange={handleChange}
              >
                <MenuItem value={"$"}>$ - Cheap</MenuItem>
                <MenuItem value={"$$"}>$$ - Moderate</MenuItem>
                <MenuItem value={"$$$"}>$$$ - Expensive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl
              sx={{
                width: "240px",
                borderRadius: "5px",
                bgcolor: "white",
                height: "65px",
              }}
            >
              <InputLabel required>Food Type</InputLabel>
              <Select
                labelId="foodLabel"
                id="food_type"
                value={newRestaurant.food_type}
                label="Food Type"
                name="food_type"
                onChange={handleChange}
              >
                <MenuItem value={"Mexican"}>Mexican</MenuItem>
                <MenuItem value={"Chinese"}>Chinese</MenuItem>
                <MenuItem value={"American"}>American</MenuItem>
                <MenuItem value={"Italian"}>Italian</MenuItem>
                <MenuItem value={"Indian"}>Indian</MenuItem>
                <MenuItem value={"Vietnamese"}>Vietnamese</MenuItem>
                <MenuItem value={"Thai"}>Thai</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
                <MenuItem value={"Vegan"}>Vegan</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ width: "81%" }}>
          <TextField
            onChange={handleChange}
            sx={{ width: "100%" }}
            required
            id="website"
            name="website"
            label="Website"
          />
        </Grid>

        <Grid item xs={12} sx={{ width: "81%" }}>
          <TextField
            onChange={handleChange}
            sx={{ width: "100%" }}
            required
            id="image"
            name="image"
            label="Image URL"
          />
        </Grid>
        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              required
              id="street"
              name="street"
              label="street"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              required
              id="city"
              name="city"
              label="City"
              autoComplete="City"
            />
          </Grid>
        </Grid>

        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              id="state"
              name="state"
              label="State"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              onChange={handleChange}
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              autoComplete="Zip"
            />
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", gap: "15px" }}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: "15px",
            mr: "170px",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Add Restaurant
          </Button>
          <Button variant="contained">Cancel</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantNew;