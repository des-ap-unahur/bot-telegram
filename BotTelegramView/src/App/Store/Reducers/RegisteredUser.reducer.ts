import {RegisteredUserStateInterface } from '../../Interfaces/RegisteredUserStates.interface'
import RegisteredUserAction from '../Actions/RegisteredUser.action'

const { actionsTypes }: any = RegisteredUserAction;

const initialState: RegisteredUserStateInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  registeredUser: null,
  total: 0,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const RegisteredUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //getRegisteredUsers
    case actionsTypes.getUserRegisteredUserAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getUserRegisteredUserSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        registeredUser: action.payload.data,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.getUserRegisteredUserFailure:
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

export default RegisteredUserReducer;