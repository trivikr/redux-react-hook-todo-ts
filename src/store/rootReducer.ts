import { combineReducers } from "redux";

import { todosReducer } from "./todos/reducer";
import { visibilityFilterReducer } from "./visibilityFilter/reducer";

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todosReducer
});

export default rootReducer;
