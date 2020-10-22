import { UserTypesStateInterface } from '../../Interfaces/UserTypesState.interface'
import UserTypesAction from '../Actions/UserTypes.action'

const { actionsTypes }: any = UserTypesAction;

const initialState: UserTypesStateInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  userTypes: null,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const UserTypesReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
        userTypes: action.payload.data,
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
    //SyncActions
    default:
      return state
  }
}

export default UserTypesReducer;