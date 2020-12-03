import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlobalStateInterface from "../../../Interfaces/States/GlobalState.interface";
import BotUsersAction from "../../../Store/Actions/BotUsers.action";
import GetBotUsers from './GetBotUsers.component';

const actionCreators = Object.assign({}, BotUsersAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.botUsers.fetchingStatus,
  botUsers: state.botUsers.botUsers,
  sucess: state.botUsers.sucess,
  total: state.botUsers.total,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetBotUsers);