import { describe, it, expect } from "vitest";
import filterTasks from "./filterTasks";
import { ALL, COMPLETE, INCOMPLETE } from "src/store/filter/types/filterTypes";

describe("Functionality of filterTasks function", () => {
  const tasks = [
    { taskTitle: "Complete project", isTaskDone: true },
    { taskTitle: "Review documentation", isTaskDone: true },
    { taskTitle: "Test documentation", isTaskDone: false },
    { taskTitle: "Prepare presentation", isTaskDone: false },
  ];

  it("Should show all task by default", () => {
    const expectedTasks = tasks;
    const result = filterTasks(tasks);

    expect(result).toEqual(expectedTasks);
  });

  it("Should show all tasks, if the current filter state is ALL", () => {
    const filterState = ALL;
    const expectedTasks = tasks;
    const result = filterTasks(tasks, filterState);

    expect(result).toEqual(expectedTasks);
  });

  it("Should only show tasks that are done, if the current filter state is COMPLETE", () => {
    const filterState = COMPLETE;
    const expectedTasks = [
      { taskTitle: "Complete project", isTaskDone: true },
      { taskTitle: "Review documentation", isTaskDone: true },
    ];
    const result = filterTasks(tasks, filterState);

    expect(result).toEqual(expectedTasks);
  });

  it("Should only show tasks that are not done yet, if the current filter state is INCOMPLETE", () => {
    const filterState = INCOMPLETE;
    const expectedTasks = [
      { taskTitle: "Test documentation", isTaskDone: false },
      { taskTitle: "Prepare presentation", isTaskDone: false },
    ];
    const result = filterTasks(tasks, filterState);

    expect(result).toEqual(expectedTasks);
  });
});
