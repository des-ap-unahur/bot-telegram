import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import BotCommands from '../../../Interfaces/BotComands.interface';
import GetCommandsContent from './GetCommands.content';
import { GetCommandsProps } from './GetCommands.interface';


const GetCommands = (props: GetCommandsProps) => {
  const [ openDeletePopUp, setOpenDeletePopUp ] = useState<boolean>(false);
  const [ botCommandId, setBotCommandId ] = useState<number | string>('');
  const [ openNewCommand, setOpenNewCommand ] = useState<boolean>(false);
  const { language } = useContext(LanguageContext);
  const { 
    userTypes,
    getUserTypesRequest,
    getBotCommandsRequest,
    botCommands,
    total,
    fetching,
    clearBotCommandsStates,
    deleteBotCommand,
    selectBotCommand
  } = props;

  const getBotCommands = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };
    
    getBotCommandsRequest(requestOptions);
  }, [])

  const getUserTypes = useCallback(()=>{
    if(!userTypes){
      getUserTypesRequest({});
    }
  }, [userTypes, getUserTypesRequest])

  useEffect(()=>{
    getUserTypes();
    getBotCommands();
  },[getUserTypes, getBotCommands])

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getBotCommandsRequest(requestOptions)
  }
 
  const handleDeleteBotCommand = async () => {
    const requestOptions = {
      param_1: botCommandId
    }

    clearBotCommandsStates();
    setOpenDeletePopUp(false);
    await deleteBotCommand(requestOptions);
    await handleChangePage(0, 10);
  }

  const handleOpenDeletePopUp = (id: number) => {
    setBotCommandId(id);
    setOpenDeletePopUp(true);
  }

  const handleCloseDeletePopUp = () => {
    setOpenDeletePopUp(false);
  }

  const handleOpenNewCommand = (botCommands?: BotCommands | null) => {
    if(botCommands){
      setOpenNewCommand(true);
      selectBotCommand(botCommands);
    } else {
      setOpenNewCommand(true);
    }
  }

  const handleCloseNewCommand = () => {
    setOpenNewCommand(false);
  }

  return (
    <GetCommandsContent
      handleChangePage={handleChangePage}
      botCommands={botCommands}
      total={total}
      fetching={fetching}
      openDeletePopUp={openDeletePopUp}
      language={language}
      handleDeleteBotCommand={handleDeleteBotCommand}
      handleOpenDeletePopUp={handleOpenDeletePopUp}
      handleCloseDeletePopUp={handleCloseDeletePopUp}
      openNewCommand={openNewCommand}
      handleOpenNewCommand={handleOpenNewCommand}
      handleCloseNewCommand={handleCloseNewCommand}
    />
  )
}

export default GetCommands;