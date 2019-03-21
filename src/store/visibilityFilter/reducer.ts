import { VisibilityFilterType, VisibilityFilterActionType } from "./types";
import { Reducer } from "redux";

const reducer: Reducer<VisibilityFilterType> = (
  state = VisibilityFilterType.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case VisibilityFilterActionType.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export { reducer as visibilityFilterReducer };
