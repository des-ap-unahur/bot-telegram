import React, { useState, useMemo, useEffect, useCallback } from 'react';
import RightModal from '../../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../../GetCommands.style';
import { NewCommandProps, OptionInterface } from '../../GetCommands.interface';
import BuildInputs from '../../../../SharedComponents/BuildInputs/BuildInputs.component';
import { inputFirstConfig, inputNames, inputSecondaryConfig, NestedCommandTableConfig } from '../../GetCommands.config';
import SectionAddToTable from '../../../../SharedComponents/SectionAddToTable/SectionAddToTable.component';
import { NestedCommandsInterface } from '../../../../../Interfaces/NestedCommands.interface';
import BotCommands from '../../../../../Interfaces/BotComands.interface';


const NewCommand = (props:NewCommandProps) => {
  const [ editMode, setEditMode ] = useState<boolean>(false);
  const [ name, setName ] = useState<string>('');
  const [ command, setCommand ] = useState<string>('');
  const [ description, setDescription ] = useState<string>('');
  const [ userType, setUserType ] = useState<string | number>('');
  const [ commandType, setCommandType ] = useState<string | number>('');
  const [ response, setResponse ] = useState<string>('');
  const [ fileName, setFileName ] = useState<string>('');
  const [ url, setUrl ] = useState<string>('');
  const [ commandToAdd, setCommandToAdd ] = useState<string | number>('');
  const [ confirmation, setConfirmation ] = useState<boolean>(false);
  const [ commandsAdded, setCommandsAdded ] = useState<BotCommands[]>([]);
  const [ nestedCommands, setNestedCommands ] = useState<NestedCommandsInterface[]>([]);

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
    selectBotCommand
  } = props;
  const { contentSize } = useStyles();

  const clearStatus = async () => {
    selectBotCommand && selectBotCommand(null)
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
    await setConfirmation(false);
    await setCommandsAdded([]);
    await clearBotCommandsStates();
    await clearResponseStates();
    await clearNestedCommandsStates();
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

  const postResponse = useCallback(()=>{
    if(botCommandSelected && !editMode && postResponseRequest){
      const requestParams = {
        data: {
          bot_id: botCommandSelected.bot_command_id,
          description,
          response,
          parameter: null
        }
      }
      postResponseRequest(requestParams);
      !secondaryInputsActives && clearStatus()
    }
  }, 
  [ 
    botCommandSelected, 
    editMode, 
    postResponseRequest, 
    secondaryInputsActives, 
    clearStatus
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
  },[getBotCommandList, addNestedCommand ])

  const postResponseFiles = useCallback(()=>{
    if(responseSelected && !editMode && postResponsesFilesRequest && secondaryInputsActives){
      const requestParams = {
        data: {
          bot_response_id: responseSelected.bot_response_id,
          description,
          filename: fileName,
          url
        }
      }

      postResponsesFilesRequest(requestParams);
      clearStatus();
    }
  }, [responseSelected, editMode, postResponsesFilesRequest, secondaryInputsActives, clearStatus])

  const postNestedCommands = useCallback(()=>{
    if(commandsAdded.length && botCommandSelected && isANestedCommand && !editMode && postBotNestedCommandRequest){
      const data = commandsAdded.map(command => ({
        bot_child_id: command.bot_command_id,
        bot_father_id: botCommandSelected.bot_command_id
      }))
      const requestOptions = {
        data
      }
      postBotNestedCommandRequest(requestOptions);
      clearStatus()
    }
  }, 
  [ 
    isANestedCommand, 
    editMode, 
    botCommandSelected, 
    commandsAdded, 
    postBotNestedCommandRequest,
    clearStatus
  ])

  useEffect(()=>{
    postResponseFiles();
    postNestedCommands();
  }, [postResponseFiles]);

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
    }
  }

  const handleDeleteNestedCommand = (id:number) => {
    const commandsWithoutNestedCommand = commandsAdded.filter(command => command.bot_command_id !== id)
    setCommandsAdded(commandsWithoutNestedCommand);
  }

  const handleSave = async () => {
    const data = {
      name,
      tel_command: command,
      description,
      user_type_id: Number(userType),
      command_type_id: Number(commandType),
      status: true,
      parameter: null
    }

    setConfirmation(true);
    if(!emptyFirstFields){
      const requestOptions = {
        data
      }
      postBotCommandRequest && postBotCommandRequest(requestOptions)
      setConfirmation(false);
    }
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
    confirmation
  };

  const firstInputs = inputFirstConfig(inputParams);
  const secondaryInputs = inputSecondaryConfig(inputParams);
  const tableConfig = { language, handleDeleteNestedCommand };
  
  return (
    <RightModal
      open={openNewCommand}
      handleClose={handleCloseNewCommand}
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
          isANestedCommand && 
            <SectionAddToTable
              config={NestedCommandTableConfig(tableConfig)}
              dataset={commandsAdded}
              title={language.addCommand}
              value={commandToAdd}
              list={commandListToOptions}
              handleChange={handleChangeInputs}
              loader={Boolean(fetching)}
            />
        }
      </div>
    </RightModal>
  );
}

export default NewCommand;