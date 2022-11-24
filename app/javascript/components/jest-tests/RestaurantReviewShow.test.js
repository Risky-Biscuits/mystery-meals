import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockRestaurants from "../mockRestaurants";
import mockReviews from "../mockReviews";
import RestaurantReviewShow from "../pages/RestaurantReviewShow";
import current_user from "./__mockUser__/MockUser";


describe("<RestaurantReviewShow />", () => {
  it("passes the params for the review ID", () => {
    render(
      <MemoryRouter initialEntries={["/restaurantreviewshow/1"]}>
        <Routes>
          <Route path="/restaurantreviewshow/:id" element={<RestaurantReviewShow restaurants={mockRestaurants} reviews={mockReviews}} />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL();
    // const showRender = screen.getByText(/sunshine/i);
    screen.debug();
  });
 
});