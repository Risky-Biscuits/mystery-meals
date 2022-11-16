import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import RestaurantReviewShow from "../pages/RestaurantReviewShow";
import mockReviews from "../mockReviews";
import mockRestaurants from "../mockRestaurants";

describe("<RestaurantReviewShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/restaurantreviewshow/1"]}>
        <Routes>
          <Route
            path="/restaurantreviewshow/:id"
            element={
              <RestaurantReviewShow
                restaurants={mockRestaurants}
                reviews={mockReviews}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL();
    const showRender = screen.getByText(/"not bad for east coast tacos"/i);
    screen.debug(showRender);
    expect(showRender).toBeInTheDocument();
  });
});
