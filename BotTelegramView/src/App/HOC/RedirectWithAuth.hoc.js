import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";


const RedirectWithLogin = ({auth}) => {
  const history = useHistory();
  useEffect(()=>{
    auth ? history.push('/dashboard') : history.push('/login');
  }, [auth])
  return (
    <>
    </>
  )
}
const mapStateToProps = (state) => ({
  auth: true
});

export default connect(mapStateToProps)(RedirectWithLogin)