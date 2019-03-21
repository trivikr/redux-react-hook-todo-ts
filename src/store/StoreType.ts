import { TodoType } from "./todos/types";
import { VisibilityFilterType } from "./visibilityFilter/types";

export interface StoreType {
  todos: TodoType[];
  visibilityFilter: VisibilityFilterType;
}
