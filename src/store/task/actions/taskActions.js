import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
} from "src/store/task/types/taskTypes";

export const addTask = (task) => {
  task.taskId = Date.now().toString();
  task.createdAt = new Date();
  task.isTaskDone = false;
  task.taskDoneAt = null;

  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const markTaskDone = (taskId) => {
  return {
    type: DONE_TASK,
    payload: taskId,
  };
};
