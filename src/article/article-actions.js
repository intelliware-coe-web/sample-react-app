export function SearchArticleAction(search) {
  return {
    type: 'SEARCH_ARTICLES',
    sideEffect(state) {
      return {...state, search};
    }
  }
}