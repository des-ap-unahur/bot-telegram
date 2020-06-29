import createAsyncAction from './CreateAsyncAction.utils'

/**
 * @param {*} actions - An action array
 */
export default function createAsyncActions (actionsData) {
  const actionsTypes = {}
  const actionCreators = {}
  for (const asyncAction of actionsData) {
    const action = createAsyncAction(asyncAction)
    Object.assign(actionsTypes, action.actionsTypes)
    Object.assign(actionCreators, action.actionCreators)
  }
  return { actionsTypes, actionCreators }
}
