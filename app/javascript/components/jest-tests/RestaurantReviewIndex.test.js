import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantReviewIndex from "../pages/RestaurantReviewIndex";

describe("<RestaurantReviewIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantReviewIndex />
      </BrowserRouter>
    );
  });

});