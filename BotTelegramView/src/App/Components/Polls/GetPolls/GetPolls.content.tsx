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
    fetching
  } = props;

  const { 
    root, 
  } = useStyles();

  const configParams = { language };
  
  return (
    <>
      <div className={root}>
        <SectionTitle
          titleLabel={language.polls}
        />
      </div>
      <div className={root}>
        <TableComponent
          config={generateConfigWithLang(configParams) || []}
          dataset={polls || []}
          loader={fetching}
          totalRows={total}
          changePage={handleChangePage}
        />
      </div>
    </>
  )
}

export default GetPollsContent;