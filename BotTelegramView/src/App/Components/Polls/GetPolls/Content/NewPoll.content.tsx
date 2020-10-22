import React, { useContext } from 'react';
import clsx from 'clsx'
import { 
  Button,
  Dialog,
  Box,
  CircularProgress
} from '@material-ui/core';
import { LanguageContext } from '../../../../Config/Lang/Lang.languaje';
import PopUpHeader from '../../../SharedComponents/PopUpComponents/PopUpHeader.component';
import PopUpActions from '../../../SharedComponents/PopUpComponents/PopUpActions.component';
import PopUpContent from '../../../SharedComponents/PopUpComponents/PopUpContent.component';
import { useStyles } from '../GetPolls.style';
import { ModalControllerContext } from '../../../../HOC/ModalController.hoc';


const NewPoll = (props:any) => {
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const { 
    handleClose, 
    handleSave,
    open,
    fetching
  } = props;

  const { 
    rootContainer, 
    popUpMargin, 
    popUpMarginWithOpenModal, 
    contentSize,
    buttonClose,
    buttonSubmit,
    rootPaper,
    newReceiptHeader,
    loaderContainer,
    loader
  } = useStyles();

  const { language } = useContext(LanguageContext);

  return (
    <>
      <Dialog 
        onClose={handleClose} 
        aria-labelledby="new-receipt-view"
        fullWidth={true}
        open={open}
        className={clsx(popUpMargin, {
          [popUpMarginWithOpenModal]: isOpenDrawer
        })}
        classes={{
          paper: rootPaper
        }}
      >
        <div className={rootContainer}>
          <PopUpHeader 
            id="new-poll-header" 
            onClose={handleClose}
          >
            <Box 
              fontWeight={600}
              className={newReceiptHeader}
            >
              {language.createPoll}
            </Box>
          </PopUpHeader>
          <PopUpContent className={contentSize}>
            
          </PopUpContent>
          <PopUpActions>
             <Button
              className={buttonClose}
              onClick={handleClose}
            >
              <Box fontWeight={600}>
                {language.close}
              </Box>
            </Button>
            <Button
              variant='contained'
              className={buttonSubmit}
              disabled={fetching}
              onClick={handleSave}
            >
              <Box fontWeight={600}>
                {language.save}
              </Box>
            </Button>
            {fetching && 
              <div className={loaderContainer}>
                <CircularProgress className={loader} size={35} />
              </div>
            }
          </PopUpActions>
        </div>
      </Dialog>
    </>
  );
}

export default NewPoll;