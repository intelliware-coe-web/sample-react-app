import React from 'react';
import {connect} from "react-redux";
import './App.css';

import Search from "./article/search-component";
import SearchResults from "./article/search-result-component";
import {SearchArticles} from "./article/article-actions";

import {debounce} from 'lodash';

function App({searchResults, searchArticles}) {
  return (
    <div>
      <Search onSearch={debounce(searchArticles, 1000)}/>
      <SearchResults results={searchResults.articles}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    searchArticles(search) {
      dispatch(SearchArticles(search));
    }
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)