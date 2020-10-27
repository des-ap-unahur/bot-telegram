import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../../../Config/Lang/Lang.languaje';
import { useStyles } from '../GetPolls.style';
import { NewPollProps } from '../GetPolls.interface';
import { generateInputConfig } from '../GetPolls.config'
import RightModal from '../../../SharedComponents/RightModalComponents/RightModal.component';
import BuildInputs from '../../../SharedComponents/BuildInputs/BuildInputs.component';


const NewPoll = (props:NewPollProps) => {
  const { language } = useContext(LanguageContext);

  const { 
    handleClose, 
    handleSave,
    open,
    fetching,
    userTypesList,
    handleChangeInputs,
    name,
    description,
    userTypeId,
    emptyFields
  } = props;

  const { 
    contentSize,
  } = useStyles();

  const inputParams = {
    language,
    handleChangeInputs,
    name,
    description,
    userTypeId,
    emptyFields,
    userTypesList
  }

  const inputs = generateInputConfig(inputParams)

  return (
    <RightModal
      open={open}
      handleClose={handleClose}
      title={language.newPoll}
      handleSave={handleSave}
      fetching={fetching}
    >
      <div className={contentSize}>
        {inputs.map(
          input => <BuildInputs input={input}/>
        )}
      </div>
    </RightModal>
  );
}

export default NewPoll;