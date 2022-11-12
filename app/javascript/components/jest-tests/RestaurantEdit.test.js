import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantEdit from "../pages/RestaurantEdit";

describe("<RestaurantEdit />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantEdit />
      </BrowserRouter>
    );
  });

});