import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import RestaurantEdit from "./pages/RestaurantEdit";
import RestaurantIndex from "./pages/RestaurantIndex";
import RestaurantNew from "./pages/RestaurantNew";
import RestaurantShow from "./pages/RestaurantShow";

import RestaurantReviewEdit from "./pages/RestaurantReviewEdit";
import RestaurantReviewIndex from "./pages/RestaurantReviewIndex";
import RestaurantReviewNew from "./pages/RestaurantReviewNew";
import RestaurantReviewShow from "./pages/RestaurantReviewShow";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props}/>} />
        {/* Restaurant Routes */}
        <Route path="/restaurantindex" element={<RestaurantIndex/>} />
        <Route path="/restaurantshow" element={<RestaurantShow />} />
        <Route path="/restaurantnew" element={<RestaurantNew />} />
        <Route path="/restaurantedit" element={<RestaurantEdit />} />
        {/* Restaurant Review Routes */}
        <Route path="/restaurantreviewindex" element={<RestaurantReviewIndex/>} />
        <Route path="/restaurantreviewshow" element={<RestaurantReviewShow />} />
        <Route path="/restaurantreviewnew" element={<RestaurantReviewNew />} />
        <Route path="/restaurantreviewedit" element={<RestaurantReviewEdit />} />
        {/* Unknown Link */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
