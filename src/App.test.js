import App from "./App";

describe('App container', () => {
  it('should render correctly', () => {
    const props = {
      search: '',
      searchResults: [],
      searchArticles: jest.fn()
    };
    expect(App.WrappedComponent(props)).toMatchSnapshot();
  });
});

