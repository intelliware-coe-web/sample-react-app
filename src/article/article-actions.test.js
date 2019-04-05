import {SearchArticles} from "./article-actions";

jest.mock('./wikipedia-service',
  () => jest.fn().mockReturnValue(Promise.resolve({})));

describe('SearchArticles Thunk', () => {
  let actual;

  beforeEach(() => {
    const mockDispatch = jest.fn((action) => action);
    const thunk = SearchArticles('foo');
    actual = thunk(mockDispatch);
  });

  it('should dispatch a "FOUND_ARTICLES" event', (done) => {
    actual.then(action => {
      expect(action.type).toBe('FOUND_ARTICLES');
      done();
    });
  });

  it('should dispatch a reducer ', (done) => {
    actual.then(action => {
      expect(action.reducer({})).toEqual({search: 'foo', searchResults:{}});
      done();
    });
  });
});

