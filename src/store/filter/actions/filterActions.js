import { SET_FILTER } from "src/store/filter/types/filterTypes";

export const setFilterState = (filterLabel) => {
  return {
    type: SET_FILTER,
    payload: filterLabel,
  };
};
