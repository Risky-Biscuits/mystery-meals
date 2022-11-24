import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("renders a heading", () => {
    render(
      <BrowserRouter>
         <RestaurantNew />
      </BrowserRouter>
    );
    const element =  screen.getByRole('heading', {
      name: /Add A New Restaurant To Our Database/i
    })
    expect(element).toBeInTheDocument()
  });

  it("renders a form title", () => {
    render(
      <BrowserRouter>
         <RestaurantNew />
      </BrowserRouter>
    );
    const element = screen.getByRole('heading', { name: /New Restaurant Form/i })
    expect(element).toBeInTheDocument()
  });
  
  it("renders a form input title", () => {
    render(
      <BrowserRouter>
         <RestaurantNew />
      </BrowserRouter>
    );
    const element = screen.getByText(/name of restaurant \*/i)
    expect(element).toBeInTheDocument()
  })
  

  it("has clickable cancel button", () => {
    render(
      <BrowserRouter>
        <RestaurantNew />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Cancel"));
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("has clickable add restaurant button", () => {
    render(
      <BrowserRouter>
        <RestaurantNew />
      </BrowserRouter>
    );
    
    userEvent.click(screen.getByText("Add Restaurant"));
    expect(screen.getByText("Add Restaurant")).toBeInTheDocument();
  });

});