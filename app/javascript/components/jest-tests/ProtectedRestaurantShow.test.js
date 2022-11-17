import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import RestaurantShow from "../pages/RestaurantShow";
import mockRestaurants from "../mockRestaurants";
import restaurants from "../mockRestaurants";

describe("<ProtectedRestaurantShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/protectedrestaurantshow/2/3"]}>
        <Routes>
          <Route
            path="/protectedrestaurantshow/:user_id/:id"
            element={<RestaurantShow restaurants={mockRestaurants} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const showRender = screen.getByText(/Phở Cue/i);
    screen.logTestingPlaygroundURL()
    screen.debug(showRender);
    expect(screen.getByText("Restaurant Details")).toBeInTheDocument();
  });
});
