import React, { useContext, useEffect, useCallback } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetBotSubsUsersContent from './GetBotSubsUsers.content';
import { GetBotSubsUsersProps } from './GetBotSubsUsers.interface';
 

const GetBotSubsUsers = (props: GetBotSubsUsersProps) => {
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
    <GetBotSubsUsersContent
      language={language}
      handleChangePage={handleChangePage}
      botUsers={botUsers}
      total={total}
      fetching={fetching}
    />
  )
}

export default GetBotSubsUsers;