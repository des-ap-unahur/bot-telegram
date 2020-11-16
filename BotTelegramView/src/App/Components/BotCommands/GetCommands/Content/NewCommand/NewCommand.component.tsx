import React, { useState, useMemo, useEffect, useCallback } from 'react';
import RightModal from '../../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../../GetCommands.style';
import { NewCommandProps, OptionInterface } from '../../GetCommands.interface';
import BuildInputs from '../../../../SharedComponents/BuildInputs/BuildInputs.component';
import { inputFirstConfig, inputNames, inputSecondaryConfig, NestedCommandTableConfig } from '../../GetCommands.config';
import BotCommands from '../../../../../Interfaces/BotComands.interface';
import SectionAddToTable from '../../../../SharedComponents/SectionAddToTable/SectionAddToTable.component';


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
  const [ commandToAdd, setCommandToAdd ] = useState<string>('');
  const [ confirmation, setConfirmation ] = useState<boolean>(false);
  const [ nestedCommands, setNestedCommands ] = useState<BotCommands[] | null>(null);

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
    selectBotCommand
  } = props;
  const { contentSize } = useStyles();

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
    if(selectBotCommand && editMode){

    }
  }, [selectBotCommand, editMode])

  const getBotCommandList = useCallback(()=>{
    if(!botCommandList){
      getBotCommandListRequest && getBotCommandListRequest({});
    }
  }, [getBotCommandListRequest, botCommandList])

  useEffect(()=>{
    getBotCommandList();
  },[getBotCommandList])

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
    } else if(name === inputNames.tableSelect){
      setCommandToAdd(value);
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
  const tableConfig = {language}
  
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
              dataset={nestedCommands || []}
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