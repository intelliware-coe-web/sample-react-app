import findByKeyword from "./wikipedia-service";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from 'rxjs'
import {ofType} from "redux-observable";
import {fromPromise} from "rxjs/internal-compatibility";

function searchArticles({payload: search}) {
  return findByKeyword(search)
}

function SearchSuccessAction(search, searchResults) {
  return {
    type: 'SEARCH_SUCCESS',
    payload (state) {
      return {...state, search, searchResults};
    }
  }
}
function SearchFailureAction(search, error) {
  return {
    type: 'SEARCH_ERROR',
    payload (state) {
      return {...state, search, error}
    },
    error: true
  }
}

export const searchEpic = action$ => action$.pipe(
  ofType('SEARCH_REQUESTED'),
  switchMap(action =>
    fromPromise(searchArticles(action)).pipe(
        map(results => SearchSuccessAction(action.payload, results)),
        catchError(error => of(SearchFailureAction(action.payload, error)))
      )
  ),
);
