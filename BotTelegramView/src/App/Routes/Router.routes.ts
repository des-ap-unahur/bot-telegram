import GetCommandsContainer from '../Components/BotCommands/GetCommands/GetCommands.container';
import Dashboard from '../Components/Dashboard/Dashboard.container';
import GetPolls from '../Components/Polls/GetPolls/GetPolls.container';
import GetUserTypes from '../Components/UserTypes/GetUserTypes/GetUserTypes.container';
import GetBotUsers from '../Components/BotUsers/GetBotUsers/GetBotUsers.container';
import Login from '../Components/Auth/Login/Login.container';
import Route from '../Interfaces/Global/Routes.interface';

const publicRoutes: Route[] = [
  {path: '/login', component: Login, exact:true},
];

const privateRoutes:Route[] = [
  {path: '/dashboard', component:Dashboard, exact:true},
  {path: '/dashboard/polls', component: GetPolls},
  {path: '/dashboard/user-types', component: GetUserTypes},
  {path: '/dashboard/bot-actions', component: GetCommandsContainer},
  {path: '/dashboard/subscribers', component: GetBotUsers},
];

export default { publicRoutes, privateRoutes }

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