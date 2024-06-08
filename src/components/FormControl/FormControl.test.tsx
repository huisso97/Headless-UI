import { render, screen } from "@testing-library/react";
import FormControl from "./FormControl";

describe("FormControl", () => {
  it("renders an input by default", () => {
    render(<FormControl name="username" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it('renders a textarea element when "as" prop is "textarea"', () => {
    render(<FormControl as="textarea" name="bio" />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement.tagName).toBe("TEXTAREA");
  });

  it("applies additional props to the rendered element", () => {
    render(<FormControl name="username" aria-label="custom-label" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("aria-label", "custom-label");
  });
});
