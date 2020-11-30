import React, { useContext } from 'react';
import { useStyles } from './CustomInput.style';
import { Typography, FormControl, TextField} from '@material-ui/core';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import { CustomInputProps } from './CustomInput.interface';

const CustomInput = ({title, handleChange, value, emptyFields, name, correction, disabled }:CustomInputProps) => {
  const { language } = useContext(LanguageContext)
  const {
    inputFormControl,
    inputLabel,
    inputLabelAlert,
    widthAndMarginCorrection,
    standarWidth
  } = useStyles();

  return(
    <div className={correction ? widthAndMarginCorrection : standarWidth }>
      <FormControl className={inputFormControl}>
        <Typography className={inputLabel} variant="subtitle1">
          {title}
        </Typography>
        <TextField
          onChange={handleChange}
          name={name}
          value={value}
          disabled={disabled}
        />
        {(!value && emptyFields) &&
          <Typography className={inputLabelAlert} variant="subtitle1">
            {language.thisFieldIsRequired}
          </Typography>
        }
      </FormControl>
    </div>
  )
}

export default CustomInput