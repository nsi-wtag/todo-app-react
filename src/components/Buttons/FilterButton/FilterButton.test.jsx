import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterButton from "./FilterButton";

describe("FilterButton", () => {
  const user = userEvent.setup();
  const onFilterMock = vi.fn();

  it("Should render FilterButton component provided with a button text", () => {
    const buttonText = "Button Text";
    const { getByText } = render(<FilterButton buttonText={buttonText} />);
    const filterButtonElement = getByText(buttonText);

    expect(filterButtonElement).toBeInTheDocument();
    expect(filterButtonElement.textContent).toBe(buttonText);
  });

  it("Should call the onFilter function, when clicked", async () => {
    const buttonText = "Testing on click";
    const { getByText } = render(
      <FilterButton buttonText={buttonText} onFilter={onFilterMock} />
    );
    const buttonElement = getByText(buttonText);

    await user.click(buttonElement);
    expect(onFilterMock).toHaveBeenCalledTimes(1);
  });
});
