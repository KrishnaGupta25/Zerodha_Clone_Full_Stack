import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../src/landing-page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    
    // Ensure the image is present
    const heroImage = screen.getByAltText("Hero img");
    expect(heroImage).toBeInTheDocument();

    // Validate src path - public folder assets are referenced directly with "/"
    expect(heroImage).toHaveAttribute("src", "/assets/homeHero.png");
  });
});
