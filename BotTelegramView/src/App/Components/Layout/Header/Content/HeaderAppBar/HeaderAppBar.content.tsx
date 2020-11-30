import React, { useContext } from 'react';
import { 
  Menu,
  IconButton,
  Avatar,
  MenuItem,
  Typography,
  Box, 
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../Header.style';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { LanguageContext } from '../../../../../Config/Lang/Lang.languaje';
import SelectOptions from '../../../../SharedComponents/SelectOptions/Select.component';
import { langOptions } from '../../Header.config';
import { HeaderAppBarProps } from '../../Header.interfaces';
import { ReactSVG } from 'react-svg';
import BotLogo from '../../../../../Assets/Images/logo-bot.svg';


const HeaderAppBar = (props: HeaderAppBarProps) => {
  const { lang, language, changeLanguage } = useContext(LanguageContext);

  const {
    headerContainer,
    menuContainer,
    hide,
    menuButton,
    subtitle,
    avatarContainer,
    userName,
    avatar,
    dropdownMenu,
    selectOptions,
    titleAndIcon,
    botIcon
  } = useStyles();

  const {
    handleDrawerOpen, 
    isOpenDrawer, 
    handleMenu, 
    handleClose, 
    user, 
    open, 
    handleSignoutClickMenu, 
    anchorEl
  } = props;

  return(
    <div className={headerContainer}>
      <div className={menuContainer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(menuButton, isOpenDrawer && hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={subtitle} component='div'>
            <Box className={titleAndIcon} fontWeight={800} fontSize={28}>
              <ReactSVG className={botIcon} src={BotLogo}/>
              {language.botTelegramBackOffice.toUpperCase()}
            </Box>
          </Typography>

      </div>
      <div className={avatarContainer}>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Avatar 
            src={user && user.image} 
            className={avatar}
          />
          <ArrowDropDownIcon/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={handleClose}
          className={dropdownMenu}
        >
          <div className={userName}>{user ? user.username : null}</div>
          <MenuItem onClick={() => handleSignoutClickMenu()}>
            {language.signOut}
          </MenuItem>
          <div className={selectOptions}>
            <SelectOptions
              handleChange={changeLanguage}
              value={lang}
              listOptions={langOptions}
            />
          </div>
        </Menu>
      </div>
    </div>
  )
}

export default HeaderAppBar;