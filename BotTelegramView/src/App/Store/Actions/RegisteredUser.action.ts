import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
    {
        name: 'getBot-subs-users',
        endpoint: '/bot-subs-users',
        method: 'GET'
    },
    {
        name: 'deleteBotSubUser',
        endpoint: '/bot-subs-users/:param_1',
        method: 'DELETE'
    },
    {
        name: 'getBot-subs-users',
        endpoint: '/bot-subs-users/:param_1',
        method: 'PUT'
    }
])

const syncActions = {
    clearRegisteredUserStates: 'clear-botSubUsers-states',
}

const syncActionCreators = {
    clearRegisteredUserStates: () => {
        return {
            type: syncActions.clearRegisteredUserStates
        }
    }
}

export default {
    actionsTypes: Object.assign(actionsTypes, syncActions),
    actionCreators: Object.assign(actionCreators, syncActionCreators)
}