import React, { useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const PrivateRoute = ({auth, path, component, exact, userPermissions, permissions}:any) => {
  const hasRequiredPermissions = useMemo(() => {
    return !permissions || (userPermissions &&
      userPermissions.some((userPermission:any) => 
        userPermission.name.includes(permissions)  
      )
    )
  }, [userPermissions, permissions])

  return (
    (auth && hasRequiredPermissions) ?
      <Route path={path} component={component} exact={exact}/>
    :
      <Redirect from={path} to={ auth ? '/dashboard' : '/login' }/>
  )
}

const mapStateToProps = (state:any) => ({
  auth: true,
  userPermissions: []
});

export default connect(mapStateToProps)(PrivateRoute);