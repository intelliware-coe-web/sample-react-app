import {applyMiddleware, compose, createStore} from "redux";
import {isFunction} from 'lodash';
import {searchEpic} from "./article/article-actions";
import {combineEpics, createEpicMiddleware} from "redux-observable";

const initialState = {
  searchResults: {
    articles: []
  }
};
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(epicMiddleware)));
export default store;

epicMiddleware.run(combineEpics(
  searchEpic
));

function rootReducer(state = initialState, action) {
  return isFunction(action.payload) ? action.payload(state) : state;
}
