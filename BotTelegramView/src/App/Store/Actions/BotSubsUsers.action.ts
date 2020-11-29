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
  }
])

export default {
  actionsTypes: actionsTypes,
  actionCreators: actionCreators
}