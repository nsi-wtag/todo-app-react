import { describe, it, expect } from "vitest";
import { ALL, SET_FILTER } from "src/store/filter/types/filterTypes";
import { filterReducer } from "./filterReducers";

describe("filterReducer", () => {
  const initialState = {
    filterState: ALL,
  };
  const demoFilterState = "COMPLETE";

  it("Should handle SET_FILTER action properly", () => {
    const action = {
      type: SET_FILTER,
      payload: demoFilterState,
    };
    const result = filterReducer(initialState, action);

    expect(result.filterState).toBe(demoFilterState);
  });
});
