import React from 'react';
import { 
  Typography,
  Box
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from './PopUp.styles';

const PopUpHeader = ({ children, onClose, ...other }: any) => {
  const { header, text } = useStyles()
  return (
    <MuiDialogTitle disableTypography className={header} {...other}>
      <Typography className={text} component='div'>
        <Box fontWeight={600}>
          {children}
        </Box>
      </Typography>
    </MuiDialogTitle>
  );
};

export default PopUpHeader;