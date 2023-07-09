import { ADD_TASK } from "src/store/task/types/taskTypes";
import { formatDate } from "src/utils/formatDate";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdAt = formatDate(new Date());

  return {
    type: ADD_TASK,
    payload: task,
  };
};
