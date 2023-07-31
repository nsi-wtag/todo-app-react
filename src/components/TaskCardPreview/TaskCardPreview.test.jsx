import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "src/store";
import TaskCardPreview from "./TaskCardPreview";

describe("TaskCardPreview", () => {
  const taskTitle = "Test Task";

  it("Should add task_done class if a task is done", () => {
    render(
      <Provider store={store}>
        <TaskCardPreview
          taskId={1}
          taskTitle={taskTitle}
          createdAt={new Date()}
          isTaskDone={true}
          onToggleEditTask={() => {}}
        />
      </Provider>
    );

    const taskTitleElement = screen.getByText(taskTitle);

    expect(taskTitleElement).toHaveClass("task_done");
  });
});
