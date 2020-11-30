import { NestedCommandStatesInterface } from '../../Interfaces/NestedCommandStates.interface';
import NestedCommandsActions from '../Actions/NestedCommands.action';

const { actionsTypes }: any = NestedCommandsActions;

const initialState: NestedCommandStatesInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  nestedCommands: null,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const NestedCommandsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //postBotNestedCommand
    case actionsTypes.postBotNestedCommandAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.postBotNestedCommandSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        statusCode: action.payload.status,
      }
    case actionsTypes.postBotNestedCommandFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //deleteBotNestedCommand
    case actionsTypes.deleteBotNestedCommandAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.deleteBotNestedCommandSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        statusCode: action.payload.status,
      }
    case actionsTypes.deleteBotNestedCommandFailure:
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
    case actionsTypes.selectNestedCommands:
      return {
        ...state,
        nestedCommands: action.payload
      }
    case actionsTypes.clearNestedCommandsStates:
      return {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        nestedCommands: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    default:
      return state
  }
}

export default NestedCommandsReducer;