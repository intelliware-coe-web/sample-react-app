import SearchResults from "./search-result-component";

describe('Search result component', () => {
  it('should return a definition list of results', () => {
    const props = {results: [{href: 'url', title: 'title', description: 'desc'}]};
    expect(SearchResults(props)).toMatchSnapshot();
  });
});
