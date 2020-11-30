import React, { useState, useMemo, useEffect, useCallback } from 'react';
import RightModal from '../../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../../GetCommands.style';
import { NewCommandProps, OptionInterface } from '../../GetCommands.interface';
import BuildInputs from '../../../../SharedComponents/BuildInputs/BuildInputs.component';
import { inputFirstConfig, inputNames, inputSecondaryConfig, NestedCommandTableConfig, coordinateOrButtonListInputConfig } from '../../GetCommands.config';
import SectionAddToTable from '../../../../SharedComponents/SectionAddToTable/SectionAddToTable.component';
import { NestedCommandsInterface } from '../../../../../Interfaces/NestedCommands.interface';
import BotCommands from '../../../../../Interfaces/BotComands.interface';


const NewCommand = (props:NewCommandProps) => {
  const [ name, setName ] = useState<string>('');
  const [ command, setCommand ] = useState<string>('');
  const [ description, setDescription ] = useState<string>('');
  const [ userType, setUserType ] = useState<string | number>('');
  const [ commandType, setCommandType ] = useState<string | number>('');
  const [ response, setResponse ] = useState<string>('');
  const [ fileName, setFileName ] = useState<string>('');
  const [ buttonList, setButtonList ] = useState<string>('');
  const [ coordinates, setCoordinates ] = useState<string>('');
  const [ url, setUrl ] = useState<string>('');
  const [ commandToAdd, setCommandToAdd ] = useState<string | number>('');
  const [ confirmation, setConfirmation ] = useState<boolean>(false);
  const [ commandsAdded, setCommandsAdded ] = useState<BotCommands[]>([]);
  const [ postFiles, setPostFiles ] = useState<boolean>(false);
  const [ nestedCommandPost, setNestedCommandsPost ] = useState<boolean>(false);

  const {
    openNewCommand,
    handleCloseNewCommand,
    language,
    userTypesOptions,
    commandTypesOptions,
    fetching,
    botCommandList,
    getBotCommandListRequest,
    postBotCommandRequest,
    botCommandSelected,
    postResponseRequest,
    postResponsesFilesRequest,
    responseSelected,
    postBotNestedCommandRequest,
    clearBotCommandsStates,
    clearResponseStates,
    clearNestedCommandsStates,
    selectBotCommand,
    editMode,
    setEditMode,
    updateBotCommandRequest,
    updateResponseRequest
  } = props;
  const { contentSize } = useStyles();

  const clearStatus = async () => {
    selectBotCommand && selectBotCommand(null)
    await clearBotCommandsStates();
    await clearResponseStates();
    await clearNestedCommandsStates();
    await setEditMode(false)
    await setName('')
    await setCommand('')
    await setDescription('')
    await setUserType('')
    await setCommandType('')
    await setResponse('')
    await setFileName('')
    await setUrl('')
    await setCommandToAdd('')
    await setNestedCommandsPost(false)
    await setPostFiles(false)
    await setConfirmation(false)
    await setCommandsAdded([])
    await handleCloseNewCommand();
  }

  const emptyFirstFields = useMemo<boolean>(()=>{
    return !(name && command && description && userType && commandType && response)
  }, [name, command, description, userType, commandType, response])

  const secondaryInputsActives = useMemo<boolean>(()=>{
    const documentCommandId = 1;
    const mailDocumentCommandId = 11;

    return commandType == documentCommandId || mailDocumentCommandId == commandType
  },[commandType])

  const isANestedCommand = useMemo<boolean>(()=>{
    const nestedCommandListId = 8;
    const nestedCommandButtonsId = 9;

    return commandType == nestedCommandListId || nestedCommandButtonsId == commandType
  },[commandType])

  const isAButtonCommand = useMemo<boolean>(()=>{
    const buttonCommandId = 3;
    return commandType == buttonCommandId
  }, [commandType])

  const isALocationCommand = useMemo<boolean>(()=>{
    const locationCommandId = 2; 
    return commandType == locationCommandId
  }, [commandType])

  const emptySecondFields = useMemo<boolean>(()=>{
    return !(fileName && url) && secondaryInputsActives
  }, [fileName, url, secondaryInputsActives])

  const commandListToOptions = useMemo<OptionInterface[]>(()=>{
    return botCommandList ?
        botCommandList.map(
          command=> ({id: Number(command.bot_command_id), name: command.name})
        ) 
      :
        []
  }, [botCommandList])

  const postResponse = useCallback(async ()=>{
    if(botCommandSelected && !editMode && postResponseRequest && !responseSelected && !fetching){
      const requestParams = {
        data: {
          bot_id: botCommandSelected.bot_command_id,
          description,
          response,
          parameter: coordinates || buttonList
        }
      }

      await postResponseRequest(requestParams);

      if(!secondaryInputsActives && !isANestedCommand){
        await clearStatus();
      }
    }
  }, 
  [ 
    botCommandSelected, 
    editMode, 
    postResponseRequest, 
    secondaryInputsActives, 
    clearStatus,
    responseSelected,
    fetching,
    isANestedCommand
  ])

  const getBotCommandList = useCallback(()=>{
    if(!botCommandList){
      getBotCommandListRequest && getBotCommandListRequest({});
    }
  }, [getBotCommandListRequest, botCommandList])

  const addNestedCommand = useCallback(()=>{
    if(commandToAdd && botCommandList){
      const nestedCommand = botCommandList.find(command => command.bot_command_id === Number(commandToAdd))
      nestedCommand && setCommandsAdded([...commandsAdded, nestedCommand])
      setCommandToAdd('');
    }
  }, [commandToAdd, commandsAdded.length, botCommandList])

  useEffect(()=>{
    postResponse();
  }, [postResponse])

  useEffect(()=>{
    getBotCommandList();
    addNestedCommand();
  },[getBotCommandList, addNestedCommand])

  const postResponseFiles = useCallback(async ()=>{
    if(responseSelected && !editMode && postResponsesFilesRequest && secondaryInputsActives && !fetching && !postFiles){
      const requestParams = {
        data: {
          bot_response_id: responseSelected.bot_response_id,
          description,
          filename: fileName,
          url
        }
      }
      await setPostFiles(true)
      await postResponsesFilesRequest(requestParams);
      await clearStatus();
      await setPostFiles(false);
    }
  }, [
    responseSelected, 
    editMode, 
    postResponsesFilesRequest, 
    secondaryInputsActives,
    fetching,
    postFiles
  ])

  const postNestedCommands = useCallback(async ()=>{
    if(commandsAdded.length && botCommandSelected && isANestedCommand && !editMode && postBotNestedCommandRequest && !fetching && !nestedCommandPost){
      const data = commandsAdded.map(command => ({
        bot_child_id: command.bot_command_id,
        bot_father_id: botCommandSelected.bot_command_id
      }))
      const requestOptions = {
        data
      }
      setNestedCommandsPost(true);
      await postBotNestedCommandRequest(requestOptions);
      await clearStatus()
    }
  }, 
  [ 
    isANestedCommand, 
    editMode, 
    botCommandSelected, 
    commandsAdded, 
    postBotNestedCommandRequest,
    clearStatus,
    fetching,
    nestedCommandPost
  ])

  useEffect(()=>{
    postResponseFiles();
  }, [postResponseFiles])

  useEffect(()=>{
    postNestedCommands();
  }, [postNestedCommands]);

  const commandCharge = useCallback(()=>{
    if(editMode && botCommandSelected){
      const botResponses = botCommandSelected.botResponses;
      const botResponsesFiles = botResponses && botResponses.botResponseFiles;
      const botNestedCommands = botCommandSelected.botNestedCommands;
      setName(botCommandSelected.name)
      setCommand(botCommandSelected.tel_command);
      botResponses && botResponses.description && setDescription(botResponses.description)
      setUserType(botCommandSelected.user_type_id)
      setCommandType(botCommandSelected.command_type_id)
      botResponses && botResponses.response && setResponse(botResponses.response);
      botResponsesFiles && botResponsesFiles.filename && setFileName(botResponsesFiles.filename)
      botResponsesFiles && botResponsesFiles.url && setUrl(botResponsesFiles.url)
      botResponses && botResponses.description && setButtonList(botResponses.description)
      botResponses && botResponses.description && setCoordinates(botResponses.description)

      if(botNestedCommands && botCommandList){ 
        const nestedCommands = botNestedCommands.map(
          (nestedCommand, index) => botCommandList.find(
            command => command.bot_command_id === nestedCommand.bot_child_id
          ) || botCommandList[index]
        )

        setCommandsAdded(nestedCommands);
      }
    }
  }, [editMode, botCommandSelected, botCommandList])

  useEffect(()=>{
    commandCharge()
  }, [commandCharge])

  const handleChangeInputs = (e:any)=>{
    const name = e.target.name;
    const value = e.target.value;
    
    if(name === inputNames.name){
      setName(value);
    } else if (name === inputNames.description){
      setDescription(value);
    } else if (name === inputNames.userType){
      setUserType(value);
    } else if (name === inputNames.command){
      setCommand(value);
    } else if (name === inputNames.commandType){
      setCommandType(value);
    } else if (name === inputNames.response){
      setResponse(value);
    } else if (name === inputNames.fileName) {
      setFileName(value);
    } else if(name === inputNames.url) {
      setUrl(value);
    } else if (name === inputNames.tableSelect){
      setCommandToAdd(value);
    } else if (name === inputNames.buttonList) {
      setButtonList(value);
    } else if (name === inputNames.coordinates) {
      setCoordinates(value)
    }
  }

  const handleDeleteNestedCommand = (id:number) => {
    const commandsWithoutNestedCommand = commandsAdded.filter(command => command.bot_command_id !== id)
    setCommandsAdded(commandsWithoutNestedCommand);
  }

  const updateBotCommand = async () => {
    if(botCommandSelected && updateBotCommandRequest ){
      const botResponses = botCommandSelected.botResponses
      const requestParams = {
        param_1: botCommandSelected.bot_command_id,
        data: {
          bot_command_id: botCommandSelected.bot_command_id,
          name,
          tel_command: command,
          description,
          user_type_id: Number(userType),
          command_type_id: Number(commandType),
          status: botCommandSelected.status,
          parameter: coordinates || buttonList
        }
      }
      await updateBotCommandRequest(requestParams)
      if(botResponses && updateResponseRequest){
        const requestParams = {
          param_1: botResponses.bot_response_id,
          data: {
            bot_response_id: botResponses.bot_response_id,
            bot_id: botResponses.bot_id,
            description,
            response,
            parameter: botResponses.parameter,
          }
        }
        await updateResponseRequest(requestParams);
      }
      handleClose();
    }
  }

  const handleSave = async () => {
    const data = {
      name,
      tel_command: command,
      description,
      user_type_id: Number(userType),
      command_type_id: Number(commandType),
      status: true,
      parameter: coordinates || buttonList
    }

    setConfirmation(true);
    if(!emptyFirstFields && !editMode && postBotCommandRequest){
      const requestOptions = {
        data
      }
      await postBotCommandRequest(requestOptions)
      setConfirmation(false);
    } else if (!emptyFirstFields && editMode) {
      await updateBotCommand()
    }
  }

  const handleClose = () => {
    handleCloseNewCommand();
    clearStatus();
  }

  const inputParams = { 
    language, 
    handleChangeInputs,
    name,
    command,
    description,
    userType,
    commandType,
    response,
    fileName,
    url,
    userTypesOptions,
    commandTypesOptions,
    emptyFirstFields,
    emptySecondFields,
    confirmation,
    isAButtonCommand, 
    coordinates,
    buttonList,
    editMode
  };

  const firstInputs = inputFirstConfig(inputParams);
  const secondaryInputs = inputSecondaryConfig(inputParams);
  const tableConfig = { language, handleDeleteNestedCommand, editMode };
  const inputButtonOrCoordinate = coordinateOrButtonListInputConfig(inputParams);
  
  return (
    <RightModal
      open={openNewCommand}
      handleClose={handleClose}
      title={language.newCommand}
      handleSave={handleSave}
      fetching={Boolean(fetching)}
    >
      <div className={contentSize}>
        {
          firstInputs.map(
            (input, index) => <BuildInputs key={'first' + index} input={input}/>
          )
        }
        {
          secondaryInputsActives && secondaryInputs.map(
            (input, index) => <BuildInputs key={'secondary' + index} input={input}/>
          )
        }
        {
          (isAButtonCommand || isALocationCommand) && 
            <BuildInputs input={inputButtonOrCoordinate}/>
        }
        {
          isANestedCommand && 
            <SectionAddToTable
              config={NestedCommandTableConfig(tableConfig)}
              dataset={commandsAdded}
              title={language.addCommand}
              value={commandToAdd}
              list={commandListToOptions}
              handleChange={handleChangeInputs}
              loader={Boolean(fetching)}
              disabled={editMode}
            />
        }
      </div>
    </RightModal>
  );
}

export default NewCommand;