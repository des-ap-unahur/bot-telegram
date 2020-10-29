import React, { useContext } from 'react';
import { LanguageContext } from '../../../../Config/Lang/Lang.languaje';
import { useStyles } from '../GetPolls.style';
import { InputQuestionsInterface, NewPollProps } from '../GetPolls.interface';
import { generateInputConfig, inputNames, numberOfQuestionsConfig } from '../GetPolls.config'
import RightModal from '../../../SharedComponents/RightModalComponents/RightModal.component';
import BuildInputs from '../../../SharedComponents/BuildInputs/BuildInputs.component';
import CustomSelect from '../../../SharedComponents/CustomSelect/CustomSelect.component';
import { createInputQuestions } from '../GetPolls.utils';


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
    emptyFields,
    numberOfQuestions,
    questions,
    handleChangeInputQuestions,
    confirmation
  } = props;

  const { 
    contentSize,
    selectQuestionsContainer
  } = useStyles();

  const inputParams = {
    language,
    handleChangeInputs,
    name,
    description,
    userTypeId,
    emptyFields,
    userTypesList,
    confirmation
  }

  const inputs = generateInputConfig(inputParams)

  const generateInputQuestions = () => {
    const inputQuestions = questions.map(
      (question, index) => createInputQuestions(
          {
            language, 
            index, 
            handleChangeInputQuestions, 
            value: question.question
          }
        )
    )

    return inputQuestions.map(
      (input:InputQuestionsInterface, index:number) => <BuildInputs key={index} input={input}/>
    )
  }

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
          (input, index) => <BuildInputs key={index} input={input}/>
        )}
      </div>
      <div className={selectQuestionsContainer}>
        <CustomSelect
          title={language.numberOfQuestions}
          name={inputNames.numberOfQuestions}
          value={numberOfQuestions}
          list={numberOfQuestionsConfig}
          handleChange={handleChangeInputs}
        />
      </div>
      <div className={contentSize}>
        {
          generateInputQuestions()
        }
      </div>
    </RightModal>
  );
}

export default NewPoll;