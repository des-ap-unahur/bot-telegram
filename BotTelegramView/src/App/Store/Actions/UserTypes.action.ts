import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getUserTypes',
    endpoint: '/user-types',
    method: 'GET'
  }
])

export default {
  actionsTypes: Object.assign(actionsTypes),
  actionCreators: Object.assign(actionCreators)
}