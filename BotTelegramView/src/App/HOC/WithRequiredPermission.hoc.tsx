import React, { useMemo } from 'react';
import { connect } from "react-redux";
import GlobalStateInterface from '../Interfaces/States/GlobalState.interface';

const WithRequiredPermission = ({ requiredPermission, userPermissions, children}:any) => {

  const hasRequiredPermissions = useMemo(() => {
    return !requiredPermission || (userPermissions &&
      userPermissions.some((userPermission:any) => 
        userPermission.name.includes(requiredPermission)  
      )
    )
  }, [userPermissions, requiredPermission])
  
  return (
    <>
      { hasRequiredPermissions ? children : null }
    </>
  )

}

const mapStateToProps = (state:GlobalStateInterface) => ({
  userPermissions: []
});

export default connect(mapStateToProps)(WithRequiredPermission);