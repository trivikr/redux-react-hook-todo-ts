import { Reducer } from "redux";
import { TodoType, TodoActionType } from "./types";

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

// eslint-disable-next-line import/prefer-default-export
export { reducer as todosReducer };
