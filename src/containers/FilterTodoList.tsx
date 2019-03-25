import React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";

import { setVisibilityFilter } from "../store/visibilityFilter/actions";
import { VisibilityFilterType } from "../store/visibilityFilter/types";
import VisibilityButton from "../components/VisibilityButton";

const FilterTodoList: React.FC<{
  filter: VisibilityFilterType;
}> = ({ filter, children }) => {
  const visibilityFilter = useMappedState(state => state.visibilityFilter);
  const dispatch = useDispatch();
  return (
    <VisibilityButton
      active={filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </VisibilityButton>
  );
};

export default FilterTodoList;
