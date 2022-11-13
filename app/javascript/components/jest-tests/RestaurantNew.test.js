import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantNew from "../pages/RestaurantNew";

describe("<RestaurantNew  />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantNew />
      </BrowserRouter>
    );
  });

});