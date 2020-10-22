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
import CustomSelect from '../../../SharedComponents/CustomSelect/CustomSelect.component';
import { useStyles } from '../GetPolls.style';

const NewPoll = (props) => {
  const { 
    handleClose, 
    isOpenDrawer, 
    handleLoad,
    open,
    setPeriod,
    period,
    documentType,
    handleChangeDocumentType,
    emptyFields,
    documentTypes,
    setDocument,
    setFileType,
    document,
    maxSizeExceeded,
    setMaxSizeExceeded,
    fetching
  } = props;

  const { 
    rootContainer, 
    popUpMargin, 
    popUpMarginWithOpenModal, 
    contentSize,
    buttonImportClose,
    buttonImportSubmit,
    newReceiptInputContainers,
    rootPaper,
    importInputContainer,
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
            id="new-receipt-header" 
            onClose={handleClose}
          >
            <Box 
              fontWeight={600}
              className={newReceiptHeader}
            >
              {language.importDocuments}
            </Box>
          </PopUpHeader>
          <PopUpContent className={contentSize}>
            <div className={newReceiptInputContainers}>
              <DatePicker
                setDate={setPeriod}
                date={period}
                format={"MM/yyyy"}
              />
              <CustomSelect
                value={documentType}
                handleChange={handleChangeDocumentType}
                emptyFields={emptyFields}
                documentTypes={documentTypes}
              />
            </div>
            <div className={importInputContainer}>
              <ImportFile
                setDocument={setDocument}
                documentType={documentType}
                setFileType={setFileType}
                document={document}
                emptyFields={emptyFields}
                maxSize={maxSize}
                maxSizeExceeded={maxSizeExceeded}
                setMaxSizeExceeded={setMaxSizeExceeded}
              />
            </div>
          </PopUpContent>
          <PopUpActions>
             <Button
              className={buttonImportClose}
              onClick={handleClose}
            >
              <Box fontWeight={600}>
                {language.close}
              </Box>
            </Button>
            <Button
              variant='contained'
              className={buttonImportSubmit}
              disabled={fetching}
              onClick={handleLoad}
            >
              <Box fontWeight={600}>
                {language.import}
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