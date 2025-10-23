
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";


test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});


test("displays an image of yourself with alt text describing it", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining(".jpg"));
});


test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});


test("displays a paragraph for biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/i am/i);
  expect(bioParagraph).toBeInTheDocument();
});


test("displays links to GitHub and LinkedIn pages", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));

  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
