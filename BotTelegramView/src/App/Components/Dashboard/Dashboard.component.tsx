import React, { useCallback, useEffect } from 'react';
import { DashboardProps } from './Dashboard.interface';
import { history } from '../../Utils/History.utils';
import DashboardContent from './Dashboard.content';


const Dashboard = (props:DashboardProps) => {
  const {
    fetchingPoll,
    polls,
    fetchingBotCommands,
    botCommands,
    getPollsRequest,
    getBotCommandsRequest,
    refreshCommandsRequest,
    fetchingRefresh,
    totalCommands,
    getTotalCommandsRequest,
    newLastAdmission,
    totalPolls,
    totalSubscribers,
    getNewLastAdmissionRequest,
    getTotalCountSubscribersRequest,
    getTotalPollsRequest
  } = props;
  
  const getTotalCommands = useCallback(()=>{
    getTotalCommandsRequest({})
  }, [])

  const getNewLastAdmission = useCallback(()=>{
    getNewLastAdmissionRequest({})
  }, [])

  const getTotalCountSubscribers = useCallback(()=>{
    getTotalCountSubscribersRequest({})
  }, [])

  const getTotalPolls = useCallback(()=>{
    getTotalPollsRequest({})
  }, [])

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
    getTotalCommands();
    getNewLastAdmission();
    getTotalCountSubscribers();
    getTotalPolls();
  }, 
  [
    getPolls, 
    getBotCommands,
    getTotalCommands,
    getNewLastAdmission,
    getTotalCountSubscribers,
    getTotalPolls
  ])

  const handleRefreshCommands = async () => {
    await refreshCommandsRequest({})
  }

  const handleRedirectCommand = () => {
    history.push('dashboard/bot-actions')
  }

  const handleRedirectPoll = () => {
    history.push('dashboard/polls')
  }

  return (
    <DashboardContent
      totalSubscribers={totalSubscribers}
      newLastAdmission={newLastAdmission}
      totalPolls={totalPolls}
      totalCommands={totalCommands}
      handleRefreshCommands={handleRefreshCommands}
      fetchingRefresh={fetchingRefresh}
      botCommands={botCommands}
      polls={polls}
      fetchingPoll={fetchingPoll}
      fetchingBotCommands={fetchingBotCommands}
      handleRedirectPoll={handleRedirectPoll}
      handleRedirectCommand={handleRedirectCommand}
    />
  )
}

export default Dashboard;