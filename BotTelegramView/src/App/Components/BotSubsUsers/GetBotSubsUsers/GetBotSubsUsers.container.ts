import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import BotSubsUsersAction from "../../../Store/Actions/BotSubsUsers.action";
import GetBotSubsUsers from './GetBotSubsUsers.component';

const actionCreators = Object.assign({}, BotSubsUsersAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.botSubsUsers.fetchingStatus,
  botSubsUsers: state.botSubsUsers.botSubsUsers,
  sucess: state.botSubsUsers.sucess,
  total: state.botSubsUsers.total,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetBotSubsUsers);