import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MockUser from "../jest-tests/__mockUser__/MockUser";
import mockRestaurants from "../mockRestaurants";
import ProtectedRestaurantIndex from "../pages/ProtectedRestaurantIndex";

describe("<RestaurantIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProtectedRestaurantIndex />
      </BrowserRouter>
    );
  });

  it("renders when user is logged in", () => {
    render(
      <BrowserRouter>
        <ProtectedRestaurantIndex logged_in={true} current_user={MockUser} restaurants={mockRestaurants} />
      </BrowserRouter>
    );
  });

});