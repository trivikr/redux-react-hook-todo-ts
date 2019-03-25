import { VisibilityFilterType, VisibilityFilterActionType } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const setVisibilityFilter = (filter: VisibilityFilterType) => ({
  type: VisibilityFilterActionType.SET_VISIBILITY_FILTER,
  filter
});
