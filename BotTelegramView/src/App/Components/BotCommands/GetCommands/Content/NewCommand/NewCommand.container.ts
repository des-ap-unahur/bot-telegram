import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../../../Interfaces/GlobalState.interface";
import BotCommands from "../../../../../Store/Actions/BotCommands.action";
import NewCommand from './NewCommand.component';

const actionCreators = Object.assign({}, BotCommands.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.botCommands.fetchingStatus,
  botCommandSelected: state.botCommands.botCommandSelected,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewCommand);