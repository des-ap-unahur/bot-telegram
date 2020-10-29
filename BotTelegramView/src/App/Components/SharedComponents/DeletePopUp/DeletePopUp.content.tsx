import React, { useContext } from 'react';
import clsx from 'clsx'
import { 
  Button,
  Dialog,
  Typography,
  Box
} from '@material-ui/core';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import PopUpHeader from '../PopUpComponents/PopUpHeader.component';
import PopUpActions from '../PopUpComponents/PopUpActions.component';
import PopUpContent from '../PopUpComponents/PopUpContent.component';
import { useStyles } from './DeletePopUp.styles';
import { DeletePopUpContentProps } from './DeletePopUp.interface';

const DeletePopUpContent = ({open, handleClose, isOpenDrawer, handleDelete}: DeletePopUpContentProps) => {
  const { root, button, buttonAccept, text, popUpMargin, popUpMarginWithOpenModal } = useStyles();
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Dialog 
        onClose={handleClose} 
        aria-labelledby="pop-up-of-delete" 
        open={open}
        className={clsx(popUpMargin, {
          [popUpMarginWithOpenModal]: isOpenDrawer
        })}
      >
        <div className={root}>
          <PopUpHeader id="pop-up-of-delete" onClose={handleClose}>
            {language.deleteRegistry}
          </PopUpHeader>
          <PopUpContent>
            <Typography gutterBottom className={text} component='div'>
              <Box fontWeight={600} fontSize={16}>
                {language.areYouSureYouWantToDeleteThisRegistry}
              </Box>
            </Typography>
          </PopUpContent>
          <PopUpActions>
            <Button 
              autoFocus 
              onClick={handleClose}
              className={button}
            >
              <Box fontWeight={600} fontSize={18}>
                {language.no}
              </Box>
            </Button>
            <Button 
              autoFocus 
              onClick={handleDelete}
              className={buttonAccept}  
            >
              <Box fontWeight={600} fontSize={18}>
                {language.yes}
              </Box>
            </Button>
          </PopUpActions>
        </div>
      </Dialog>
    </div>
  );
}

export default DeletePopUpContent;