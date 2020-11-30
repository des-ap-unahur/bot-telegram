import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetBotSubsUsers.style';
import { generateConfigWithLang } from './GetBotSubsUsers.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetBotSubsUsersContentProps } from './GetBotSubsUsers.interface';


const GetBotSubsUsersContent = (props:GetBotSubsUsersContentProps) => {
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
  
  export default GetBotSubsUsersContent;