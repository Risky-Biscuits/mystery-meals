import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantShow from "../pages/RestaurantShow";

describe("<RestaurantShow />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantShow />
      </BrowserRouter>
    );
  });

});