import AuthActions from '../Actions/Auth.action';
import { getLocalValue, setLocalValue, removeLocalValue } from '../../Utils/LocalStorage.utils'
import AuthStateInterface from '../../Interfaces/States/AuthStates.interface';
import { getCookie, removeCookie, setCookie } from '../../Utils/Cookies.utils';

const { actionsTypes }: any = AuthActions

const initialState: AuthStateInterface = {
  lang: getLocalValue('lang') || 'ES',
  token: getCookie('token') || '',
  user: getLocalValue('user') || null,
  fetchingStatus: false,
  failed: false,
  sucess: false,
  statusCode: '',
  errorsCodes: '',
  errorMessage: '',
}

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //login
    case actionsTypes.loginAttempt:
      return {
        ...state,
        fetchingStatus: true,
        failed: false,
        sucess: false,
        errorsCodes: undefined,
        errorMessage: undefined,
      }
    case actionsTypes.loginSuccess:
      setCookie('token', action.payload.data.token, 1)
      setLocalValue('user', action.payload.data.user)
      return {
        ...state,
        fetchingStatus: false,
        failed: false,
        sucess: true,
        token: action.payload.data.token,
        user: action.payload.data.user,
        total: action.payload.data.total,
        statusCode: action.payload.status,
      }
    case actionsTypes.loginFailure:
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
    case actionsTypes.changeAuthLanguage:
      return {
        ...state,
        lang: action.payload
      }
    case actionsTypes.clearAuthStates:
      removeCookie('token');
      removeLocalValue('user');
      return {
        ...state,
        lang: getLocalValue('lang') || 'ES',
        token: '',
        user: null,
        fetchingStatus: false,
        failed: false,
        sucess: false,
        statusCode: '',
        errorsCodes: '',
        errorMessage: '',
      }
    default:
      return state
  }
}

export default AuthReducer;