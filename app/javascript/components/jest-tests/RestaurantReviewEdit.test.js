import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantReviewEdit from "../pages/RestaurantReviewEdit";

describe("<RestaurantReviewEdit />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantReviewEdit />
      </BrowserRouter>
    );
  });

});