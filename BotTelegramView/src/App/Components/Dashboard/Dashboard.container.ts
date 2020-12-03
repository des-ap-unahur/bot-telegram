import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlobalStateInterface from "../../Interfaces/States/GlobalState.interface";
import PollAction from "../../Store/Actions/Poll.action";
import BotCommandsActions from "../../Store/Actions/BotCommands.action";
import Dashboard from './Dashboard.component';
import BotUsersAction from "../../Store/Actions/BotUsers.action";

const actionCreators = Object.assign({}, PollAction.actionCreators, BotCommandsActions.actionCreators, BotUsersAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetchingPoll: state.poll.fetchingStatus,
  fetchingRefresh: state.botCommands.fetchingRefreshStatus,
  polls: state.poll.polls,
  fetchingBotCommands: state.botCommands.fetchingStatus,
  botCommands: state.botCommands.botCommands,
  totalCommands: state.botCommands.totalCommands,
  totalSubscribers: state.botUsers.totalSubscribers,
  newLastAdmission: state.botUsers.newLastAdmission,
  totalPolls: state.poll.totalPolls
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);