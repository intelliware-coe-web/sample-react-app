import {FoundArticlesAction} from "./article-actions";

test('it should add the search value to the store state', () => {
  const articles = {};
  const action = FoundArticlesAction(articles);
  const oldState = {};
  const newState = action.reducer(oldState);
  expect(newState.articles).toBe(articles);
});