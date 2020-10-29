import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetRegisteredUserContent from './GetRegisteredUser.content';
import { GetRegisteredUserProps } from './GetRegisteredUser.interface';


const GetRegisteredUser = ({ usersSelected, total, sucess, fetching, getRegisteredUsersRequest, clearRegisteredUserStates, deleteRegisteredUserRequest}: GetRegisteredUserProps) => {
  const { language } = useContext(LanguageContext);
  
  useEffect(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };

    getRegisteredUsersRequest(requestOptions);
  },[])

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getRegisteredUsersRequest(requestOptions)
  }

  const handleDeleteRegisteredUser = async (id: number) => {
    const requestOptions = {
      param_1: id
    }

    clearRegisteredUserStates()
    await deleteRegisteredUserRequest(requestOptions) 
    await handleChangePage(0, 10);
  }

  return (
    <GetRegisteredUserContent
      language={language}
      handleChangePage={handleChangePage}
      users={usersSelected}
      total={total}
      fetching={fetching}
      handleDeleteRegisteredUser={handleDeleteRegisteredUser}
    />
  )
}

export default GetRegisteredUser;