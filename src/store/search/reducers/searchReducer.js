import { SET_SEARCH } from "src/store/search/types/searchType";

const initialState = {
  query: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        query: action.payload,
      };
    }

    default:
      return state;
  }
};
