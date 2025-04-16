import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "../index";

describe("Button component", () => {
  it("Should render children component correctly", () => {
    render(<Button onClick={() => {}}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("Should call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    
    fireEvent.click(screen.getByText("Test Button"));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Should not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Test Button</Button>);

    fireEvent.click(screen.getByText("Test Button"));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
