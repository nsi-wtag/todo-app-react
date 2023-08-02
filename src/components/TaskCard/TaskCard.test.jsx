import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "src/store/index.js";
import { ALT_TEXT_EDIT_ICON } from "src/common/constants";
import TaskCard from "./TaskCard";

describe("TaskCard", () => {
  const user = userEvent.setup();
  const mockTask = {
    taskId: "1",
    taskTitle: "Task 1",
    createdAt: new Date(),
    taskDoneAt: null,
    isTaskDone: false,
  };

  it("Should render PreviewTaskCard, by default (as isEditing is false)", () => {
    render(
      <Provider store={store}>
        <TaskCard task={mockTask} />
      </Provider>
    );

    const previewTaskCard = screen.queryByTestId("preview-task-card");
    const editTaskCard = screen.queryByTestId("edit-task-card");

    expect(previewTaskCard).toBeInTheDocument();
    expect(editTaskCard).not.toBeInTheDocument();
  });

  it("Should render EditTaskCard, if isEditing is set to true", async () => {
    render(
      <Provider store={store}>
        <TaskCard task={mockTask} />
      </Provider>
    );

    const editButton = screen.getByAltText(ALT_TEXT_EDIT_ICON);

    await user.click(editButton);

    const editTaskCard = screen.queryByTestId("edit-task-card");
    const previewTaskCard = screen.queryByTestId("preview-task-card");

    expect(editTaskCard).toBeInTheDocument();
    expect(previewTaskCard).not.toBeInTheDocument();
  });
});
