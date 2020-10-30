import BotCommandsAction from '../Actions/BotCommands.action';
import {BotCommandStatesInterface} from '../../Interfaces/BotCommandStates.interface';

const { actionsTypes }: any = BotCommandsAction;

const initialState: BotCommandStatesInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  botCommands: null,
  total: 0,
  botCommandSelected: null,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const BotCommandsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //getBotCommands
    case actionsTypes.getBotCommandsAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getBotCommandsSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        botCommands: action.payload.data.botCommands,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.getBotCommandsFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //deleteBotCommand
    case actionsTypes.deleteBotCommandAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.deleteBotCommandSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        statusCode: action.payload.status,
      }
    case actionsTypes.deleteBotCommandFailure:
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
    case actionsTypes.selectBotCommand: 
      return {
        ...state,
        botCommandSelected: action.payload
      }
    case actionsTypes.clearPollStates:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: false,
        botCommands: null,
        total: 0,
        botCommandSelected: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    default:
      return state
  }
}

export default BotCommandsReducer;