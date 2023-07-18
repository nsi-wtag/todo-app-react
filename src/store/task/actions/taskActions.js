import { ADD_TASK } from "@store/task/types/taskTypes";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdAt = new Date();

  return {
    type: ADD_TASK,
    payload: task,
  };
};
