import { TodoType, TodoActionType } from "./types";
import { Reducer } from "redux";

const reducer: Reducer<TodoType[]> = (state = [], action) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return [...state, action.todo];
    case TodoActionType.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export { reducer as todosReducer };
