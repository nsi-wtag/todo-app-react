import { ALL, SET_FILTER } from "src/store/filter/types/filterTypes";

const initialState = {
  filterState: ALL,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filterState: action.payload,
      };
    }

    default:
      return state;
  }
};
