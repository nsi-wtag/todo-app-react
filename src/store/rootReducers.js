import { combineReducers } from "redux";
import { taskReducer } from "./task/reducers/taskReducer";

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
