import { SET_SEARCH } from "src/store/search/types/searchType";

export const setSearch = (query) => {
  return {
    type: SET_SEARCH,
    payload: query,
  };
};
