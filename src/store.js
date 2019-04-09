import {applyMiddleware, compose, createStore} from "redux";
import {isFunction} from 'lodash';
import createSagaMiddleware from 'redux-saga';
import {searchSaga} from "./article/article-actions";

const initialState = {
  searchResults: {
    articles: []
  }
};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
export default store;

function rootReducer(state = initialState, action) {
  return isFunction(action.payload) ? action.payload(state) : state;
}
