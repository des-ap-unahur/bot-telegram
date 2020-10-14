import { PollStateInterface } from '../../Interfaces/PollStates.interface'
import PollActions from '../Actions/Poll.action'

const { actionsTypes }: any = PollActions

const initialState: PollStateInterface = {
  fetchingStatus: false,
  failed: false,
  sucess: false,
  polls: null,
  total: 0,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const PollReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //getPolls
    case actionsTypes.getPollsAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.getPollsSuccess:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        polls: action.payload.data.poll,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.getPollsFailure:
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
    case actionsTypes.clearPollStates:
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: false,
        polls: null,
        total: 0,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    default:
      return state
  }
}

export default PollReducer;