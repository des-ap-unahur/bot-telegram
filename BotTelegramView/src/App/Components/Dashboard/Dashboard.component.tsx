import React, { useContext } from 'react';
import clsx from 'clsx';
import { Grid, Typography, Box } from '@material-ui/core';
import { useStyles } from './Dashboard.style';
import { ModalControllerContext } from '../../HOC/ModalController.hoc';

const Dashboard = () => {
  const { 
    root,
    container,
    containerShift,
    title
  } = useStyles();
  const { isOpenDrawer } = useContext(ModalControllerContext);

  return (
    <div>
      <div className={root}>
        <Grid 
          container 
          className={clsx(container, {
            [containerShift]: isOpenDrawer,
          })} 
          justify='center'
        >
          <Typography 
            variant="h4"
            component='div'
            gutterBottom
          >
            <Box 
              fontWeight={700} 
              m={1} 
              className={title}
            >
              Bienvenido al BackOffice del Bot
            </Box>
          </Typography>
        </Grid>
      </div>
    </div>
  )
}

export default Dashboard;