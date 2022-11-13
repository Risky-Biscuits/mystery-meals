import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantReviewShow from "../pages/RestaurantReviewShow";

describe("<RestaurantReviewShow />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantReviewShow />
      </BrowserRouter>
    );
  });

});