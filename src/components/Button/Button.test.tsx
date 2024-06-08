import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button by default", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders an anchor element when "as" prop is "a"', () => {
    render(
      <Button as="a" href="https://example.com">
        Click me
      </Button>
    );
    const linkElement = screen.getByRole("link", { name: /click me/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  it("applies additional props to the rendered element", () => {
    render(<Button aria-label="custom-label">Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: "custom-label" });
    expect(buttonElement).toHaveAttribute("aria-label", "custom-label");
  });
});
