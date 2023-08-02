import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import store from "src/store";
import { SET_SEARCH } from "src/store/search/types/searchType";
import { PLACEHOLDER_SEARCH_TASK } from "src/common/constants";
import Header from "./Header";

describe("Header", () => {
  const user = userEvent.setup();

  it("Should render the Header component properly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const titleElement = screen.getByText("Todos");
    const inputElement = screen.getByPlaceholderText(PLACEHOLDER_SEARCH_TASK);
    const buttonElement = screen.getByRole("button");

    expect(titleElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should dispatch setSearch action with search query on search button click", async () => {
    const initialState = { tasks: [] };
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const testQuery = "Test Query";
    const searchButton = screen.getByRole("button");
    const searchInput = screen.getByPlaceholderText(PLACEHOLDER_SEARCH_TASK);

    await user.type(searchInput, testQuery);

    await user.click(searchButton);

    const actions = store.getActions();

    expect(actions.filter((action) => action.type === SET_SEARCH).length).toBe(
      1
    );
    expect(
      actions.filter((action) => action.payload === testQuery).length
    ).toBe(1);
  });
});
