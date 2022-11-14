import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import mockRestaurants from "../mockRestaurants";
import RestaurantIndex from "../pages/RestaurantIndex";

describe("<RestaurantIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={mockRestaurants} />
      </BrowserRouter>
    );
  });

});