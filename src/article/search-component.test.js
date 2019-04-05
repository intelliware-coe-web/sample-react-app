import React from 'react';
import Search from './search-component';
import {render, fireEvent} from "react-testing-library";

describe('Search component', () => {

  it('should render correctly', () => {
    const props = {onSearch: jest.fn()};
    expect(Search(props)).toMatchSnapshot();
  });

  it('should trigger the callback on input', () => {
    const props = {onSearch: jest.fn()};
    const {getByPlaceholderText} = render(
      <Search onSearch={props.onSearch}/>
    );
    const input = getByPlaceholderText(/Search.../i);
    input.value = 'foo';
    fireEvent.input(input);

    expect(props.onSearch).toHaveBeenCalledWith('foo');
  })
});

