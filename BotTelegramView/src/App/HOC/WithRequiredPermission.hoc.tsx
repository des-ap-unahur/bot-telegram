import React, { useMemo } from 'react';
import { connect } from "react-redux";

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

const mapStateToProps = (state:any) => ({
  userPermissions: []
});

export default connect(mapStateToProps)(WithRequiredPermission);