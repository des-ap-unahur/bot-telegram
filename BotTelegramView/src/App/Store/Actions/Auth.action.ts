import buildAsyncActions from "../../Utils/BuilderAsyncActions.utils";


const { actionsTypes, actionCreators } = buildAsyncActions([
  
])

const syncActions = {
  clearAuthStates: 'clear-auth-states',
  changeAuthLanguage: 'change-auth-language'
}

const syncActionCreators = {
  clearAuthStates: () => {
    return{
      type: syncActions.clearAuthStates
    }
  },
  changeAuthLanguage: (payload: any) => {
    return {
      type: syncActions.changeAuthLanguage,
      payload
    }
  }
}

export default {
  actionsTypes: Object.assign(actionsTypes, syncActions),
  actionCreators: Object.assign(actionCreators, syncActionCreators)
}