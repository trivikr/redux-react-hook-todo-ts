import { Reducer } from "redux";
import { VisibilityFilterType, VisibilityFilterActionType } from "./types";

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

// eslint-disable-next-line import/prefer-default-export
export { reducer as visibilityFilterReducer };
