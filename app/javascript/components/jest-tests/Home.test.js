import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home logged_in={false}/>)
    screen.debug()
    const home = screen.getByText("Let Us Choose What You Eat")
    expect(home).toBeInTheDocument()
  })
})