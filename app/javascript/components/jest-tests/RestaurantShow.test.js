import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import RestaurantShow from "../pages/RestaurantShow";
import mockRestaurants from "../mockRestaurants"
import restaurants from "../mockRestaurants";

describe("<RestaurantShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/restaurantshow/1"]}>
        <Routes>
          <Route path="/restaurantshow/:id" element={<RestaurantShow restaurants={mockRestaurants} />} />
        </Routes>
      </MemoryRouter>
    )
    const showRender = screen.getByText(/Furry Tacos/i)
    screen.debug(showRender)
    expect(screen.getByText("Restaurant Details")).toBeInTheDocument()
  })
});