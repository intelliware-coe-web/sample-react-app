import React from 'react';
import {connect} from "react-redux";
import './App.css';

import Search from "./article/search-component";
import SearchResults from "./article/search-result-component";
import {debounce} from 'lodash';
import LoadMore from "./article/load-more-component";

function App({search, searchResults, searchArticles}) {
  return (
    <div className='uk-padding'>
      <Search onSearch={debounce(searchArticles, 1000)}/>
      <SearchResults results={searchResults.articles}/>
      <LoadMore title={searchResults.summary} onLoadMore={() => searchArticles(search)}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    searchArticles(search) {
      dispatch({type: 'SEARCH_REQUESTED', payload: search});
    }
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)