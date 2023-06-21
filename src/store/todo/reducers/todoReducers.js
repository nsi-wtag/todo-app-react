import { todoActionTypes } from "../types/todoTypes";

const { ADD_TASK } = todoActionTypes;

const initialTasksState = {
  tasks: [],
};

export const todoReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    }

    default:
      return state;
  }
};
