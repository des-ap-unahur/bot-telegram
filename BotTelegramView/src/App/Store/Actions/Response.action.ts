import { ResponseInterface } from "../../Interfaces/Response.interface";
import { ResponseFilesInterface } from "../../Interfaces/ResponseFiles.interface";
import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'postResponse',
    endpoint: '/bot-responses',
    method: 'POST'
  },
  {
    name: 'updateResponse',
    endpoint: '/bot-responses/:param_1',
    method: 'PUT'
  },
  {
    name: 'postResponsesFiles',
    endpoint: '/bot-responses-files',
    method: 'POST'
  },
  {
    name: 'updateResponsesFiles',
    endpoint: '/bot-responses-files/:param_1',
    method: 'PUT'
  }
])

const syncActions = {
  clearResponseStates: 'clear-response-states',
  selectResponse: 'select-response',
  selectResponseFiles: 'select-response-files'
}

const syncActionCreators = {
  selectResponse: (payload: null | ResponseInterface)=>{
    return {
      type: syncActions.selectResponse,
      payload
    }
  },
  selectResponseFiles: (payload: null | ResponseFilesInterface)=>{
    return {
      type: syncActions.selectResponseFiles,
      payload
    }
  },
  clearResponseStates: () => {
    return{
      type: syncActions.clearResponseStates
    }
  }
}

export default {
  actionsTypes: Object.assign(actionsTypes, syncActions),
  actionCreators: Object.assign(actionCreators, syncActionCreators)
}