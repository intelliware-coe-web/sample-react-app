export function SearchArticleAction(search) {
  return {
    type: 'SEARCH_ARTICLES',
    payload: search,
    sideEffect(state, payload) {
      return {...state, search: payload};
    }
  }
}