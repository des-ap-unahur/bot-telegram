import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GlobalStateInterface } from "../../../Interfaces/GlobalState.interface";
import UserTypesAction from "../../../Store/Actions/UserTypes.action";
import GetUserTypes from './GetUserTypes.component';

const actionCreators = Object.assign({}, UserTypesAction.actionCreators);

const mapStateToProps = (state: GlobalStateInterface) => ({
  fetching: state.userTypes.fetchingStatus,
  userTypes: state.userTypes.userTypes
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetUserTypes);