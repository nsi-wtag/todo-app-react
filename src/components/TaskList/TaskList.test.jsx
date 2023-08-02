import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "src/store";
import TaskList from "./TaskList";

describe("TaskList", () => {
  const visibleTaskRange = 3;
  const mockTasks = [
    {
      taskId: "task-1",
      taskTitle: "Task 1",
      createdAt: new Date(),
      isTaskDone: false,
    },
    {
      taskId: "task-2",
      taskTitle: "Task 2",
      createdAt: new Date(),
      isTaskDone: false,
    },
    {
      taskId: "task-3",
      taskTitle: "Task 3",
      createdAt: new Date(),
      isTaskDone: true,
    },
    {
      taskId: "task-4",
      taskTitle: "Task 4",
      createdAt: new Date(),
      isTaskDone: false,
    },
  ];

  it("Should render the TaskList component properly", () => {
    render(
      <TaskList tasks={[]} visibleTaskRange={0} isCreateButtonClicked={false} />
    );
  });

  it("Should not render any TaskCard component, if tasks is empty", () => {
    const { container } = render(
      <TaskList
        tasks={[]}
        visibleTaskRange={visibleTaskRange}
        isCreateButtonClicked={false}
      />
    );

    const taskCards = container.getElementsByClassName("test-card");

    expect(taskCards).toHaveLength(0);
  });

  it("Should render the correct number of TaskCard components", () => {
    const { container } = render(
      <Provider store={store}>
        <TaskList
          tasks={mockTasks}
          visibleTaskRange={visibleTaskRange}
          isCreateButtonClicked={false}
        />
      </Provider>
    );

    const taskCards = container.getElementsByClassName("tasks-container__box");

    expect(taskCards).toHaveLength(visibleTaskRange);
  });

  it("Should render one TaskCard less, if isCreateButtonClicked is true", () => {
    const { container } = render(
      <Provider store={store}>
        <TaskList
          tasks={mockTasks}
          visibleTaskRange={visibleTaskRange}
          isCreateButtonClicked={true}
        />
      </Provider>
    );

    const taskCards = container.getElementsByClassName("tasks-container__box");

    expect(taskCards).toHaveLength(visibleTaskRange - 1);
  });
});
