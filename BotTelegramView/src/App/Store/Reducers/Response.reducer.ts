import { ResponseStates } from '../../Interfaces/ResponseStates.interface';
import ResponseAction from '../Actions/Response.action';

const { actionsTypes }: any = ResponseAction;

const initialState: ResponseStates = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  response: null,
  responseFiles: null,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const ResponseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //postResponse
    case actionsTypes.postResponseAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.postResponseSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        response: action.payload.data,
        statusCode: action.payload.status,
      }
    case actionsTypes.postResponseFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //updateResponse
    case actionsTypes.updateResponseAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.updateResponseSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        response: action.payload.data,
        statusCode: action.payload.status,
      }
    case actionsTypes.updateResponseFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //postResponsesFiles
    case actionsTypes.postResponsesFilesAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.postResponsesFilesSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        responseFiles: action.payload.data,
        statusCode: action.payload.status,
      }
    case actionsTypes.postResponsesFilesFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //updateResponsesFiles
    case actionsTypes.updateResponsesFilesAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.updateResponsesFilesSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        responseFiles: action.payload.data,
        statusCode: action.payload.status,
      }
    case actionsTypes.updateResponsesFilesFailure:
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
    case actionsTypes.selectResponse:
      return {
        ...state,
        response: action.payload
      }
    case actionsTypes.selectResponseFiles:
      return {
        ...state,
        responseFiles: action.payload
      }
    case actionsTypes.clearResponseStates:
      return {
        fetchingStatus: false,
        failed: false,
        sucess: false,
        response: null,
        responseFiles: null,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    default:
      return state
  }
}

export default ResponseReducer;