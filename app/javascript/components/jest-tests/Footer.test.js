
import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
    const footer = screen.getByText("Michy Herrera")
    expect(footer).toBeInTheDocument()
  })
})