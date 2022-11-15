import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import mockRestaurants from "./mockRestaurants";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RestaurantEdit from "./pages/RestaurantEdit";
import RestaurantIndex from "./pages/RestaurantIndex";
import RestaurantNew from "./pages/RestaurantNew";
import RestaurantReviewEdit from "./pages/RestaurantReviewEdit";
import RestaurantReviewIndex from "./pages/RestaurantReviewIndex";
import RestaurantReviewNew from "./pages/RestaurantReviewNew";
import RestaurantReviewShow from "./pages/RestaurantReviewShow";
import RestaurantShow from "./pages/RestaurantShow";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        {/* Restaurant Routes */}
        <Route path="/restaurantindex" element={<RestaurantIndex restaurants={mockRestaurants} />} />
        <Route path="/restaurantshow/:id" element={<RestaurantShow restaurants={mockRestaurants}/>} />
        <Route path="/restaurantnew" element={<RestaurantNew />} />
        <Route path="/restaurantedit/:id" element={<RestaurantEdit />} />
        {/* Restaurant Review Routes */}
        <Route path="/restaurantreviewindex" element={<RestaurantReviewIndex />} />
        <Route path="/restaurantreviewshow/:id" element={<RestaurantReviewShow />} />
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
