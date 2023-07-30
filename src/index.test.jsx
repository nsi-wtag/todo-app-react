import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App.jsx";

describe("App Entry Point", () => {
  it("Should render the App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
