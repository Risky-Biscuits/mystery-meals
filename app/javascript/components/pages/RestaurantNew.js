import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelPresentationRounded from "@mui/icons-material/CancelPresentationRounded";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
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
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

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
    <div className="page-container form-title">
      <h1>Add A New Restaurant To Our Database</h1>
      <Grid
        className="fieldContainer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          New Restaurant Form
        </Typography>
        <Grid
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              inputProps={{
                maxLength: 25,
              }}
              required
              id="name"
              name="name"
              label="Name of Restaurant"
              size="medium"
              type="text"
              sx={{ width: { xs: "300px", sm: "300px" } }}
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
              sx={{ width: { xs: "300px", sm: "300px" } }}
            />
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={6}>
            <FormControl
              sx={{
                width: { xs: "300px", sm: "300px" },
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
                width: { xs: "300px", sm: "300px" },
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
                sx={{ width: { xs: "300px", sm: "300px" } }}
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

        <Grid item xs={6} sx={{ width: { xs: "300px", sm: "615px" } }}>
          <TextField
            onChange={handleChange}
            sx={{ width: "100%" }}
            required
            id="website"
            name="website"
            label="Website"
          />
        </Grid>

        <Grid item xs={6} sx={{ width: { xs: "300px", sm: "615px" } }}>
          <TextField
            onChange={handleChange}
            sx={{ width: "100%" }}
            required
            id="image"
            name="image"
            label="Image URL"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              required
              id="street"
              name="street"
              label="street"
              sx={{ width: { xs: "300px", sm: "300px" } }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              required
              id="city"
              name="city"
              label="City"
              autoComplete="City"
              sx={{ width: { xs: "300px", sm: "300px" } }}
            />
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              id="state"
              name="state"
              label="State"
              sx={{ width: { xs: "300px", sm: "300px" } }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="number"
              onChange={handleChange}
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              autoComplete="Zip"
              sx={{ width: { xs: "300px", sm: "300px" } }}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            mr: { xs: "inherit", md: "110px" },
            flexDirection: { xs: "column", sm: "row" },
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
            <AddCircleOutlineIcon />
            &nbsp;Add Restaurant
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
            <CancelPresentationRounded />
            &nbsp;Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantNew;
