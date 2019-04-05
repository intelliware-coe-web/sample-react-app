import React from 'react';
import LoadMore from "./load-more-component";
import {render, fireEvent} from "react-testing-library";

describe('Load more component', () => {

  it('should return an empty fragment when no title is set', () => {
    expect(LoadMore({})).toMatchSnapshot();
  });

  it('should return the load more button when a title is set', () => {
    expect(LoadMore({title: 'foo'})).toMatchSnapshot();
  });

  it('should call the callback on click', () => {
    const props = {title: 'foo', onLoadMore: jest.fn()};
    const {getByText} = render(
      <LoadMore title={props.title} onLoadMore={props.onLoadMore}/>
    );
    fireEvent.click(getByText(/foo/i));
    expect(props.onLoadMore).toHaveBeenCalled();
  })

});