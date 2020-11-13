import React, { useContext, useEffect, useCallback } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetBotSubsUsersContent from './GetBotSubsUsers.content';
import { GetBotSubsUsersProps } from './GetBotSubsUsers.interface';
 

const GetBotSubsUsers = (props: GetBotSubsUsersProps) => {
  const { language } = useContext(LanguageContext);
  const { botSubsUsers, 
    total,
    fetching,
    getBotSubsUsersRequest
  }= props;
  
  const getBotSubsUsers = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };

    getBotSubsUsersRequest(requestOptions);
  },[])

  useEffect(()=>{
    getBotSubsUsers();
  },[getBotSubsUsers]);
  
  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getBotSubsUsersRequest(requestOptions)
  }
    
  return (
    <GetBotSubsUsersContent
      language={language}
      handleChangePage={handleChangePage}
      botSubsUsers={botSubsUsers}
      total={total}
      fetching={fetching}
    />
  )
}

export default GetBotSubsUsers;