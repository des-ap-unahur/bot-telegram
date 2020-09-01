import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router';


const RedirectWithLogin = ({auth}:any) => {
  const history = useHistory();
  
  useEffect(()=>{
    auth ? history.push('/dashboard') : history.push('/login');
  }, [auth, history])

  return <></>  
}

const mapStateToProps = (state:any) => ({
  auth: true
});

export default connect(mapStateToProps)(RedirectWithLogin)