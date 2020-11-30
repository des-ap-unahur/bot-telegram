import React, { useContext } from 'react';
import { useStyles } from './CustomSelect.style';
import { Typography, FormControl, MenuItem, Select, CircularProgress } from '@material-ui/core';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import { capitalize } from '../../../Utils/FormatStrings.utils';
import { CustomSelectProps } from './CustomSelect.interface';

const CustomSelect = ({title, handleChange, value, emptyFields, list, name, correction, disabled}:CustomSelectProps) => {
  const { language } = useContext(LanguageContext)
  const {
    selectFormControl,
    selectLabel,
    selectLabelAlert,
    selectLoader,
    widthAndMarginCorrection,
    standarWidth
  } = useStyles();

  return(
    <div className={correction ? widthAndMarginCorrection : standarWidth }>
      <FormControl className={selectFormControl}>
        <Typography className={selectLabel} variant="subtitle1">
          {title}
        </Typography>
        <Select
          onChange={handleChange}
          value={value}
          name={name}
          disabled={disabled}
        >
          {list ?
            list.map(option => 
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