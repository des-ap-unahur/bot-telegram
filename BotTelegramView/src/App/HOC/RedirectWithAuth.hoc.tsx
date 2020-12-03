import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router';
import GlobalStateInterface from '../Interfaces/States/GlobalState.interface';


const RedirectWithLogin = ({auth}:any) => {
  const history = useHistory();
  
  useEffect(()=>{
    auth ? history.push('/dashboard') : history.push('/login');
  }, [auth, history])

  return <></>  
}

const mapStateToProps = (state:GlobalStateInterface) => ({
  auth: Boolean(state.auth.user && state.auth.token)
});

export default connect(mapStateToProps)(RedirectWithLogin)

/*import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import ComingSoon from '../components/ComingSoon';

import checkPermissions from '../HOC/checkPermissions';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga';

import routes from '../config/dashboardRoutes';
import campaignActions from '../store/actions/campaign';

const actionCreators = Object.assign({}, campaignActions.actionCreators);

const getRoutes = (user) => {
  const validateRoutes = routes
    .reduce(
      (accRoutes, current) => {
        return checkPermissions(user, current.permissionsRequired) ? [...accRoutes, current] : accRoutes
      }
      , []
    )
  return validateRoutes
}

const DashboardRouter = (props = {}) => {
  const [ location, setLocation ] = useState(null);
  ReactGA.set({ page: props.location.pathname });
  ReactGA.pageview(props.location.pathname);

  useEffect(()=>{
    if(props.location.pathname !== location) {
      if(!location){
        setLocation(props.location.pathname)
      } else {
        props.selectCampaign(null);
        setLocation(props.location.pathname)
      }
    }
  },[props.location, location])

  return (
    <Switch>
      {
        getRoutes(props.user).map((route, i) =>
          <Route key={i} path={route.path} component={route.component} />
        )
      }
      <Route path="/dashboard/" component={Dashboard} exact={true} />
      <Route path="/dashboard/" component={ComingSoon} />
    </Switch>
  );
};


const mapStateToProps = (state) => (
  {
    user: state.auth.user,
  }
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardRouter));*/