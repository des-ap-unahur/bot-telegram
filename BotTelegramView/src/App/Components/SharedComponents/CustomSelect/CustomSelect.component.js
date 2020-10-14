import React, { useContext } from 'react';
import { useStyles } from './CustomSelect.style';
import { Typography, FormControl, MenuItem, Select, CircularProgress } from '@material-ui/core';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import { capitalize } from '../../../Utils/FormatStrings.utils';

const CustomSelect = ({handleChange, value, emptyFields, documentTypes}) => {
  const { language } = useContext(LanguageContext)
  const {
    selectFormControl,
    selectLabel,
    selectLabelAlert,
    selectLoader
  } = useStyles();

  return(
    <div>
      <FormControl className={selectFormControl}>
        <Typography className={selectLabel} variant="subtitle1">
          {language.documentType}
        </Typography>
        <Select
          onChange={handleChange}
          value={value}
        >
          {documentTypes ?
            documentTypes.map(option => 
              <MenuItem value={option.id} key={option.id}>{capitalize(option.name)}</MenuItem>  
            )
            :
            <MenuItem className={selectLoader}>
              <CircularProgress size={35} />
            </MenuItem>
          }
        </Select>
        {(!value && emptyFields) &&
          <Typography className={selectLabelAlert} variant="subtitle1">
            {language.thisFieldIsRequired}
          </Typography>
        }
      </FormControl>
    </div>
  )
}

export default CustomSelect