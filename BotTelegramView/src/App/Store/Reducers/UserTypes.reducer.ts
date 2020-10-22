import { UserTypesStateInterface } from '../../Interfaces/UserTypesState.interface'
import UserTypesAction from '../Actions/UserTypes.action'

const { actionsTypes }: any = UserTypesAction;

const initialState: UserTypesStateInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  userTypeSelected: null,
  userTypes: null,
  total: 0,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const UserTypesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //getUserTypess
    case actionsTypes.getUserTypessAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getUserTypessSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        UserTypess: action.payload.data.UserTypes,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.getUserTypessFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //getUserTypes
    case actionsTypes.getUserTypesAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getUserTypesSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        UserTypesSelected: action.payload.data.UserTypes,
        statusCode: action.payload.status,
      }
    case actionsTypes.getUserTypesFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //deleteUserTypes
    case actionsTypes.deleteUserTypesAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.deleteUserTypesSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        statusCode: action.payload.status,
      }
    case actionsTypes.deleteUserTypesFailure:
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
    case actionsTypes.clearUserTypesStates:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: false,
        userTypesSelected: null,
        userTypes: null,
        total: 0,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    default:
      return state
  }
}

export default UserTypesReducer;