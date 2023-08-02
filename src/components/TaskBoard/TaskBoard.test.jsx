import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "src/store";
import TaskBoard from "./TaskBoard";

describe("TaskBoard", () => {
  const user = userEvent.setup();

  it("Should render AddTaskCard component, if isCreateButtonClicked is clicked", async () => {
    render(
      <Provider store={store}>
        <TaskBoard />
      </Provider>
    );

    const createButton = screen.getAllByRole("button")[0];

    await user.click(createButton);

    const addTaskCardElement = screen.getByTestId("add-task-card");

    expect(addTaskCardElement).toBeInTheDocument();
  });
});
