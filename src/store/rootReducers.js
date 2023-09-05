import { combineReducers } from "redux";
import { taskReducer } from "./task/reducers/taskReducers";
import { filterReducer } from "./filter/reducers/filterReducers";
import { searchReducer } from "./search/reducers/searchReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  filter: filterReducer,
  search: searchReducer,
});

export default rootReducer;
