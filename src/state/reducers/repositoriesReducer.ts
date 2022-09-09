import { ActionType } from "../action-types";
import { Action } from "../actions";
import { repository } from "../models";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: repository[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.REPOSITORIES_SEARCH:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.REPOSITORIES_SEARCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.REPOSITORIES_SEARCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
