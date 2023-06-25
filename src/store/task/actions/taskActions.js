import { taskActionTypes } from "src/store/task/types/taskTypes";
import { formatDate } from "src/utils/formatDate";

const { ADD_TASK, DELETE_TASK, DONE_TASK } = taskActionTypes;

export const addTask = (task) => {
  task.taskId = Date.now().toString();
  task.createdAt = formatDate(new Date());
  task.isTaskDone = false;

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
