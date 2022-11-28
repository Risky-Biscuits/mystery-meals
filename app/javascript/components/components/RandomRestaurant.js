import Phone from "@mui/icons-material/Phone";
import Restaurant from "@mui/icons-material/Restaurant";
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import Savings from "@mui/icons-material/Savings";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const RandomRestaurant = ({ restaurants }) => {
// ============= === === === State === === === =================================
  // State to store identifier for random restaurant selected
  const [randNum, setRandNum] = useState(0);
  // State to store click state, which is used to tell 
  // conditional render logic to display card when clicked 
  const [clicked, setClicked] = useState(false)
  
// ============= === === === Functions === === === =============================
  // Function generates random number based on restaurants array length
  const getRandomRestaurant = (rest, randNum) => {
    let currentNumber = randNum
    let newNumber = Math.floor(Math.random() * rest.length)
    while(currentNumber === newNumber) {
      newNumber = Math.floor(Math.random() * rest.length)
    }
    setRandNum(newNumber);
  };

  // Function that handles click events. Calls function to generate random 
  // number and sets Click state to TRUE
  const handleClick = () => {
    getRandomRestaurant(restaurants, randNum);
    setClicked(true)
  };

// ========== === === === Page Render Begins === === === =======================
  return (
    <div className="page-container">
      <h1>Press Button For Our Pick For Dinner</h1>
      <Button
        onClick={() => handleClick()}
        variant="contained"
        sx={{
          color: "white",
          padding: { xs: "6px", sm: "12px" },
          bgcolor: "#55AF4D",
          fontSize: { xs: "1.2rem", sm: "1.2rem" },
          mb: "10px",
          mt: "15px"
        }}
      >
        <RestaurantMenuRoundedIcon/>&nbsp; Press for Choice
      </Button>

{/* ========= === === === Conditional Render Logic === === === ============= */}
      {/* If there is data in restaurants available, and the Button has been 
      clicked... render this section (Restaurant Card) */}
      {restaurants[0] && clicked && (
        <Card
          elevation={24}
          sx={{
            width: { xs: "350px", md: "650px" },
            border: "5px solid #AD8350",
            mb: "1rem",
          }}
        >
          <CardMedia
            component="img"
            height="400px"
            image={restaurants[randNum].image}
            alt="restaurant"
          />
          <div className="show-card-container">
            <CardContent>
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  <Restaurant /> {restaurants[randNum].name}
                </Typography>
                <div className="show-card-container">
                  <div className="show-card-info">
                    <Typography
                      sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      {restaurants[randNum].food_type}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.2rem" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      <Savings sx={{ verticalAlign: "bottom" }} />{" "}
                      {restaurants[randNum].price}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.2rem" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      <Phone sx={{ verticalAlign: "bottom" }} />{" "}
                      {restaurants[randNum].phone_number}
                    </Typography>

                    <div className="card-address-container">
                      <Typography
                        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        Address:
                      </Typography>

                      <Typography
                        sx={{ fontSize: "1.2rem" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        {restaurants[randNum].street}
                      </Typography>
                      <div className="horizontal-flex-container">
                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {restaurants[randNum].city},
                        </Typography>
                        &nbsp;
                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {restaurants[randNum].state}
                        </Typography>
                        &nbsp;
                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {restaurants[randNum].zip}
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      sx={{ fontSize: "1.2rem" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      <a
                        href={`${restaurants[randNum].website}`}
                        target="_blank"
                      >
                        Visit Their Website{" "}
                      </a>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RandomRestaurant;
