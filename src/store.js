import {applyMiddleware, compose, createStore} from "redux";
import promise from 'redux-promise';

const initialState = {
  searchResults: {
    articles: []
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(promise)));
export default store;

function rootReducer(state = initialState, action) {
  return action.reducer ? action.reducer(state) : state;
}
