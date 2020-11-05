import React from 'react';
import RightModal from '../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../GetCommands.style';
import { NewCommandProps } from '../GetCommands.interface';
import BuildInputs from '../../../SharedComponents/BuildInputs/BuildInputs.component';
import { inputConfig } from '../GetCommands.config';


const NewCommand = (props:NewCommandProps) => {
  const {
    openNewCommand,
    handleCloseNewCommand,
    language
  } = props;

  const { contentSize } = useStyles();
  const inputs = inputConfig();

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
          inputs.map(
            (input, index) => <BuildInputs key={index} input={input}/>
          )
        }
      </div>
    </RightModal>
  );
}

export default NewCommand;