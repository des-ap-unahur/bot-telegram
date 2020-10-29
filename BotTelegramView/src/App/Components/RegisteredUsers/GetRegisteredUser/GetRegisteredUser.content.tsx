import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetRegisteredUser.style';
import { generateConfigWithLang } from './GetRegisteredUser.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetRegisteredUserContentProps } from './GetRegisteredUser.interface';


const GetRegisteredUserContent = (props:GetRegisteredUserContentProps) => {
    const {
      registeredUser, 
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
            titleLabel={language.registeredUser}
          />
          <TableComponent
            config={generateConfigWithLang(configParams) || []}
            dataset={ registeredUser || []}
            loader={fetching}
            totalRows={total}
            changePage={handleChangePage}
          />
        </div>
      </div>
    )
  }
  
  export default GetRegisteredUserContent;