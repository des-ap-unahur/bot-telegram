import React, { useMemo } from 'react';
import { connect } from "react-redux";

const WithRequiredPermission = ({ requiredPermission, userPermissions, children}) => {

  const hasRequiredPermissions = useMemo(() => {
    return !requiredPermission || (userPermissions &&
      userPermissions.some(userPermission => 
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

const mapStateToProps = (state) => ({
  userPermissions: []
});

export default connect(mapStateToProps)(WithRequiredPermission);