import { todoActionTypes } from "../types/todoTypes";

const { ADD_TASK } = todoActionTypes;

const initialTasksState = {
  tasks: [
    {
      id: 1,
      title: "Todo 1",
      createdAt: "01.12.22",
    },
    {
      id: 2,
      title: "Todo 2",
      createdAt: "02.12.22",
    },
    {
      id: 3,
      title: "Todo 3",
      createdAt: "02.12.22",
    },
    {
      id: 4,
      title: "Todo 4",
      createdAt: "04.12.22",
    },
    {
      id: 5,
      title: "Todo 5",
      createdAt: "05.12.22",
    },
    {
      id: 6,
      title: "Todo 6",
      createdAt: "06.12.22",
    },
  ],
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
