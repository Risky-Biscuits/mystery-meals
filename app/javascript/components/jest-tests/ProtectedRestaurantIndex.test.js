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
      <BrowserRouter>
        <ProtectedRestaurantIndex logged_in={true} current_user={MockUser} restaurants={mockRestaurants} reviews={mockReviews} />
      </BrowserRouter>
    );
  });

  it("renders when user is logged in", () => {
    render(
      <BrowserRouter>
        <ProtectedRestaurantIndex logged_in={true} current_user={MockUser} restaurants={mockRestaurants} reviews={mockReviews} />
      </BrowserRouter>
    );
    
    const element = screen.getByRole('heading', { name: /see all restaurants/i })
    screen.debug();
    expect(element).toBeInTheDocument()
  });


  describe("filterRestaurantsByUser", () => {
    it("filters data", () => {
      expect(filterRestaurantsByUser(mockRestaurants, mockReviews, 1)).toEqual([mockRestaurants[0], mockRestaurants[1]])
    });
  })

  // ======= NEEDS RESEARCH ========
  // it("renders when user is logged in", () => {
  //   render(
  //     <BrowserRouter>
  //       <ProtectedRestaurantIndex  logged_in={true} restaurants={mockRestaurants} reviews={mockReviews} current_user={MockUser}/>
  //     </BrowserRouter>
  //   );
  //   screen.logTestingPlaygroundURL()
  
  //   mockRestaurants.forEach((restaurant) => {
  //     const restaurantName = screen.getByText(restaurant.name)
  //     screen.debug();
  //     expect(restaurantName).toBeInTheDocument()
  //   })

  //   screen.debug()
  //   // const element = screen.getByText("Raging Burritos");
  //   // expect(element).toBeInTheDocument();
  // });
  
});