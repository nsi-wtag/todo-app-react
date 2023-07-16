import { ADD_TASK } from "@store/task/types/taskTypes";
import { formatDate } from "@/utils/formatDate";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdAt = formatDate(new Date());

  return {
    type: ADD_TASK,
    payload: task,
  };
};
