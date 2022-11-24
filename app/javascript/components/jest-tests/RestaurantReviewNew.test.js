import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import restaurants from "../mockRestaurants";
import RestaurantReviewNew from "../pages/RestaurantReviewNew";

describe("<RestaurantReviewNew />", () => {
  it("renders without crashing", () => {
    render(
        <MemoryRouter initialEntries={["/restaurantreviewnew/2"]}>
          <Routes>
            <Route
              path="/restaurantreviewnew/:id"
              element={
                <RestaurantReviewNew
                  restaurants={restaurants}
                  current_user={"./__mockUser__/MockUser.js"}
                />
              }
            />
          </Routes>
        </MemoryRouter>
    );

    screen.logTestingPlaygroundURL()
  });

  it("displays review text from text field", () => {
    render(
        <MemoryRouter initialEntries={["/restaurantreviewnew/2"]}>
          <Routes>
            <Route
              path="/restaurantreviewnew/:id"
              element={
                <RestaurantReviewNew
                  restaurants={restaurants}
                  current_user={"./__mockUser__/MockUser.js"}
                />
              }
            />
          </Routes>
        </MemoryRouter>
    );
    const element = screen.getByText(/review \*/i) 
    expect(element).toBeInTheDocument()
  });

  it("displays add review button", () => {
    render(
        <MemoryRouter initialEntries={["/restaurantreviewnew/2"]}>
          <Routes>
            <Route
              path="/restaurantreviewnew/:id"
              element={
                <RestaurantReviewNew
                  restaurants={restaurants}
                  current_user={"./__mockUser__/MockUser.js"}
                />
              }
            />
          </Routes>
        </MemoryRouter>
    );
    const element = screen.getByRole('button', {
      name: /add review/i
    })  
    expect(element).toBeInTheDocument()
  });

  it("has a button that can be clicked on", () => {
    render(
        <MemoryRouter initialEntries={["/restaurantreviewnew/2"]}>
          <Routes>
            <Route
              path="/restaurantreviewnew/:id"
              element={
                <RestaurantReviewNew
                  restaurants={restaurants}
                  current_user={"./__mockUser__/MockUser.js"}
                />
              }
            />
          </Routes>
        </MemoryRouter>
    );
    userEvent.click(screen.getByText(/add review/i));
    expect(screen.getByText(/add review/i)).toBeInTheDocument();
  });

});

