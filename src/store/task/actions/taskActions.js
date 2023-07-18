import { ADD_TASK } from "@store/task/types/taskTypes";

export const addTask = (taskTitle) => {
  const task = {
    id: Date.now().toString(),
    createdAt: new Date(),
    taskTitle: taskTitle,
  };

  return {
    type: ADD_TASK,
    payload: task,
  };
};
