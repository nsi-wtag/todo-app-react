import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ALT_TEXT_DELETE_ICON,
  ALT_TEXT_DONE_ICON,
  ALT_TEXT_EDIT_ICON,
} from "src/common/constants";
import TaskCardButtonsContainer from "./TaskCardButtonsContainer";

describe("TaskCardButtonsContainer", () => {
  const user = userEvent.setup();
  const mockDate = new Date();
  const onDeleteTask = vi.fn();
  const onTaskDone = vi.fn();
  const onEditTask = vi.fn();

  it("Should render the component properly", () => {
    render(
      <TaskCardButtonsContainer
        isTaskDone
        createdAt={mockDate}
        taskDoneAt={mockDate}
        onDeleteTask={() => {}}
        onTaskDone={() => {}}
        onEditTask={() => {}}
      />
    );
  });

  it("Should render delete button, edit button and done button for incomplete tasks, and clicking those should call the coorresponding functions", async () => {
    render(
      <TaskCardButtonsContainer
        isTaskDone={false}
        createdAt={mockDate}
        onDeleteTask={onDeleteTask}
        onTaskDone={onTaskDone}
        onEditTask={onEditTask}
      />
    );

    const deleteButton = screen.getByAltText(ALT_TEXT_DELETE_ICON);
    const editButton = screen.getByAltText(ALT_TEXT_EDIT_ICON);
    const doneButton = screen.getByAltText(ALT_TEXT_DONE_ICON);

    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(doneButton).toBeInTheDocument();

    await user.click(deleteButton);
    await user.click(editButton);
    await user.click(doneButton);

    expect(onDeleteTask).toHaveBeenCalledOnce();
    expect(onEditTask).toHaveBeenCalledOnce();
    expect(onTaskDone).toHaveBeenCalledOnce();
  });

  it("Should only render delete button, and display completion duration if task is complete", () => {
    render(
      <TaskCardButtonsContainer
        isTaskDone={true}
        createdAt={mockDate}
        taskDoneAt={mockDate}
        onDeleteTask={onDeleteTask}
        onTaskDone={() => {}}
        onEditTask={() => {}}
      />
    );

    const deleteButton = screen.getByAltText(ALT_TEXT_DELETE_ICON);
    const completedTaskMessage = screen.getByText(/Completed in \d+ day/i);

    expect(deleteButton).toBeInTheDocument();
    expect(completedTaskMessage).toBeInTheDocument();
  });
});
