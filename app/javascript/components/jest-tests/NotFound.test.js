import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const notFound = screen.getByText("Oops! This Page Is Not Found")
    expect(notFound).toBeInTheDocument()
  });

});