import React, { useState, useContext, useEffect, useCallback } from 'react';
import { inputNames } from './Login.config';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import LoginContent from './Login.content';
import { LoginProps } from './Login.interface';
import { history } from '../../../Utils/History.utils';

const Login = ({ auth, loginRequest, fetching, errorMsg }:LoginProps) => {
  const { language } = useContext(LanguageContext);
  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  
  useEffect(()=>{
    auth ? history.push('/dashboard') : history.push('/login')
  }, [auth])

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    if(name === inputNames.username){
      setUsername(value)
    } else if (name === inputNames.password) {
      setPassword(value)
    }
  }

  const handleLogin = async () => {
    const data = {
      username,
      password
    }

    if(password && username){
      const requestParams = {
        data
      }

      await loginRequest(requestParams);
    }
  }

  return (
    <LoginContent
      username={username}
      password={password}
      handleChange={handleChange}
      language={language}
      handleLogin={handleLogin}
      fetching={fetching}
      errorMsg={errorMsg}
    />
  );
}

export default Login;