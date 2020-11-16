import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../../../Interfaces/GlobalState.interface";
import BotCommands from "../../../../../Store/Actions/BotCommands.action";
import NestedCommandsAction from "../../../../../Store/Actions/NestedCommands.action";
import ResponseAction from "../../../../../Store/Actions/Response.action";
import NewCommand from './NewCommand.component';

const actionCreators = Object.assign({}, BotCommands.actionCreators, ResponseAction.actionCreators, NestedCommandsAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.botCommands.fetchingStatus || state.response.fetchingStatus || state.nestedCommands.fetchingStatus,
  botCommandSelected: state.botCommands.botCommandSelected,
  botCommandList: state.botCommands.botCommandList,
  responseSelected: state.response.response
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewCommand);