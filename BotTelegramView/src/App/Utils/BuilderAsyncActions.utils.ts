import buildAsyncAction from './BuildAsyncAction.utils'
import AsyncActionsParams from '../Interfaces/Global/AsyncActionsParams.interface'

const builderAsyncActions = (actionsData: AsyncActionsParams[]) => {
  const actionsTypes = {}
  const actionCreators = {}

  for (const asyncAction of actionsData) {
    const action = buildAsyncAction(asyncAction)
    Object.assign(actionsTypes, action.actionsTypes)
    Object.assign(actionCreators, action.actionCreators)
  }

  return { 
    actionsTypes, 
    actionCreators 
  }
}

export default builderAsyncActions;