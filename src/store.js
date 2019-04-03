import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
  searchResults: {}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;

function rootReducer(state = initialState, action) {
  return action.reducer ? action.reducer(state) : state;
}
