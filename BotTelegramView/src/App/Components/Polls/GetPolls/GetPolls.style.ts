import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100vh",
    width: "95vw"
  },
  contentSize: {
    paddingTop:'20px',
    width: '100%',
    maxWidth: '605px',
    maxHeight: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  selectQuestionsContainer:{
    padding: '14px 24px'
  }
}))