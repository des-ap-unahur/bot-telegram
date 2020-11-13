import React, { useState, useMemo } from 'react';
import RightModal from '../../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../../GetCommands.style';
import { NewCommandProps } from '../../GetCommands.interface';
import BuildInputs from '../../../../SharedComponents/BuildInputs/BuildInputs.component';
import { inputFirstConfig, inputNames, inputSecondaryConfig } from '../../GetCommands.config';
import BotCommands from '../../../../../Interfaces/BotComands.interface';


const NewCommand = (props:NewCommandProps) => {
  const [ name, setName ] = useState<string>('');
  const [ command, setCommand ] = useState<string>('');
  const [ description, setDescription ] = useState<string>('');
  const [ userType, setUserType ] = useState<string | number>('');
  const [ commandType, setCommandType ] = useState<string | number>('');
  const [ response, setResponse ] = useState<string>('');
  const [ fileName, setFileName ] = useState<string>('');
  const [ url, setUrl ] = useState<string>('');
  const [ confirmation, setConfirmation ] = useState<boolean>(false);
  const [ nestedCommands, setNestedCommands ] = useState<BotCommands[] | null>(null);

  const {
    openNewCommand,
    handleCloseNewCommand,
    language,
    userTypesOptions,
    commandTypesOptions
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

  const emptySecondFields = useMemo<boolean>(()=>{
    return !(fileName && url) && secondaryInputsActives
  }, [fileName, url, secondaryInputsActives])

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
    }
  }

  const handleSave = async () => {

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
  
  return (
    <RightModal
      open={openNewCommand}
      handleClose={handleCloseNewCommand}
      title={language.newCommand}
      handleSave={()=>{}}
      fetching={false}
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
      </div>
    </RightModal>
  );
}

export default NewCommand;