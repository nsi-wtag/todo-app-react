import { todoActionTypes } from "../types/todoTypes";
import { formatDate } from "../../../utils/formatDate";

const { ADD_TASK } = todoActionTypes;

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdAt = formatDate(new Date());

  return {
    type: ADD_TASK,
    payload: task,
  };
};
