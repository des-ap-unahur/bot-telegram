import React, { useContext, useEffect, useCallback } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetBotUsersContent from './GetBotUsers.content';
import { GetBotUsersProps } from './GetBotUsers.interface';
 

const GetBotUsers = (props: GetBotUsersProps) => {
  const { language } = useContext(LanguageContext);
  const { 
    botUsers, 
    total,
    fetching,
    getBotUsersRequest
  }= props;
  
  const getBotUsers = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };

    getBotUsersRequest(requestOptions);
  },[])

  useEffect(()=>{
    getBotUsers();
  },[getBotUsers]);
  
  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getBotUsersRequest(requestOptions)
  }
    
  return (
    <GetBotUsersContent
      language={language}
      handleChangePage={handleChangePage}
      botUsers={botUsers}
      total={total}
      fetching={fetching}
    />
  )
}

export default GetBotUsers;