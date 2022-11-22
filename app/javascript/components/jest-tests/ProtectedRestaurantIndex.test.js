import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MockUser from "../jest-tests/__mockUser__/MockUser";
import mockRestaurants from "../mockRestaurants";
import mockReviews from "../mockReviews";
import ProtectedRestaurantIndex, { filterRestaurantsByUser } from "../pages/ProtectedRestaurantIndex";


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
      // <BrowserRouter>
      <ProtectedRestaurantIndex logged_in={true} restaurants={mockRestaurants} reviews={mockReviews} current_user={MockUser}/>
      // </BrowserRouter>
    );
    screen.debug();
    const element = screen.getByRole('heading', { name: /see all restaurants/i })
    expect(element).toBeInTheDocument()

  });





  describe("filterRestaurantsByUser", () => {
    it("filters data", () => {
      expect(filterRestaurantsByUser(mockRestaurants, mockReviews, 1)).toEqual([mockRestaurants[0], mockRestaurants[1]])
    });
  })

  // it("renders when user is logged in", () => {
  //   render(
  //     <BrowserRouter>
  //       <ProtectedRestaurantIndex logged_in={true} current_user={MockUser} restaurants={mockRestaurants} reviews={mockReviews} />
  //     </BrowserRouter>
  //   );



  // ======= NEEDS RESEARCH ========
  it.only("renders when user is logged in", () => {
    render(
      <BrowserRouter>
        <ProtectedRestaurantIndex  logged_in={true} restaurants={mockRestaurants} reviews={mockReviews} current_user={MockUser}/>
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL()
    
    screen.debug();
    mockRestaurants.slice(0, 2).forEach((restaurant) => {
      const restaurantName = screen.getByText(restaurant.name)
      expect(restaurantName).toBeInTheDocument()
    })
  });
  
});