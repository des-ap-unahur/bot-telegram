import { combineReducers } from "redux";
import auth from './Auth.reducer';
import poll from './Poll.reducer';
import userTypes from './UserTypes.reducer';

const appReducer = combineReducers(
  {
    auth,
    poll,
    userTypes
  }
)

export default (state:any, action:any) => {
  if (action.type === 'restart-state') {
    state = {

    };
  }
  return appReducer(state, action)
}