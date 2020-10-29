import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetRegisteredUser.style';
import { generateConfigWithLang } from './GetRegisteredUser.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetRegisteredUserContentProps } from './GetRegisteredUser.interface';


const GetRegisteredUserContent = (props:GetRegisteredUserContentProps) => {
    const {
      users, 
      language, 
      total, 
      handleChangePage, 
      fetching,
      handleDeleteRegisteredUser
    } = props;
  
    const { 
      root, 
      container,
    } = useStyles();
  
    const configParams = { language, handleDeleteRegisteredUser };
    
    return (
      <div className={root}>
        <div className={container}>
          <SectionTitle
            titleLabel={language.users}
          />
          <TableComponent
            config={generateConfigWithLang(configParams) || []}
            dataset={ users || []}
            loader={fetching}
            totalRows={total}
            changePage={handleChangePage}
          />
        </div>
      </div>
    )
  }
  
  export default GetRegisteredUserContent;