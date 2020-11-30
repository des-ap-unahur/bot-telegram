import React, { useContext } from 'react';
import clsx from 'clsx';
import { useStyles } from './SectionTitle.style';
import { 
  Typography, 
  Box,
  IconButton 
} from '@material-ui/core';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import { ModalControllerContext } from '../../../HOC/ModalController.hoc';
import AddIcon from '@material-ui/icons/Add';
import { SectionTitleInterface } from './SectionTitle.interface';


const SectionTitle = ({titleLabel, correctionLabel, action, hiddenSectionFrom, correctionTitle}:SectionTitleInterface) => {
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const { language } = useContext(LanguageContext);

  const { 
    subtitle, 
    title, 
    underline, 
    container, 
    containerWithModalOpen, 
    titleAndUnderlineContainer,
    correction,
    addIcon,
    buttonAction,
    underlineWithAction,
    containerCorrection
  } = useStyles();

  return(
    <div className={clsx(container, {
      [containerWithModalOpen]: isOpenDrawer,
      [containerCorrection]: correctionTitle
    })}
    >
      {!hiddenSectionFrom &&
        <Typography 
          variant="h5" 
          gutterBottom 
          className={subtitle}
        >
          <Box fontWeight={700} m={1}>
            {language.sectionFrom}
          </Box>
        </Typography>
      }
      <div className={titleAndUnderlineContainer}>
        <Typography 
          variant="h4" 
          gutterBottom
          className={clsx(title, {
            [correction]: correctionLabel
          })}
        >
          <Box 
            fontWeight={700} 
            m={1} 
          >
            {titleLabel}
          </Box>
        </Typography>
        <Box className={clsx(underline, {
            [underlineWithAction]: action
          })}
        />
        { action && 
          <IconButton className={buttonAction}>
            <AddIcon className={addIcon} onClick={action}/>
          </IconButton>
        }
      </div>
    </div>
  )
}

export default SectionTitle; 