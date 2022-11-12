import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantReviewNew from "../pages/RestaurantReviewNew";

describe("<RestaurantReviewNew />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantReviewNew />
      </BrowserRouter>
    );
  });

});