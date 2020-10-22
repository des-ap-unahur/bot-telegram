import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetPolls.style';
import { generateConfigWithLang } from './GetPolls.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetPollContentProps } from './GetPolls.interface';
import DeletePopUp from '../../SharedComponents/DeletePopUp/DeletePopUp.component';


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
    handleOpenDeletePopUp
  } = props;

  const { 
    root, 
    container,
  } = useStyles();

  const configParams = { language, handleOpenDeletePopUp };
  
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
      <DeletePopUp
        open={openDeletePopUp}
        handleClose={handleCloseDeletePopUp}
        handleDelete={handleDeletePoll}
      />
    </div>
  )
}

export default GetPollsContent;