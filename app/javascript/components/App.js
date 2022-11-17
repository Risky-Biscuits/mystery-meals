import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import mockRestaurants from "./mockRestaurants";
import mockReviews from "./mockReviews";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRestaurantIndex from "./pages/ProtectedRestaurantIndex";
import RestaurantEdit from "./pages/RestaurantEdit";
import RestaurantIndex from "./pages/RestaurantIndex";
import RestaurantNew from "./pages/RestaurantNew";
import RestaurantReviewEdit from "./pages/RestaurantReviewEdit";
import RestaurantReviewIndex from "./pages/RestaurantReviewIndex";
import RestaurantReviewNew from "./pages/RestaurantReviewNew";
import RestaurantReviewShow from "./pages/RestaurantReviewShow";
import RestaurantShow from "./pages/RestaurantShow";
import ProtectedRestaurantShow from "./pages/ProtectedRestaurantShow"

const App = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    readRestaurant();
  }, []);

  const readRestaurant = () => {
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((payload) => {
        setRestaurants(payload);
      })
      .catch((error) => console.log(error));
  };

  const createRestaurant = (restaurant) => {
    fetch("http://localhost:3000/restaurants", {
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

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        {/* Restaurant Routes */}
        <Route path="/restaurantindex" element={<RestaurantIndex {...props} restaurants={restaurants} />} />
        <Route path="/protectedrestaurantindex" element={<ProtectedRestaurantIndex {...props} restaurants={mockRestaurants} reviews={mockReviews}/>} />
        <Route path="/restaurantshow/:id" element={<RestaurantShow {...props} restaurants={mockRestaurants}/>} />
        <Route path="/protectedrestaurantshow/:user_id/:id" element={<ProtectedRestaurantShow {...props} restaurants={mockRestaurants} reviews={mockReviews}/>} />
        <Route path="/restaurantnew" element={<RestaurantNew createRestaurant={createRestaurant} />} />
        <Route path="/restaurantedit/:id" element={<RestaurantEdit />} />
        {/* Restaurant Review Routes */}
        <Route path="/restaurantreviewindex" element={<RestaurantReviewIndex />} />
        <Route path="/restaurantreviewshow/:id" element={<RestaurantReviewShow {...props} reviews={mockReviews} restaurants={mockRestaurants}/>} />
        <Route path="/restaurantreviewnew" element={<RestaurantReviewNew />} />
        <Route path="/restaurantreviewsedit/:id" element={<RestaurantReviewEdit />} />
        {/* Unknown Link */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
