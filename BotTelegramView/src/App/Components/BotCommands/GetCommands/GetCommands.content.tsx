import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetCommands.style';
import { generateConfigWithLang } from './GetCommands.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import DeletePopUp from '../../SharedComponents/DeletePopUp/DeletePopUp.component';
import NewCommand from './Content/NewCommand.content';
import { GetCommandsContentProps } from './GetCommands.interface';


const GetCommandsContent = (props:GetCommandsContentProps) => {
  const {
    botCommands, 
    language, 
    total, 
    handleChangePage, 
    fetching,
    openDeletePopUp,
    handleCloseDeletePopUp,
    handleDeleteBotCommand,
    handleOpenDeletePopUp,
    openNewCommand,
    handleCloseNewCommand,
    handleOpenNewCommand
  } = props;

  const { 
    root, 
    container,
  } = useStyles();

  const configParams = { language, handleOpenDeletePopUp, handleOpenNewCommand };
  
  return (
    <div className={root}>
      <div className={container}>
        <SectionTitle
          titleLabel={language.botActions}
          action={handleOpenNewCommand}
        />
        <TableComponent
          config={generateConfigWithLang(configParams) || []}
          dataset={botCommands || []}
          loader={fetching}
          totalRows={total}
          changePage={handleChangePage}
        />
      </div>
      <NewCommand
        openNewCommand={openNewCommand}
        handleCloseNewCommand={handleCloseNewCommand}
        language={language}
      />
      <DeletePopUp
        open={openDeletePopUp}
        handleClose={handleCloseDeletePopUp}
        handleDelete={handleDeleteBotCommand}
      />
    </div>
  )
}

export default GetCommandsContent;