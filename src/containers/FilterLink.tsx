import React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";

import Link from "../components/Link";
import { setVisibilityFilter } from "../store/visibilityFilter/actions";
import { VisibilityFilterType } from "../store/visibilityFilter/types";

const FilterLink: React.FC<{
  filter: VisibilityFilterType;
}> = ({ filter, children }) => {
  const visibilityFilter = useMappedState(state => state.visibilityFilter);
  const dispatch = useDispatch();
  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
