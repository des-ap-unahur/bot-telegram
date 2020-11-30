import React from 'react';
import TableComponent from '../../SharedComponents/Table/Table.component';
import { useStyles } from './GetUserTypes.style';
import { generateConfigWithLang } from './GetUserTypes.config'
import SectionTitle from '../../SharedComponents/SectionTitle/SectionTitle.component';
import { GetUserTypesContentProps } from './GetUserTypes.interface';


const GetUserTypesContent = (props:GetUserTypesContentProps) => {
  const {
    userTypes, 
    language, 
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
          titleLabel={language.userTypes}
        />
        <TableComponent
          config={generateConfigWithLang(configParams) || []}
          dataset={userTypes || []}
          loader={fetching}
          totalRows={Number(null)}
        />
      </div>
    </div>
  )
}

export default GetUserTypesContent;