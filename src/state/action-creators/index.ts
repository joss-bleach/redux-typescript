import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REPOSITORIES_SEARCH,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.REPOSITORIES_SEARCH_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.REPOSITORIES_SEARCH_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
