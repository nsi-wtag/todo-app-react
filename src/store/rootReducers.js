import { combineReducers } from "redux";
import { taskReducer } from "./task/reducers/taskReducers";
import { filterReducer } from "./filter/reducers/filterReducers";

const rootReducer = combineReducers({
  task: taskReducer,
  filter: filterReducer,
});

export default rootReducer;
