import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router';
import GlobalStateInterface from '../Interfaces/States/GlobalState.interface';


const RedirectWithLogin = ({auth}:any) => {
  const history = useHistory();

  useEffect(()=>{
    if(auth){
      const path = history.location.pathname;
      const validRoutes = [
        '/dashboard',
        '/dashboard/polls',
        '/dashboard/user-types',
        '/dashboard/bot-actions',
        '/dashboard/subscribers',
      ]
      const isAValidRoute = validRoutes.includes(path);

      !isAValidRoute && history.push('/dashboard');
    } else {
      history.push('/login');
    }
  }, [auth, history])

  return <></>  
}

const mapStateToProps = (state:GlobalStateInterface) => ({
  auth: Boolean(state.auth.user && state.auth.token)
});

export default connect(mapStateToProps)(RedirectWithLogin)