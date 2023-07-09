import { ADD_TASK } from "src/store/task/types/taskTypes";

const initialTasksState = {
  tasks: [],
};

export const taskReducer = (state = initialTasksState, action) => {
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
