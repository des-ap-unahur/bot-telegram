import { combineReducers } from "redux";

const appReducer = combineReducers(
  {

  }
)

export default (state:any, action:any) => {
  if (action.type === 'restart-state') {
    state = {};
  }
  return appReducer(state, action)
}