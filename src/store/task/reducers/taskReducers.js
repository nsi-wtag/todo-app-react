import { ADD_TASK, DELETE_TASK } from "src/store/task/types/taskTypes";

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

    case DELETE_TASK: {
      const filteredTasks = state.tasks.filter(
        (task) => task.taskId !== action.payload
      );

      return {
        ...state,
        tasks: filteredTasks,
      };
    }

    default:
      return state;
  }
};
