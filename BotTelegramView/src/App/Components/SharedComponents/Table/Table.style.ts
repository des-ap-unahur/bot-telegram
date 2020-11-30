import {
  makeStyles
} from '@material-ui/core';
import { BLUE, WHITE } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1265px',
    minHeight: '400px',
    background: WHITE,
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(7),
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    border: '1px solid '+ BLUE,
    fontSize: '16px',
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  tableWithModalOpen: {
    marginLeft: theme.spacing(45),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  tableSkeleton: {
    width: 'auto',
    padding: '13px 0px',
  },
  loaderContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1265px',
    height: '100%',
    maxHeight: '435px',
    marginTop: theme.spacing(38),
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  fetchingLoader: {
    zIndex: 1,
  },
  paginationContainer: {
    display: 'flex',
    flex: '1 auto',
    justifyContent: 'flex-end'
  },
  noDocumentsFound: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1265px',
    height: '100%',
    maxHeight: '435px',
    marginTop: theme.spacing(38),
    color: WHITE,
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  withModalOpen: {
    maxWidth: '1022px',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))