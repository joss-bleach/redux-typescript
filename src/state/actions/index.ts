import { ActionType } from "../action-types";
import { repository } from "../models";

interface SearchRepositoriesAction {
  type: ActionType.REPOSITORIES_SEARCH;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.REPOSITORIES_SEARCH_SUCCESS;
  payload: repository[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.REPOSITORIES_SEARCH_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
