import { makeStyles } from "@material-ui/core/styles";
import { BLACK, GOOGLE_BLUE, WHITE, BLUE } from "../../Styles/Colors.index";

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    margin: '0 auto',
    flexGrow: 1,
    width: '93%',
    height: '100%',
    minHeight: '30vh',
    marginLeft: '80px',
    overflowX: 'hidden'
  },
  rootShift: {
    marginLeft: '300px',
    width: '78%',
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  container: {
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(12),
    width: '100%',
    maxWidth: '1265px',
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "column",
  },
  title: {
    color: BLACK
  },
  cardContainer: {
    width: '100%',
    display: "flex",
    marginBottom: "20px",
    "& div":{
      marginBottom: "20px"
    },
    "& div:last-child":{
      marginRight: '0px'
    }
  },
  cardContainerShift: {
  },
  card: {
    marginRight: "30px",
    width: '100%'
  },
  subContainer:{
    width: '100%'
  },
  buttonStyle:{
    float: 'right',
    padding: '8px 18px',
    background: GOOGLE_BLUE,
    color: WHITE,
    boxShadow: 'none',
    margin: "20px 0px",
    '&:hover': {
      background: BLUE
    }
  },
  spanIcon: {
    position: 'relative',
    top: '4px',
    right: '5px'
  },
  loader: {
    zIndex: 1,
  },
  loaderContainer: {
    position: 'absolute',
    top: '22%',
  },
}))