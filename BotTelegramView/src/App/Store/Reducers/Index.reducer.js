import { combineReducers } from "redux";

const appReducer = combineReducers(
  {

  }
)

export default (state, action) => {
  if (action.type === 'restart-state') {
    state = {};
  }
  return appReducer(state, action)
}