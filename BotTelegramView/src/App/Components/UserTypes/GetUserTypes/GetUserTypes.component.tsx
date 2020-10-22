import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetUserTypesContent from './GetUserTypes.content';
import { GetUserTypesProps } from './GetUserTypes.interface';


const GetUserTypes = ({ userTypes, fetching, getUserTypesRequest }: GetUserTypesProps) => {
  const { language } = useContext(LanguageContext);
  
  useEffect(()=>{
    if(!userTypes){
      getUserTypesRequest({});
    }
  },[userTypes])

  return (
    <GetUserTypesContent
      language={language}
      userTypes={userTypes}
      fetching={fetching}
    />
  )
}

export default GetUserTypes;