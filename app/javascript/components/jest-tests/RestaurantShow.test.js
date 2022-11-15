import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantShow from "../pages/RestaurantShow";
import mockRestaurants from "../mockRestaurants"

describe("<RestaurantShow />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantShow restaurants={mockRestaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByText("Restaurant Details")).toBeInTheDocument()
  })
});