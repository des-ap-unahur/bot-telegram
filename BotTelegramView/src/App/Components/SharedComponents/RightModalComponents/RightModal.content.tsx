import React, { useContext } from 'react';
import { Box, Typography, Button, CircularProgress, Drawer } from '@material-ui/core';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import { RightModalInterface } from './RightModal.interface';
import { useStyles } from './RightModal.style';

const RightModalContent = ({open, handleClose, children, fetching, title, handleSave }:RightModalInterface) => {
  const { buttonClose, buttonSubmit, loaderContainer, loader, text, header, footer, content } = useStyles();
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Drawer anchor='right' open={open} onClose={handleClose}>
        <div className={header}>
          <Typography className={text} component='div'>
            <Box fontWeight={600}>
              {title}
            </Box>
          </Typography>
        </div>
        <div className={content}>
          {children}
        </div>
        <div className={footer}>
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
        </div>
      </Drawer>
    </div>
  );
}

export default RightModalContent;