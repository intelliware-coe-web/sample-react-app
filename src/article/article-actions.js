import findByKeyword from "./wikipedia-service";

export function SearchArticles(search) {
  return findByKeyword(search)
      .then(articles => FoundArticlesAction(search, articles), ErrorAction)
}

function ErrorAction(error) {
  return {
    type: 'WIKIPEDIA_ERROR',
    reducer(state) {
      return {...state, error };
    }
  }
}

function FoundArticlesAction(search, searchResults) {
  return {
    type: 'FOUND_ARTICLES',
    reducer(state) {
      return {...state, search, searchResults};
    }
  }
}