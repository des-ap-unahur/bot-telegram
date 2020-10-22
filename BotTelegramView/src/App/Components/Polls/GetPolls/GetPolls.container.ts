import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import PollAction from "../../../Store/Actions/Poll.action";
import UserTypesAction from "../../../Store/Actions/UserTypes.action";
import GetPolls from './GetPolls.component';

const actionCreators = Object.assign({}, PollAction.actionCreators, UserTypesAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.poll.fetchingStatus,
  polls: state.poll.polls,
  total: state.poll.total,
  sucess: state.poll.sucess,
  userTypes: state.userTypes.userTypes,
  fetchingUserTypes: state.userTypes.fetchingStatus
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetPolls);