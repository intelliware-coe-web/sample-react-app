import findByKeyword from "./wikipedia-service";
import {put, call, takeLatest} from 'redux-saga/effects';

function* searchArticles({payload: search}) {
  try {
    const articles = yield call(findByKeyword, search);
    yield put(SearchSuccessAction(search, articles));
  } catch (e) {
    yield put(SearchFailureAction(search, e.message));
  }
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

export function* searchSaga() {
  yield takeLatest('SEARCH_REQUESTED', searchArticles);
}