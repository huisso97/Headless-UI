import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders a div by default", () => {
    render(<Card>Content</Card>);
    const divElement = screen.getByText(/content/i);
    expect(divElement.tagName).toBe("DIV");
  });

  it('renders a section element when "as" prop is "section"', () => {
    render(<Card as="section">Content</Card>);
    const sectionElement = screen.getByText(/content/i);
    expect(sectionElement.tagName).toBe("SECTION");
  });

  it("applies additional props to the rendered element", () => {
    render(<Card aria-label="custom-label">Content</Card>);
    const divElement = screen.getByText(/content/i);
    expect(divElement).toHaveAttribute("aria-label", "custom-label");
  });
});
