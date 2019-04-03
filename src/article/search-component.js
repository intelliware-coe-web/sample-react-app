import React from 'react';

export default function Search({onSearch}) {
  return (
    <form className="uk-search uk-search-large uk-width-1-1">
      <span data-uk-search-icon/>
      <input className="uk-search-input" type="search" placeholder="Search..." onInput={e => onSearch(e.target.value)}/>
    </form>
  );
}