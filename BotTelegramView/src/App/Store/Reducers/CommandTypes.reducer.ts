import { CommandTypesStateInterface } from '../../Interfaces/CommandTypesState.interface';
import CommandTypesAction from '../Actions/CommandTypes.action';

const { actionsTypes }: any = CommandTypesAction;

const initialState: CommandTypesStateInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  commandTypes: null,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const CommandTypesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //getcommandTypes
    case actionsTypes.getCommandTypesAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getCommandTypesSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        commandTypes: action.payload.data,
        statusCode: action.payload.status,
      }
    case actionsTypes.getCommandTypesFailure:
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

export default CommandTypesReducer;