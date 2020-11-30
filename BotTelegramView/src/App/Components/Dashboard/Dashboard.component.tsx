import React, { useContext, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { 
  Container,
  Card,
  CardContent, Button, Box
} from '@material-ui/core';
import { useStyles } from './Dashboard.style';
import { ModalControllerContext } from '../../HOC/ModalController.hoc';
import SimpleTableComponent from '../SharedComponents/SimpleTable/SimpleTable.component';
import { LanguageContext } from '../../Config/Lang/Lang.languaje';
import { generateCardInfo, generateCommandConfigWithLang, generatePollConfigWithLang } from './Dashboard.config';
import { DashboardProps } from './Dashboard.interface';
import { history } from '../../Utils/History.utils';
import SectionTitle from '../SharedComponents/SectionTitle/SectionTitle.component';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const Dashboard = (props:DashboardProps) => {
  const { 
    root,
    container,
    containerShift,
    cardContainer,
    card,
    buttonStyle,
    tableCorrections,
    table,
    spanIcon
  } = useStyles();

  const { language } = useContext(LanguageContext);
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const {
    fetchingPoll,
    polls,
    fetchingBotCommands,
    botCommands,
    getPollsRequest,
    getBotCommandsRequest,
    refreshCommandsRequest
  } = props;

  const configParams = { 
    language,
    totalSubscribers: 20,
    newLastAdmission: 5,
    totalPolls: 10,
    totalCommands: 40
  };

  const infoCards = generateCardInfo(configParams)
  
  const getPolls = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 2 }
    };
  
    getPollsRequest(requestOptions);
  }, [])

  const getBotCommands = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 3 }
    };
    
    getBotCommandsRequest(requestOptions);
  }, [])

  useEffect(()=>{
    getPolls();
    getBotCommands();
  }, [getPolls, getBotCommands])

  const handleRefreshCommands = async() => {
    await refreshCommandsRequest({})
  }

  const handleRedirectCommand = () => {
    history.push('dashboard/bot-actions')
  }

  const handleRedirectPoll = () => {
    history.push('dashboard/polls')
  }

  return (
    <div>
      <div className={root}>
        <Container  
          className={clsx(container, {
            [containerShift]: isOpenDrawer,
          })} 
        >
          <div className={isOpenDrawer ? tableCorrections : table}>
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
                >
                  <span className={spanIcon}>
                    <AutorenewIcon/>
                  </span>
                  {language.refreshCommands}
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className={isOpenDrawer ? tableCorrections : table}>
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
          <div className={isOpenDrawer ? tableCorrections : table}>
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

export default Dashboard;