import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../Interfaces/GlobalState.interface";
import PollAction from "../../Store/Actions/Poll.action";
import BotCommandsActions from "../../Store/Actions/BotCommands.action";
import Dashboard from './Dashboard.component';

const actionCreators = Object.assign({}, PollAction.actionCreators, BotCommandsActions.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetchingPoll: state.poll.fetchingStatus,
  polls: state.poll.polls,
  fetchingBotCommands: state.botCommands.fetchingStatus,
  botCommands: state.botCommands.botCommands,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);