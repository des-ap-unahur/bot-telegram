import { makeStyles } from '@material-ui/core';
import { BLUE, GOOGLE_BLUE, ORANGE, WHITE } from '../../../Styles/Colors.index';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1265px',
    minWidth: '500px',
    width: '100vw',
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(7),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerWithModalOpen: {
    marginLeft: theme.spacing(45),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    minWidth: "400px"
  },
  correction: {
    width: '415px'
  },
  subtitle: {
    color: GOOGLE_BLUE,
    marginRight: '2px',
    paddingLeft: '2px'
  },
  underline: {
    display: "flex",
    position: 'relative',
    borderBottom: '1px ' + ORANGE + ' solid',
    width: '200vh',
    bottom: '25px',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  titleAndUnderlineContainer: {
    display: 'flex',
    width: "100%",
    "&& div": {
      display: "flex",
      flexWrap: "inherit",
      flexDirection: "row"
    }
  },
  underlineWithAction: {
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: '50px',
  },
  buttonAction: {
    marginBottom: '20px',
    marginRight: '7px',
    background: GOOGLE_BLUE,
    '&:hover':{
      background: BLUE
    }
  },
  addIcon: {
    fill: WHITE
  }
}))