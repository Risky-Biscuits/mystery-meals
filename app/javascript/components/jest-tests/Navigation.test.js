import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import mockRestaurants from "../mockRestaurants";
import RestaurantShow from "../pages/RestaurantShow";

describe("<RestaurantShow />", () => {
  it("NavLink exists", () => {
    render(
      <MemoryRouter initialEntries={["/restaurantshow/1"]}>
        <Routes>
          <Route path="/restaurantshow/:id" element={<RestaurantShow mockRestaurants={mockRestaurants} />} />
        </Routes>
      </MemoryRouter>
    )
    const navLink = screen.getByText("BACK TO ALL RESTAURANTS")
    expect(navLink).toBeInTheDocument()
  })
})