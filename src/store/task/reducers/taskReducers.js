import { taskActionTypes } from "src/store/task/types/taskTypes";

const { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } = taskActionTypes;

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

    case DONE_TASK: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.taskId === action.payload) {
          return {
            ...task,
            isTaskDone: true,
            taskDoneAt: new Date(),
          };
        }

        return { ...task };
      });

      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    case EDIT_TASK: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            taskTitle: action.payload.taskTitle,
          };
        }

        return { ...task };
      });

      return { ...state, tasks: updatedTasks };
    }

    default:
      return state;
  }
};
