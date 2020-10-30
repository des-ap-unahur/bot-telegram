import React from 'react';
import RightModal from '../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../GetCommands.style';
import { NewCommandProps } from '../GetCommands.interface';


const NewCommand = (props:NewCommandProps) => {
  const {
    openNewCommand,
    handleCloseNewCommand,
    language
  } = props;

  const { contentSize } = useStyles();

  return (
    <RightModal
      open={openNewCommand}
      handleClose={handleCloseNewCommand}
      title={language.newCommand}
      handleSave={()=>{}}
      fetching={false}
    >
      <div className={contentSize}>
        
      </div>
    </RightModal>
  );
}

export default NewCommand;