import React, { useContext } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText 
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from '../../Header.style';
import { menuConfig, homePageConfig } from '../../Header.config'
import { ReactSVG } from 'react-svg';
import { LanguageContext } from '../../../../../Config/Lang/Lang.languaje';
import WithRequiredPermission from '../../../../../HOC/WithRequiredPermission.hoc';
import { HeaderMenuModalProps, MenuConfigInterface } from '../../Header.interfaces';


const HeaderMenuModal = ({ isOpenDrawer, handleDrawerClose, handleChangeRoute }: HeaderMenuModalProps) => {
  const { 
    root,
    drawer, 
    drawerClose, 
    drawerOpen,
    toolbar,
    divider,
    icon,
    homepageLocation
  } = useStyles();
  const theme = useTheme();
  const { language } = useContext(LanguageContext)
  const homepage = homePageConfig(language);

  return (
    <div className={root}>
      <Drawer
        variant="permanent"
        className={clsx(drawer, {
          [drawerOpen]: isOpenDrawer,
          [drawerClose]: !isOpenDrawer,
        })}
        classes={{
          paper: clsx({
            [drawerOpen]: isOpenDrawer,
            [drawerClose]: !isOpenDrawer,
          }),
        }}
      >
        <div className={toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={icon} /> : <ChevronLeftIcon className={icon}/>}
          </IconButton>
        </div>
        {isOpenDrawer && <Divider className={divider}/>}
        <List>
          {menuConfig(language).map((item: MenuConfigInterface, index: number) => (
            <WithRequiredPermission requiredPermission={item.permissions} key={`menu options ${index}`}>
              <ListItem 
                button 
                onClick={() => handleChangeRoute(item.route)}
              >
                <ListItemIcon><ReactSVG className={icon} src={item.icon}/></ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </WithRequiredPermission>
          ))}
        </List>
        <List className={homepageLocation}>
          <ListItem 
            button 
            onClick={() => handleChangeRoute(homepage.route)}
          >
            <ListItemIcon><ReactSVG className={icon} src={homepage.icon}/></ListItemIcon>
            <ListItemText primary={homepage.name} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default HeaderMenuModal