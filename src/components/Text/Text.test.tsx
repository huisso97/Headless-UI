import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("renders a span by default", () => {
    render(<Text>Text content</Text>);
    const spanElement = screen.getByText(/text content/i);
    expect(spanElement.tagName).toBe("SPAN");
  });

  it('renders a paragraph element when "as" prop is "p"', () => {
    render(<Text as="p">Text content</Text>);
    const paragraphElement = screen.getByText(/text content/i);
    expect(paragraphElement.tagName).toBe("P");
  });

  it("applies additional props to the rendered element", () => {
    render(<Text aria-label="custom-label">Text content</Text>);
    const spanElement = screen.getByText(/text content/i);
    expect(spanElement).toHaveAttribute("aria-label", "custom-label");
  });
});
