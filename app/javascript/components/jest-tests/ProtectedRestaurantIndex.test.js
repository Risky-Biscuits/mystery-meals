import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProtectedRestaurantIndex from "../pages/ProtectedRestaurantIndex";

describe("<RestaurantIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProtectedRestaurantIndex />
      </BrowserRouter>
    );
  });

});