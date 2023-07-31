import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import store from "src/store";
import { FILTER_TASKS_BUTTON_LABELS } from "src/common/constants";
import TaskNavBar from "./TaskNavBar";

describe("TaskNavBar", () => {
  const user = userEvent.setup();
  const onCreateButtonClick = vi.fn();

  it("Should call the onCreateButtonClicked function on Create button click", async () => {
    render(
      <Provider store={store}>
        <TaskNavBar onCreateButtonClick={onCreateButtonClick} />
      </Provider>
    );

    const createButton = screen.getAllByRole("button")[0];

    await user.click(createButton);

    expect(onCreateButtonClick).toBeCalledTimes(1);
  });

  it("Should call setFilterState function with the correct buttonLabel when a filter button is clicked", async () => {
    const initialState = { tasks: [] };
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TaskNavBar onCreateButtonClick={() => {}} />
      </Provider>
    );

    async function testFilter() {
      for (const filterButtonText of FILTER_TASKS_BUTTON_LABELS) {
        const filterButton = screen.getByText(filterButtonText);

        await user.click(filterButton);

        const actions = store.getActions();

        expect(
          actions.filter((action) => action.payload === filterButtonText).length
        ).toBe(1);
      }
    }

    await testFilter();
  });
});
