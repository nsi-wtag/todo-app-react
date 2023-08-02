import { describe, it, expect } from "vitest";
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "src/store/task/types/taskTypes";
import { taskReducer } from "./taskReducers";

describe("taskReducer", () => {
  const initialTasksState = {
    tasks: [
      { taskId: 1, taskTitle: "Task 1", isTaskDone: false },
      { taskId: 2, taskTitle: "Task 2", isTaskDone: true },
    ],
  };
  const demoTaskIndex = 0;
  const demoTaskId = 1;

  it("Should handle ADD_TASK action properly", () => {
    const initialTasksState = {
      tasks: [],
    };
    const action = {
      type: ADD_TASK,
      payload: {
        taskId: 1,
        taskTitle: "Task 1",
        isTaskDone: false,
      },
    };
    const result = taskReducer(initialTasksState, action);

    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[0]).toEqual(action.payload);
  });

  it("Should handle DELETE_TASK action properly", () => {
    const action = {
      type: DELETE_TASK,
      payload: demoTaskId,
    };
    const result = taskReducer(initialTasksState, action);

    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[demoTaskIndex].taskId).toBe(2);
  });

  it("Should handle DONE_TASK action properly", () => {
    const action = {
      type: DONE_TASK,
      payload: demoTaskId,
    };
    const result = taskReducer(initialTasksState, action);

    expect(result.tasks[demoTaskIndex].isTaskDone).toBe(true);
    expect(result.tasks[demoTaskIndex].taskDoneAt).toBeInstanceOf(Date);
  });

  it("Should handle EDIT_TASK action properly", () => {
    const updatedTaskTitle = "New Task 1";
    const action = {
      type: EDIT_TASK,
      payload: {
        taskId: demoTaskId,
        taskTitle: updatedTaskTitle,
        isTaskDone: false,
      },
    };
    const result = taskReducer(initialTasksState, action);

    expect(result.tasks[demoTaskIndex].taskTitle).toBe(updatedTaskTitle);
  });

  it("Should return the initial state for unknown action type", () => {
    const action = {
      type: "UNKNOWN_ACTION_TYPE",
      payload: "Some data",
    };
    const result = taskReducer(initialTasksState, action);

    expect(result).toEqual(initialTasksState);
  });
});
