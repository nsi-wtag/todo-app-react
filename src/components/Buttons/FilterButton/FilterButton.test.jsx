import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterButton from "./FilterButton";

describe("FilterButton", () => {
  it("Should render FilterButton component provided with a button text", () => {
    const buttonText = "Button Text";
    const { getByText } = render(<FilterButton buttonText={buttonText} />);
    const filterButtonElement = getByText(buttonText);

    expect(filterButtonElement).toBeInTheDocument();
  });

  it("Should call the onClick function, when clicked", async () => {
    const buttonText = "Testing on click";
    const onClickMock = vi.fn();
    const { getByText } = render(
      <FilterButton buttonText={buttonText} onClick={onClickMock} />
    );
    const buttonElement = getByText(buttonText);
    const user = userEvent.setup();

    await user.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
