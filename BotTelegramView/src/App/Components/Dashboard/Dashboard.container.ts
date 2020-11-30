import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../Interfaces/GlobalState.interface";
import PollAction from "../../Store/Actions/Poll.action";
import BotCommandsActions from "../../Store/Actions/BotCommands.action";
import Dashboard from './Dashboard.component';
import BotSubsUsersAction from "../../Store/Actions/BotSubsUsers.action";

const actionCreators = Object.assign({}, PollAction.actionCreators, BotCommandsActions.actionCreators, BotSubsUsersAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetchingPoll: state.poll.fetchingStatus,
  fetchingRefresh: state.botCommands.fetchingRefreshStatus,
  polls: state.poll.polls,
  fetchingBotCommands: state.botCommands.fetchingStatus,
  botCommands: state.botCommands.botCommands,
  totalCommands: state.botCommands.totalCommands,
  totalSubscribers: state.botSubsUsers.totalSubscribers,
  newLastAdmission: state.botSubsUsers.newLastAdmission,
  totalPolls: state.poll.totalPolls
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);