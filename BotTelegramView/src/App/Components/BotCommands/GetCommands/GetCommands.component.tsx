import React, { useCallback, useContext, useEffect, useState, useMemo } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import BotCommands from '../../../Interfaces/BotComands.interface';
import GetCommandsContent from './GetCommands.content';
import { GetCommandsProps, OptionInterface } from './GetCommands.interface';


const GetCommands = (props: GetCommandsProps) => {
  const [ openDeletePopUp, setOpenDeletePopUp ] = useState<boolean>(false);
  const [ botCommandId, setBotCommandId ] = useState<number | string>('');
  const [ openNewCommand, setOpenNewCommand ] = useState<boolean>(false);
  const [ editMode, setEditMode ] = useState<boolean>(false);
  const [ refreshTable, setRefreshTable ] = useState<boolean>(false);
  const { language } = useContext(LanguageContext);
  const { 
    userTypes,
    getUserTypesRequest,
    getBotCommandsRequest,
    botCommands,
    total,
    fetching,
    clearBotCommandsStates,
    deleteBotCommandRequest,
    selectBotCommand,
    getCommandTypesRequest,
    commandTypes
  } = props;

  const userTypesOptions = useMemo<OptionInterface[] | null>(()=>{
    return userTypes && userTypes.map(
      userType => ({id: userType.user_type_id, name: userType.description})
    )
  }, [userTypes])

  const commandTypesOptions = useMemo<OptionInterface[] | null>(
    ()=>{
      return commandTypes && commandTypes.map(
        commandType => ({id: commandType.command_type_id, name: commandType.description})
      )
    }, [commandTypes]
  )

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

  const getCommandTypes = useCallback(()=>{
    if(!commandTypes){
      getCommandTypesRequest({});
    }
  },[commandTypes, getCommandTypesRequest])

  useEffect(()=>{
    getBotCommands();
  }, [getBotCommands])
  
  useEffect(()=>{
    getUserTypes();
    getCommandTypes();
  },[getUserTypes, getCommandTypes])

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
    await deleteBotCommandRequest(requestOptions);
    await handleChangePage(0, 10);
    setRefreshTable(true);
  }

  const handleOpenDeletePopUp = (id: number) => {
    setBotCommandId(id);
    setOpenDeletePopUp(true);
  }

  const handleCloseDeletePopUp = () => {
    setOpenDeletePopUp(false);
  }

  const handleOpenNewCommand = (botCommands?: BotCommands | null) => {
    if(botCommands && botCommands.bot_command_id){
      setOpenNewCommand(true);
      setEditMode(true);
      selectBotCommand(botCommands);
    } else {
      setOpenNewCommand(true);
    }
  }

  const handleCloseNewCommand = () => {
    setOpenNewCommand(false);
    setRefreshTable(true);
    getBotCommands();
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
      userTypesOptions={userTypesOptions}
      commandTypesOptions={commandTypesOptions}
      editMode={editMode}
      setEditMode={setEditMode}
      setRefreshTable={setRefreshTable}
      refreshTable={refreshTable}
    />
  )
}

export default GetCommands;