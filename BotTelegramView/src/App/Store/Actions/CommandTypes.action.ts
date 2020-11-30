import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getCommandTypes',
    endpoint: '/command-types',
    method: 'GET'
  }
])

export default {
  actionsTypes: actionsTypes,
  actionCreators: actionCreators
}