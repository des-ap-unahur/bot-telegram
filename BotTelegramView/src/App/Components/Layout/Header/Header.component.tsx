import React, { useState, useContext, useMemo } from 'react';
import HeaderContent from './Header.content';
import { useHistory } from 'react-router';
import { ModalControllerContext } from '../../../HOC/ModalController.hoc'
import { HeaderProps } from './Header.interfaces';

const Header = ({ user, auth }:HeaderProps) => {
  const history = useHistory()
  const [ anchorEl, setAnchorEl ] = useState<Element | null>(null);
  const { isOpenDrawer, setOpenState } = useContext(ModalControllerContext)

  const open = useMemo(() =>{
    return Boolean(anchorEl)
  }, [anchorEl]);

  const signOut = ():void => {} 

  const handleDrawerOpen = ():void => {
    setOpenState(true)
  };

  const handleDrawerClose = ():void => {
    setOpenState(false)
  };

  const handleMenu = (event:any):void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ():void => {
    setAnchorEl(null);
  };

  const handleSignoutClickMenu = ():void => {
    handleClose();
    signOut();
  }

  const handleChangeRoute = (route: string | undefined):void => {
    if (route){
      history.push(route)
    }
  }

  return(
    <HeaderContent
      user={user}
      auth={auth}
      handleClose={handleClose}
      handleMenu={handleMenu}
      handleSignoutClickMenu={handleSignoutClickMenu}
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      anchorEl={anchorEl}
      handleChangeRoute={handleChangeRoute}
      isOpenDrawer={isOpenDrawer}
    />
  )
}
export default Header