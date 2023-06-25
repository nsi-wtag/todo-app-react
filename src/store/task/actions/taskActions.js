import { taskActionTypes } from "src/store/task/types/taskTypes";
import { formatDate } from "src/utils/formatDate";

const { ADD_TASK, DELETE_TASK } = taskActionTypes;

export const addTask = (task) => {
  task.taskId = Date.now().toString();
  task.createdAt = formatDate(new Date());

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
