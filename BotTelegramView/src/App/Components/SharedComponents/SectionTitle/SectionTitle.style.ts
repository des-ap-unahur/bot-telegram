import { makeStyles } from '@material-ui/core';
import { BLACK, BLUE, GOOGLE_BLUE } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(15),
    width: '100%',
    maxWidth: '1265px',
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
    display: 'flex',
    color: BLACK,
    marginRight: '40px',
    width: '700px'
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
    display: 'flex',
    borderBottom: '1px ' + GOOGLE_BLUE + ' solid',
    marginBottom: '30px',
    width: '110%',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  underlineWithModalOpen: {
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '100%',
  },
  titleAndUnderlineContainer: {
    display: 'flex',
    flex: 'wrap',
    width: 'auto',
    maxWidth: '1265px',
    minHeight: '100%',
  },
  underlineWithAction: {
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginBottom: '30px',
    marginRight: '50px',
    width: '75%',
  },
  underlineWithActionAndModalOpen: {
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginBottom: '30px',
    marginRight: '50px',
    width: '50%',
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
    fill: BLACK
  }
}))