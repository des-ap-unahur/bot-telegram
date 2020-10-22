import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetPollsContent from './GetPolls.content';
import { GetPollProps } from './GetPolls.interface';


const GetPolls = ({ polls, total, fetching, getPollsRequest, clearPollStates, deletePollRequest}: GetPollProps) => {
  const [ openDeletePopUp, setOpenDeletePopUp ] = useState<boolean>(false);
  const [ pollId, selectPollId ] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);
  
  useEffect(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };

    getPollsRequest(requestOptions);
  },[])

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getPollsRequest(requestOptions)
  }

  const handleDeletePoll = async () => {
    const requestOptions = {
      param_1: pollId
    }

    clearPollStates()
    setOpenDeletePopUp(false)
    await deletePollRequest(requestOptions)
    await handleChangePage(0, 10);
  }

  const handleOpenDeletePopUp = (id: number) => {
    selectPollId(id);
    setOpenDeletePopUp(true);
  }

  const handleCloseDeletePopUp = () => {
    setOpenDeletePopUp(false);
  }

  const handleOpenPollPopUp = () => {

  }

  return (
    <GetPollsContent
      language={language}
      handleChangePage={handleChangePage}
      polls={polls}
      total={total}
      fetching={fetching}
      handleDeletePoll={handleDeletePoll}
      handleOpenDeletePopUp={handleOpenDeletePopUp}
      handleCloseDeletePopUp={handleCloseDeletePopUp}
      handleOpenPollPopUp={handleOpenPollPopUp}
      openDeletePopUp={openDeletePopUp}
    />
  )
}

export default GetPolls;