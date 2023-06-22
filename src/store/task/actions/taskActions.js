import { taskActionTypes } from "src/store/task/types/taskTypes";
import { formatDate } from "src/utils/formatDate";

const { ADD_TASK } = taskActionTypes;

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdAt = formatDate(new Date());

  return {
    type: ADD_TASK,
    payload: task,
  };
};
