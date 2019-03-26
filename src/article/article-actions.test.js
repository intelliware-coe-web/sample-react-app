import {SearchArticleAction} from "./article-actions";

test('it should add the search value to the store state', () => {
  const action = SearchArticleAction('hello, world!');
  const oldState = {};
  const newState = action.sideEffect(oldState);
  expect(newState).toEqual({search: 'hello, world!'});
});