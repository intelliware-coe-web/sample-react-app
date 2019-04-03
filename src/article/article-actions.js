import findByKeyword from "./wikipedia-service";

export function SearchArticles(search) {
  return dispatch =>
    findByKeyword(search)
      .then(articles => dispatch(FoundArticlesAction(search, articles)));
}

function FoundArticlesAction(search, searchResults) {
  return {
    type: 'FOUND_ARTICLES',
    reducer(state) {
      return {...state, search, searchResults};
    }
  }
}