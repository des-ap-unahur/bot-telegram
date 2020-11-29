import {BotSubsUsersStateInterface } from '../../Interfaces/BotSubsUsersStates.interface'
import BotSubsUsersAction from '../Actions/BotSubsUsers.action'

const { actionsTypes }: any = BotSubsUsersAction;

const initialState: BotSubsUsersStateInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  botSubsUsers: null,
  botUsers: null,
  total: 0,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const BotSubsUsersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //getRegisteredUsers
    case actionsTypes.getBotSubsUsersAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getBotSubsUsersSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        botSubsUsers: action.payload.data.botSubsUsers,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.getBotSubsUsersFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //getBotUsers
    case actionsTypes.getBotUsersAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getBotUsersSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        botUsers: action.payload.data.botUsers,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.getBotUsersFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //SyncActions
    default:
      return state
  }
}

export default BotSubsUsersReducer;