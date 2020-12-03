import { combineReducers } from "redux";
import auth from './Auth.reducer';
import poll from './Poll.reducer';
import userTypes from './UserTypes.reducer';
import botCommands from './BotCommands.reducer';
import botUsers from './BotUsers.reducer';
import commandTypes from './CommandTypes.reducer';
import response from './Response.reducer';
import nestedCommands from './NestedCommands.reducer';
import { getLocalValue, removeLocalValue } from "../../Utils/LocalStorage.utils";
import { removeCookie } from "../../Utils/Cookies.utils";

const appReducer = combineReducers(
  {
    auth,
    poll,
    userTypes,
    botCommands,
    botUsers,
    commandTypes,
    response,
    nestedCommands
  }
)

export default (state:any, action:any) => {
  if (action.type === 'restart-state') {
    removeCookie('token');
    removeLocalValue('user');
    state = {
      auth: {
        lang: getLocalValue('lang') || 'ES',
        token: '',
        user:  null,
        fetchingStatus: false,
        failed: false,
        sucess: false,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      poll: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        pollSelected: null,
        polls: null,
        total: 0,
        totalPolls: 0,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      userTypes: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        userTypes: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      botCommands: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        botCommands: null,
        botCommandList: null,
        total: 0,
        botCommandSelected: null,
        fetchingRefreshStatus: false,
        totalCommands: 0,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      botUsers: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        botUsers: null,
        total: 0,
        totalSubscribers: 0,
        newLastAdmission: 0,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      commandTypes: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        commandTypes: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      response: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        response: null,
        responseFiles: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      },
      nestedCommands: {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        nestedCommands: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    };
  }
  return appReducer(state, action)
} 