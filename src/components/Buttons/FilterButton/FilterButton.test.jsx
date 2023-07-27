import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("FilterButton", () => {
  it("Should render FilterButton component provided with a button text", () => {
    const buttonText = "Button Text";
    const { getByText } = render(<FilterButton buttonText={buttonText} />);
    const filterButtonElement = getByText(buttonText);

    expect(filterButtonElement).toBeInTheDocument();
  });

  it("Should call the onClick function, when clicked", () => {
    const buttonText = "Testing on click";
    const onClickMock = vi.fn();
    const { getByText } = render(
      <FilterButton buttonText={buttonText} onClick={onClickMock} />
    );
    const buttonElement = getByText(buttonText);

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled(1);
  });
});
