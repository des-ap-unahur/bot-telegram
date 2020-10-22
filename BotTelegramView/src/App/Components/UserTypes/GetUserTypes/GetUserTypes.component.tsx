import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetUserTypesContent from './GetUserTypes.content';
import { GetUserTypesProps } from './GetUserTypes.interface';


const GetUserTypes = ({ userTypes, total, sucess, fetching, getUserTypesRequest, clearUserTypesStates, deleteUserTypesRequest}: GetUserTypesProps) => {
  const { language } = useContext(LanguageContext);
  
  useEffect(()=>{
    getUserTypesRequest();
  },[])

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getUserTypesRequest()
  }

  const handleDeleteUserType = async (id: number) => {
    const requestOptions = {
      param_1: id
    }

    clearUserTypesStates()
    await deleteUserTypesRequest(requestOptions)
  
  }

  return (
    <GetUserTypesContent
      language={language}
      handleChangePage={handleChangePage}
      userTypes={userTypes}
      total={total}
      fetching={fetching}
      handleDeleteUserType={handleDeleteUserType}
    />
  )
}

export default GetUserTypes;