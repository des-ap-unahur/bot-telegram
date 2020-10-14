import { combineReducers } from "redux";
import AuthReducer from './Auth.reducer';

const appReducer = combineReducers(
  {
    AuthReducer
  }
)

export default (state:any, action:any) => {
  if (action.type === 'restart-state') {
    state = {

    };
  }
  return appReducer(state, action)
}