import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  
])

const syncActions = {
  
}

const syncActionCreators = {
  
}

export default {
    actionsTypes: Object.assign(actionsTypes, syncActions),
    actionCreators: Object.assign(actionCreators, syncActionCreators)
  }