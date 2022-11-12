import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("See All Restaurants"));
    expect(screen.getByText("See All Restaurants")).toBeInTheDocument();
  });

  it("has clickable links when logged out", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("has clickable links when logged out", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Sign Up!"));
    expect(screen.getByText("Sign Up!")).toBeInTheDocument();
  });

  it("has clickable links when logged in", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("See My Restaurants"));
    expect(screen.getByText("See My Restaurants")).toBeInTheDocument();
  });

  it("has clickable links when logged in", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Add Restaurant"));
    expect(screen.getByText("Add Restaurant")).toBeInTheDocument();
  });
});
