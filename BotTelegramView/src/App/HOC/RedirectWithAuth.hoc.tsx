import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router';
import { GlobalStateInterface } from '../Interfaces/GlobalState.interface';


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