import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from "./IconButton";

describe("IconButton", () => {
  const iconSrc = "http://localhost:3000/icon.png";
  const altText = "Icon Alt Text";
  const user = userEvent.setup();
  const onClickMock = vi.fn();

  it("Should render the IconButton component, provided with an icon source and an alt text", () => {
    const { getByAltText } = render(
      <IconButton icon={iconSrc} buttonAltText={altText} />
    );
    const iconElement = getByAltText(altText);

    expect(iconElement).toBeInTheDocument();
    expect(iconElement.src).toContain(iconSrc);
  });

  it("Should call the onClick function when clicked", async () => {
    const { getByRole } = render(
      <IconButton
        icon={iconSrc}
        buttonAltText={altText}
        onClick={onClickMock}
      />
    );
    const iconElement = getByRole("button");

    await user.click(iconElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("Should add button-icon-disabled class, when isDisabled is true", () => {
    const { getByRole } = render(
      <IconButton
        icon={iconSrc}
        buttonAltText={altText}
        onClick={onClickMock}
        isDisabled={true}
      />
    );
    const iconElement = getByRole("button");

    expect(iconElement).toBeDisabled();
    expect(iconElement.classList.contains("button-icon-disabled")).toBe(true);
  });
});
