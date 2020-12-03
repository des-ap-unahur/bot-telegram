import BotUsersStateInterface  from '../../Interfaces/States/BotUsersStates.interface'
import BotUsersAction from '../Actions/BotUsers.action'

const { actionsTypes }: any = BotUsersAction;

const initialState: BotUsersStateInterface = {
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
}

const BotUsersReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
    //getTotalCountSubscribers
    case actionsTypes.getTotalCountSubscribersAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getTotalCountSubscribersSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        totalSubscribers: action.payload.data.count,
        statusCode: action.payload.status,
      }
    case actionsTypes.getTotalCountSubscribersFailure:
      return {
        ...state,
        fetchingStatus: false,
        failed: true,
        sucess: false,
        statusCode: action.payload.status,
        errorsCodes: action.payload.data.errorsCodes,
        errorMessage: action.payload.data.message
      }
    //getNewLastAdmission
    case actionsTypes.getNewLastAdmissionAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getNewLastAdmissionSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        newLastAdmission: action.payload.data.count,
        statusCode: action.payload.status,
      }
    case actionsTypes.getNewLastAdmissionFailure:
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

export default BotUsersReducer;