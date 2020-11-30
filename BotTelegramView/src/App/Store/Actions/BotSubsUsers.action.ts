import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getBotSubsUsers',
    endpoint: '/bot-subs-users',
    method: 'GET'
  },
  {
    name: 'getBotUsers',
    endpoint:'/bot-users',
    method: 'GET'
  },
  {
    name: 'getTotalCountSubscribers',
    endpoint:'/bot-users/total-count',
    method: 'GET'
  },
  {
    name: 'getNewLastAdmission',
    endpoint:'/bot-users/count-for-week',
    method: 'GET'
  }
])

export default {
  actionsTypes: actionsTypes,
  actionCreators: actionCreators
}