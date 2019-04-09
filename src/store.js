import {applyMiddleware, compose, createStore} from "redux";
import promise from 'redux-promise';
import {isFunction} from 'lodash';

const initialState = {
  searchResults: {
    articles: []
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(promise)));
export default store;

function rootReducer(state = initialState, action) {
  return isFunction(action.payload) ? action.payload(state) : state;
}
