import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { displayToastNotification } from "src/utils/toast";
import { DONE_TASK, EDIT_TASK } from "src/store/task/types/taskTypes";
import EditTaskCard from "./EditTaskCard";

describe("EditTaskCard", () => {
  const user = userEvent.setup();
  const taskTitle = "Test Title";
  const taskId = 1;

  const initialState = { tasks: [] };
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  vi.mock("src/utils/toast", () => ({
    displayToastNotification: vi.fn(),
  }));

  it("Should render the EditTaskCard component properly", () => {
    render(
      <Provider store={store}>
        <EditTaskCard
          taskId={taskId}
          taskTitle={taskTitle}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );
  });

  it("Should disable the Save button, if input value is empty", () => {
    const inputValue = "";

    render(
      <Provider store={store}>
        <EditTaskCard
          taskId={taskId}
          taskTitle={inputValue}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );

    const saveButton = screen.getAllByRole("button")[0];

    expect(saveButton).toHaveClass("task__save-button-disabled");
    expect(saveButton).toBeDisabled();
  });

  it("Should enable the Save button, if input value is not empty", () => {
    render(
      <Provider store={store}>
        <EditTaskCard
          taskId={taskId}
          taskTitle={taskTitle}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );

    const saveButton = screen.getAllByRole("button")[0];

    expect(saveButton).not.toHaveClass("task__save-button-disabled");
    expect(saveButton).toBeEnabled();
  });

  it("Should call handleSave function and display proper toast message when Save Button is clicked", async () => {
    render(
      <Provider store={store}>
        <EditTaskCard
          taskId={taskId}
          taskTitle={taskTitle}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );

    const saveButton = screen.getAllByRole("button")[0];
    const textarea = screen.getByRole("textbox");

    await user.type(textarea, "hello world"); // input changed

    await user.click(saveButton);

    const actions = store.getActions();

    expect(actions.filter((action) => action.type === EDIT_TASK).length).toBe(
      1
    );
    expect(displayToastNotification).toHaveBeenCalledWith(
      "Task Updated",
      "success"
    );
  });

  it("Should call handleDelete function and display proper toast message when Delete Button is clicked", async () => {
    render(
      <Provider store={store}>
        <EditTaskCard
          taskId={taskId}
          taskTitle={taskTitle}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );

    const deleteButton = screen.getAllByRole("button")[1];
    const textarea = screen.getByRole("textbox");

    await user.type(textarea, "hello world"); // input changed

    await user.click(deleteButton);

    expect(textarea.value).toBe(taskTitle);
    expect(displayToastNotification).toHaveBeenCalledWith(
      "Task Title Reset",
      "error"
    );
  });

  it("Should call handleDone function and display proper toast message when Done Button is clicked", async () => {
    render(
      <Provider store={store}>
        <EditTaskCard
          taskId={taskId}
          taskTitle={taskTitle}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );

    const doneButton = screen.getAllByRole("button")[2];

    await user.click(doneButton);

    const actions = store.getActions();

    expect(actions.filter((action) => action.type === DONE_TASK).length).toBe(
      1
    );
    expect(displayToastNotification).toHaveBeenCalledWith(
      "Task Completed",
      "success"
    );
  });
});
