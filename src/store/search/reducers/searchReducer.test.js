import { describe, it, expect } from "vitest";
import { SET_SEARCH } from "src/store/search/types/searchType";
import { searchReducer } from "./searchReducer";

describe("searchReducer", () => {
  const initialState = {
    query: null,
  };
  const queryTerm = "hello world";

  it("Should handle SET_SEARCH action properly", () => {
    const action = {
      type: SET_SEARCH,
      payload: queryTerm,
    };
    const result = searchReducer(initialState, action);

    expect(result.query).toBe(queryTerm);
  });
});
