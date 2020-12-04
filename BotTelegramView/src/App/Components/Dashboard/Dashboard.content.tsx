import React, { useContext } from 'react';
import clsx from 'clsx';
import { 
  Container,
  Card,
  CardContent, 
  Button, 
  Box,
  CircularProgress
} from '@material-ui/core';
import { useStyles } from './Dashboard.style';
import { ModalControllerContext } from '../../HOC/ModalController.hoc';
import SimpleTableComponent from '../SharedComponents/SimpleTable/SimpleTable.component';
import { LanguageContext } from '../../Config/Lang/Lang.languaje';
import { generateCardInfo, generateCommandConfigWithLang, generatePollConfigWithLang } from './Dashboard.config';
import { DashboardContentProps } from './Dashboard.interface';
import SectionTitle from '../SharedComponents/SectionTitle/SectionTitle.component';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const DashboardContent = (props:DashboardContentProps) => {
  const { language } = useContext(LanguageContext);
  const { isOpenDrawer } = useContext(ModalControllerContext);
  
  const { 
    root,
    container,
    rootShift,
    cardContainer,
    card,
    buttonStyle,
    subContainer,
    spanIcon,
    loader,
    loaderContainer
  } = useStyles();

  const { 
    totalSubscribers,
    newLastAdmission,
    totalPolls,
    totalCommands,
    handleRefreshCommands,
    fetchingRefresh,
    botCommands,
    polls,
    fetchingPoll,
    fetchingBotCommands,
    handleRedirectPoll,
    handleRedirectCommand
  } = props;

  const configParams = { 
    language,
    totalSubscribers,
    newLastAdmission,
    totalPolls,
    totalCommands
  };

  const infoCards = generateCardInfo(configParams)

  return (
    <div>
      <div className={clsx(root, {
          [rootShift]: isOpenDrawer,
        })}
      >
        <Container  
          className={container} 
        >
          <div className={subContainer}>
            <SectionTitle 
              titleLabel={language.dataAndActions}
              hiddenSectionFrom={true}
              correctionTitle={true}
            />
          </div>
          <div className={cardContainer}>
            {infoCards.map((infoCard, index) => 
                <Card className={card} key={'info-card' + index}>
                  <CardContent>
                    <Box fontSize={18} fontWeight={300}>
                      {infoCard.name}
                    </Box>
                    <Box
                      fontSize={40}
                      fontWeight={700}
                    >
                      {infoCard.value}
                    </Box>
                  </CardContent>
                </Card>
              )
            }
            <Card className={card}>
              <CardContent>
                <Box fontSize={18} fontWeight={300}>
                  {language.actions}
                </Box>
                <Button
                  variant='contained'
                  onClick={handleRefreshCommands}
                  className={buttonStyle}
                  disabled={fetchingRefresh}
                >
                  <span className={spanIcon}>
                    <AutorenewIcon/>
                  </span>
                  {language.refreshCommands}
                  {fetchingRefresh && 
                    <div className={loaderContainer}>
                      <CircularProgress className={loader} size={35} />
                    </div>
                  }
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className={subContainer}>
            <SectionTitle 
              titleLabel={language.polls}
              hiddenSectionFrom={true}
              correctionTitle={true}
            />
            <SimpleTableComponent
              config={generatePollConfigWithLang(configParams)}
              dataset={polls || []}
              loader={fetchingPoll}
            />
            <Button
              variant='contained'
              onClick={handleRedirectPoll}
              className={buttonStyle} 
            >
              <span className={spanIcon}>
                <MoreHorizIcon/>
              </span>
              {language.moreOptions}
            </Button>
          </div>
          <div className={subContainer}>
            <SectionTitle 
              titleLabel={language.botActions}
              hiddenSectionFrom={true}
              correctionTitle={true}
            />
            <SimpleTableComponent
              config={generateCommandConfigWithLang(configParams)}
              dataset={botCommands || []}
              loader={fetchingBotCommands}
            />
            <Button
              variant='contained'
              onClick={handleRedirectCommand}
              className={buttonStyle}
            >
              <span className={spanIcon}>
                <MoreHorizIcon/>
              </span>
              {language.moreOptions}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DashboardContent;