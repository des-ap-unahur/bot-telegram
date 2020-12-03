import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetBotUsers.style';
import { generateConfigWithLang } from './GetBotUsers.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetBotUsersContentProps } from './GetBotUsers.interface';


const GetBotUsersContent = (props:GetBotUsersContentProps) => {
    const {
      botUsers, 
      language, 
      total, 
      handleChangePage, 
      fetching,
    } = props;
  
    const { 
      root, 
      container,
    } = useStyles();
  
    const configParams = { language };
    
    return (
      <div className={root}>
        <div className={container}>
          <SectionTitle
            titleLabel={language.subscribers}
          />
          <TableComponent
            config={generateConfigWithLang(configParams) || []}
            dataset={botUsers || []}
           
            loader={fetching}
            totalRows={total}
            changePage={handleChangePage}
          />
        </div>
      </div>
    )
  }
  
  export default GetBotUsersContent;