import findByKeyword from "./wikipedia-service";

export function SearchArticles(search) {
  return dispatch =>
    findByKeyword(search)
      .then(articles => dispatch(FoundArticlesAction(articles)));
}

function FoundArticlesAction(searchResults) {
  return {
    type: 'FOUND_ARTICLES',
    reducer(state) {
      return {...state, searchResults};
    }
  }
}