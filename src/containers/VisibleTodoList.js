import { connect } from "react-redux";
import { toggleTodo } from "../store/todos/actions";
import TodoList from "../components/TodoList";
import { VisibilityFilterType } from "../store/visibilityFilter/types";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilterType.SHOW_ALL:
      return todos;
    case VisibilityFilterType.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilterType.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
