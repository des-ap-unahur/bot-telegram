import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetPolls.style';
import { generateConfigWithLang } from './GetPolls.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetPollContentProps } from './GetPolls.interface';


const GetPollsContent = (props:GetPollContentProps) => {
  const {
    polls, 
    language, 
    total, 
    handleChangePage, 
    fetching,
    handleDeletePoll
  } = props;

  const { 
    root, 
    container,
  } = useStyles();

  const configParams = { language, handleDeletePoll };
  
  return (
    <div className={root}>
      <div className={container}>
        <SectionTitle
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
    </div>
  )
}

export default GetPollsContent;