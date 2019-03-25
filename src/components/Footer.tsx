import React from "react";
import FilterTodoList from "../containers/FilterTodoList";
import { VisibilityFilterType } from "../store/visibilityFilter/types";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterTodoList filter={VisibilityFilterType.SHOW_ALL}>All</FilterTodoList>
    <FilterTodoList filter={VisibilityFilterType.SHOW_ACTIVE}>
      Active
    </FilterTodoList>
    <FilterTodoList filter={VisibilityFilterType.SHOW_COMPLETED}>
      Completed
    </FilterTodoList>
  </div>
);

export default Footer;
