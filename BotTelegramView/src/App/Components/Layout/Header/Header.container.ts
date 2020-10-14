import { connect } from "react-redux";
import Header from './Header.component';


const mapStateToProps = (state: any) => ({
  user: {image: 'asd', username: 'Agustin Remonda'},
  auth: true
});

export default connect(mapStateToProps)(Header);