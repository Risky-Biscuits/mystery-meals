import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RandomRestaurant from "./components/RandomRestaurant";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRestaurantIndex from "./pages/ProtectedRestaurantIndex";
import ProtectedRestaurantShow from "./pages/ProtectedRestaurantShow";
import RestaurantEdit from "./pages/RestaurantEdit";
import RestaurantIndex from "./pages/RestaurantIndex";
import RestaurantNew from "./pages/RestaurantNew";
import RestaurantReviewEdit from "./pages/RestaurantReviewEdit";
import RestaurantReviewNew from "./pages/RestaurantReviewNew";
import RestaurantReviewShow from "./pages/RestaurantReviewShow";
import RestaurantShow from "./pages/RestaurantShow";

const App = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    readRestaurant();
    readReview();
  }, []);

  // ========================= RESTAURANT SECTION ================================
  const readRestaurant = () => {
    fetch("/restaurants")
      .then((response) => response.json())
      .then((payload) => {
        setRestaurants(payload);
      })
      .catch((error) => console.log(error));
  };

  const createRestaurant = (restaurant) => {
    fetch("/restaurants", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(restaurant),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readRestaurant())
      .catch((errors) => console.log("Restaurant create errors:", errors));
  };

  const updateRestaurant = (restaurant, id) => {
    fetch(`/restaurants/${id}`, {
      // converting an object to a string
      body: JSON.stringify(restaurant),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH",
    })
      .then((response) => {
        response.json();
      })
      .then(() => readRestaurant())
      .catch((errors) => console.log("Restaurant update errors:", errors));
  };

  // ========================= REVIEW SECTION ====================================
  const createReview = (review) => {
    fetch("/restaurant_reviews", {
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readReview())
      .catch((errors) => console.log("Review create errors:", errors));
  };

  const readReview = () => {
    fetch("/restaurant_reviews")
      .then((response) => response.json())
      .then((payload) => {
        setReviews(payload);
      })
      .catch((error) => console.log(error));
  };

  // Used to verify data is being processed correctly
  console.log("APP.js restaurants => ", restaurants);
  console.log("APP.js reviews => ", reviews);

  // ========================= DELETE SECTION ====================================

  const deleteRestaurant = (id) => {
    fetch(`/restaurants/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readRestaurant())
      .catch((errors) => console.log("delete Errors:", errors));
  };

  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Header className="header" {...props} />
        <Routes>
          <Route exact path="/" element={<Home {...props} />} />
          {/* Restaurant Routes */}
          <Route
            path="/restaurantindex"
            element={<RestaurantIndex {...props} restaurants={restaurants} />}
          />
          <Route
            path="/protectedrestaurantindex"
            element={
              <ProtectedRestaurantIndex
                {...props}
                restaurants={restaurants}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/restaurantshow/:id"
            element={
              <RestaurantShow
                {...props}
                restaurants={restaurants}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/protectedrestaurantshow/:user_id/:id"
            element={
              <ProtectedRestaurantShow
                {...props}
                restaurants={restaurants}
                reviews={reviews}
                deleteRestaurant={deleteRestaurant}
              />
            }
          />
          <Route
            path="/restaurantnew"
            element={<RestaurantNew createRestaurant={createRestaurant} />}
          />
          <Route
            path="/restaurantedit/:id"
            element={
              <RestaurantEdit
                restaurants={restaurants}
                updateRestaurant={updateRestaurant}
              />
            }
          />

          {/* Restaurant Review Routes */}
          <Route
            path="/restaurantreviewshow/:id"
            element={
              <RestaurantReviewShow
                {...props}
                reviews={reviews}
                restaurants={restaurants}
              />
            }
          />
          <Route
            path="/restaurantreviewnew/:id"
            element={
              <RestaurantReviewNew
                {...props}
                createReview={createReview}
                restaurants={restaurants}
              />
            }
          />
          <Route
            path="/restaurantreviewedit/:id"
            element={<RestaurantReviewEdit />}
          />
          <Route
            path="/randomrestaurant"
            element={<RandomRestaurant restaurants={restaurants} />}
          />
          {/* Unknown Link */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
