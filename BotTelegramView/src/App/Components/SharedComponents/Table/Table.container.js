import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import documentActions from "../../../Store/Actions/Document.actions";
import Table from "./Table.component"

const actionCreators = Object.assign({}, documentActions.actionCreators);

const mapStateToProps = (state) => ({
  globalPage: state.document.page
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);