import React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";

import { toggleTodo } from "../store/todos/actions";
import TodoList from "../components/TodoList";
import { VisibilityFilterType } from "../store/visibilityFilter/types";
import { TodoType } from "../store/todos/types";

const getVisibleTodos = (todos: TodoType[], filter: VisibilityFilterType) => {
  switch (filter) {
    case VisibilityFilterType.SHOW_ALL:
      return todos;
    case VisibilityFilterType.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilterType.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const VisibleTodoList = () => {
  const dispatch = useDispatch();
  const { todos, visibilityFilter } = useMappedState(state => state);
  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      toggleTodo={id => dispatch(toggleTodo(id))}
    />
  );
};

export default VisibleTodoList;
