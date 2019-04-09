import findByKeyword from "./wikipedia-service";

export function SearchArticles(search) {
  return findByKeyword(search)
      .then(
        articles => SearchSuccessAction(search, articles),
        error => SearchFailureAction(search, error)
      )
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