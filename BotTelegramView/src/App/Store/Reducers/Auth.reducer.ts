import AuthActions from '../Actions/Auth.action';
import { getLocalValue } from '../../Utils/LocalStorage.utils'
import { AuthStateInterface } from '../../Interfaces/AuthStates.interface';

const { actionsTypes } = AuthActions

const initialState: AuthStateInterface = {
  lang: getLocalValue('lang') || 'ES'
}

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //SyncActions
    case actionsTypes.changeAuthLanguage:
      return {
        ...state,
        lang: action.payload
      }
    case actionsTypes.clearAuthStates:
      return {
        ...state,
        lang: getLocalValue('lang') || 'ES'
      }
    default:
      return state
  }
}

export default AuthReducer;