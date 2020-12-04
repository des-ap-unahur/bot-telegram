import React, { useMemo, useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import GlobalStateInterface from '../Interfaces/States/GlobalState.interface';
import { getLocalValue } from '../Utils/LocalStorage.utils';
import { getCookie } from '../Utils/Cookies.utils';
import { history } from '../Utils/History.utils';

const PrivateRoute = ({auth, path, component, exact, userPermissions, permissions}:any) => {
  const hasRequiredPermissions = useMemo(() => {
    return !permissions || (userPermissions &&
      userPermissions.some((userPermission:any) => 
        userPermission.name.includes(permissions)  
      )
    )
  }, [userPermissions, permissions])

  const redirectIfUserIsntLoggedIn = useCallback(()=>{
    const user = getLocalValue('user');
    const token = getCookie('token')
    if(!user && !token)
      history.push('/login');
  }, [])

  useEffect(()=>{
    redirectIfUserIsntLoggedIn();
  },[redirectIfUserIsntLoggedIn]);

  return (
    (auth && hasRequiredPermissions) &&
      <Route path={path} component={component} exact={exact}/>
  )
}

const mapStateToProps = (state:GlobalStateInterface) => ({
  auth: Boolean(state.auth.user && state.auth.token),
  userPermissions: []
});

export default connect(mapStateToProps)(PrivateRoute);