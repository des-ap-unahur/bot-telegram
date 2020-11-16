import { makeStyles } from '@material-ui/core/styles';
import { WHITE, LIGHT_BLUE, BLUE, BLACK } from '../../../Styles/Colors.index';

const drawerWidth = 300;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appBar: {
    background: LIGHT_BLUE,
    boxShadow: 'none',
    minHeight: '48px',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: BLACK
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderLeft: '1px ' + BLACK + ' solid' 
  },
  headerContainer:{
    display: 'flex',
    width: '100%'
  },
  avatarContainer:{
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  menuContainer:{
    display: 'flex',
    marginTop: '8px',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%'
  },
  menuButton: {
    marginRight: '30px',
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1
  },
  logo: {
    marginBottom: "-10px",
    height: "90%",
    width: "90%",
    maxHeight: "50px",
    maxWidth: "100px",
    borderRadius: "6px"
  },
  userName: {
    padding: "5px 15px",
  },
  selectOptions: {
    padding: "0px 15px",
  },
  subtitle: {
    marginTop: '4px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: BLUE,
    color: WHITE,
    borderRight: '1px ' + BLACK + ' solid',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: BLUE,
    color: WHITE,
    borderRight: '1px ' + BLACK + ' solid',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    background: BLUE,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    color: BLACK,
    '& div':{
      paddingLeft: '8px',
      '& svg':{
        fill: WHITE
      }
    }
  },
  divider: {
    background: BLACK
  },
  avatar: {
    width: '35px',
    height: '35px',
    border: '3px ' + WHITE + ' solid'
  },
  dropdownMenu: {
    marginTop: '50px'
  }
}))