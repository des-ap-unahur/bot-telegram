import { makeStyles } from '@material-ui/core';
import { WHITE, GOOGLE_BLUE, BLACK, BLUE } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  rootContainer: {
    border: GOOGLE_BLUE + ' solid 1px',
    background: WHITE,
    overflowY: 'hidden',
    overflowX: 'hidden',
    borderRadius: '10px'
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100vh",
    width: "95vw"
  },
  rootPaper: {
    borderRadius: '10px'
  },
  popUpMargin: {
    marginLeft: '85px',
  },
  popUpMarginWithOpenModal: {
    marginLeft: '265px'
  },
  text: {
    color: BLACK,
  },
  contentSize: {
    width: '95%',
    maxHeight: '100%'
  },
  skeleton: {
    minHeight: '100%',
    minWidth: '100%'
  },
  buttonImportSubmit:{
    marginRight: '28px',
    padding: '8px 18px',
    background: GOOGLE_BLUE,
    boxShadow: 'none',
    '&:hover': {
      background: BLUE
    }
  },
  buttonImportClose: {
    marginRight: theme.spacing(4),
    padding: '8px 18px',
    color: WHITE,
    boxShadow: 'none',
  },
  newReceiptInputContainers: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '10px',
  },
  importInputContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '60px',
  },
  newReceiptHeader:{
    padding: '3px 9px',
  },
  loader: {
    zIndex: 1,
  },
  loaderContainer: {
    position: 'absolute',
    width: '18%',
    marginTop: '3px'
  },
}))