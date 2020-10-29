import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
    {
        name: 'getBot-subs-users',
        endpoint: '/bot-subs-users',
        method: 'GET'
    }
])



export default {
    actionsTypes: Object.assign(actionsTypes),
    actionCreators: Object.assign(actionCreators)
  }