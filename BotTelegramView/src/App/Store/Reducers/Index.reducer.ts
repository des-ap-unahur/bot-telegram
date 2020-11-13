import { combineReducers } from "redux";
import auth from './Auth.reducer';
import poll from './Poll.reducer';
import userTypes from './UserTypes.reducer';
import botCommands from './BotCommands.reducer';
import botSubsUsers from './BotSubsUsers.reducer';
import commandTypes from './CommandTypes.reducer';
import response from './Response.reducer';

const appReducer = combineReducers(
  {
    auth,
    poll,
    userTypes,
    botCommands,
    botSubsUsers,
    commandTypes,
    response
  }
)

export default (state:any, action:any) => {
  if (action.type === 'restart-state') {
    state = {

    };
  }
  return appReducer(state, action)
} 