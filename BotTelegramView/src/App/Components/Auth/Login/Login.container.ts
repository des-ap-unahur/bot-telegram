import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import AuthAction from "../../../Store/Actions/Auth.action";
import Login from './Login.component';

const actionCreators = Object.assign({}, AuthAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  auth: Boolean(state.auth.user && state.auth.token),
  fetching: state.auth.fetchingStatus,
  errorMsg: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);