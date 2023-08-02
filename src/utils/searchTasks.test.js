import { describe, it, expect } from "vitest";
import { searchTasks } from "./searchTasks";

describe("Functionality of searchTasks function", () => {
  const tasks = [
    { taskTitle: "Complete project", isTaskDone: true },
    { taskTitle: "Review documentation", isTaskDone: true },
    { taskTitle: "Test documentation", isTaskDone: false },
    { taskTitle: "Prepare presentation", isTaskDone: false },
  ];

  it("Should show all tasks, if no query is passed", () => {
    const query = "";
    const expectedTasks = tasks;
    const result = searchTasks(query, tasks);

    expect(result).toEqual(expectedTasks);
  });

  it("Should filter tasks based on query", () => {
    const query = "documentation";
    const expectedTasks = [
      { taskTitle: "Review documentation", isTaskDone: true },
      { taskTitle: "Test documentation", isTaskDone: false },
    ];
    const result = searchTasks(query, tasks);

    expect(result).toEqual(expectedTasks);
  });

  it("Should ignore letter cases of query", () => {
    const query = "DocUmentaTion";
    const expectedTasks = [
      { taskTitle: "Review documentation", isTaskDone: true },
      { taskTitle: "Test documentation", isTaskDone: false },
    ];
    const result = searchTasks(query, tasks);

    expect(result).toEqual(expectedTasks);
  });

  it("Should return an empty tasks array, if query doesn't match", () => {
    const query = "react";
    const expectedTasks = [];
    const result = searchTasks(query, tasks);

    expect(result).toEqual(expectedTasks);
  });

  it("Shouldn't break, even when there's no task", () => {
    const query = "documentation";
    const expectedTasks = [];
    const result = searchTasks(query, []);

    expect(result).toEqual(expectedTasks);
  });
});
