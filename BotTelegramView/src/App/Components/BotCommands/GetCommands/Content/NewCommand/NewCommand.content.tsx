import React from 'react';
import RightModal from '../../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../../GetCommands.style';
import { NewCommandContentProps } from '../../GetCommands.interface';
import BuildInputs from '../../../../SharedComponents/BuildInputs/BuildInputs.component';
import { inputFirstConfig, inputSecondaryConfig, NestedCommandTableConfig, coordinateOrButtonListInputConfig } from '../../GetCommands.config';
import SectionAddToTable from '../../../../SharedComponents/SectionAddToTable/SectionAddToTable.component';


const NewCommandContent = (props:NewCommandContentProps) => {
  const {
    name,
    openNewCommand,
    language,
    userTypesOptions,
    commandTypesOptions,
    fetching,
    editMode,
    handleChangeInputs,
    command,
    description,
    userType,
    commandType,
    response,
    fileName,
    url,
    emptyFirstFields,
    emptySecondFields,
    confirmation,
    isAButtonCommand,
    coordinates,
    buttonList,
    handleDeleteNestedCommand,
    handleClose,
    handleSave,
    secondaryInputsActives,
    isALocationCommand,
    isANestedCommand,
    commandsAdded,
    commandToAdd,
    commandListToOptions
  } = props;
  const { contentSize } = useStyles();

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

export default NewCommandContent;