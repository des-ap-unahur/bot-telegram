import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import AuthAction from "../../../Store/Actions/Auth.action";
import Header from './Header.component';

const actionCreators = Object.assign({}, AuthAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  user: {image: '', username: state.auth.user && state.auth.user.username},
  auth: Boolean(state.auth.user && state.auth.token)
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);