import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import RegisteredUserAction from "../../../Store/Actions/RegisteredUser.action";
import GetRegisteredUser from './GetRegisteredUser.component';

const actionCreators = Object.assign({}, RegisteredUserAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.user.fetchingStatus,
  users: state.user.usersSelected,
  total: state.user.total,
  sucess: state.user.sucess
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetRegisteredUser);