import { combineReducers } from "redux";
import { todoReducer } from "./todo/reducers/todoReducers";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
