import React, { useCallback, useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import PollInterface from '../../../Interfaces/Poll.interface';
import GetPollsContent from './GetPolls.content';
import { GetPollProps } from './GetPolls.interface';


const GetPolls = (props: GetPollProps) => {
  const [ openDeletePopUp, setOpenDeletePopUp ] = useState<boolean>(false);
  const [ openPollPopUp, setOpenPollPopUp ] = useState<boolean>(false);
  const [ pollId, selectPollId ] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);
  const { 
    polls, 
    total, 
    fetching, 
    getPollsRequest, 
    clearPollStates, 
    deletePollRequest, 
    selectPoll, 
    pollSelected, 
    updatePollRequest, 
    postPollRequest,
    getUserTypesRequest,
    userTypes
  } = props;
  
  const getPolls = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };
    
    getPollsRequest(requestOptions);
  }, [])

  const getUserTypes = useCallback(()=>{
    if(!userTypes){
      getUserTypesRequest({});
    }
  }, [userTypes, getUserTypesRequest])

  useEffect(()=>{
    getPolls();
    getUserTypes();
  },[getPolls, getUserTypes])

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

  const handleOpenPollPopUp = (poll?: PollInterface) => {
    if(poll){
      setOpenPollPopUp(true);
      selectPoll(poll);
    } else {
      setOpenPollPopUp(true);
    }
  }

  const handleClosePollPopUp = () => {
    setOpenPollPopUp(false);
    selectPoll(null);
  }

  const handleSavePoll = async () => {
    const data = {
      
    }

    if(pollSelected && pollSelected.poll_id){
      const requestOptions = {
        param_1: pollSelected.poll_id,
        data
      }

      await updatePollRequest(requestOptions)
    } else {
      const requestOptions = {
        data
      }

      await postPollRequest(requestOptions);
    }
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
      openPollPopUp={openPollPopUp}
      handleClosePollPopUp={handleClosePollPopUp}
      handleSavePoll={handleSavePoll}
    />
  )
}

export default GetPolls;