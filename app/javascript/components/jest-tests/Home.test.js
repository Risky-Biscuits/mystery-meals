import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home />)
    const home = screen.getByText("Welcome")
    expect(home).toBeInTheDocument()
  })
})