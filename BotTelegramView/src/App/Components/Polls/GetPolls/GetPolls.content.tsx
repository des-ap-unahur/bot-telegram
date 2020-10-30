import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetPolls.style';
import { generateConfigWithLang } from './GetPolls.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetPollContentProps } from './GetPolls.interface';
import DeletePopUp from '../../SharedComponents/DeletePopUp/DeletePopUp.component';
import NewPoll from './Content/NewPoll.content';


const GetPollsContent = (props:GetPollContentProps) => {
  const {
    polls, 
    language, 
    total, 
    handleChangePage, 
    fetching,
    handleDeletePoll,
    handleOpenPollPopUp,
    openDeletePopUp,
    handleCloseDeletePopUp,
    handleOpenDeletePopUp,
    openPollPopUp,
    handleSavePoll,
    handleClosePollPopUp,
    userTypes,
    handleChangeInputs,
    name,
    description,
    userTypeId,
    emptyFields,
    userTypesList,
    numberOfQuestions,
    questions,
    handleChangeInputQuestions,
    confirmation,
    updateMode
  } = props;

  const { 
    root, 
    container,
  } = useStyles();

  const configParams = { language, handleOpenDeletePopUp, handleOpenPollPopUp };
  
  return (
    <div className={root}>
      <div className={container}>
        <SectionTitle
          action={handleOpenPollPopUp}
          titleLabel={language.polls}
        />
        <TableComponent
          config={generateConfigWithLang(configParams) || []}
          dataset={polls || []}
          loader={fetching}
          totalRows={total}
          changePage={handleChangePage}
        />
      </div>
      <NewPoll
        handleClose={handleClosePollPopUp}
        handleSave={handleSavePoll}
        open={openPollPopUp}
        fetching={fetching}
        userTypes={userTypes}
        handleChangeInputs={handleChangeInputs}
        name={name}
        description={description}
        userTypeId={userTypeId}
        emptyFields={emptyFields}
        userTypesList={userTypesList}
        numberOfQuestions={numberOfQuestions}
        questions={questions}
        handleChangeInputQuestions={handleChangeInputQuestions}
        confirmation={confirmation}
        updateMode={updateMode}
      />
      <DeletePopUp
        open={openDeletePopUp}
        handleClose={handleCloseDeletePopUp}
        handleDelete={handleDeletePoll}
      />
    </div>
  )
}

export default GetPollsContent;