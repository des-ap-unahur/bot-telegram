import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetRegisteredUserContent from './GetRegisteredUser.content';
import { GetRegisteredUserProps } from './GetRegisteredUser.interface';


const GetRegisteredUser = ({ registeredUser, total, fetching, getRegisteredUsersRequest}: GetRegisteredUserProps) => {
  const { language } = useContext(LanguageContext);
  
  useEffect(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };

    getRegisteredUsersRequest(requestOptions);
  },[registeredUser])

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getRegisteredUsersRequest(requestOptions)
  }


  return (
    <GetRegisteredUserContent
      language={language}
      handleChangePage={handleChangePage}
      registeredUser={registeredUser}
      total={total}
      fetching={fetching}
  
    />
  )
}

export default GetRegisteredUser;