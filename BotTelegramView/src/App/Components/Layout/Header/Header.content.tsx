import React from 'react';
import { 
  AppBar, 
  Toolbar,
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './Header.style';
import HeaderMenuModal from './Content/HeaderMenuModal/HeaderMenuModal.content';
import HeaderAppBar from './Content/HeaderAppBar/HeaderAppBar.content';
import { HeaderContentProps } from './Header.interfaces';


const HeaderContent = (props: HeaderContentProps) => {
  const {
    root,
    appBar,
    appBarShift,
  } = useStyles();

  const {
    auth, 
    user, 
    handleMenu, 
    anchorEl, 
    handleClose, 
    open, 
    handleSignoutClickMenu,
    handleDrawerOpen,
    handleDrawerClose,
    handleChangeRoute,
    isOpenDrawer,
  } = props;
      
  return(
    <div className={root}>
      <AppBar position="fixed" className={
        clsx(appBar, {
          [appBarShift]: isOpenDrawer,
        })}
      >
        {auth && 
          <Toolbar>
            <HeaderAppBar
              user={user}
              handleMenu={handleMenu}
              handleClose={handleClose}
              anchorEl={anchorEl}
              open={open}
              isOpenDrawer={isOpenDrawer}
              handleDrawerOpen={handleDrawerOpen}
              handleSignoutClickMenu={handleSignoutClickMenu}
            />
          </Toolbar>
        }
      </AppBar>
      {auth &&
        <HeaderMenuModal
          handleDrawerClose={handleDrawerClose}
          isOpenDrawer={isOpenDrawer}
          handleChangeRoute={handleChangeRoute}
        />   
      }
    </div>
  )
}

export default HeaderContent