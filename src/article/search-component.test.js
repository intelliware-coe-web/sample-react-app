import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search onInput={console.log}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
