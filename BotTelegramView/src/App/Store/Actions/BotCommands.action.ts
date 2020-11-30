import BotCommands from "../../Interfaces/BotComands.interface";
import builderAsyncActions from "../../Utils/BuilderAsyncActions.utils";

const { actionsTypes, actionCreators } = builderAsyncActions([
  {
    name: 'getBotCommands',
    endpoint: '/bot-commands/all',
    method: 'GET'
  },
  {
    name: 'getBotCommandList',
    endpoint: '/bot-commands',
    method: 'GET'
  },
  {
    name: 'postBotCommand',
    endpoint: '/bot-commands',
    method: 'POST'
  },
  {
    name: 'updateBotCommand',
    endpoint: '/bot-commands',
    method: 'PUT'
  },
  {
    name: 'deleteBotCommand',
    endpoint: '/bot-commands/:param_1',
    method: 'DELETE'
  },
  {
    name: 'getTotalCommands',
    endpoint: '/bot-commands/total-count',
    method: 'GET'
  },
  {
    name: 'refreshCommands',
    endpoint: '/bot-commands/refresh',
    method: 'PUT'
  }
])

const syncActions = {
  clearBotCommandsStates: 'clear-bot-commands-states',
  selectBotCommand: 'select-bot-command'
}

const syncActionCreators = {
  selectBotCommand: (payload: BotCommands | null) => {
    return {
      type: syncActions.selectBotCommand,
      payload
    }
  },
  clearBotCommandsStates: () => {
    return{
      type: syncActions.clearBotCommandsStates
    }
  }
}

export default {
  actionsTypes: Object.assign(actionsTypes, syncActions),
  actionCreators: Object.assign(actionCreators, syncActionCreators)
}