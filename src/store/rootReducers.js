import { combineReducers } from "redux";
import { taskReducer } from "./task/reducers/taskReducers";

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
