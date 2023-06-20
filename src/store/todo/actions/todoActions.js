import { todoActionTypes } from "../types/todoTypes";

const { ADD_TASK } = todoActionTypes;

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
