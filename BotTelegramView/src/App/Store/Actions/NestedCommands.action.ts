import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'postBotNestedCommand',
    endpoint: '/bot-nested-commands',
    method: 'POST'
  },
  {
    name: 'deleteBotNestedCommand',
    endpoint: '/bot-nested-commands/:param_1',
    method: 'DELETE'
  }
])

const syncActions = {
  clearNestedCommandsStates: 'clear-nested-commands-states',
  selectNestedCommands: 'select-nested-commands',
}

const syncActionCreators = {
  selectNestedCommands: (payload: null) => {
    return {
      type: syncActions.selectNestedCommands,
      payload
    }
  },
  clearNestedCommandsStates: () => {
    return{
      type: syncActions.clearNestedCommandsStates
    }
  }
}

export default {
  actionsTypes: Object.assign(actionsTypes, syncActions),
  actionCreators: Object.assign(actionCreators, syncActionCreators)
}