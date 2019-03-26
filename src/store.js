import {createStore} from "redux";

const initialState = {
  articles: []
};

const store = createStore(rootReducer);
export default store;

function rootReducer(state = initialState, action) {
  return action.sideEffect ? action.sideEffect(state) : state;
}
