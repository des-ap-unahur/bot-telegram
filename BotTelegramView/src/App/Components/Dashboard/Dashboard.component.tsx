import React, { useContext, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { 
  Container,
  Card,
  CardContent, Button
} from '@material-ui/core';
import { useStyles } from './Dashboard.style';
import { ModalControllerContext } from '../../HOC/ModalController.hoc';
import SimpleTableComponent from '../SharedComponents/SimpleTable/SimpleTable.component';
import { LanguageContext } from '../../Config/Lang/Lang.languaje';
import { generateCommandConfigWithLang, generatePollConfigWithLang } from './Dashboard.config';
import { DashboardProps } from './Dashboard.interface';
import { history } from '../../Utils/History.utils';

const Dashboard = (props:DashboardProps) => {
  const { 
    root,
    container,
    containerShift,
    cardContainer,
    card,
    buttonStyle
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
  const configParams = { language };
  
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
          <div className={cardContainer}>
            <Card className={card}>
              <CardContent>
                <div>Total de suscriptores</div>
                <div>1254</div>
              </CardContent>
            </Card>
            <Card className={card}>
              <CardContent>
                <div>Nuevos ultimo ingreso</div>
                <div>20</div>
              </CardContent>
            </Card>
          </div>
          <div>
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
              mas opciones
            </Button>
          </div>
          <div>
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
              mas opciones
            </Button>
            <Button
              variant='contained'
              onClick={handleRefreshCommands}
              className={buttonStyle}
            >
              Refrescar comandos
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard;