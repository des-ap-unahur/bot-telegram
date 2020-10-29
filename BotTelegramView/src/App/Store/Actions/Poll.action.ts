import PollInterface from "../../Interfaces/Poll.interface";
import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getPolls',
    endpoint: '/polls',
    method: 'GET'
  },
  {
    name: 'postPoll',
    endpoint: '/poll',
    method: 'POST'
  },
  {
    name: 'deletePoll',
    endpoint: '/polls/:param_1',
    method: 'DELETE'
  },
  {
    name: 'updatePoll',
    endpoint: '/poll/:param_1',
    method: 'PUT'
  },
  {
    name: 'getPoll',
    endpoint: '/poll/:param_1',
    method: 'GET'
  },
  {
    name: 'postQuestions',
    endpoint: '/poll/questions',
    method: 'POST'
  }
])

const syncActions = {
  clearPollStates: 'clear-poll-states',
  selectPoll: 'select-poll'
}

const syncActionCreators = {
  selectPoll: (payload: PollInterface | null)=>{
    return {
      type: syncActions.selectPoll,
      payload
    }
  },
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