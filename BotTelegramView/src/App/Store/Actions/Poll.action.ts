import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getPolls',
    endpoint: '/polls',
    method: 'GET'
  },
  {
    name: 'deletePoll',
    endpoint: '/polls/:param_1',
    method: 'DELETE'
  },
  {
    name: 'getPoll',
    endpoint: '/poll/:param_1',
    method: 'PUT'
  }
])

const syncActions = {
  clearPollStates: 'clear-poll-states',
}

const syncActionCreators = {
  clearPollStates: () => {
    return{
      type: syncActions.clearPollStates
    }
  }
}

export default {
  actionsTypes: Object.assign(actionsTypes, syncActions),
  actionCreators: Object.assign(actionCreators, syncActionCreators)
}