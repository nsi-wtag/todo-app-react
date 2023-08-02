import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { displayToastNotification } from "src/utils/toast";
import AddTaskCard from "./AddTaskCard";

describe("AddTaskCard", () => {
  const user = userEvent.setup();
  const mockOnCreateTask = vi.fn();

  it("Should render the AddTaskCard component properly", () => {
    render(<AddTaskCard onCreateTask={() => {}} />);
  });

  it("Should get the textarea input value properly", async () => {
    render(<AddTaskCard onCreateTask={() => {}} />);

    const textarea = screen.getByRole("textbox");
    const inputValue = "Test Input";

    await user.type(textarea, inputValue);

    expect(textarea).toHaveValue(inputValue);
  });

  it("Should disable the Add Task button if the input value is empty", async () => {
    render(<AddTaskCard onCreateTask={() => {}} />);

    const textarea = screen.getByRole("textbox");
    const addButton = screen.getByRole("button");
    const inputValue = "";

    await user.type(textarea, inputValue || "{tab}");

    expect(addButton).toBeDisabled();
    expect(addButton.classList.contains("task__save-button-disabled")).toBe(
      true
    );
  });

  it("Should call the onCreateTask function if Add Task button is clicked", async () => {
    render(<AddTaskCard onCreateTask={mockOnCreateTask} />);

    const textarea = screen.getByRole("textbox");
    const addButton = screen.getByRole("button");
    const inputValue = "Test Input";

    await user.type(textarea, inputValue);
    await user.click(addButton);

    expect(mockOnCreateTask).toHaveBeenCalledWith(inputValue);
  });

  it("Should display toast notification when Add Task button is clicked", async () => {
    vi.mock("src/utils/toast", () => ({
      displayToastNotification: vi.fn(),
    }));

    render(<AddTaskCard onCreateTask={mockOnCreateTask} />);

    const textarea = screen.getByRole("textbox");
    const addButton = screen.getByRole("button");
    const inputValue = "Test Input";

    await user.type(textarea, inputValue);
    await user.click(addButton);

    expect(displayToastNotification).toHaveBeenCalledWith(
      "Task Added",
      "success"
    );
  });
});
