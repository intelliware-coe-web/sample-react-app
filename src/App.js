import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Search from "./article/search-component";

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/css/uikit-core.css';
import '../node_modules/uikit/dist/js/uikit.min.js'
import '../node_modules/uikit/dist/js/uikit-core.min.js'
import '../node_modules/uikit/dist/js/uikit-icons.min.js'
import {SearchArticles} from "./article/article-actions";

function App({searchArticles}) {
  return (
    <div>
      <Search onSearch={searchArticles}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    searchArticles: search => dispatch(SearchArticles(search))
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)