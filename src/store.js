import {applyMiddleware, compose, createStore} from "redux";
import {isFunction} from 'lodash';
import thunk from "redux-thunk";

const initialState = {
  searchResults: {
    articles: []
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;

function rootReducer(state = initialState, action) {
  return isFunction(action.payload) ? action.payload(state) : state;
}
