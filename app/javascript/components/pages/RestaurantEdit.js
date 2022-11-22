import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RestaurantEdit = ({ restaurants, updateRestaurant }) => {
  const { id } = useParams();
  let currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  console.log("CURRENT RESTAUARANT EDIT =>", currentRestaurant);
  const [editRestaurant, setEditRestaurant] = useState({
    name: currentRestaurant?.name,
    food_type: currentRestaurant?.food_type,
    image: currentRestaurant?.image,
    price: currentRestaurant?.price,
    phone_number: currentRestaurant?.phone_number,
    website: currentRestaurant?.website,
    zip: currentRestaurant?.zip,
    city: currentRestaurant?.city,
    street: currentRestaurant?.street,
    state: currentRestaurant?.state,
  });

  const handleChange = (e) => {
    setEditRestaurant({ ...editRestaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      editRestaurant.name === "" ||
      editRestaurant.food_type === "" ||
      editRestaurant.image === "" ||
      editRestaurant.price === "" ||
      editRestaurant.phone_number === "" ||
      editRestaurant.website === "" ||
      editRestaurant.zip === "" ||
      editRestaurant.city === "" ||
      editRestaurant.street === "" ||
      editRestaurant.state === ""
    )
      return;
    else {
      updateRestaurant(editRestaurant, currentRestaurant.id);
      navigate("/restaurantindex");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Restaurant Update</h1>
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
          Update Your Restaurant
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
                label="Price"
                name="price"
                onChange={handleChange}
                defaultValue={""}
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
                label="Food Type"
                name="food_type"
                onChange={handleChange}
                defaultValue={""}
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
          <Button
            variant="contained"
            sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#55AF4D",
            }}
            onClick={handleSubmit}
          >
           <NoteAltRoundedIcon/>&nbsp;Update Restaurant
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
            <CancelRoundedIcon/>&nbsp;Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantEdit;
